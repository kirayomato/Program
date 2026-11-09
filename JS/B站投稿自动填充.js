// ==UserScript==
// @name         B站投稿自动填充
// @namespace    local.bili.upload.autofill
// @version      1.0.0
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
 *   3) 标签优先走「后台写组件数据模型/方法」，不碰输入框、不抢焦点，与你手动操作互不干扰；
 *      仅当找不到挂载点时才退回模拟输入，且该路径会等你停手、保留你输入到一半的文本；
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

    function descDomText(ql) {
        return normalize(ql.innerText || ql.textContent || '');
    }

    function fillDesc(text) {
        var container = findDescContainer();
        if (!container) return { ok: false, msg: '未找到简介编辑器', strategy: 'none' };
        var ql = container.querySelector('.ql-editor');
        if (!ql) return { ok: false, msg: '未找到简介编辑区', strategy: 'none' };

        var want = normalize(text);
        var quill = findQuillInstance(container);

        // 策略 1：Quill 实例 setText（模型层写入，最稳）
        if (quill && typeof quill.setText === 'function') {
            try {
                quill.setText(text);
                // 以 user 源补一次空 update，兜底只监听 user 源的 Vue 封装
                if (typeof quill.updateContents === 'function') quill.updateContents([], 'user');
                var got = descDomText(ql);
                if (got === want) {
                    log('简介填充（Quill setText）成功');
                    return { ok: true, msg: '简介已填充', strategy: 'quill' };
                }
                log('简介 Quill setText 后 DOM 不一致，继续尝试其他策略。回读=', JSON.stringify(got));
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
                var got2 = descDomText(ql);
                if (got2 === want) {
                    log('简介填充（execCommand）成功');
                    return { ok: true, msg: '简介已填充', strategy: 'execCommand' };
                }
                log('execCommand 后 DOM 不一致。回读=', JSON.stringify(got2));
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
            var got3 = descDomText(ql);
            var ok3 = got3 === want;
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
                return String(it.name || it.tag_name || it.tag || it.label || it.value || it.text || '');
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

    function scanContainerForTagList(container, chipNames, depth) {
        if (!container || depth > 2) return null;
        for (var key in container) {
            if (!Object.prototype.hasOwnProperty.call(container, key)) continue;
            var val = container[key];
            if (Array.isArray(val)) {
                var names = arrayAsNames(val);
                if (chipNames.length > 0) {
                    var all = chipNames.every(function (n) { return names.indexOf(n) >= 0; });
                    if (all) {
                        return {
                            obj: container,
                            key: key,
                            kind: (val.length && typeof val[0] === 'object' && val[0]) ? 'objects' : 'strings'
                        };
                    }
                } else if (/tag|label/i.test(key)) {
                    return {
                        obj: container,
                        key: key,
                        kind: (val.length && typeof val[0] === 'object' && val[0]) ? 'objects' : 'strings'
                    };
                }
            } else if (val && typeof val === 'object' && !val._isVue && !val.$el &&
                typeof val.nodeType !== 'number' && !Array.isArray(val)) {
                var sub = scanContainerForTagList(val, chipNames, depth + 1);
                if (sub) return sub;
            }
        }
        return null;
    }

    function findTagListRef(vms, chipNames) {
        for (var i = 0; i < vms.length; i++) {
            var hit = scanContainerForTagList(vms[i].$data, chipNames, 0) ||
                scanContainerForTagList(vms[i]._props, chipNames, 0);
            if (hit) return hit;
        }
        return null;
    }

    function findTagAddMethod(vms) {
        var names = ['addTag', 'createTag', 'handleAddTag', 'onAddTag', 'appendTag', 'submitTag', 'confirmTag'];
        var out = [];
        vms.forEach(function (vm) {
            names.forEach(function (n) {
                // 只用显式接收标签名参数的方法，避免无参方法误读输入框里用户的内容
                if (typeof vm[n] === 'function' && vm[n].length >= 1) out.push({ vm: vm, fnName: n });
            });
        });
        return out;
    }

    // 写模型后回读校验，失败回滚，绝不留下错误数据
    async function addTagViaModel(ref, name) {
        var arr = ref.obj[ref.key];
        if (!Array.isArray(arr)) return false;
        var pushed;
        if (ref.kind === 'objects') {
            var tpl = arr[0] || {};
            var nameKey = null;
            ['name', 'tag_name', 'tag', 'label', 'value', 'text'].forEach(function (k) {
                if (!nameKey && typeof tpl[k] === 'string') nameKey = k;
            });
            pushed = {};
            pushed[nameKey || 'name'] = name;
        } else {
            pushed = name;
        }
        arr.push(pushed);
        await sleep(TAG_STEP_MS);
        if (getExistingTagNames().indexOf(name) >= 0) return true;
        var idx = arr.indexOf(pushed);
        if (idx >= 0) arr.splice(idx, 1);
        return false;
    }

    async function addTagViaMethods(cands, name) {
        for (var i = 0; i < cands.length; i++) {
            try {
                cands[i].vm[cands[i].fnName](name);
            } catch (e) {
                log('组件方法', cands[i].fnName, '调用异常：', e);
                continue;
            }
            await sleep(TAG_STEP_MS);
            if (getExistingTagNames().indexOf(name) >= 0) {
                log('通过组件方法', cands[i].fnName, '添加标签：', name);
                return cands[i];
            }
        }
        return null;
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

    async function clearTags(ref) {
        // 优先后台清空（直接改模型）
        if (ref) {
            var arr = ref.obj[ref.key];
            if (Array.isArray(arr) && arr.length) {
                var snapshot = arr.slice();
                arr.splice(0, arr.length);
                await sleep(300);
                if (!getExistingTagNames().length) return true;
                snapshot.forEach(function (it) { arr.push(it); });
                log('模型清空未生效，已还原并改用点击删除');
            }
        }
        // 兜底：点击关闭按钮（会碰 UI，逐个避让用户操作）
        for (var guard = 0; guard < 30; guard++) {
            if (stopRequested) return false;
            if (!(await waitUserIdle('标签清空'))) return false;
            var chips = Array.prototype.slice.call(
                document.querySelectorAll('#tag-container .label-item-v2-container')
            );
            if (!chips.length) return true;
            var closeBtn = chips[0].querySelector('svg.close') ||
                chips[0].querySelector('[class*="close"]');
            if (!closeBtn) return false;
            fireClick(closeBtn);
            await sleep(140);
        }
        return !getExistingTagNames().length;
    }

    async function fillTags(tags, clearFirst) {
        var input = findTagInput();
        if (!input) return { ok: false, msg: '未找到标签输入框', added: [], skipped: [] };

        // 能定位到数据模型/组件方法就全程后台写入，不碰输入框、不抢焦点
        var vms = collectVueChain(input.closest('.input-container') || input);
        var chipNames = getExistingTagNames();
        var tagRef = findTagListRef(vms, chipNames);
        var methodCands = findTagAddMethod(vms);
        var usedMethod = null;
        log('标签写入通道：', tagRef
            ? ('数据模型 ' + tagRef.key)
            : (methodCands.length ? ('组件方法 ' + methodCands.map(function (c) { return c.fnName; }).join('/')) : '无（退回模拟输入）'),
            '；已有标签：', chipNames);

        // 清空失败不阻断后续填充
        if (clearFirst) {
            try {
                await clearTags(tagRef);
            } catch (e) {
                log('清空已有标签异常（继续填充）：', e);
            }
        }

        var existing = {};
        getExistingTagNames().forEach(function (n) { existing[n] = true; });
        var added = [];
        var skipped = [];

        // 逐个独立 try/catch：单个标签失败只记入 skipped，不影响后续标签
        for (var i = 0; i < tags.length; i++) {
            var name = String(tags[i]).trim().slice(0, TAG_MAX_LEN);
            if (!name) continue;
            if (stopRequested) {
                for (var j = i; j < tags.length; j++) {
                    var rest = String(tags[j]).trim().slice(0, TAG_MAX_LEN);
                    if (rest) skipped.push(rest + '（未执行）');
                }
                break;
            }
            try {
                if (existing[name]) {
                    skipped.push(name + '（已存在）');
                    continue;
                }
                if (Object.keys(existing).length >= TAG_LIMIT) {
                    skipped.push(name + '（超出 ' + TAG_LIMIT + ' 个上限）');
                    continue;
                }

                var ok = false;

                // 通道 1：组件方法（后台）
                if (usedMethod && !ok) {
                    try {
                        usedMethod.vm[usedMethod.fnName](name);
                        await sleep(TAG_STEP_MS);
                        ok = getExistingTagNames().indexOf(name) >= 0;
                    } catch (e) {
                        log('组件方法写入异常：', e);
                        ok = false;
                    }
                }
                if (!ok && !usedMethod && methodCands.length) {
                    usedMethod = await addTagViaMethods(methodCands, name);
                    ok = !!usedMethod;
                }

                // 通道 2：直接写数据模型（后台）
                if (!ok && tagRef) {
                    try {
                        ok = await addTagViaModel(tagRef, name);
                    } catch (e) {
                        log('模型写入异常：', e);
                        ok = false;
                    }
                }

                // 通道 3：模拟输入（兜底）
                if (!ok) {
                    ok = await addTagViaKeyboard(input, name);
                }

                if (ok) {
                    existing[name] = true;
                    added.push(name);
                } else {
                    skipped.push(name + (stopRequested ? '（已停止）' : '（未成功创建）'));
                }
            } catch (e) {
                var reason = (e && e.message) ? e.message : String(e);
                log('标签「' + name + '」填充异常，已跳过，继续后续标签：', e);
                skipped.push(name + '（异常:' + reason + '）');
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
