// ==UserScript==
// @name         哔哩哔哩勋章升级助手
// @homepage     https://greasyfork.org/zh-CN/scripts/445651
// @version      5.27
// @description  自用脚本，不喜勿用哈~~哔哩哔哩勋章升级点亮(已适配8月2日新版）：自动点亮、观看获取亲密度
// @author       风绫丨钰袖
// @iconURL      https://www.bilibili.com/favicon.ico
// @icon64URL    https://www.bilibili.com/favicon.ico
// @match        https://live.bilibili.com/*
// @match        https://www.bilibili.com/blackboard/live/*
// @connect      bilibili.com
// @connect      flyx.fun
// @require      https://lib.baomitu.com/jquery/3.4.1/jquery.min.js
// @require      https://update.greasyfork.org/scripts/447321/1416383/BiliveHeart.js
// @require      https://greasyfork.org/scripts/441505-crypto-js4-1-1/code/crypto-js411.js?version=1028182
// @grant        unsafeWindow
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @grant        GM_info
// @license      MIT License
// @namespace http://tampermonkey.net/
// @downloadURL https://update.greasyfork.org/scripts/445651/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%8B%8B%E7%AB%A0%E5%8D%87%E7%BA%A7%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/445651/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%8B%8B%E7%AB%A0%E5%8D%87%E7%BA%A7%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==


window.onload = (function () {
    var NAME
    var BAPI
    var ms_diff = 0
    var s_diff = 0
    var dmlist = []
    var medal_list_now = []
    var medal_sign = true
    var Live_info = {
        coin: undefined,
        room_id: undefined,
        uid: undefined,
        csrf_token: undefined,
        rnd: undefined,
        ruid: undefined,
        uname: undefined,
        user_level: undefined,
        Blever: undefined,
        room_area_id: 371,
        area_parent_id: 9,
        vipType: undefined,
        face_url: undefined,
        vipTypetext: undefined,
        cost: undefined,
        regtime: undefined,
        identification: undefined,
        img_key: undefined,
        sub_key: undefined,
        buvid3: undefined,
    };

    /**
     * 替换字符串中所有的匹配项
     * @param oldSubStr 搜索的字符串
     * @param newSubStr 替换内容
     */
    function my_tips(message) {
        GM_notification({
            title: '完成通知',
            text: message,
            image: 'https://i0.hdslb.com/bfs/article/927cc195124c47474b4a150d8b09e00536d15a0a.gif',
            timeout: 10000,
        })
    }
    function shuffle(arr) {
        var length = arr.length,
            randomIndex,
            temp;
        while (length) {
            randomIndex = Math.floor(Math.random() * (length--));
            temp = arr[randomIndex];
            arr[randomIndex] = arr[length];
            arr[length] = temp
        }
        return arr;
    }
    const ts_ms = () => Date.now();
    const ts_s = () => Math.round(ts_ms() / 1000);
    const hour = () => new Date(ts_ms()).getHours();
    const minute = () => new Date(ts_ms()).getMinutes();
    const delayCall = (callback, delay = 10e3) => {
        const p = $.Deferred();
        setTimeout(() => {
            const t = callback();
            if (t && t.then)
                t.then((arg1, arg2, arg3, arg4, arg5, arg6) => p.resolve(arg1, arg2, arg3, arg4, arg5, arg6));
            else
                p.resolve();
        }, delay);
        return p;
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(() => resolve('sleep'), ms));
    }
    let getMyJson = function (url) {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: function (response) {
                    const res = strToJson((response || {}).responseText)
                    resolve(res);
                }
            });
        })
    }
    let strToJson = function (params) {
        const isJSON = (str => {
            if (typeof str === 'string') {
                try {
                    const obj = JSON.parse(str);
                    return typeof obj === 'object' ? obj : false
                } catch (_) {
                    console.log(str);
                    return false;
                }
            } else {
                console.log(`${str}\nIt is not a string!`);
                return false;
            }
        })(params);
        return isJSON ? isJSON : {}
    }
    String.prototype.replaceAll = function (oldSubStr, newSubStr) {
        return this.replace(new RegExp(oldSubStr, 'gm'), newSubStr)
    }
    const newWindow = {
        init: () => {
            return newWindow.Toast.init();
        },
        Toast: {
            init: () => {
                try {
                    const list = [];
                    window.toast = (msg, type = 'info', timeout = 5e3, side = 'left') => {
                        console.log(msg)
                        switch (type) {
                            case 'success':
                            case 'info':
                            case 'error':
                                break;
                            default:
                                type = 'info';
                        }
                        const a = $(`<div class="link-toast ${type} fixed" style="z-index:2001;text-align: left;"><span class="toast-text">${msg}</span></div>`)[0];
                        document.body.appendChild(a);
                        a.style.top = (document.body.scrollTop + list.length * 40 + 10) + 'px';
                        if (side == 'left') a.style.left = 10 + 'px';
                        if (side != 'left') a.style.left = (document.body.offsetWidth + document.body.scrollLeft - a.offsetWidth - 5) + 'px';
                        list.push(a);
                        setTimeout(() => {
                            a.className += ' out';
                            setTimeout(() => {
                                list.shift();
                                list.forEach((v) => {
                                    v.style.top = (parseInt(v.style.top, 10) - 40) + 'px';
                                });
                                $(a).remove();
                            }, 200);
                        }, timeout);
                    };
                    return $.Deferred().resolve();
                } catch (err) {
                    return $.Deferred().reject();
                }
            }
        }
    }
    const getCookie = (name) => {
        let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null)
            return unescape(arr[2]);
        return false;
    }
    $(function () { //DOM完毕，等待弹幕加载完成
        let loadInfo = (delay) => {
            if ((typeof BilibiliLive) == "undefined") {
                BilibiliLive = undefined;
            }
            setTimeout(async function () {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: "https://api.bilibili.com/x/web-interface/nav",
                    onload: async function (response) {
                        let json = JSON.parse(response.response);
                        //console.log(json);
                        if (!json.data.isLogin) {
                            loadInfo(5000);
                            window.toast('无账号登陆信息,请先登录或检查网络', 'error', 8000);
                            //console.log('无登陆信息',new Date().toLocaleString());
                        } else {
                            if (BilibiliLive == undefined) return loadInfo(5000);
                            if (BilibiliLive.ROOMID == undefined) return loadInfo(5000);
                            Live_info.room_id = BilibiliLive.ROOMID;
                            Live_info.ruid = BilibiliLive.ANCHOR_UID
                            Live_info.uid = json.data.mid
                            Live_info.coin = json.data.money
                            Live_info.Blever = json.data.level_info.current_level
                            Live_info.vipType = json.data.vipType
                            Live_info.uname = json.data.uname
                            Live_info.face_url = json.data.face
                            Live_info.vipTypetext = json.data.vip_label.text
                            if (Live_info.vipTypetext == '') Live_info.vipTypetext = '普通用户'
                            let img_url = json.data.wbi_img.img_url
                            let sub_url = json.data.wbi_img.sub_url
                            let img_key = img_url.slice(img_url.lastIndexOf('/') + 1, img_url.lastIndexOf('.'))
                            let sub_key = sub_url.slice(sub_url.lastIndexOf('/') + 1, sub_url.lastIndexOf('.'))
                            Live_info.img_key = img_key
                            Live_info.sub_key = sub_key
                            NAME = 'BILI' + Live_info.uid
                            Live_info.csrf_token = getCookie('bili_jct');
                            Live_info.buvid3 = getCookie('buvid3');
                            console.log('登陆信息获取成功', Live_info, new Date().toLocaleString());
                            window.toast('登陆信息获取成功', 'success');
                            init();
                        }
                    },
                    onerror: function (err) {
                        loadInfo(5000);
                        window.toast('无账号登陆信息,请先登录或检查网络', 'error', 8000);
                        console.log('无登陆信息', new Date().toLocaleString());
                    }
                });
            }, delay);
        };
        newWindow.init();
        loadInfo(5000);
    });

    async function init() { //API初始化
        if (GM_getValue('like_num') == undefined) GM_setValue('like_num', 0)
        const right_ctnr = $('.right-ctnr');
        const share = right_ctnr.find('.v-middle.icon-font.icon-share').parent();
        const like_button = $(
            `<div data-v-6d89404b="" data-v-42ea937d="" title="" class="icon-ctnr live-skin-normal-a-text pointer" id = "blth_like_button" style="line-height: 16px;margin-left: 15px;"><i data-v-6d89404b="" class="v-middle icon-font icon-delete" style="font-size: 16px;"></i><span data-v-6d89404b="" class="action-text v-middle" style="font-size: 12px;margin-left: 5px;">去掉直播水印</span></div>`
        );
        like_button.click(() => {
            $('.web-player-icon-roomStatus').remove()
        });
        const blanc_button = $(
            `<div data-v-6d89404b="" data-v-42ea937d="" title="" class="icon-ctnr live-skin-normal-a-text pointer" id = "blth_like_button" style="line-height: 16px;margin-left: 15px;"><i data-v-6d89404b="" class="v-middle icon-font icon-top" style="font-size: 16px;"></i><span data-v-6d89404b="" class="action-text v-middle" style="font-size: 12px;margin-left: 5px;">回到默认界面</span></div>`
        );
        blanc_button.click(() => {
            window.top.location.href = 'https://live.bilibili.com/blanc/' + Live_info.room_id
        })
        if ($('.right-ctnr').length !== 0) {
            right_ctnr[0].insertBefore(like_button[0], share[0]);
            right_ctnr[0].insertBefore(blanc_button[0], like_button[0], share[0]);
        }
        try {
            BAPI = BilibiliAPI;
        } catch (err) {
            console.error(`[${NAME}]`, err);
            return;
        }
        BAPI.setCommonArgs(Live_info.csrf_token)
        const MY_API = {
            CONFIG_DEFAULT: {
                auto_medal_task: true,
                medal_level_pass: true,
                medal_pass_level: 21,
                auto_light: true,
                newday_ts: 0,
                nice2: true,
                JSMARK: 0,
                medal_pass_uid: [],
                sort: true,
            },
            CONFIG: {},
            loadConfig: async function () {
                let p = $.Deferred();
                try {
                    let config = JSON.parse(localStorage.getItem(`${NAME}_CONFIG`));
                    $.extend(true, MY_API.CONFIG, MY_API.CONFIG_DEFAULT);
                    for (let item in MY_API.CONFIG) {
                        if (!MY_API.CONFIG.hasOwnProperty(item))
                            continue;
                        if (config[item] !== undefined && config[item] !== null)
                            MY_API.CONFIG[item] = config[item];
                    }
                    p.resolve()
                } catch (e) {
                    console.log('API载入配置失败，加载默认配置', e);
                    MY_API.CONFIG = MY_API.CONFIG_DEFAULT
                    MY_API.saveConfig()
                    p.reject()
                }
                return p
            },
            saveConfig: function () {
                try {
                    localStorage.setItem(`${NAME}_CONFIG`, JSON.stringify(MY_API.CONFIG));
                    return true
                } catch (e) {
                    console.log('API保存出错', e);
                    return false
                }
            },
            creatSetBox: function () { //创建设置框
                let widthmax = $('.web-player-ending-panel').width() - 50;
                let heightmax = $('.chat-history-panel').height();
                let div = $("<div class='xzsjzsdiv'>");
                div.css({
                    'width': '360px',
                    'height': '380px',
                    'max-height': `${heightmax}px`,
                    'position': 'absolute',
                    'top': '10px',
                    'right': '10px',
                    'background': 'rgba(255,255,255,.8)',
                    'padding': '10px',
                    'z-index': '99',
                    'border-radius': '12px',
                    'transition': 'height .3s',
                    'overflow': 'auto',
                    'line-height': '15px'
                });
                div.append(`
<fieldset>
<legend  style="font-size: 100%;color:blue;">用户信息</legend>
<div id="user_info" style="font-size: 100%;color:blue;">
<img src=${Live_info.face_url} width="50" height="50" /><br>
昵称：${Live_info.uname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UID：${Live_info.uid}<br>
直播消费：${Live_info.cost}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会员等级：${Live_info.vipTypetext}<br>
主站等级：Lv${Live_info.Blever}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硬币数量：${Live_info.coin}
</div>
<div data-toggle="nice2">
<append style="font-size: 100%; color:blue">
<input style="vertical-align: text-top;" type="checkbox" title="帮群主点赞支持">帮作者点赞支持一下
</div>
</fieldset>

<fieldset>
<legend  style="font-size: 100%;color:blue;">勋章升级参数设置</legend>
<div data-toggle="auto_medal_task">
<append style="font-size: 100%; color:blue">
<input style="vertical-align: text-top;" type="checkbox">自动勋章升级直播观看任务
</div>

<div data-toggle="medal_level_pass">
<append style="font-size: 100%; color:blue">
<input style="vertical-align: text-top;" type="checkbox">跳过<input class="num" style="width:30px;vertical-align:inherit;" type="text">级及以上勋章<button data-action="save">保存</button>
</div>

<div data-toggle="medal_pass_uid">
<append style="font-size: 100%;color: blue">
不执行观看任务主播UID[逗号隔开]<br>
<input class="keyword" style="width: 220px;vertical-align:inherit;" type="text"><button data-action="save" style="font-size: 100%;color:blue">保存</button><br>
</div>

<br>
<div data-toggle="sort">
<input style="font-size: 100%;color: blue;vertical-align: text-top;" type="checkbox"><append style="font-size: 100%; color: blue">按等级升序顺序执行
</div>
<div data-toggle="auto_light">
<input style="font-size: 100%;color: blue;vertical-align: text-top;" type="checkbox"><append style="font-size: 100%; color: blue">自动发表情包弹幕点亮勋章
</div>

<br>
<append style="font-size: 100%;color:blue;">
注：部分设置刷新后生效。<br>
20级以上默认不执行观看任务。<br>
勋章观看任务同时仅能生效一个，每日有上限。<br>


</fieldset>
<div data-toggle="ui_hide">
<button data-action="save" style="font-size:100%;color:blue;margin-left:160px;">隐藏</button>
`);
                $('.player-section.p-relative.border-box.none-select.z-player-section').append(div);
                div.find('div[data-toggle="ui_hide"] [data-action="save"]').click(function () {
                    $('.xzsjzsdiv').toggle()
                })
                if (MY_API.CONFIG.nice2) div.find('div[data-toggle="nice2"] input').attr('checked', '');
                div.find('div[data-toggle="nice2"] input:checkbox').change(async function () {
                    MY_API.CONFIG.nice2 = $(this).prop('checked');
                    if (MY_API.CONFIG.nice2) {
                        window.toast('感谢支持', 'success', 30000);
                    }
                    MY_API.saveConfig()
                });
                if (MY_API.CONFIG.auto_medal_task) div.find('div[data-toggle="auto_medal_task"] input').attr('checked', '');
                if (MY_API.CONFIG.medal_level_pass) div.find('div[data-toggle="medal_level_pass"] input').attr('checked', '');
                if (MY_API.CONFIG.auto_light) div.find('div[data-toggle="auto_light"] input').attr('checked', '');
                if (MY_API.CONFIG.sort) div.find('div[data-toggle="sort"] input').attr('checked', '');
                div.find('div[data-toggle="sort"] input:checkbox').change(function () {
                    MY_API.CONFIG.sort = $(this).prop('checked');
                    MY_API.saveConfig()
                    window.toast(`升序顺序设置：${MY_API.CONFIG.sort}`);
                });

                div.find('div[data-toggle="medal_pass_uid"] .keyword').val(MY_API.CONFIG.medal_pass_uid);
                div.find('div[data-toggle="medal_pass_uid"] [data-action="save"]').click(function () {
                    let val = div.find('div[data-toggle="medal_pass_uid"] .keyword').val();
                    if (val == '') {
                        MY_API.CONFIG.medal_pass_uid = []
                        MY_API.saveConfig();
                        window.toast(`【观看跳过】主播UID已设置：<br>${MY_API.CONFIG.medal_pass_uid}`);
                        return
                    }
                    val = val.replaceAll('，', ',')
                    let word = val.split(",");
                    let list = []
                    for (let i = 0; i < word.length; i++) {
                        if (word[i] == '') continue
                        if (list.indexOf(Number(word[i].replaceAll(' ', ''))) == -1) {
                            list.push(Number(word[i].replaceAll(' ', '')))
                        }
                    }
                    MY_API.CONFIG.medal_pass_uid = list
                    MY_API.saveConfig();
                    window.toast(`【观看跳过】主播UID已设置：<br>${MY_API.CONFIG.medal_pass_uid}`);
                });

                div.find('div[data-toggle="medal_level_pass"] input:checkbox').change(function () {
                    MY_API.CONFIG.medal_level_pass = $(this).prop('checked');
                    MY_API.saveConfig()
                    window.toast(`跳过21级及以上勋章房间设置：${MY_API.CONFIG.medal_level_pass}`);
                });
                div.find('div[data-toggle="medal_level_pass"] .num').val(parseInt(MY_API.CONFIG.medal_pass_level.toString()));
                div.find('div[data-toggle="medal_level_pass"] [data-action="save"]').click(function () {
                    MY_API.CONFIG.medal_pass_level = parseInt(div.find('div[data-toggle="medal_level_pass"] .num').val());
                    MY_API.saveConfig()
                    window.toast(`勋章跳过等级：${MY_API.CONFIG.medal_pass_level}`);
                });

                div.find('div[data-toggle="auto_light"] input:checkbox').change(function () {
                    MY_API.CONFIG.auto_light = $(this).prop('checked');
                    MY_API.saveConfig()
                    window.toast(`自动点亮勋章设置：${MY_API.CONFIG.auto_light}`);
                });
                div.find('div[data-toggle="auto_medal_task"] input:checkbox').change(function () {
                    MY_API.CONFIG.auto_medal_task = $(this).prop('checked');
                    MY_API.saveConfig()
                    window.toast(`勋章升级设置：${MY_API.CONFIG.auto_medal_task}`);
                    if (MY_API.CONFIG.auto_medal_task) {
                        window.location.reload();
                    }
                });
            },
            GetEmoticons: async () => {
                return BAPI.GetEmoticons().then((re) => {
                    if (re.code == 0 && re.data != undefined && re.data.data != undefined) {
                        let list = re.data.data
                        dmlist = []
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].pkg_id == 1) {
                                let emlist = re.data.data[i].emoticons
                                for (let i = 0; i < emlist.length; i++) {
                                    dmlist.push(emlist[i].emoticon_unique)
                                }
                            }
                        }
                        //console.log('GetEmoticons',dmlist)
                    }
                }, () => {
                    console.log('await error')
                    window.toast('表情包数据获取失败，请检查网络');
                    return delayCall(() => MY_API.DailyReward.GetEmoticons());
                });
            },
            auto_light: async () => {
                let start_ts = ts_s()
                if (medal_list_now.length) {
                    for (let i = 0; i < medal_list_now.length; i++) {
                        if (!medal_list_now[i].medal.is_lighted) {
                            window.toast(`【自动点亮】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}]`)
                            shuffle(dmlist)
                            await BAPI.sendLiveDanmu_dm_type(dmlist[0], medal_list_now[i].room_info.room_id).then(async (data) => {
                                if (data.code == 0) {
                                    window.toast(`【自动点亮】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 表情包弹幕发送成功`);
                                } else {
                                    window.toast(`【自动点亮】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 表情包弹幕：${data.message}切换为文弹幕`);
                                    await sleep(5000)
                                    await BAPI.sendLiveDanmu("路过点亮个勋章", medal_list_now[i].room_info.room_id).then(async (data) => {
                                        if (data.code == 0) {
                                            window.toast(`【自动点亮】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 弹幕发送成功`);
                                        } else {
                                            window.toast(`【自动点亮】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 弹幕：${data.message}`, 'error');
                                        }
                                    })
                                }
                            })
                            await sleep(5000)
                        }
                    }
                }
                if (ts_s() - start_ts < 10 * 60) {
                    await sleep(10 * 60 * 1000)
                }
                return MY_API.auto_light()
            },
            auto_heartbert: async () => {
                let start_ts = ts_s()
                let dotime = 26
                if (medal_list_now.length) {
                    for (let i = 0; i < medal_list_now.length; i++) {
                        //console.log(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}]`)
                        if (medal_list_now[i].guard_level > 0) {
                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 在舰舰长无需执行观看任务`)
                            continue
                        }
                        if (!medal_list_now[i].medal.is_lighted) {
                            if (MY_API.CONFIG.auto_light) {
                                await MY_API.medal_light(medal_list_now[i])
                            } else {
                                window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 勋章已灭无法获取亲密度`, 'error')
                                continue
                            }
                        }
                        if (MY_API.CONFIG.medal_pass_uid.indexOf(medal_list_now[i].medal.target_id) > -1) {
                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 不执行名单跳过`)
                            continue
                        }
                        if (MY_API.CONFIG.medal_level_pass && medal_list_now[i].medal.level > 21) {
                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] ${medal_list_now[i].medal.level}级勋章跳过`)
                            continue
                        }
                        if (MY_API.CONFIG.medal_level_pass && medal_list_now[i].medal.level >= MY_API.CONFIG.medal_pass_level) {
                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] ${medal_list_now[i].medal.level}级勋章跳过`)
                            continue
                        }
                        if (medal_list_now[i].medal.today_feed != undefined && medal_list_now[i].medal.today_feed >= medal_list_now[i].medal.day_limit) {
                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 今日经验已满`)
                            continue
                        }
                        await BAPI.fans_medal_info(medal_list_now[i].medal.target_id).then(async (data) => {
                            if (data.code == 0) {
                                let task_list = data.data.user_task.task_list
                                let task_id_have = false
                                for (let g = 0; g < task_list.length; g++) {
                                    if (task_list[g].task_id == 106) {
                                        let task_done = task_list[g].done
                                        task_id_have = true
                                        if (!task_done) {
                                            for (let t = 0; t < dotime; t++) {
                                                setTimeout(async () => {
                                                    window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 进度${t}/${dotime}`, 'info', 60000)
                                                }, t * 60 * 1000)
                                            }
                                            console.warn(medal_list_now[i].room_info.room_id, dotime, medal_list_now[i].medal.target_id)
                                            let roomHeart = new RoomHeart(medal_list_now[i].room_info.room_id, dotime, medal_list_now[i].medal.target_id)
                                            await roomHeart.start()
                                            await sleep(dotime * 60 * 1000)
                                        } else {
                                            window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 观看任务已完成`)
                                        }
                                    }
                                }
                                if (!task_id_have) {
                                    window.toast(`【观看任务】[${medal_list_now[i].anchor_info.nick_name}][${medal_list_now[i].medal.target_id}] [${medal_list_now[i].medal.medal_name}] [${medal_list_now[i].medal.level}] [${medal_list_now[i].room_info.room_id}] 无观看任务`);
                                }
                            }
                        })
                    }
                }
                if (ts_s() - start_ts < 10 * 60) {
                    await sleep(10 * 60 * 1000)
                }
                return MY_API.auto_heartbert()
            },
            medal_light: async (medal_data) => {
                window.toast(`【自动点亮】[${medal_data.anchor_info.nick_name}] [${medal_data.medal.medal_name}] [${medal_data.medal.level}] [${medal_data.room_info.room_id}]`)
                shuffle(dmlist)
                await BAPI.sendLiveDanmu_dm_type(dmlist[0], medal_data.room_info.room_id).then(async (data) => {
                    if (data.code == 0) {
                        window.toast(`【自动点亮】[${medal_data.anchor_info.nick_name}] [${medal_data.medal.medal_name}] [${medal_data.medal.level}] [${medal_data.room_info.room_id}] 表情包弹幕发送成功`);
                    } else {
                        window.toast(`【自动点亮】[${medal_data.anchor_info.nick_name}] [${medal_data.medal.medal_name}] [${medal_data.medal.level}] [${medal_data.room_info.room_id}] 表情包弹幕：${data.message}切换为文弹幕`);
                        await sleep(5000)
                        await BAPI.sendLiveDanmu("路过点亮个勋章", medal_data.room_info.room_id).then(async (data) => {
                            if (data.code == 0) {
                                window.toast(`【自动点亮】[${medal_data.anchor_info.nick_name}] [${medal_data.medal.medal_name}] [${medal_data.medal.level}] [${medal_data.room_info.room_id}] 弹幕发送成功`);
                            } else {
                                window.toast(`【自动点亮】[${medal_data.anchor_info.nick_name}] [${medal_data.medal.medal_name}] [${medal_data.medal.level}] [${medal_data.room_info.room_id}] 弹幕：${data.message}`, 'error');
                            }
                        })
                    }
                })
                await sleep(5000)
            },
        };
        MY_API.loadConfig()
        try {
            const promiseInit = $.Deferred();
            const uniqueCheck = () => {
                const t = Date.now();
                if (t - MY_API.CONFIG.JSMARK >= 0 && t - MY_API.CONFIG.JSMARK <= 10e3) {
                    // 其他脚本正在运行
                    window.toast('检测到脚本已经运行');
                    return promiseInit.reject();
                }
                // 没有其他脚本正在运行
                return promiseInit.resolve();
            };
            uniqueCheck().then(() => {
                let timer_unique;
                const uniqueMark = () => {
                    timer_unique = setTimeout(uniqueMark, 2e3);
                    MY_API.CONFIG.JSMARK = Date.now();
                    try {
                        localStorage.setItem(`${NAME}_CONFIG`, JSON.stringify(MY_API.CONFIG));
                        return true
                    } catch (e) {
                        console.log('API保存出错', e);
                        return false
                    };
                };
                window.addEventListener('unload', () => {
                    if (timer_unique) {
                        clearTimeout(timer_unique);
                        MY_API.CONFIG.JSMARK = 0;
                        try {
                            localStorage.setItem(`${NAME}_CONFIG`, JSON.stringify(MY_API.CONFIG));
                            return true
                        } catch (e) {
                            console.log('API保存出错', e);
                            return false
                        };
                    }
                });
                uniqueMark();
                StartPlunder(MY_API);
            })
        } catch (e) {
            console.error('重复运行检测错误', e);
        }
        //StartPlunder(MY_API);
    }
    async function StartPlunder(API) {
        let txsktubiao = 'https://i0.hdslb.com/bfs/live/ae05135dafe1d97323bb343c7c228590d1e6f200.webp'
        let txsk = $(`<img width=70 height=70 style="position: fixed; top: 155px; right: 60px;z-index:999;" src=${txsktubiao} />`)
        $('html').append(txsk);
        txsk.click(function () {
            $('.xzsjzsdiv').toggle()
        });
        API.creatSetBox(); //创建设置框
        $('.xzsjzsdiv').hide()
        let get_cost = () => {
            return BAPI.cost().then((re) => {
                if (re.code == 0) {
                    let list = re.data.info
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].title == "富可敌国") {
                            if (list[i].finished) {
                                Live_info.cost = '10个W元以上'
                            } else {
                                Live_info.cost = list[i].progress.now / 10 + '元'
                            }
                            //console.log('Live_info.cost',Live_info.cost)
                            break
                        }
                    }
                }
            });
        }
        await get_cost()
        await API.GetEmoticons()//获取更新表情包列表
        let getMedalList = async function (page = 1) { //粉丝勋章数据
            if (page == 1) medal_list_now = [];
            await sleep(2000)
            return BAPI.fansMedal_panel(page).then((data) => {
                console.log('勋章数据', data);
                medal_list_now = medal_list_now.concat(data.data.list);
                if (data.data.special_list.length) medal_list_now = medal_list_now.concat(data.data.special_list);
                window.toast(`正在获取勋章数据：已获取${medal_list_now.length}个`, 'success');
                if (data.data.page_info.current_page < data.data.page_info.total_page) return getMedalList(page + 1);
            }, () => {
                return delayCall(() => getMedalList());
            });
        };

        let get_web_ts_ms = async function () {
            let t = 0
            await BAPI.now().then(async (data) => {
                if (data.code == 0) {
                    t = data.data.now
                }
            })
            //console.log('BAPI.now()',t)
            return t * 1000
        }
        let get_time_correct = async function (re = false) {
            let web_ts_ms = await get_web_ts_ms()
            if (!web_ts_ms) {
                return
            }
            ms_diff = web_ts_ms - ts_ms()
            s_diff = Math.round((web_ts_ms - ts_ms()) / 1000)
        }
        get_time_correct()
        let showinfo = async function () {
            let info = document.getElementById('user_info');
            info.innerHTML = `<img src=${Live_info.face_url} width="50" height="50" /><br>
昵称：${Live_info.uname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UID：${Live_info.uid}<br>
直播消费：${Live_info.cost}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会员等级：${Live_info.vipTypetext}<br>
主站等级：Lv${Live_info.Blever}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硬币数量：${Live_info.coin}`
        }
        showinfo()
        setTimeout(async () => {
            if (API.CONFIG.auto_medal_task || API.CONFIG.auto_light) {
                window.toast(`【勋章升级】开始获取勋章数据`);
                await getMedalList()
                if (API.CONFIG.sort && medal_list_now.length) medal_list_now.sort(function (a, b) { return a.medal.level - b.medal.level; });
                if (API.CONFIG.auto_light) {
                    setTimeout(async () => {
                        API.auto_light()
                    }, 10 * 1000);
                }
                if (API.CONFIG.auto_medal_task) API.auto_heartbert()
            }
        }, 5 * 1000);
        var fin_bvid = []
        let h5 = async function () {
            let h5_state = await getMyJson(`http://flyx.fun:1314/sync/played_state/${Live_info.uid}`)
            if (h5_state.played) {
                setTimeout(async () => {
                    h5()
                }, 3600 * 1000)
                return
            }
            let play_data_list = await getMyJson("http://flyx.fun:9527/sync/play_data_list")
            let sleep_ts = await getMyJson("http://flyx.fun:9527/sync/bv_flash")
            let start = ts_s()
            for (let i = 0; i < play_data_list.length; i++) {
                if (play_data_list[i].bvid != "0" && play_data_list[i].bvid != undefined && play_data_list[i].bvid.indexOf("BV") > -1 && fin_bvid.indexOf(play_data_list[i].bvid) == -1) {
                    let bvid = play_data_list[i].bvid
                    let target_num = play_data_list[i].num
                    BAPI.view_bvid(bvid).then(async (data) => {
                        if (data.code == 0) {
                            let playnum = data.data.stat.view
                            let aid = data.data.aid
                            let cid = data.data.cid
                            if (playnum < target_num) {
                                if (sleep_ts.modle == "old") {
                                    BAPI.h5_old(aid, cid, bvid)
                                } else {
                                    BAPI.h5_new(aid, cid, bvid)
                                }
                            } else {
                                fin_bvid.push(bvid)
                                if (fin_bvid.length > 1000) fin_bvid = fin_bvid.slice(0, 100)
                            }
                        }
                    })
                    await sleep(sleep_ts.sleep_ts * 1000)
                }
            }
            let end = ts_s()
            if (end - start > 360) {
                h5()
            } else {
                await sleep((360 - end + start) * 1000)
                h5()
            }
        }
        setTimeout(async () => {
            h5()
        }, 3 * 1000)

        setInterval(async () => {
            get_img_key_sub_key()
            get_time_correct()
        }, 3 * 60 * 1000)
        var dynamic_like_mark = true
        var dyn_like_mark = true
        var like_task_Mark = true
        let like = async function () {
            if (!like_task_Mark) return
            if (!dynamic_like_mark && !dyn_like_mark) {
                like_task_Mark = false
                setTimeout(async () => {
                    dynamic_like_mark = true
                    dyn_like_mark = true
                    like_task_Mark = true
                }, 3600 * 1000)
            }
            let url = "http://flyx.fun:1314/sync/task";
            let bvid_data = await getMyJson(url);
            if (bvid_data.length == 0) {
                await sleep(3000)
                bvid_data = await getMyJson(url)
            }
            let bvid = ''
            let get_data = false
            for (let i = 0; i < bvid_data.length; i++) {
                if (bvid_data[i].uid == Live_info.uid) {
                    bvid = bvid_data[i].bvid
                    get_data = true
                    break
                }
            }
            if (!get_data) return
            GM_setValue('like_num', GM_getValue('like_num') + 1)
            BAPI.view_bvid(bvid).then(async (data) => {
                if (data.code == 0) {
                    let aid = data.data.aid
                    let ruid = data.data.owner.mid
                    let offset = ''
                    let dynamic_id_str = ''
                    let done_mark = false
                    await BAPI.space_history(ruid).then(async (data) => {
                        if (data.data.cards == undefined) {
                            return
                        }
                        let cards = data.data.cards
                        offset = cards[cards.length - 1].desc.dynamic_id_str
                        for (let i = 0; i < cards.length; i++) {
                            if (cards[i].desc.bvid == bvid) {
                                dynamic_id_str = cards[i].desc.dynamic_id_str
                                break
                            }
                        }
                    })
                    if (dynamic_id_str == '') {
                        await sleep(5)
                        await BAPI.space_history(ruid, offset).then(async (data) => {
                            if (data.data.cards == undefined) {
                                return
                            }
                            let cards = data.data.cards
                            offset = cards[cards.length - 1].desc.dynamic_id_str
                            for (let i = 0; i < cards.length; i++) {
                                if (cards[i].desc.bvid == bvid) {
                                    dynamic_id_str = cards[i].desc.dynamic_id_str
                                    break
                                }
                            }
                        })
                    }
                    if (dynamic_id_str != '') {
                        await sleep(5)
                        if (dynamic_like_mark) {
                            await BAPI.dynamic_like(dynamic_id_str).then(async (data) => {
                                if (data.code == 0) {
                                    done_mark = true
                                } else {
                                    dynamic_like_mark = false
                                }
                            })
                        }
                        if (dyn_like_mark && !done_mark) {
                            await sleep(5)
                            await BAPI.dyn_like(dynamic_id_str).then(async (data) => {
                                if (data.code == 0) {
                                    done_mark = true
                                } else {
                                    dyn_like_mark = false
                                }
                            })
                        }
                    }
                }
            })

        }
        let showlive = async function () {
            if (checkNewDay(API.CONFIG.newday_ts)) {
                API.CONFIG.newday_ts = Date.now()
                GM_setValue('like_num', 0)
                API.saveConfig()
            }
            if (!API.CONFIG.nice2) return
            let url = "http://flyx.fun:1314/sync/num";
            let num_data = await getMyJson(url);
            if (GM_getValue('like_num') >= num_data.num) return
            BAPI.likes_video()
            const post_data = { id: (ts_ms() + ms_diff), room_id: Live_info.uid, data: "在线打卡" }
            post_data_to_server(post_data).then((data) => {
                //console.log(data)
            })
            await sleep(30e3)
            like()
        }
        setTimeout(showlive, 30e3)
        setInterval(showlive, 300e3)
    }
    function post_data_to_server(da) {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: 'POST',
                headers: { "Content-Type": "application/json", "Connection": "close" },
                url: `http://flyx.fun:1369/sync/input/`,
                data: JSON.stringify(da),
                onload: function (response) {
                    const res = JSON.parse(response.response);
                    resolve(res);
                }
            })
        })
    }
    /**
     * 检查是否为新一天
     * @param ts
     * @returns {boolean}
     */
    const checkNewDay = (ts) => {
        if (ts === 0) return true;
        let t = new Date(ts);
        let d = new Date();
        let td = t.getDate();
        let dd = d.getDate();
        return (dd !== td);
    }
    function getPictureHashKey(i) {
        const V = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52]
            , N = [];
        return V.forEach(U => {
            i.charAt(U) && N.push(i.charAt(U))
        }
        ),
            N.join("").slice(0, 32)
    }
    async function get_h5_w_rid(w_aid, ftime, stime, wts) {
        const N = Live_info.img_key
        const U = Live_info.sub_key
        const R = getPictureHashKey(N + U)
        const Q = `w_aid=${w_aid}&w_ftime=${ftime}&w_part=1&w_stime=${stime}&w_type=3&web_location=1315873&wts=${wts}${R}`
        var w_rid = CryptoJS.MD5(Q).toString()
        return w_rid
    }
    async function get_w_rid(w_aid, w_dt, w_last_play_progress_time, w_mid, w_played_time, w_real_played_time, w_realtime, w_start_ts, w_video_duration, web_location, wts) {
        const N = Live_info.img_key
        const U = Live_info.sub_key
        const R = getPictureHashKey(N + U)
        const Q = `w_aid=${w_aid}&w_dt=${w_dt}&w_last_play_progress_time=${w_last_play_progress_time}&w_mid=${w_mid}&w_played_time=${w_played_time}&w_real_played_time=${w_real_played_time}&w_realtime=${w_realtime}&w_start_ts=${w_start_ts}&w_video_duration=${w_video_duration}&web_location=${web_location}&wts=${wts}${R}`
        var w_rid = CryptoJS.MD5(Q).toString()
        return w_rid
    }
    let get_bv_session = async function (bvid) {//提取视频session
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: `https://www.bilibili.com/video/${bvid}`,
                dataType: "html",
                onload: function (response) {
                    let hh = response.response
                    let num = hh.indexOf(`,"session":"`)
                    let session = hh.substr(num + 12, 32)
                    //console.log('get_bv_session',session)
                    resolve(session)
                }
            })
        })
    }
    let get_img_key_sub_key = async function () {//提取视频session
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://api.bilibili.com/x/web-interface/nav",
                onload: function (response) {
                    let res = JSON.parse(response.response);
                    if (res.code == 0) {
                        let img_url = res.data.wbi_img.img_url
                        let sub_url = res.data.wbi_img.sub_url
                        let img_key = img_url.slice(img_url.lastIndexOf('/') + 1, img_url.lastIndexOf('.'))
                        let sub_key = sub_url.slice(sub_url.lastIndexOf('/') + 1, sub_url.lastIndexOf('.'))
                        Live_info.img_key = img_key
                        Live_info.sub_key = sub_key
                        resolve([img_key, sub_key])
                    } else {
                        resolve([])
                    }
                }
            });
        });
    }
    var csrf_token
    var BilibiliAPI = {
        setCommonArgs: (csrfToken) => {
            csrf_token = csrfToken;
        },
        // 整合常用API
        fansMedal_panel: (page, pageSize = 50) => {//获取全部勋章数据
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/panel",
                method: "GET",
                data: {
                    page: page,
                    page_size: pageSize
                }
            })
        },
        GetEmoticons: () => {//表情包信息
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/web-ucenter/v2/emoticon/GetEmoticons?platform=pc&room_id=25746928",
                method: "GET",
            })
        },
        getConf: (room_id) => {
            return BilibiliAPI.ajax({
                url: `//api.live.bilibili.com/room/v1/Danmu/getConf?room_id=${room_id}&platform=pc&player=web`,
                method: "GET",
            })
        },
        now: () => {
            return BilibiliAPI.ajax({
                url: `//api.bilibili.com/x/report/click/now`,
                method: "GET",
            })
        },
        fans_medal_info: (ruid) => {
            return BilibiliAPI.ajax({
                url: `//api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/fans_medal_info?target_id=${ruid}`,
                method: "GET",
            })
        },
        likeReportV3: (roomid) => {//点赞直播间
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/app-ucenter/v1/like_info_v3/like/likeReportV3",
                method: "POST",
                data: {
                    room_id: roomid,
                    uid: Live_info.uid,
                    ts: ts_s(),
                    anchor_id: Live_info.ruid,
                    csrf_token: csrf_token,
                    csrf: csrf_token,
                    click_time: 50,
                    visit_id: ''
                }
            })
        },
        room: {
            get_info: (room_id, from = 'room') => {
                return BilibiliAPI.ajax({
                    url: 'room/v1/Room/get_info',
                    data: {
                        room_id: room_id,
                        from: from
                    }
                });
            },
            room_entry_action: (room_id, platform = 'pc') => {
                return BilibiliAPI.ajaxWithCommonArgs({
                    method: 'POST',
                    url: 'room/v1/Room/room_entry_action',
                    data: {
                        room_id: room_id,
                        platform: platform
                    }
                });
            },
        },
        live_fans_medal: (page, pageSize) => {//获取全部勋章数据
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals",
                method: "GET",
                data: {
                    page: page,
                    page_size: pageSize
                }
            })
        },
        TrigerInteract: async (roomid) => {//分享直播间
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/web-room/v1/index/TrigerInteract",
                method: "POST",
                data: {
                    roomid: roomid,
                    interact_type: 3,
                    csrf_token: csrf_token,
                    csrf: csrf_token,
                    visit_id: ''
                }
            })
        },
        cost: () => {//花费适用于10w以下
            return BilibiliAPI.ajax({
                url: "//api.live.bilibili.com/xlive/web-ucenter/v1/achievement/list?type=normal&status=0&category=all&keywords=&page=1&pageSize=100",
                method: "GET",
            })
        },
        // ajax调用B站API
        runUntilSucceed: (callback, delay = 0, period = 50) => {
            setTimeout(() => {
                if (!callback())
                    BilibiliAPI.runUntilSucceed(callback, period, period);
            }, delay);
        },
        processing: 0,
        ajax: (settings) => {
            if (settings.xhrFields === undefined)
                settings.xhrFields = {};
            settings.xhrFields.withCredentials = true;
            jQuery.extend(settings, {
                url: (settings.url.substr(0, 2) === '//' ? '' : '//api.live.bilibili.com/') + settings.url,
                method: settings.method || 'GET',
                crossDomain: true,
                dataType: settings.dataType || 'json'
            });
            const p = jQuery.Deferred();
            BilibiliAPI.runUntilSucceed(() => {
                if (BilibiliAPI.processing > 8)
                    return false;
                ++BilibiliAPI.processing;
                return jQuery.ajax(settings).then((arg1, arg2, arg3) => {
                    --BilibiliAPI.processing;
                    p.resolve(arg1, arg2, arg3);
                    return true;
                }, (arg1, arg2, arg3) => {
                    --BilibiliAPI.processing;
                    p.reject(arg1, arg2, arg3);
                    return true;
                });
            });
            return p;
        },
        sendLiveDanmu: (msg, roomid) => {
            return BilibiliAPI.ajax({
                method: 'POST',
                url: 'msg/send',
                data: {
                    color: '4546550',
                    fontsize: '25',
                    mode: '1',
                    msg: msg,
                    rnd: ts_s(),
                    roomid: roomid,
                    bubble: '0',
                    csrf: csrf_token,
                    csrf_token: csrf_token,
                }
            });
        },
        sendLiveDanmu_dm_type: (msg, roomid) => {
            return BilibiliAPI.ajax({
                method: 'POST',
                url: 'msg/send',
                data: {
                    color: '16777215',
                    fontsize: '25',
                    mode: '1',
                    dm_type: '1',
                    msg: msg,
                    rnd: ts_s(),
                    roomid: roomid,
                    bubble: '0',
                    csrf: csrf_token,
                    csrf_token: csrf_token,
                }
            });
        },
        getCookie: (name) => {
            let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null)
                return unescape(arr[2]);
            return false;
        },
        history_cursor: () => {
            return BilibiliAPI.ajax({
                url: "//api.bilibili.com/x/web-interface/history/cursor",
                method: "GET",
            })
        },
        history_aid_delete: (aid) => {
            return BilibiliAPI.ajax({
                url: "//api.bilibili.com/x/v2/history/delete",
                method: "POST",
                data: {
                    kid: "archive_" + aid,
                    jsonp: "jsonp",
                    csrf: csrf_token
                }
            })
        },
        space_history: (host_uid, offset_dynamic_id = 0) => {
            return BilibiliAPI.ajax({
                url: "//api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",
                method: "GET",
                data: {
                    visitor_uid: Live_info.uid,
                    offset_dynamic_id: offset_dynamic_id,
                    host_uid: host_uid,
                    need_top: 1,
                    platform: 'web'
                }
            })
        },
        dyn_like: (dyn_id_str) => {
            return BilibiliAPI.ajax({
                url: `//api.bilibili.com/x/dynamic/feed/dyn/thumb?csrf=${csrf_token}`,
                method: "POST",
                headers: { "content-type": "application/json" },
                data: JSON.stringify({ "dyn_id_str": dyn_id_str, "up": 1 })
            })
        },
        dynamic_like: (dynamic_id) => {
            return BilibiliAPI.ajax({
                url: "//api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb",
                method: "POST",
                data: {
                    uid: Live_info.uid,
                    dynamic_id: dynamic_id,
                    up: 1,
                    csrf_token: csrf_token,
                    csrf: csrf_token,
                }
            })
        },
        likes_video: (value = 1) => {
            return BilibiliAPI.ajax({
                url: "//api.bilibili.com/x/space/privacy/modify",
                method: "POST",
                data: {
                    field: 'likes_video',
                    value: value,
                    csrf: csrf_token
                }
            })
        },
        view_bvid: (bvid) => {
            return BilibiliAPI.ajax({
                url: "//api.bilibili.com/x/web-interface/view",
                method: "GET",
                data: {
                    bvid: bvid,
                }
            })
        },
        h5_old: (aid, cid, bvid) => {
            let stime = ts_s() + s_diff
            let ftime = ts_s()
            BilibiliAPI.ajax({
                method: 'POST',
                url: '//api.bilibili.com/x/click-interface/click/web/h5',
                data: {
                    "mid": Live_info.uid,
                    "aid": aid,
                    "cid": cid,
                    "part": 1,
                    "lv": Live_info.Blever,
                    "ftime": ftime,
                    "stime": stime,
                    "type": 3,
                    "sub_type": 0,
                    "refer_url": "https://t.bilibili.com/?tab=video",
                    "spmid": "333.788.0.0",
                    "from_spmid": "",
                    "csrf": csrf_token,
                }
            })
        },
        h5_new: async (aid, cid, bvid) => {
            let session = await get_bv_session(bvid)
            let stime = ts_s() + s_diff
            let ftime = ts_s()
            let wts = ftime
            let w_rid = await get_h5_w_rid(aid, ftime, stime, wts)
            let param = `w_aid=${aid}&w_part=1&w_ftime=${ftime}&w_stime=${stime}&w_type=3&web_location=1315873&w_rid=${w_rid}&wts=${wts}`
            //w_aid=237471187&w_part=92&w_ftime=1711280156&w_stime=1711280175&w_type=3&web_location=1315873&w_rid=dbbd53d908fa9bbe2662b28f70fb35d5&wts=1711280158
            BilibiliAPI.ajax({
                method: 'POST',
                url: '//api.bilibili.com/x/click-interface/click/web/h5?' + param,
                data: {
                    "mid": Live_info.uid,
                    "aid": aid,
                    "cid": cid,
                    "part": 1,
                    "lv": Live_info.Blever,
                    "ftime": ftime,
                    "stime": stime,
                    "type": 3,
                    "sub_type": 0,
                    "refer_url": "https://t.bilibili.com/?tab=video",
                    "spmid": "333.788.0.0",
                    "from_spmid": "333.999.0.0",
                    "csrf": csrf_token,
                    "outer": 0,
                    "session": session
                }
            })
        },
    }
})();
/**
https://github.com/turuslan/HackTimer 删减
防止处于后台时计时出错
 */
(function (workerScript) {
    let space = window.location.href.indexOf('space.bilibili.com') > -1;
    if (space) return console.log('space.bilibili.com', new Date())
    try {
        var blob = new Blob(["\
var fakeIdToId = {};\
onmessage = function(event){\
var data = event.data,\
name = data.name,\
fakeId = data.fakeId,\
time;\
if(data.hasOwnProperty('time')){\
time = data.time;\
}\
switch (name){\
case 'setTimeout':\
fakeIdToId[fakeId] = setTimeout(function () {\
postMessage({fakeId: fakeId});\
if(fakeIdToId.hasOwnProperty (fakeId)){\
delete fakeIdToId[fakeId];\
}\
}, time);\
break;\
case 'clearTimeout':\
if(fakeIdToId.hasOwnProperty (fakeId)){\
clearTimeout(fakeIdToId[fakeId]);\
delete fakeIdToId[fakeId];\
}\
break;\
}\
}\
"]);
        // Obtain a blob URL reference to our worker 'file'.
        workerScript = window.URL.createObjectURL(blob);
    } catch (error) {
        /* Blob is not supported, use external script instead */
    }
    var worker,
        fakeIdToCallback = {},
        lastFakeId = 0,
        maxFakeId = 0x7FFFFFFF, // 2 ^ 31 - 1, 31 bit, positive values of signed 32 bit integer
        logPrefix = 'HackTimer.js by turuslan: ';
    if (typeof (Worker) !== 'undefined') {
        function getFakeId() {
            do {
                if (lastFakeId == maxFakeId) {
                    lastFakeId = 0;
                } else {
                    lastFakeId++;
                }
            } while (fakeIdToCallback.hasOwnProperty(lastFakeId));
            return lastFakeId;
        }
        try {
            worker = new Worker(workerScript);
            window.setTimeout = function (callback, time /* , parameters */) {
                var fakeId = getFakeId();
                fakeIdToCallback[fakeId] = {
                    callback: callback,
                    parameters: Array.prototype.slice.call(arguments, 2),
                    isTimeout: true
                };
                worker.postMessage({
                    name: 'setTimeout',
                    fakeId: fakeId,
                    time: time
                });
                return fakeId;
            };
            window.clearTimeout = function (fakeId) {
                if (fakeIdToCallback.hasOwnProperty(fakeId)) {
                    delete fakeIdToCallback[fakeId];
                    worker.postMessage({
                        name: 'clearTimeout',
                        fakeId: fakeId
                    });
                }
            };
            worker.onmessage = function (event) {
                var data = event.data,
                    fakeId = data.fakeId,
                    request,
                    parameters,
                    callback;
                if (fakeIdToCallback.hasOwnProperty(fakeId)) {
                    request = fakeIdToCallback[fakeId];
                    callback = request.callback;
                    parameters = request.parameters;
                    if (request.hasOwnProperty('isTimeout') && request.isTimeout) {
                        delete fakeIdToCallback[fakeId];
                    }
                }
                if (typeof (callback) === 'string') {
                    try {
                        callback = new Function(callback);
                    } catch (error) {
                        console.log(logPrefix + 'Error parsing callback code string: ', error);
                    }
                }
                if (typeof (callback) === 'function') {
                    callback.apply(window, parameters);
                }
            };
            worker.onerror = function (event) {
                console.log(event);
            };
            console.log(logPrefix + 'Initialisation succeeded');
        } catch (error) {
            console.log(logPrefix + 'Initialisation failed');
            console.error(error);
        }
    } else {
        console.log(logPrefix + 'Initialisation failed - HTML5 Web Worker is not supported');
    }
})('HackTimerWorker.js');