// ==UserScript==
// @name         B站投稿自动填充（按 BV 号）
// @namespace    local.bili.upload.autofill
// @version      1.1.0
// @description  在 B站创作中心投稿页，按指定 BV 号自动填充相同的标题、简介、标签
// @match        https://member.bilibili.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

/*
 * 用法一（推荐，Tampermonkey 常驻）：
 *   安装本脚本后打开 https://member.bilibili.com/platform/upload/video/frame
 *   右上角面板输入 BV 号（或整条视频链接）→ 点「填充」。
 *
 * 用法二（免安装）：
 *   打开投稿页 → F12 → Console → 粘贴本文件全部内容 → 回车，其余同上。
 *
 * 快捷方式：
 *   投稿页 URL 后追加 ?bv=BV1nV4x6CEt4 可自动填充。
 *
 * 数据来源：B站公开接口，按 BV 号实时拉取标题 / 简介 / 标签，任意 BV 号通用。
 * 填充目标：投稿表单的 标题 input、简介 Quill 编辑器（editor_id=desc_at_editor）、
 *           标签输入框（#tag-container，回车创建）。
 * 注意：
 *   1) 投稿表单一般在选择/上传视频文件后才出现，未出现时脚本会自动等待；
 *   2) 标签默认「补全」而非覆盖（跳过重复），勾选「先清空已有标签」才删除已有标签；
 *   3) 标签优先走「后台写组件数据模型/方法」，一次性批量添加全部标签（一次写入 + 一次校验，
 *      秒级完成），不碰输入框、不抢焦点，与你手动操作互不干扰；
 *      数组真伪靠「探针写入→chip 是否渲染」验证（不靠字段名猜，避免写错 submitTags 这类影子数组）；
 *      仅当找不到挂载点时才退回模拟输入（逐个），且该路径会等你停手、保留你输入到一半的文本；
 *   4) 逐标签独立填充：任一标签失败/异常只记入跳过列表，不影响后续标签与标题/简介；
 *      填充期间按钮变为「停止填充」，可随时中止；
 *   5) 视频页上的 BGM/音乐关联标签（如「发现《xxx》」）不属于普通标签接口，不会被填充。
 */

(function () {
    'use strict';

    // ---------------- 常量 ----------------
    var TITLE_MAX_LEN = 80;
    var TAG_MAX_LEN = 20;
    var TAG_LIMIT = 10;
    var FORM_WAIT_MS = 90000;
    var TAG_STEP_MS = 320;
    var USER_IDLE_MS = 1200;   // 用户连续静默多久后才继续写入
    var PAUSE_POLL_MS = 200;

    // ---------------- 小工具 ----------------
    function sleep(ms) {
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    function log() {
        var args = ['[投稿自动填充]'].concat(Array.prototype.slice.call(arguments));
        console.log.apply(console, args);
    }

    function normalize(s) {
        return String(s == null ? '' : s).replace(/\r\n/g, '\n').replace(/\s+$/, '');
    }

    // ---------------- 用户操作感知（避免和手部操作互相干扰） ----------------
    var lastUserEventTs = 0;
    var stopRequested = false;

    function trackUserActivity() {
        // 只统计真实用户事件（isTrusted），脚本自己合成的事件不计入
        ['keydown', 'mousedown', 'pointerdown', 'touchstart', 'compositionstart'].forEach(function (type) {
            document.addEventListener(type, function (e) {
                if (!e.isTrusted) return;
                if (e.target && e.target.closest && e.target.closest('#' + PANEL_ID)) return;
                lastUserEventTs = Date.now();
            }, true);
        });
    }

    // 用户仍在操作时挂起；静默 USER_IDLE_MS 后返回 true，被停止则返回 false
    async function waitUserIdle(what) {
        var notified = false;
        while (!stopRequested && Date.now() - lastUserEventTs < USER_IDLE_MS) {
            if (!notified) {
                setStatus('检测到你正在操作，已暂停' + what + '（停手约 1 秒自动继续；点「停止填充」取消）', 'info');
                notified = true;
            }
            await sleep(PAUSE_POLL_MS);
        }
        return !stopRequested;
    }

    // ---------------- BV 解析 ----------------
    function parseBvid(raw) {
        if (!raw) return null;
        var m = String(raw).trim().match(/BV[0-9A-Za-z]{10}/);
        return m ? m[0] : null;
    }

    // ---------------- 接口层 ----------------
    function fetchJson(url) {
        return fetch(url, {
            credentials: 'include',
            headers: { Accept: 'application/json' }
        }).then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        });
    }

    function fetchVideoMeta(bvid) {
        var viewUrl = 'https://api.bilibili.com/x/web-interface/view?bvid=' + bvid;
        var tagsUrl = 'https://api.bilibili.com/x/tag/archive/tags?bvid=' + bvid;
        return Promise.all([fetchJson(viewUrl), fetchJson(tagsUrl)]).then(function (rs) {
            var view = rs[0];
            var tags = rs[1];
            if (!view || view.code !== 0) {
                throw new Error('视频信息: ' + ((view && (view.message || view.code)) || '未知错误'));
            }
            var d = view.data || {};
            var names = [];
            if (tags && tags.code === 0 && Array.isArray(tags.data)) {
                tags.data.forEach(function (t) {
                    if (t && t.tag_name) names.push(t.tag_name);
                });
            } else if (tags && tags.code !== 0) {
                log('标签接口返回异常：', tags.message || tags.code);
            }
            return { title: d.title || '', desc: d.desc || '', tags: names, bvid: bvid };
        });
    }

    // ---------------- DOM 定位 ----------------
    function findTitleInput() {
        return document.querySelector('input[placeholder="请输入稿件标题"]') ||
            document.querySelector('.video-title-content input.input-val') ||
            null;
    }

    function findDescContainer() {
        return document.querySelector('[editor_id="desc_at_editor"]') ||
            document.querySelector('.desc-text-wrp .archive-info-editor') ||
            null;
    }

    function findTagInput() {
        var scoped = document.querySelector('#tag-container input[placeholder="按回车键Enter创建标签"]') ||
            document.querySelector('#tag-container input.input-val');
        if (scoped) return scoped;
        var list = Array.prototype.slice.call(
            document.querySelectorAll('input[placeholder="按回车键Enter创建标签"]')
        );
        for (var i = 0; i < list.length; i++) {
            if (list[i].offsetParent && !list[i].closest('.bcc-dialog')) return list[i];
        }
        return list[0] || null;
    }

    function getExistingTagNames() {
        var root = document.querySelector('#tag-container') || document;
        return Array.prototype.slice.call(root.querySelectorAll('.label-item-v2-content'))
            .map(function (n) { return (n.textContent || '').trim(); })
            .filter(Boolean);
    }

    // 表单自己会拒绝话题类标签（toast：当前tag为话题专用，不允许自定义添加）
    // 接口分不出来，但添加失败时能从弹出的提示识别，把跳过原因标清楚
    function detectTopicReject() {
        var nodes = document.querySelectorAll('[class*="message"], [class*="toast"], [class*="Message"], [class*="Toast"]');
        for (var i = 0; i < nodes.length; i++) {
            var t = nodes[i].textContent || '';
            if (t.indexOf('话题专用') >= 0 || t.indexOf('不允许自定义添加') >= 0) return true;
        }
        return false;
    }

    // ---------------- 基础事件 ----------------
    function setNativeValue(el, value) {
        var proto = window.HTMLInputElement.prototype;
        var desc = Object.getOwnPropertyDescriptor(proto, 'value');
        if (desc && desc.set) desc.set.call(el, value);
        else el.value = value;
    }

    function fireInput(el) {
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function fireEnter(el) {
        ['keydown', 'keypress', 'keyup'].forEach(function (type) {
            var ev = new KeyboardEvent(type, {
                bubbles: true,
                cancelable: true,
                key: 'Enter',
                code: 'Enter'
            });
            Object.defineProperty(ev, 'keyCode', { get: function () { return 13; } });
            Object.defineProperty(ev, 'which', { get: function () { return 13; } });
            el.dispatchEvent(ev);
        });
    }

    function fireClick(el) {
        el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    }

    // ---------------- 标题 ----------------
    function fillTitle(text) {
        var el = findTitleInput();
        if (!el) return { ok: false, msg: '未找到标题输入框' };
        var truncated = text.length > TITLE_MAX_LEN;
        var value = text.slice(0, TITLE_MAX_LEN);
        // 不抢焦点：原生 setter + input 事件即可同步 v-model
        setNativeValue(el, value);
        fireInput(el);
        var ok = el.value === value;
        log('标题填充', ok ? '成功' : '存疑', value);
        return { ok: ok, msg: ok ? '标题已填充' : '标题输入框未接受该值', truncated: truncated };
    }

    // ---------------- 简介（Quill） ----------------
    function findQuillInstance(container) {
        var ql = container.querySelector('.ql-editor');
        // 1) Quill 自带注册表
        if (window.Quill && typeof window.Quill.find === 'function') {
            try {
                var q = window.Quill.find(ql) || window.Quill.find(container);
                if (q && typeof q.setText === 'function') return q;
            } catch (e) { /* ignore */ }
        }
        // 2) DOM 上的 __quill
        var nodes = [container, ql, container.querySelector('.ql-container'), container.parentElement];
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            if (n && n.__quill && typeof n.__quill.setText === 'function') return n.__quill;
        }
        // 3) Vue 组件树上找 quill 实例
        var seen = [];
        function scanVm(vm, depth) {
            if (!vm || depth > 6 || seen.indexOf(vm) >= 0) return null;
            seen.push(vm);
            var keys = ['quill', 'editor', '_editor', 'quillEditor', 'quillInstance'];
            for (var k = 0; k < keys.length; k++) {
                var v = vm[keys[k]];
                if (v && typeof v.setText === 'function' && typeof v.getContents === 'function') return v;
            }
            if (typeof vm.getQuill === 'function') {
                try {
                    var got = vm.getQuill();
                    if (got && typeof got.setText === 'function') return got;
                } catch (e) { /* ignore */ }
            }
            var refs = vm.$refs || {};
            for (var name in refs) {
                if (!Object.prototype.hasOwnProperty.call(refs, name)) continue;
                var r = refs[name];
                if (r && typeof r.setText === 'function') return r;
                if (r && r.quill && typeof r.quill.setText === 'function') return r.quill;
            }
            var kids = vm.$children || [];
            for (var c = 0; c < kids.length; c++) {
                var f = scanVm(kids[c], depth + 1);
                if (f) return f;
            }
            return null;
        }
        var node = container;
        while (node) {
            if (node.__vue__) {
                var found = scanVm(node.__vue__, 0);
                if (found) return found;
            }
            node = node.parentElement;
        }
        return null;
    }

    // 比对用：折行空白（Quill 空段落会让 innerText 膨胀出多余 \n，源文本行数对不上）
    function squash(s) {
        return normalize(s).replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, '\n');
    }

    function descDomText(ql, quill) {
        // 优先读 Quill 模型文本（与 setText 写入的完全一致），innerText 仅兜底
        if (quill && typeof quill.getText === 'function') {
            try {
                return normalize(quill.getText());
            } catch (e) { /* ignore */ }
        }
        return normalize(ql.innerText || ql.textContent || '');
    }

    function fillDesc(text) {
        var container = findDescContainer();
        if (!container) return { ok: false, msg: '未找到简介编辑器', strategy: 'none' };
        var ql = container.querySelector('.ql-editor');
        if (!ql) return { ok: false, msg: '未找到简介编辑区', strategy: 'none' };

        var want = normalize(text);
        var wantSoft = squash(text);
        var quill = findQuillInstance(container);

        function descOk(got) {
            return got === want || squash(got) === wantSoft;
        }

        // 策略 1：Quill 实例 setText（模型层写入，最稳）
        if (quill && typeof quill.setText === 'function') {
            try {
                quill.setText(text);
                // 以 user 源补一次空 update，兜底只监听 user 源的 Vue 封装
                if (typeof quill.updateContents === 'function') quill.updateContents([], 'user');
                var got = descDomText(ql, quill);
                if (descOk(got)) {
                    log('简介填充（Quill setText）成功');
                    return { ok: true, msg: '简介已填充', strategy: 'quill' };
                }
                log('简介 Quill setText 后文本不一致，继续尝试其他策略。回读=', JSON.stringify(got));
            } catch (e) {
                log('Quill setText 失败：', e);
            }
        }

        // 策略 2：execCommand insertText（触发编辑器原生编辑链路，仅此步需要焦点，用完立即归还）
        try {
            var prevActive = document.activeElement;
            ql.focus();
            var sel = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(ql);
            sel.removeAllRanges();
            sel.addRange(range);
            var inserted = document.execCommand('insertText', false, text);
            if (prevActive && prevActive !== ql && typeof prevActive.focus === 'function') {
                try { prevActive.focus(); } catch (e2) { /* ignore */ }
            }
            if (inserted) {
                var got2 = descDomText(ql, quill);
                if (descOk(got2)) {
                    log('简介填充（execCommand）成功');
                    return { ok: true, msg: '简介已填充', strategy: 'execCommand' };
                }
                log('execCommand 后文本不一致。回读=', JSON.stringify(got2));
            }
        } catch (e) {
            log('execCommand 失败：', e);
        }

        // 策略 3：直接写 DOM（可能不回写模型，仅兜底）
        try {
            var html = String(text).split('\n').map(function (line) {
                return '<p>' + (line ? line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '<br>') + '</p>';
            }).join('');
            ql.innerHTML = html;
            ql.dispatchEvent(new Event('input', { bubbles: true }));
            var got3 = descDomText(ql, quill);
            var ok3 = descOk(got3);
            log(ok3 ? '简介填充（innerHTML）成功' : '简介 innerHTML 后仍不一致', JSON.stringify(got3));
            return {
                ok: ok3,
                msg: ok3 ? '简介已填充（DOM 方式）' : '简介填充可能不完整，请手动核对',
                strategy: 'innerHTML'
            };
        } catch (e) {
            log('innerHTML 失败：', e);
            return { ok: false, msg: '简介填充失败: ' + e.message, strategy: 'fail' };
        }
    }

    // ---------------- 标签（优先后台写组件模型/方法，兜底才模拟输入） ----------------
    function arrayAsNames(arr) {
        return arr.map(function (it) {
            if (typeof it === 'string') return it;
            if (it && typeof it === 'object') {
                return String(it.name || it.tag_name || it.tagName || it.tag || it.label ||
                    it.labelName || it.value || it.text || '');
            }
            return '';
        });
    }

    function collectVueChain(el) {
        var vms = [];
        var node = el;
        while (node) {
            if (node.__vue__ && vms.indexOf(node.__vue__) < 0) vms.push(node.__vue__);
            node = node.parentElement;
        }
        return vms;
    }

    // 收集输入框 + 标签容器 + chip 自身的组件链，再带上各自的子组件——
    // 真正驱动 chip 渲染的数组经常在子组件上，只看输入框祖先会找错（如 submitTags）
    function collectRelatedVms(input) {
        var vms = [];
        function addChain(el) {
            collectVueChain(el).forEach(function (vm) {
                if (vms.indexOf(vm) < 0) vms.push(vm);
            });
        }
        addChain(input.closest('.input-container') || input);
        var tagRoot = document.querySelector('#tag-container');
        if (tagRoot) {
            addChain(tagRoot);
            var chip = tagRoot.querySelector('.label-item-v2-container');
            if (chip) addChain(chip);
        }
        var base = vms.slice();
        base.forEach(function (vm) {
            (vm.$children || []).forEach(function (c) {
                if (vms.indexOf(c) < 0) vms.push(c);
                (c.$children || []).forEach(function (c2) {
                    if (vms.indexOf(c2) < 0) vms.push(c2);
                });
            });
        });
        return vms;
    }

    function nameKeyOf(tpl) {
        var k = null;
        ['name', 'tag_name', 'tagName', 'tag', 'label', 'labelName', 'value', 'text'].forEach(function (key) {
            if (!k && tpl && typeof tpl[key] === 'string') k = key;
        });
        return k || 'name';
    }

    // 收集全部候选数组（而非第一个匹配项），附带模板/字段名，供逐个探测
    function collectTagArrayCandidates(vms, chipNames) {
        var out = [];
        var seen = [];

        function consider(container, depth, vmIndex) {
            if (!container || depth > 3) return;
            for (var key in container) {
                if (!Object.prototype.hasOwnProperty.call(container, key)) continue;
                var val = container[key];
                if (Array.isArray(val)) {
                    if (seen.indexOf(val) >= 0) continue;
                    var names = arrayAsNames(val);
                    var matched;
                    if (chipNames.length > 0) {
                        matched = chipNames.every(function (n) { return names.indexOf(n) >= 0; });
                    } else {
                        matched = /tag|label/i.test(key);
                    }
                    if (!matched) continue;
                    seen.push(val);
                    var tpl = (val.length && typeof val[0] === 'object' && val[0]) ? val[0] : null;
                    out.push({
                        obj: container,
                        key: key,
                        kind: tpl ? 'objects' : 'strings',
                        tpl: tpl,
                        nameKey: tpl ? nameKeyOf(tpl) : null,
                        vmIndex: vmIndex
                    });
                } else if (val && typeof val === 'object' && !val._isVue && !val.$el &&
                    typeof val.nodeType !== 'number' && !Array.isArray(val)) {
                    consider(val, depth + 1, vmIndex);
                }
            }
        }

        for (var i = 0; i < vms.length; i++) {
            if (vms[i].$data) consider(vms[i].$data, 0, i);
            if (vms[i]._props) consider(vms[i]._props, 0, i);
        }
        // 越靠近输入框的组件越优先；字段名像标签列表的优先
        out.sort(function (a, b) {
            var sa = (/tag|label/i.test(a.key) ? 0 : 1) * 100 + a.vmIndex;
            var sb = (/tag|label/i.test(b.key) ? 0 : 1) * 100 + b.vmIndex;
            return sa - sb;
        });
        return out;
    }

    function findTagAddMethod(vms) {
        var explicit = ['addTag', 'createTag', 'handleAddTag', 'onAddTag', 'appendTag', 'submitTag', 'confirmTag'];
        // 运行时方法名可能被改写：再按「add/create 类动词 + tag/label 名词」模式扫 $options.methods
        var ADD_VERB = /add|create|insert|append|push|confirm|apply|save/i;
        var TAG_NOUN = /tag|label/i;
        var BAD = /remove|delete|del|clear|reset|upload|submit(?!Tag)/i;
        var out = [];
        vms.forEach(function (vm) {
            var seen = {};
            var methods = (vm.$options && vm.$options.methods) || {};
            Object.keys(methods).forEach(function (n) {
                if (seen[n]) return;
                seen[n] = true;
                var fn = vm[n];
                if (typeof fn !== 'function' || fn.length < 1) return;
                var hit = explicit.indexOf(n) >= 0 ||
                    ((ADD_VERB.test(n) && TAG_NOUN.test(n)) && !BAD.test(n));
                if (hit) out.push({ vm: vm, fnName: n });
            });
        });
        return out;
    }

    function makeTagItem(ref, name) {
        if (ref.kind !== 'objects') return name;
        var tpl = ref.tpl || {};
        var item = {};
        // 复制模板字段结构（渲染可能依赖），但 id/计数类字段清零，避免和旧 tag 串号
        for (var k in tpl) {
            if (!Object.prototype.hasOwnProperty.call(tpl, k)) continue;
            var v = tpl[k];
            if (/id$/i.test(k) || k === 'count' || k === 'is_atten') {
                item[k] = typeof v === 'string' ? '' : 0;
            } else {
                item[k] = v;
            }
        }
        item[ref.nameKey || 'name'] = name;
        return item;
    }

    // 探针：向候选数组写入一个名字，验证 chip 真的渲染出来；失败回滚并试下一个候选
    async function probeRef(ref, name) {
        var arr = ref.obj[ref.key];
        if (!Array.isArray(arr)) return false;
        var item = makeTagItem(ref, name);
        arr.push(item);
        await sleep(TAG_STEP_MS);
        if (getExistingTagNames().indexOf(name) >= 0) return true;
        var idx = arr.indexOf(item);
        if (idx >= 0) arr.splice(idx, 1);
        await sleep(120);
        return false;
    }

    // 一次性批量写数据模型：全部一次 push + 一次校验；未生效的逐个回滚
    async function batchAddViaModel(ref, names) {
        var arr = ref.obj[ref.key];
        if (!Array.isArray(arr) || !names.length) return { okNames: [], failNames: names.slice() };
        var pushed = names.map(function (n) {
            var item = makeTagItem(ref, n);
            arr.push(item);
            return { item: item, name: n };
        });
        await sleep(TAG_STEP_MS);
        var now = getExistingTagNames();
        var okNames = [];
        var failNames = [];
        pushed.forEach(function (p) {
            if (now.indexOf(p.name) >= 0) {
                okNames.push(p.name);
            } else {
                var idx = arr.indexOf(p.item);
                if (idx >= 0) arr.splice(idx, 1);
                failNames.push(p.name);
            }
        });
        log('模型批量写入：成功', okNames, '回滚', failNames);
        return { okNames: okNames, failNames: failNames };
    }

    // 组件方法：先用一个名字探测出可用方法，再一次性连发剩余
    async function probeAddViaMethod(cands, name) {
        for (var i = 0; i < cands.length; i++) {
            try {
                var ret = cands[i].vm[cands[i].fnName](name);
                if (ret && typeof ret.then === 'function') await ret; // 方法可能是 async，rejection 也要收
            } catch (e) {
                log('组件方法', cands[i].fnName, '调用异常：', e && e.message ? e.message : e);
                continue;
            }
            await sleep(TAG_STEP_MS);
            if (getExistingTagNames().indexOf(name) >= 0) {
                log('组件方法', cands[i].fnName, '可用，其余标签将一次性连发');
                return cands[i];
            }
        }
        return null;
    }

    async function bulkAddViaMethod(cand, names) {
        var thrown = [];
        var sent = [];
        for (var i = 0; i < names.length; i++) {
            try {
                var ret = cand.vm[cand.fnName](names[i]);
                if (ret && typeof ret.then === 'function') await ret;
                sent.push(names[i]);
            } catch (e) {
                log('组件方法批量写入异常：', e && e.message ? e.message : e);
                thrown.push(names[i]);
            }
        }
        await sleep(TAG_STEP_MS);
        var now = getExistingTagNames();
        var okNames = sent.filter(function (n) { return now.indexOf(n) >= 0; });
        var failNames = thrown.concat(sent.filter(function (n) { return now.indexOf(n) < 0; }));
        log('方法批量写入：成功', okNames, '失败', failNames);
        return { okNames: okNames, failNames: failNames };
    }

    // 兜底：模拟输入（唯一会碰可见输入框的路径，等用户停手并保留其草稿）
    async function addTagViaKeyboard(input, name) {
        if (!(await waitUserIdle('标签填充'))) return false;
        var foreign = input.value && input.value !== name ? input.value : '';
        setNativeValue(input, name);
        fireInput(input);
        await sleep(80);
        fireEnter(input);
        await sleep(TAG_STEP_MS);
        if (foreign && (input.value === '' || input.value === name)) {
            setNativeValue(input, foreign);
            fireInput(input);
            log('已保留你输入中的标签文本：', foreign);
        }
        return getExistingTagNames().indexOf(name) >= 0;
    }

    // 后台清空：逐个候选试，谁的清空真让 chip 消失谁就是真数组；返回生效的 ref
    async function clearTags(candidates) {
        for (var i = 0; i < candidates.length; i++) {
            var ref = candidates[i];
            var arr = ref.obj[ref.key];
            if (!Array.isArray(arr) || !arr.length) continue;
            var snapshot = arr.slice();
            arr.splice(0, arr.length);
            await sleep(300);
            if (!getExistingTagNames().length) {
                log('模型清空生效于：', ref.key);
                return ref;
            }
            snapshot.forEach(function (it) { arr.push(it); });
            log('模型清空未生效（', ref.key, '），已还原');
        }
        // 兜底：点击关闭按钮（会碰 UI，逐个避让用户操作）
        for (var guard = 0; guard < 30; guard++) {
            if (stopRequested) return null;
            if (!(await waitUserIdle('标签清空'))) return null;
            var chips = Array.prototype.slice.call(
                document.querySelectorAll('#tag-container .label-item-v2-container')
            );
            if (!chips.length) return null;
            var closeBtn = chips[0].querySelector('svg.close') ||
                chips[0].querySelector('[class*="close"]');
            if (!closeBtn) return null;
            fireClick(closeBtn);
            await sleep(140);
        }
        return null;
    }

    async function fillTags(tags, clearFirst) {
        var input = findTagInput();
        if (!input) return { ok: false, msg: '未找到标签输入框', added: [], skipped: [] };

        // 收集全部候选数组 + 组件方法；真数组靠「探针写入→chip 是否渲染」验证，不靠名字猜
        var vms = collectRelatedVms(input);
        var chipNames = getExistingTagNames();
        var candidates = collectTagArrayCandidates(vms, chipNames);
        var methodCands = findTagAddMethod(vms);
        log('标签写入通道：候选数组', candidates.map(function (c) { return c.key; }),
            '候选方法', methodCands.map(function (c) { return c.fnName; }),
            '；已有标签：', chipNames);

        // 清空失败不阻断后续填充；清空生效的那个数组就是真数组，直接复用
        var activeRef = null;
        if (clearFirst) {
            try {
                activeRef = await clearTags(candidates);
            } catch (e) {
                log('清空已有标签异常（继续填充）：', e);
            }
        }

        // ---- 批量规划：去重 / 截断 / 上限，算出一次性要添加的名单 ----
        var existing = {};
        getExistingTagNames().forEach(function (n) { existing[n] = true; });
        var added = [];
        var skipped = [];
        var toAdd = [];
        var baseCount = getExistingTagNames().length;
        for (var i = 0; i < tags.length; i++) {
            var name = String(tags[i]).trim().slice(0, TAG_MAX_LEN);
            if (!name) continue;
            if (existing[name]) {
                skipped.push(name + '（已存在）');
                continue;
            }
            if (baseCount + toAdd.length >= TAG_LIMIT) {
                skipped.push(name + '（超出 ' + TAG_LIMIT + ' 个上限）');
                continue;
            }
            if (toAdd.indexOf(name) >= 0) continue;
            existing[name] = true;
            toAdd.push(name);
        }

        var rest = toAdd.slice();

        // 通道 1：数据模型（先探针验证数组真伪，再一次性批量写入）
        if (rest.length) {
            if (!activeRef) {
                for (var ci = 0; ci < candidates.length && rest.length; ci++) {
                    try {
                        if (await probeRef(candidates[ci], rest[0])) {
                            activeRef = candidates[ci];
                            added.push(rest[0]);
                            log('探针命中真实数组：', candidates[ci].key, '，其余标签批量写入');
                            rest = rest.slice(1);
                            break;
                        }
                        log('候选数组未通过探针：', candidates[ci].key);
                    } catch (e) {
                        log('探针异常（', candidates[ci].key, '）：', e);
                    }
                }
            }
            if (activeRef && rest.length) {
                try {
                    var r1 = await batchAddViaModel(activeRef, rest);
                    added = added.concat(r1.okNames);
                    rest = r1.failNames;
                } catch (e) {
                    log('模型批量写入异常：', e);
                }
            }
        }

        // 通道 2：组件方法（探测一个，其余一次性连发）
        if (rest.length && methodCands.length) {
            var probe = null;
            try {
                probe = await probeAddViaMethod(methodCands, rest[0]);
            } catch (e) {
                log('组件方法探测异常：', e);
            }
            if (probe) {
                added.push(rest[0]);
                var bulk = await bulkAddViaMethod(probe, rest.slice(1));
                added = added.concat(bulk.okNames);
                rest = bulk.failNames;
            }
        }

        // 通道 3：模拟输入兜底（仅剩未成功的，逐个独立容错）
        for (var k = 0; k < rest.length; k++) {
            if (stopRequested) {
                for (var m = k; m < rest.length; m++) skipped.push(rest[m] + '（未执行）');
                break;
            }
            try {
                var ok = await addTagViaKeyboard(input, rest[k]);
                if (ok) {
                    added.push(rest[k]);
                } else if (detectTopicReject()) {
                    skipped.push(rest[k] + '（话题标签，表单不允许自定义添加）');
                } else {
                    skipped.push(rest[k] + (stopRequested ? '（已停止）' : '（未成功创建）'));
                }
            } catch (e) {
                var reason = (e && e.message) ? e.message : String(e);
                log('标签「' + rest[k] + '」填充异常，已跳过，继续后续标签：', e);
                if (reason.indexOf('话题专用') >= 0 || reason.indexOf('不允许自定义添加') >= 0) {
                    skipped.push(rest[k] + '（话题标签，表单不允许自定义添加）');
                } else {
                    skipped.push(rest[k] + '（异常:' + reason + '）');
                }
            }
        }

        var hardFail = skipped.some(function (s) {
            return s.indexOf('未成功创建') >= 0 || s.indexOf('异常') >= 0;
        });
        log('标签结果 新增=', added, '跳过=', skipped);
        return {
            ok: !hardFail,
            added: added,
            skipped: skipped,
            msg: '标签: +' + added.length + ' / 跳过 ' + skipped.length
        };
    }

    // ---------------- 表单等待 ----------------
    function waitForForm() {
        return new Promise(function (resolve) {
            if (findTitleInput()) return resolve(true);
            var t0 = Date.now();
            var timer = setInterval(function () {
                if (stopRequested) {
                    clearInterval(timer);
                    resolve(false);
                } else if (findTitleInput()) {
                    clearInterval(timer);
                    resolve(true);
                } else if (Date.now() - t0 > FORM_WAIT_MS) {
                    clearInterval(timer);
                    resolve(false);
                }
            }, 500);
        });
    }

    // ---------------- 面板 UI ----------------
    var PANEL_ID = 'bili-upload-autofill-panel';

    function setStatus(msg, kind) {
        var el = document.getElementById(PANEL_ID + '-status');
        if (!el) return;
        el.textContent = msg;
        el.style.color = kind === 'error' ? '#d33' : (kind === 'ok' ? '#00a1d6' : '#555');
        log(msg);
    }

    function buildPanel() {
        var old = document.getElementById(PANEL_ID);
        if (old) old.remove();

        var panel = document.createElement('div');
        panel.id = PANEL_ID;
        panel.style.cssText = [
            'position:fixed',
            'top:88px',
            'right:16px',
            'z-index:2147483647',
            'width:272px',
            'background:#fff',
            'border:1px solid #e3e5e7',
            'border-radius:8px',
            'box-shadow:0 4px 16px rgba(0,0,0,.12)',
            'padding:12px 14px',
            'font:13px/1.6 -apple-system,"Segoe UI","Microsoft YaHei",sans-serif',
            'color:#18191c'
        ].join(';');

        panel.innerHTML =
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
            '  <b style="font-size:14px">投稿自动填充</b>' +
            '  <span id="' + PANEL_ID + '-close" style="cursor:pointer;color:#999;font-size:16px;line-height:1">&times;</span>' +
            '</div>' +
            '<input id="' + PANEL_ID + '-bv" type="text" placeholder="BV号或视频链接，如 BV1nV4x6CEt4" ' +
            '  style="width:100%;box-sizing:border-box;padding:6px 8px;border:1px solid #dcdfe6;border-radius:6px;outline:none">' +
            '<label style="display:flex;align-items:center;gap:6px;margin:8px 0;cursor:pointer;user-select:none">' +
            '  <input id="' + PANEL_ID + '-clear" type="checkbox"> 先清空已有标签（默认只补全、不覆盖）' +
            '</label>' +
            '<button id="' + PANEL_ID + '-run" ' +
            '  style="width:100%;padding:8px 0;border:0;border-radius:6px;background:#00a1d6;color:#fff;cursor:pointer;font-size:14px">' +
            '  填充标题 / 简介 / 标签' +
            '</button>' +
            '<div id="' + PANEL_ID + '-status" style="margin-top:8px;min-height:38px;word-break:break-all;color:#555">' +
            '  输入 BV 号后点击填充' +
            '</div>';

        document.body.appendChild(panel);

        panel.querySelector('#' + PANEL_ID + '-close').addEventListener('click', function () {
            panel.remove();
        });
        panel.querySelector('#' + PANEL_ID + '-run').addEventListener('click', function () {
            run();
        });
        panel.querySelector('#' + PANEL_ID + '-bv').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') run();
        });
        return panel;
    }

    // ---------------- 主流程 ----------------
    var running = false;

    function setRunButton(isRunning) {
        var btn = document.getElementById(PANEL_ID + '-run');
        if (!btn) return;
        btn.textContent = isRunning ? '停止填充' : '填充标题 / 简介 / 标签';
        btn.style.background = isRunning ? '#d33' : '#00a1d6';
    }

    function run() {
        if (running) {
            stopRequested = true;
            setStatus('正在停止…（完成当前步骤后停下）', 'info');
            return;
        }
        var panel = document.getElementById(PANEL_ID);
        if (!panel) return;
        var raw = panel.querySelector('#' + PANEL_ID + '-bv').value;
        var clearFirst = panel.querySelector('#' + PANEL_ID + '-clear').checked;
        var bvid = parseBvid(raw);

        if (!bvid) {
            setStatus('BV 号格式不正确。请输入如 BV1nV4x6CEt4，或粘贴视频链接', 'error');
            return;
        }

        running = true;
        stopRequested = false;
        setRunButton(true);
        setStatus('正在获取 ' + bvid + ' 的标题 / 简介 / 标签…', 'info');

        (async function () {
            try {
                var meta = await fetchVideoMeta(bvid);
                log('接口返回：', {
                    title: meta.title,
                    desc: meta.desc,
                    tags: meta.tags
                });
                if (!findTitleInput()) {
                    setStatus('投稿表单尚未出现，请先选择/上传视频文件…（自动等待中）', 'info');
                    var ready = await waitForForm();
                    if (!ready) {
                        throw new Error(stopRequested ? '已停止' : '等待表单超时。请先选择/上传视频文件后再点填充');
                    }
                }
                if (stopRequested) {
                    setStatus('已停止', 'info');
                    return;
                }

                // 标题/简介/标签各自容错，任一失败不阻断其余
                var r1 = { ok: false, msg: '标题未填充' };
                var p2 = { ok: false, msg: '简介未填充' };

                if (await waitUserIdle('标题填充')) {
                    try {
                        r1 = fillTitle(meta.title);
                    } catch (e) {
                        log('标题填充异常：', e);
                        r1 = { ok: false, msg: '标题填充异常: ' + ((e && e.message) || e) };
                    }
                } else {
                    r1 = { ok: false, msg: '标题未填充（已停止）' };
                }

                if (!stopRequested && await waitUserIdle('简介填充')) {
                    try {
                        p2 = fillDesc(meta.desc);
                    } catch (e) {
                        log('简介填充异常：', e);
                        p2 = { ok: false, msg: '简介填充异常: ' + ((e && e.message) || e) };
                    }
                } else if (stopRequested) {
                    p2 = { ok: false, msg: '简介未填充（已停止）' };
                }

                var r3;
                try {
                    r3 = await fillTags(meta.tags, clearFirst);
                } catch (e) {
                    log('标签填充整体异常：', e);
                    r3 = { ok: false, added: [], skipped: [], msg: '标签填充异常: ' + ((e && e.message) || e) };
                }

                var lines = [];
                lines.push(r1.msg + (r1.truncated ? '（标题超 80 字已截断）' : ''));
                lines.push(p2.msg);
                lines.push(r3.msg + (r3.added && r3.added.length ? '：' + r3.added.join('、') : ''));
                if (r3.skipped && r3.skipped.length) lines.push('跳过：' + r3.skipped.join('、'));
                var ok = r1.ok && p2.ok && r3.ok;
                setStatus(lines.join(' | '), ok ? 'ok' : 'error');
            } catch (e) {
                setStatus('失败：' + ((e && e.message) || e), 'error');
            } finally {
                running = false;
                stopRequested = false;
                setRunButton(false);
            }
        })();
    }

    // ---------------- 启动 ----------------
    function boot() {
        if (location.hostname.indexOf('member.bilibili.com') < 0) {
            log('当前不在 member.bilibili.com，请在创作中心投稿页使用');
            return;
        }
        buildPanel();
        trackUserActivity();
        log('面板已加载');

        // 支持 .../upload/video/frame?bv=BVxxx 自动填充
        var q = parseBvid(location.search || '');
        if (q) {
            var bvBox = document.getElementById(PANEL_ID + '-bv');
            if (bvBox) {
                bvBox.value = q;
                run();
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
