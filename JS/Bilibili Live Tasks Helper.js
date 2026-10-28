// ==UserScript==
// @name            Bilibili Live Tasks Helper
// @name:en         Bilibili Live Tasks Helper
// @name:zh         Bilibili Live Tasks Helper
// @namespace       https://github.com/andywang425
// @version         7.2.8
// @author          andywang425
// @description     Enhancing the experience of watching Bilibili live streaming.
// @description:en  Enhancing the experience of watching Bilibili live streaming.
// @description:zh  增强Bilibili直播观看体验。
// @license         MIT
// @copyright       2025, andywang425 (https://github.com/andywang425)
// @icon            data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMDY1IiBoZWlnaHQ9IjEyNy43NDciIHZpZXdCb3g9IjAgMCAzNy4zMjQgMzMuOCI+PHBhdGggZmlsbD0iIzIwYjBlMyIgZD0iTTg2Ljk2MiAxMTIuMzMyYTIuNjYxIDIuNjYxIDAgMCAxIDIuMjYyIDAgNS41MzYgNS41MzYgMCAwIDEgMS4zODQgMS4wMTFsNS4zMjMgNC42NThoMy44MDVsNS4zMjMtNC42NThhNS41ODkgNS41ODkgMCAwIDEgMS4zODQtMS4wMTEgMi42NjEgMi42NjEgMCAwIDEgMy41NCAyLjIwOSAyLjY2MSAyLjY2MSAwIDAgMS0uNTg2IDEuNzgzIDE0Ljg3NyAxNC44NzcgMCAwIDEtMS4xNzEgMS4wNjUgNy42OTEgNy42OTEgMCAwIDEtLjc0NS42MTJoMy4zMjZhNS42NDIgNS42NDIgMCAwIDEgMy45MTIgMS43NTYgNS42NjkgNS42NjkgMCAwIDEgMS43ODQgMy45MTJ2MTUuMzAzYTEwLjc3OCAxMC43NzggMCAwIDEtLjEzNCAyLjMxNSA1LjkwOCA1LjkwOCAwIDAgMS0yLjY2IDMuNzI2IDUuNzIyIDUuNzIyIDAgMCAxLTMuMDYxLjg1Mkg4Ni4yMTdhMTEuMjg0IDExLjI4NCAwIDAgMS0yLjM5Ni0uMTMzIDUuODgyIDUuODgyIDAgMCAxLTMuNjcyLTIuNjYyIDUuNjk1IDUuNjk1IDAgMCAxLS45MDUtMy4wNnYtMTUuMTQzYTExLjkyMyAxMS45MjMgMCAwIDEgMC0yLjIwOSA1Ljg1NSA1Ljg1NSAwIDAgMSA1LjMyMy00LjczN2gzLjQ4NmMtLjU1OS0uNC0xLjAzOC0uODc4LTEuNTQ0LTEuMzA0YTIuNjYxIDIuNjYxIDAgMCAxLS44NTEtMi4xODMgMi42NjEgMi42NjEgMCAwIDEgMS4zMDQtMi4xMDJtLS42MTIgMTAuMzI2YTIuNjYxIDIuNjYxIDAgMCAwLTIuMTAzIDEuOTE2IDMuNTkzIDMuNTkzIDAgMCAwIDAgMS4wMTF2MTIuNTg4YTIuNjYxIDIuNjYxIDAgMCAwIDEuODM3IDIuNjYyIDMuNTEzIDMuNTEzIDAgMCAwIDEuMTQ0LjE4NmgyMS42MzdhMi42NjEgMi42NjEgMCAwIDAgMi41MjgtMS41NyAzLjcyNiAzLjcyNiAwIDAgMCAuMjY2LTEuNzU3di0xMS43MWE0LjQ3MSA0LjQ3MSAwIDAgMCAwLTEuMjc3IDIuNjYxIDIuNjYxIDAgMCAwLTEuNzMtMS44MSA0LjI4NSA0LjI4NSAwIDAgMC0xLjY1LS4yMzlIODcuNjAxYTguODg5IDguODg5IDAgMCAwLTEuMjUxIDB6bTAgMCIgc3R5bGU9InN0cm9rZS13aWR0aDouMDMzMDcyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5LjE5MyAtMTEyLjA4KSIvPjxwYXRoIGQ9Ik04OC45NyAxMjguNjM2Yy4zNjMuMzc3Ljc0NS43NDcgMS4wODggMS4xNDIuNTk3LjY4NyAxLjExOCAxLjE5NyAxLjY2NiAxLjgwOS0uMTI5LTEuMTE3IDEuMzA0LTEuMTk4LjA3NC0xLjc1Ny0uNDA4LjQxNy0uOTQxLjg4NC0xLjM2IDEuMjIzLS4zOTIuMzE2LS44NjMuNjctMS4yMzUuOTUyLTEuOTA3IDEuNDQzLjIyNiA0LjA1MyAyLjEzIDIuNjA3IDAgMCAyLTEuNTM1IDIuODA3LTIuMzAxLjQ0LS40MTcuNjgtLjk1Ni43Mi0xLjU5Mi4wNC0uNjU0LS41MzUtMS4yNC0uNzk0LTEuNDk4LS45Mi0uOTE0LTEuNzQzLTEuOTY4LTIuNTUtMi44MTItMS41NzUtMS44LTQuMTIuNDI4LTIuNTQ2IDIuMjI3ek0xMDYuOTc5IDEyOC42MzZjLS4zNjMuMzc3LS43NDUuNzQ3LTEuMDg4IDEuMTQyLS41OTcuNjg3LTEuMTE4IDEuMTk3LTEuNjY2IDEuODA5LjEyOS0xLjExNy0xLjMwNC0xLjE5OC0uMDc0LTEuNzU3LjQwOC40MTcuOTQxLjg4NCAxLjM2IDEuMjIzLjM5Mi4zMTYuODYzLjY3IDEuMjM1Ljk1MiAxLjkwNyAxLjQ0My0uMjI2IDQuMDUzLTIuMTMgMi42MDcgMCAwLTItMS41MzUtMi44MDctMi4zMDEtLjQ0LS40MTctLjY4LS45NTYtLjcyLTEuNTkyLS4wNC0uNjU0LjUzNS0xLjI0Ljc5NC0xLjQ5OC45Mi0uOTE0IDEuNzQzLTEuOTY4IDIuNTUtMi44MTIgMS41NzUtMS44IDQuMTIuNDI4IDIuNTQ2IDIuMjI3eiIgc3R5bGU9ImZpbGw6IzIwYjBlMztmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6LjUyNDE1OTtzdHJva2UtZGFzaGFycmF5Om5vbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OS4xOTMgLTExMi4wOCkiLz48L3N2Zz4NCg==
// @homepageURL     https://github.com/andywang425/BLTH
// @supportURL      https://github.com/andywang425/BLTH/issues
// @downloadURL     https://github.com/andywang425/BLTH/releases/latest/download/bilibili-live-tasks-helper.min.user.js
// @updateURL       https://github.com/andywang425/BLTH/releases/latest/download/bilibili-live-tasks-helper.meta.js
// @match           *://live.bilibili.com/22474988
// @match           *://live.bilibili.com/blanc/22474988
// @require         https://unpkg.com/vue@3.5.44/dist/vue.global.prod.js
// @require         data:application/javascript,%3Bwindow.Vue%3DVue%3Bwindow.VueDemi%3DVue%3B
// @require         https://unpkg.com/element-plus@2.14.0/dist/index.full.min.js
// @require         https://unpkg.com/@element-plus/icons-vue@2.3.2/dist/index.iife.min.js
// @require         https://unpkg.com/pinia@3.0.4/dist/pinia.iife.prod.js
// @require         https://unpkg.com/vue-draggable-plus@0.6.1/dist/vue-draggable-plus.iife.js
// @require         https://unpkg.com/lodash@4.18.1/lodash.min.js
// @require         https://unpkg.com/hotkeys-js@4.0.4/dist/hotkeys-js.min.js
// @require         https://unpkg.com/luxon@3.7.2/build/global/luxon.min.js
// @require         https://unpkg.com/crypto-js@4.2.0/crypto-js.js
// @resource        element-plus/dist/index.css  https://unpkg.com/element-plus@2.14.0/dist/index.css
// @connect         api.bilibili.com
// @connect         api.live.bilibili.com
// @connect         api.vc.bilibili.com
// @connect         passport.bilibili.com
// @connect         live.bilibili.com
// @connect         live-trace.bilibili.com
// @grant           GM_addStyle
// @grant           GM_getResourceText
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @run-at          document-start
// ==/UserScript==

(async function (vue, hotkeys_js, lodash, pinia, crypto_js, luxon, _element_plus_icons_vue, element_plus, vue_draggable_plus) {
  'use strict';
  var __create = Object.create;
  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except) __defProp$1(to, key, {
        get: ((k) => from[k]).bind(null, key),
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$1(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));
  hotkeys_js = __toESM(hotkeys_js);
  lodash = __toESM(lodash);
  crypto_js = __toESM(crypto_js);
  _element_plus_icons_vue = __toESM(_element_plus_icons_vue);
  element_plus = __toESM(element_plus);
  var s = new Set();
  var _css = async (t) => {
    if (s.has(t)) return;
    s.add(t);
    ((c) => {
      if (typeof GM_addStyle === "function") GM_addStyle(c);
      else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
    })(t);
  };
  _css(" #aside-el-menu[data-v-db397d59]:not(.el-menu--collapse){width:150px}.title[data-v-848fd8cc]{align-items:baseline;padding-left:20px;display:flex}.header-big-text[data-v-848fd8cc]{align-self:unset;font-size:var(--big-text-size)}.header-small-text[data-v-848fd8cc]{align-self:unset;font-size:var(--small-text-size);--small-text-size:18px;margin-left:10px}.collapse-btn[data-v-848fd8cc]{float:left;cursor:pointer;justify-content:center;align-items:center;height:100%;display:flex}.avatar-wrap[data-v-59627b65]{width:80px;height:80px}.like-summary[data-v-59627b65]{margin-bottom:8px;line-height:1.7;display:block}.avatar[data-v-59627b65]{border-radius:50%;justify-content:center;align-items:center;display:flex}.label-text[data-v-0ed6e292]{color:var(--el-text-color-primary);line-height:32px}.base[data-v-28de2807]{z-index:1003;background-color:var(--el-bg-color);position:absolute}.header[data-v-28de2807]{box-sizing:border-box;width:100%;height:60px;font-size:var(--big-text-size);--big-text-size:25px;border-bottom:1px solid #e3e5e7;align-items:center;display:flex;position:relative}.aside[data-v-28de2807]{width:auto}.main[data-v-28de2807]{padding:0}.panel-main[data-v-28de2807]{padding:calc(var(--el-main-padding) * .625) var(--el-main-padding)}.fade-enter-active[data-v-28de2807]{animation:.2s linear fade-in}.info-icon[data-v-02b5bf3e]{font-size:var(--el-font-size-base);cursor:pointer}.status-icon[data-v-16fb8116]{font-size:var(--el-font-size-base)}.done[data-v-16fb8116]{color:#1ab059}.done.is-hovered[data-v-16fb8116]{color:#409eff;cursor:pointer}.error[data-v-16fb8116]{color:#ff6464}.icon-fade-enter-active[data-v-16fb8116],.icon-fade-leave-active[data-v-16fb8116]{transition:all .15s}.icon-fade-enter-from[data-v-16fb8116],.icon-fade-leave-to[data-v-16fb8116]{opacity:0;transform:scale(.8)rotate(90deg)}\n/*$vite$:1*/ ");
  var __defProp = Object.defineProperty;
  var __exportAll = (all, no_symbols) => {
    let target = {};
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
    if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
    return target;
  };
  var _GM_addStyle = (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_getResourceText = (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  luxon.Settings.defaultZone = "Asia/Shanghai";
  function isTimestampToday(timestamp, hour = 0, minute = 5) {
    const time = luxon.DateTime.fromMillis(timestamp);
    const startOfADay = luxon.DateTime.now().set({
      hour,
      minute,
      second: 0,
      millisecond: 0
    });
    const startOfTomorrow = startOfADay.plus({ days: 1 });
    const startOfYesterday = startOfADay.minus({ days: 1 });
    if (luxon.DateTime.now() >= startOfADay) return time >= startOfADay && time < startOfTomorrow;
    else return time >= startOfYesterday && time < startOfADay;
  }
  function delayToNextMoment(hour = 0, minute = 5) {
    const now = luxon.DateTime.now();
    let nextTime = luxon.DateTime.local(now.year, now.month, now.day, hour, minute);
    if (now > nextTime) nextTime = nextTime.plus({ days: 1 });
    const diff = nextTime.diff(now);
    return {
      ms: diff.toMillis(),
      str: diff.toFormat("h小时m分钟s秒").replace(/^0小时/, "").replace(/^0分钟/, "")
    };
  }
  function isNowIn(startHour, startMinute, endHour, endMinute) {
    const now = luxon.DateTime.now();
    const start = luxon.DateTime.local(now.year, now.month, now.day, startHour, startMinute);
    let end = luxon.DateTime.local(now.year, now.month, now.day, endHour, endMinute);
    if (start > end) end = end.plus({ days: 1 });
    return now >= start && now < end;
  }
  function ts() {
    return Math.round(luxon.DateTime.now().toSeconds());
  }
  function tsm() {
    return luxon.DateTime.now().toMillis();
  }
  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (char) {
      const randomInt = 16 * Math.random() | 0;
      return ("x" === char ? randomInt : 3 & randomInt | 8).toString(16);
    });
  }
  function random32Hash() {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  function getFilenameFromUrl(url) {
    return url.substring(url.lastIndexOf("/") + 1).split(".")[0];
  }
  function addURLParams(url, params) {
    if (!params) return url;
    if (typeof params === "string") return url + "?" + params;
    else return url + "?" + new URLSearchParams(params).toString();
  }
  var objectToWbiURLQuery = (params, sort = false) => {
    const keys = Object.keys(params);
    if (sort) keys.sort();
    return keys.map((key) => {
      const value = params[key].toString().replace(/[!'()*]/g, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");
  };
  function wbiSign(params) {
    const wts = ts();
    const query = objectToWbiURLQuery({
      ...params,
      wts
    }, true);
    const w_rid = crypto_js.default.MD5(query + useBiliStore().wbiSalt).toString();
    return objectToWbiURLQuery(params) + `&w_rid=${w_rid}&wts=${wts}`;
  }
  function packFormData(json) {
    const formData = new FormData();
    lodash.default.forEach(json, (value, key) => formData.append(key, value.toString()));
    return formData;
  }
  function deepestIterate(obj, fn, path) {
    lodash.default.forOwn(obj, function (value, key) {
      const newPath = path ? path + "." + key : key;
      if (lodash.default.isPlainObject(value) && !lodash.default.isEmpty(value)) deepestIterate(value, fn, newPath);
      else fn(value, newPath);
    });
  }
  function getUrlFromFetchInput(input) {
    if (typeof input === "string") return input;
    else if (input instanceof URL) return input.toString();
    else if (input instanceof Request) return input.url;
    else throw new TypeError("Unsupported fetch input type");
  }
  function createFetchInputWithNewUrl(url, input) {
    if (typeof input === "string") return url;
    else if (input instanceof URL) return new URL(url, input.toString());
    else if (input instanceof Request) return new Request(url, input);
    else throw new TypeError("Unsupported fetch input type");
  }
  function waitForMoment(moment) {
    switch (moment) {
      case "document-start": return Promise.resolve();
      case "document-head": return new Promise((resolve) => {
        if (document.head) resolve();
        else {
          const observer = new MutationObserver(() => {
            if (document.head) {
              observer.disconnect();
              resolve();
            }
          });
          observer.observe(document.documentElement, { childList: true });
        }
      });
      case "document-body": return new Promise((resolve) => {
        if (document.body) resolve();
        else {
          const observer = new MutationObserver(() => {
            if (document.body) {
              observer.disconnect();
              resolve();
            }
          });
          observer.observe(document.documentElement, { childList: true });
        }
      });
      case "document-end": return new Promise((resolve) => {
        if (document.readyState !== "loading") resolve();
        else document.addEventListener("DOMContentLoaded", () => resolve());
      });
      case "window-load": return new Promise((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve());
      });
      default: return Promise.reject("Illegal moment");
    }
  }
  function arrayToMap(arr) {
    return new Map(arr.map((value, index) => [value, index]));
  }
  var useBiliStore = (0, pinia.defineStore)("bili", () => {
    const BilibiliLive = (0, vue.ref)();
    const cookies = (0, vue.ref)();
    const userInfo = (0, vue.ref)();
    const dailyRewardInfo = (0, vue.ref)();
    const dynamicVideos = (0, vue.ref)();
    const fansMedals = (0, vue.ref)();
    return {
      BilibiliLive,
      userInfo,
      cookies,
      dailyRewardInfo,
      dynamicVideos,
      fansMedals,
      filteredFansMedals: (0, vue.computed)(() => fansMedals.value?.filter((m) => m.room_info.room_id !== 0 && m.anchor_info.nick_name != "账号已注销") ?? []),
      fansMedalsStatus: (0, vue.ref)(),
      wbiSalt: (0, vue.computed)(() => {
        if (!userInfo.value) return "";
        const imgAndSubKey = getFilenameFromUrl(userInfo.value.wbi_img.img_url) + getFilenameFromUrl(userInfo.value.wbi_img.sub_url);
        return [
          46,
          47,
          18,
          2,
          53,
          8,
          23,
          32,
          15,
          50,
          10,
          31,
          58,
          3,
          45,
          35,
          27,
          43,
          5,
          49,
          33,
          9,
          42,
          19,
          29,
          28,
          14,
          39,
          12,
          38,
          41,
          13,
          37,
          48,
          7,
          16,
          24,
          55,
          40,
          61,
          26,
          17,
          0,
          1,
          60,
          51,
          30,
          4,
          22,
          25,
          54,
          21,
          56,
          59,
          6,
          63,
          57,
          62,
          11,
          36,
          20,
          34,
          44,
          52
        ].map((n) => imgAndSubKey[n]).join("").slice(0, 32);
      })
    };
  });
  var defaultValues = {
    ui: {
      isCollapse: false,
      isShowPanel: true,
      activeMenuIndex: "MainSiteTasks",
      panelWidthPercent: 45,
      medalInfoPanelSortMode: false
    },
    modules: {
      DailyTasks: {
        MainSiteTasks: {
          login: {
            enabled: false,
            _lastCompleteTime: 0
          },
          watch: {
            enabled: false,
            _lastCompleteTime: 0
          },
          coin: {
            enabled: false,
            num: 1,
            _lastCompleteTime: 0
          },
          share: {
            enabled: false,
            _lastCompleteTime: 0
          }
        },
        LiveTasks: {
          medalTasks: {
            light: {
              enabled: false,
              likeEnabled: true,
              danmuEnabled: true,
              danmuList: [
                "(⌒▽⌒)",
                "（￣▽￣）",
                "(=・ω・=)",
                "(｀・ω・´)",
                "(〜￣△￣)〜",
                "(･∀･)",
                "(°∀°)ﾉ",
                "╮(￣▽￣)╭",
                "_(:3」∠)_",
                "(^・ω・^ )",
                "(●￣(ｴ)￣●)",
                "ε=ε=(ノ≧∇≦)ノ",
                "⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
                "←◡←",
                `(●'◡'●)ﾉ♥`
              ],
              emojiList: [
                "official_331",
                "official_332",
                "official_348",
                "official_343",
                "official_335",
                "official_345",
                "official_339",
                "official_337",
                "official_342",
                "official_346",
                "official_147",
                "official_109",
                "official_113",
                "official_150",
                "official_103",
                "official_128",
                "official_133",
                "official_149",
                "official_124",
                "official_146",
                "official_148",
                "official_102",
                "official_137",
                "official_118",
                "official_108",
                "official_104",
                "official_105",
                "official_106",
                "official_110",
                "official_111",
                "official_115",
                "official_116",
                "official_117",
                "official_119",
                "official_122",
                "official_125",
                "official_126",
                "official_134"
              ],
              _lastCompleteTime: 0,
              _todayLightLikes: 0,
              _lastLikeTime: Date.now()
            },
            watch: {
              enabled: false,
              time: 25,
              _watchingProgress: {},
              _lastWatchTime: 0,
              _lastCompleteTime: 0
            },
            isWhiteList: false,
            roomidList: [],
            roomidList2: []
          }
        },
        OtherTasks: {
          silverToCoin: {
            enabled: false,
            _lastCompleteTime: 0
          },
          coinToSilver: {
            enabled: false,
            num: 1,
            _lastCompleteTime: 0
          },
          getYearVipPrivilege: {
            enabled: false,
            _nextReceiveTime: 0
          }
        }
      },
      EnhanceExperience: {
        switchLiveStreamQuality: {
          enabled: false,
          qualityDesc: "原画"
        },
        banp2p: { enabled: false },
        noReport: { enabled: false },
        noSleep: { enabled: false },
        invisibility: { enabled: false },
        autoRestart: {
          enabled: false,
          intervalMinutes: 60
        }
      },
      RemoveElement: {
        removePKBox: { enabled: false },
        removeLiveWaterMark: { enabled: false },
        removeShopPopover: { enabled: false },
        removeGameParty: { enabled: false },
        removeGiftPopover: { enabled: false },
        removeMicPopover: { enabled: false },
        removeComboCard: { enabled: false },
        removeHeaderStuff: { enabled: false },
        removeFlipView: { enabled: false },
        removeLiveMosaic: { enabled: false }
      }
    },
    cache: {
      lastAliveHeartBeatTime: 0,
      mainScriptLocation: ""
    }
  };
  var Storage = class {
    static mergeConfigs(currentConfig, defaultConfig) {
      const config = lodash.default.pick(currentConfig, lodash.default.keys(defaultConfig));
      lodash.default.defaults(config, defaultConfig);
      lodash.default.forOwn(config, (value, key, object) => {
        if (lodash.default.isPlainObject(value) && lodash.default.isPlainObject(defaultConfig[key]) && !lodash.default.isEmpty(defaultConfig[key])) object[key] = this.mergeConfigs(value, defaultConfig[key]);
      });
      return config;
    }
    static setUiConfig(uiConfig) {
      _GM_setValue("ui", uiConfig);
    }
    static getUiConfig() {
      return this.mergeConfigs(_GM_getValue("ui", {}), defaultValues.ui);
    }
    static setModuleConfig(moduleConfig) {
      _GM_setValue("modules", moduleConfig);
    }
    static getModuleConfig() {
      return this.mergeConfigs(_GM_getValue("modules", {}), defaultValues.modules);
    }
    static setCache(cache) {
      _GM_setValue("cache", cache);
    }
    static getCache() {
      return this.mergeConfigs(_GM_getValue("cache", {}), defaultValues.cache);
    }
  };
  var useCacheStore = (0, pinia.defineStore)("cache", () => {
    const cache = (0, vue.ref)(Storage.getCache());
    const currentScriptType = (0, vue.ref)("Main");
    function startMainBLTHAliveHeartBeat() {
      cache.value.lastAliveHeartBeatTime = Date.now();
      const timer = setInterval(() => cache.value.lastAliveHeartBeatTime = Date.now(), 5e3);
      window.addEventListener("unload", () => {
        clearInterval(timer);
        cache.value.lastAliveHeartBeatTime = 0;
        cache.value.mainScriptLocation = "";
      });
    }
    function checkCurrentScriptType() {
      if (cache.value.lastAliveHeartBeatTime !== 0 && Date.now() - cache.value.lastAliveHeartBeatTime < 8e3) {
        if (cache.value.mainScriptLocation === _unsafeWindow.top.location.pathname) currentScriptType.value = "SubMain";
        else currentScriptType.value = "Other";
      } else {
        currentScriptType.value = "Main";
        cache.value.mainScriptLocation = _unsafeWindow.top.location.pathname;
      }
    }
    (0, vue.watch)(cache, (newCache) => Storage.setCache(newCache), { deep: true });
    return {
      cache,
      currentScriptType,
      startMainBLTHAliveHeartBeat,
      checkCurrentScriptType
    };
  });
  var Request$1 = class {
    url_prefix;
    origin;
    constructor(url_prefix, orgin) {
      this.url_prefix = url_prefix ?? "";
      this.origin = orgin ?? "https://bilibili.com";
    }
    get(url, params, otherDetails) {
      url = addURLParams(this.url_prefix + url, params);
      return new Promise((resolve, reject) => {
        const defaultDetails = {
          method: "GET",
          url,
          responseType: "json",
          headers: {
            Accept: "application/json, text/plain, */*",
            Referer: this.origin,
            Origin: this.origin,
            "Sec-Fetch-Site": "same-site"
          },
          onload: function (response) {
            resolve(response.response);
          },
          onerror: function (err) {
            reject(new Error(JSON.stringify(err)));
          }
        };
        _GM_xmlhttpRequest(lodash.default.defaultsDeep(otherDetails, defaultDetails));
      });
    }
    post(url, data, otherDetails) {
      const headers = {
        Accept: "application/json, text/plain, */*",
        Referer: this.origin,
        Origin: this.origin,
        "Sec-Fetch-Site": "same-site",
        "Content-Type": "application/x-www-form-urlencoded"
      };
      if (lodash.default.isNil(data)) data = "";
      else if (data instanceof FormData) delete headers["Content-Type"];
      else if (typeof data === "string") { } else data = new URLSearchParams(data).toString();
      url = addURLParams(this.url_prefix + url, otherDetails?.params);
      delete otherDetails?.params;
      return new Promise((resolve, reject) => {
        const defaultDetails = {
          method: "POST",
          url,
          data,
          responseType: "json",
          headers,
          onload: function (response) {
            resolve(response.response);
          },
          onerror: function (err) {
            reject(new Error(JSON.stringify(err)));
          }
        };
        _GM_xmlhttpRequest(lodash.default.defaultsDeep(otherDetails, defaultDetails));
      });
    }
  };
  var request = {
    live: new Request$1("https://api.live.bilibili.com", "https://live.bilibili.com"),
    liveTrace: new Request$1("https://live-trace.bilibili.com", "https://live.bilibili.com"),
    passport: new Request$1("https://passport.bilibili.com", "https://passport.bilibili.com/"),
    main: new Request$1("https://api.bilibili.com", "https://www.bilibili.com"),
    raw: new Request$1()
  };
  var getSelfUid = () => {
    const biliStore = useBiliStore();
    return biliStore.BilibiliLive?.UID ?? biliStore.userInfo.mid;
  };
  var BAPI = {
    live: {
      fansMedalPanel: (page, page_size = 10) => {
        return request.live.get("/xlive/app-ucenter/v1/fansMedal/panel", {
          page,
          page_size
        });
      },
      sendMsg: (msg, roomid, room_type = 0, mode = 1, jumpfrom = 0, fontsize = 25, color = 16777215, bubble = 0, reply_mid = 0, reply_attr = 0, replay_dmid = "", reply_type = 0, reply_uname = "", statistics = "{\"appId\":100,\"platform\":5}", data_extend = "{\"trackid\":\"-99998\"}", web_location = "444.8") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.live.post("/msg/send", packFormData({
          bubble,
          msg,
          color,
          mode,
          room_type,
          jumpfrom,
          reply_mid,
          reply_attr,
          replay_dmid,
          statistics,
          reply_type,
          reply_uname,
          data_extend,
          fontsize,
          rnd: ts(),
          roomid,
          csrf: bili_jct,
          csrf_token: bili_jct
        }), { params: wbiSign({ web_location }) });
      },
      sendEmoji: (msg, roomid, mode = 1, fontsize = 25, color = 16777215, bubble = 0, dm_type = 1, web_location = "444.8", emoticonOptions = "[object Object]", data_extend = "{\"trackid\":\"-99998\"}") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.live.post("/msg/send", packFormData({
          bubble,
          msg,
          color,
          mode,
          dm_type,
          emoticonOptions,
          data_extend,
          fontsize,
          rnd: ts(),
          roomid,
          csrf: bili_jct,
          csrf_token: bili_jct
        }), { params: wbiSign({ web_location }) });
      },
      likeReport: (room_id, anchor_id, click_time = 1, web_location = "444.8") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        const uid = getSelfUid();
        return request.live.post("/xlive/app-ucenter/v1/like_info_v3/like/likeReportV3", null, {
          params: wbiSign({
            click_time,
            room_id,
            uid,
            anchor_id,
            web_location,
            csrf: bili_jct
          })
        });
      },
      getInfoByRoom: (room_id, web_location = "444.8") => {
        return request.live.get("/xlive/web-room/v1/index/getInfoByRoom", wbiSign({
          room_id,
          web_location
        }));
      },
      silver2coin: (visit_id = "") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.live.post("/xlive/revenue/v1/wallet/silver2coin", {
          csrf_token: bili_jct,
          csrf: bili_jct,
          visit_id
        });
      },
      coin2silver: (num, platform = "pc", visit_id = "") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.live.post("/xlive/revenue/v1/wallet/coin2silver", {
          num,
          platform,
          csrf_token: bili_jct,
          csrf: bili_jct,
          visit_id
        });
      },
      getActivatedMedalInfo: (target_id, web_location = "0.0") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.live.get("/xlive/app-ucenter/v1/fansMedal/GetActivatedMedalInfo", {
          target_id,
          csrf: bili_jct,
          web_location
        });
      }
    },
    liveTrace: {
      E: (id, device, ruid, is_patch = 0, heart_beat = [], web_location = "444.8") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.liveTrace.post("/xlive/data-interface/v1/x25Kn/E", null, {
          params: wbiSign({
            id: JSON.stringify(id),
            device: JSON.stringify(device),
            ruid,
            ts: tsm(),
            is_patch,
            heart_beat: JSON.stringify(heart_beat),
            ua: navigator.userAgent,
            web_location,
            csrf: bili_jct
          })
        });
      },
      X: (s, id, device, ruid, ets, benchmark, time, ts, trackid = "-99998", web_location = "444.8") => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.liveTrace.post("/xlive/data-interface/v1/x25Kn/X", null, {
          params: wbiSign({
            s,
            id: JSON.stringify(id),
            device: JSON.stringify(device),
            ruid,
            ets,
            benchmark,
            time,
            ts,
            ua: navigator.userAgent,
            trackid,
            web_location,
            csrf: bili_jct
          })
        });
      }
    },
    main: {
      nav: () => {
        return request.main.get("/x/web-interface/nav");
      },
      reward: (web_location = "333.33") => {
        return request.main.get("/x/member/web/exp/reward", { web_location });
      },
      dynamicAll: (type = "video", page = 1, timezone_offset = -480, platform = "web", features = "itemOpusStyle,listOnlyfans,opusBigCover,onlyfansVote,decorationCard,onlyfansAssetsV2,forwardListHidden,ugcDelete,onlyfansQaCard,commentsNewVersion,avatarAutoTheme,sunflowerStyle,cardsEnhance,eva3CardOpus,eva3CardVideo,eva3CardComment,eva3CardVote,eva3CardUser", web_location = "333.1365", x_bili_device_req_json = "{\"platform\":\"web\",\"device\":\"pc\",\"spmid\":\"333.1365\"}") => {
        return request.main.get("/x/polymer/web-dynamic/v1/feed/all", {
          timezone_offset,
          type,
          platform,
          page,
          features,
          web_location,
          x_bili_device_req_json
        }, {
          headers: {
            Origin: "https://t.bilibili.com",
            Referer: "https://t.bilibili.com/?tab=video"
          }
        });
      },
      videoHeartbeat: (aid, cid = 3e10, type = 3, sub_type = 0, dt = 2, play_type = 1, realtime = 61, played_time = 62, real_played_time = 62, refer_url = "https://t.bilibili.com/?tab=video", quality = 64, is_auto_qn = 0, video_duration = 180, last_play_progress_time = 62, max_play_progress_time = 62, outer = 0, statistics = "{\"appId\":100,\"platform\":5,\"abtest\":\"\",\"version\":\"\"}", mobi_app = "web", device = "web", platform = "web", cur_language_vt = "{}", perfer_type = "{}", play_mode = 1, spmid = "333.788.0.0", from_spmid = "333.1365.list.card_archive.click", session = random32Hash(), track_id = "", extra = `{"player_version":"4.9.76","video_dye_id":"${random32Hash()}","video_file_name":"${lodash.default.random(3e10, 4e10)}-1-${lodash.default.random(3e4, 4e4)}.m4s","play_method":1,"play_volume":1,"auto_play":0}`, web_location = 1315873) => {
        const biliStore = useBiliStore();
        const start_ts = ts();
        const mid = biliStore.userInfo.mid;
        const bili_jct = biliStore.cookies.bili_jct;
        return request.main.post("/x/click-interface/web/heartbeat", {
          start_ts,
          mid,
          aid,
          cid,
          type,
          sub_type,
          dt,
          play_type,
          realtime,
          played_time,
          real_played_time,
          refer_url,
          quality,
          is_auto_qn,
          video_duration,
          last_play_progress_time,
          max_play_progress_time,
          outer,
          statistics,
          mobi_app,
          device,
          platform,
          cur_language_vt,
          perfer_type,
          play_mode,
          spmid,
          from_spmid,
          session,
          track_id,
          extra,
          csrf: bili_jct
        }, {
          params: wbiSign({
            w_start_ts: start_ts,
            w_mid: mid,
            w_aid: aid,
            w_dt: dt,
            w_realtime: realtime,
            w_played_time: played_time,
            w_real_played_time: real_played_time,
            w_video_duration: video_duration,
            w_last_play_progress_time: last_play_progress_time,
            web_location
          })
        });
      },
      share: (aid, source = "pc_client_normal", eab_x = 2, ramval = 0, ga = 1) => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.main.post("/x/web-interface/share/add", {
          aid,
          eab_x,
          ramval,
          source,
          ga,
          csrf: bili_jct
        });
      },
      coinAdd: (aid, num, select_like = 0, cross_domain = true, from_spmid = "333.1365.list.card_archive.click", spmid = "333.788.0.0", statistics = "{\"appId\":100,\"platform\":5}", eab_x = 1, ramval = 6, source = "web_normal", ga = 1) => {
        const bili_jct = useBiliStore().cookies.bili_jct;
        return request.main.post("/x/web-interface/coin/add ", {
          aid,
          multiply: num,
          select_like,
          cross_domain,
          from_spmid,
          spmid,
          statistics,
          eab_x,
          ramval,
          source,
          ga,
          csrf: bili_jct
        });
      },
      videoRelation: (aid, bvid = "") => {
        return request.main.get("/x/web-interface/archive/relation", {
          aid,
          bvid
        });
      },
      vip: {
        myPrivilege: (web_location = "333.33") => {
          return request.main.get("/x/vip/privilege/my", { web_location }, {
            headers: {
              Referer: "https://account.bilibili.com/",
              Origin: "https://account.bilibili.com"
            }
          });
        },
        receivePrivilege: (type, platform = "web") => {
          const bili_jct = useBiliStore().cookies.bili_jct;
          return request.main.post("/x/vip/privilege/receive", {
            type,
            platform,
            csrf: bili_jct
          }, {
            headers: {
              Referer: "https://account.bilibili.com/",
              Origin: "https://account.bilibili.com"
            }
          });
        },
        addExperience: () => {
          const biliStore = useBiliStore();
          const mid = getSelfUid();
          const buvid = biliStore.cookies.buvid3;
          const bili_jct = biliStore.cookies.bili_jct;
          return request.main.post("/x/vip/experience/add", {
            mid,
            buvid,
            csrf: bili_jct
          }, {
            headers: {
              Referer: "https://account.bilibili.com/",
              Origin: "https://account.bilibili.com"
            }
          });
        }
      }
    }
  };
  var Logger = class {
    NAME = "BLTH";
    prefix_title_str;
    title;
    get prefix() {
      return [
        `%c${this.NAME}%c[${new Date().toLocaleString()}]%c[${this.prefix_title_str}]%c:`,
        "font-weight: bold; color: white; background-color: #23ade5; padding: 1px 4px; border-radius: 4px;",
        "font-weight: bold; color: #0920e6;",
        "font-weight: bold;",
        ""
      ];
    }
    debug(...data) {
      console.debug(...this.prefix, ...data);
    }
    log(...data) {
      console.log(...this.prefix, ...data);
    }
    error(...data) {
      console.error(...this.prefix, ...data);
    }
    warn(...data) {
      console.warn(...this.prefix, ...data);
    }
    constructor(title) {
      this.title = title;
      this.prefix_title_str = title.split("_").join("][");
    }
  };
  var BaseModule = class {
    moduleName;
    static runOnMultiplePages = false;
    static runAt = "document-body";
    static onFrame = "target";
    static runAfterDefault = true;
    logger;
    config;
    isEnabled() {
      return this.config?.enabled ?? true;
    }
    set status(_s) {
      throw new Error("Method not implemented.");
    }
    nextRunTimer;
    run(..._args) {
      throw new Error("Method not implemented.");
    }
    constructor(moduleName) {
      this.moduleName = moduleName;
      this.logger = new Logger(this.moduleName);
    }
  };
  var ModuleError = class extends Error {
    name = "ModuleError";
    moduleName;
    constructor(moduleName, message) {
      super(message);
      this.moduleName = moduleName;
    }
  };
  var ModuleCriticalError = class extends ModuleError {
    name = "ModuleCriticalError";
    moduleName;
    constructor(moduleName, message) {
      super(moduleName, message);
      this.moduleName = moduleName;
    }
  };
  var UserInfo = class extends BaseModule {
    async getUserInfo() {
      try {
        const response = await BAPI.main.nav();
        this.logger.log("BAPI.main.nav response", response);
        if (response.code === 0) return response.data;
        else throw new Error(`响应 code 不为 0: ${response.message}`);
      } catch (error) {
        throw new ModuleCriticalError(this.moduleName, `获取用户信息出错: ${error.message}`);
      }
    }
    async run() {
      const biliStore = useBiliStore();
      biliStore.userInfo = await this.getUserInfo();
      this.nextRunTimer = setTimeout(() => this.run().catch((reason) => this.logger.error(reason)), delayToNextMoment(0, 4).ms);
    }
  };
  var DailyRewardInfo = class extends BaseModule {
    async getDailyRewardInfo() {
      try {
        const response = await BAPI.main.reward();
        this.logger.log("BAPI.main.reward response", response);
        if (response.code === 0) return response.data;
        else throw new Error(`响应 code 不为 0: ${response.message}`);
      } catch (error) {
        throw new ModuleError(this.moduleName, `获取主站每日任务完成情况出错: ${error.message}`);
      }
    }
    async run(force = false) {
      const biliStore = useBiliStore();
      const mainSiteTasks = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks;
      if (force || Object.values(mainSiteTasks).some((t) => t.enabled && !isTimestampToday(t._lastCompleteTime, 0, 4))) biliStore.dailyRewardInfo = await this.getDailyRewardInfo();
      this.nextRunTimer = setTimeout(() => this.run().catch((reason) => this.logger.error(reason)), delayToNextMoment(0, 4).ms);
    }
  };
  var DynamicVideos = class extends BaseModule {
    async getDynamicVideos() {
      try {
        const response = await BAPI.main.dynamicAll("video");
        this.logger.log("BAPI.main.dynamicAll response", response);
        if (response.code === 0) return response.data.items;
        else throw new Error(`响应 code 不为 0: ${response.message}`);
      } catch (error) {
        throw new ModuleError(this.moduleName, `获取主站每日任务完成情况出错: ${error.message}`);
      }
    }
    async run(force = false) {
      const biliStore = useBiliStore();
      const mainSiteTasks = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks;
      const taskValues = [
        mainSiteTasks.watch,
        mainSiteTasks.share,
        mainSiteTasks.coin
      ];
      if (force || taskValues.some((t) => t.enabled && !isTimestampToday(t._lastCompleteTime, 0, 4))) biliStore.dynamicVideos = await this.getDynamicVideos();
      this.nextRunTimer = setTimeout(() => this.run().catch((reason) => this.logger.error(reason)), delayToNextMoment(0, 4).ms);
    }
  };
  var FansMedals = class extends BaseModule {
    async getFansMedals(pages = Infinity) {
      const fansMedalList = [];
      let total_page = 1;
      try {
        const firstPageResponse = await BAPI.live.fansMedalPanel(1);
        this.logger.log("BAPI.live.fansMedalPanel(1) response", firstPageResponse);
        if (firstPageResponse.code === 0) {
          total_page = firstPageResponse.data.page_info.total_page;
          fansMedalList.push(...firstPageResponse.data.special_list, ...firstPageResponse.data.list);
        } else throw new Error(`获取粉丝勋章列表第1页失败: ${firstPageResponse.message}`);
        for (let page = 2; page <= Math.min(total_page, pages); page++) {
          const response = await BAPI.live.fansMedalPanel(page);
          this.logger.log(`BAPI.live.fansMedalPanel(${page}) response`, response);
          if (firstPageResponse.code === 0) fansMedalList.push(...response.data.list);
          else {
            this.logger.error(`获取粉丝勋章列表第${page}页失败，提前结束获取`, firstPageResponse.message);
            return fansMedalList;
          }
          await sleep(lodash.default.random(300, 500));
        }
        return fansMedalList;
      } catch (error) {
        useBiliStore().fansMedalsStatus = "error";
        throw new ModuleError(this.moduleName, `获取粉丝勋章列表出错: ${error.message}`);
      }
    }
    async run(force = false) {
      const biliStore = useBiliStore();
      const medalTasks = useModuleStore().moduleConfig.DailyTasks.LiveTasks.medalTasks;
      const taskValues = [medalTasks.light, medalTasks.watch];
      if ((force || taskValues.some((t) => t.enabled && !isTimestampToday(t._lastCompleteTime, 0, 4))) && biliStore.fansMedalsStatus !== "loading") {
        biliStore.fansMedalsStatus = "loading";
        biliStore.fansMedals = await this.getFansMedals();
        biliStore.fansMedalsStatus = "loaded";
      }
      this.nextRunTimer = setTimeout(() => this.run().catch((reason) => this.logger.error(reason)), delayToNextMoment(0, 4).ms);
    }
  };
  var Cookie = class {
    static async getAll() {
      const cookies = await cookieStore.getAll();
      const result = {};
      for (const cookie of cookies) if (cookie.name) result[cookie.name] = cookie.value ?? "";
      return result;
    }
    static async get(names, defaultValue) {
      if (Array.isArray(names)) {
        const result = {};
        const cookies = await Promise.all(names.map((name) => cookieStore.get(name)));
        for (let i = 0; i < names.length; i++) result[names[i]] = cookies[i]?.value ?? defaultValue;
        return result;
      } else return (await cookieStore.get(names))?.value ?? defaultValue;
    }
    static getAsync(names, timeout) {
      return new Promise((resolve, reject) => {
        const cookies = {};
        const nameSet = new Set(names);
        let timeoutTimer;
        const cleanup = () => {
          if (timeoutTimer !== void 0) clearTimeout(timeoutTimer);
          cookieStore.removeEventListener("change", onChange);
        };
        const checkDone = () => {
          if (names.every((n) => n in cookies)) {
            cleanup();
            resolve(cookies);
            return true;
          }
          return false;
        };
        const onChange = (event) => {
          for (const c of event.changed) if (c.name && c.value && nameSet.has(c.name) && !(c.name in cookies)) cookies[c.name] = c.value;
          checkDone();
        };
        cookieStore.addEventListener("change", onChange);
        Promise.all(names.map((name) => cookieStore.get(name))).then((initialCookies) => {
          for (let i = 0; i < names.length; i++) {
            const c = initialCookies[i];
            if (c && c.value && !(names[i] in cookies)) cookies[names[i]] = c.value;
          }
          if (checkDone()) return;
          if (timeout) timeoutTimer = setTimeout(() => {
            const remain = names.filter((n) => !(n in cookies));
            cleanup();
            reject(new Error(`获取以下 cookie 超时：${remain}`));
          }, timeout);
        });
      });
    }
  };
  var Cookies = class extends BaseModule {
    getCookies() {
      return Cookie.getAsync([
        "bili_jct",
        "LIVE_BUVID",
        "buvid3"
      ], 12e3);
    }
    async run() {
      try {
        useBiliStore().cookies = await this.getCookies();
      } catch (error) {
        throw new ModuleCriticalError(this.moduleName, error.message);
      }
    }
  };
  var BilibiliLive = class extends BaseModule {
    static runOnMultiplePages = true;
    getBilibiliLive() {
      this.logger.log("unsafeWindow.BilibiliLive", _unsafeWindow.BilibiliLive);
      return new Promise((resolve, reject) => {
        if (_unsafeWindow.BilibiliLive.UID !== 0) {
          resolve(_unsafeWindow.BilibiliLive);
          return;
        }
        _unsafeWindow.BilibiliLive = new Proxy(_unsafeWindow.BilibiliLive, {
          set(target, prop, value) {
            target[prop] = value;
            if (prop === "UID") {
              _unsafeWindow.BilibiliLive = target;
              resolve(_unsafeWindow.BilibiliLive);
            }
            return true;
          }
        });
        setTimeout(() => reject(new Error("获取 BilibiliLive 超时")), 6e4);
      });
    }
    async run() {
      try {
        useBiliStore().BilibiliLive = await this.getBilibiliLive();
      } catch (error) {
        throw new ModuleCriticalError(this.moduleName, error.message);
      }
    }
  };
  var Default_AutoRestart = class extends BaseModule {
    static runOnMultiplePages = false;
    static runAt = "document-body";
    static onFrame = "target";
    static runAfterDefault = false;
    set status(_s) { }
    async run() {
      if (!this.isEnabled() || !this.config) return Promise.resolve();
      const { intervalMinutes } = this.config;
      if (typeof intervalMinutes !== "number" || intervalMinutes <= 0) return Promise.resolve();
      const delay = intervalMinutes * 60 * 1e3;
      _unsafeWindow.setTimeout(() => {
        _unsafeWindow.location.reload();
      }, delay);
      return Promise.resolve();
    }
    constructor() {
      super("Default_AutoRestart");
      this.config = useModuleStore().moduleConfig.EnhanceExperience.autoRestart;
    }
  };
  var default_exports = __exportAll({
    Default_AutoRestart: () => Default_AutoRestart,
    Default_BilibiliLive: () => BilibiliLive,
    Default_Cookies: () => Cookies,
    Default_DailyRewardInfo: () => DailyRewardInfo,
    Default_DynamicVideos: () => DynamicVideos,
    Default_FansMedals: () => FansMedals,
    Default_UserInfo: () => UserInfo
  });
  var LoginTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks.login;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.MainSiteTasks.login = s;
    }
    async login() {
      this.logger.log("每日登录任务已完成");
      this.config._lastCompleteTime = tsm();
      this.status = "done";
      return Promise.resolve();
    }
    async run() {
      this.logger.log("每日登录模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        const biliStore = useBiliStore();
        if (!biliStore.dailyRewardInfo) {
          this.logger.error("主站每日任务完成情况不存在，不执行每日登录任务");
          this.status = "error";
          return;
        }
        this.status = "running";
        if (!biliStore.dailyRewardInfo.login) await this.login();
        else {
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        }
      } else if (isNowIn(0, 0, 0, 5)) this.logger.log("昨天的每日登录任务已经完成过了，等到今天的00:05再执行");
      else {
        this.logger.log("今天已经完成过每日登录任务了");
        this.status = "done";
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离每日登录模块下次运行时间:", diff.str);
    }
  };
  var WatchTask$1 = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks.watch;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.MainSiteTasks.watch = s;
    }
    getAid() {
      return Number(useBiliStore().dynamicVideos[0].modules.module_dynamic.major.archive.aid);
    }
    async watch(aid) {
      try {
        const response = await BAPI.main.videoHeartbeat(aid, lodash.default.random(3e10, 4e10));
        this.logger.log(`BAPI.main.videoHeartbeat(${aid}) response`, response);
        if (response.code === 0) {
          this.logger.log("每日观看视频任务已完成");
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        } else {
          this.logger.error("发送观看视频心跳失败", response.message);
          this.status = "error";
        }
      } catch (err) {
        this.logger.error("执行每日观看视频任务出错", err);
        this.status = "error";
      }
    }
    runCheck() {
      const biliStore = useBiliStore();
      if (!biliStore.dailyRewardInfo) {
        this.logger.error("主站每日任务完成情况不存在，不执行每日观看视频任务");
        this.status = "error";
        return false;
      }
      if (!biliStore.dynamicVideos) {
        this.logger.error("动态视频数据不存在，不执行每日观看视频任务");
        this.status = "error";
        return false;
      }
      return true;
    }
    async run() {
      this.logger.log("每日观看视频模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        if (!this.runCheck()) return;
        const biliStore = useBiliStore();
        this.status = "running";
        if (!biliStore.dailyRewardInfo.watch) {
          const aid = this.getAid();
          await this.watch(aid);
        } else {
          this.config._lastCompleteTime = tsm();
          this.status = "done";
          this.logger.log("每日观看视频任务已完成");
        }
      } else if (isNowIn(0, 0, 0, 5)) this.logger.log("昨天的每日观看视频任务已经完成过了，等到今天的00:05再执行");
      else {
        this.logger.log("今天已经完成过每日观看视频任务了");
        this.status = "done";
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离每日观看视频模块下次运行时间:", diff.str);
    }
  };
  var ShareTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks.share;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.MainSiteTasks.share = s;
    }
    getAid() {
      return useBiliStore().dynamicVideos[0].modules.module_dynamic.major.archive.aid;
    }
    async share(aid) {
      try {
        const response = await BAPI.main.share(aid);
        this.logger.log(`BAPI.main.share(${aid}) response`, response);
        if (response.code === 0 || response.code === 71e3) {
          this.logger.log("每日分享视频任务已完成");
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        } else {
          this.logger.error("分享视频失败", response.message);
          this.status = "error";
        }
      } catch (err) {
        this.logger.error("执行每日分享视频任务出错", err);
        this.status = "error";
      }
    }
    runCheck() {
      const biliStore = useBiliStore();
      if (!biliStore.dailyRewardInfo) {
        this.logger.error("主站每日任务完成情况不存在，不执行每日分享视频任务");
        this.status = "error";
        return false;
      }
      if (!biliStore.dynamicVideos) {
        this.logger.error("动态视频数据不存在，不执行每日分享视频任务");
        this.status = "error";
        return false;
      }
      return true;
    }
    async run() {
      this.logger.log("每日分享视频模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        if (!this.runCheck()) return;
        const biliStore = useBiliStore();
        this.status = "running";
        if (!biliStore.dailyRewardInfo.share) {
          const aid = this.getAid();
          await this.share(aid);
        } else {
          this.config._lastCompleteTime = tsm();
          this.status = "done";
          this.logger.log("每日分享视频任务已完成");
        }
      } else if (isNowIn(0, 0, 0, 5)) this.logger.log("昨天的每日分享任务已经完成过了，等到今天的00:05再执行");
      else {
        this.logger.log("今天已经完成过每日分享任务了");
        this.status = "done";
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离每日分享视频模块下次运行时间:", diff.str);
    }
  };
  var CoinTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks.coin;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.MainSiteTasks.coin = s;
    }
    MAX_COIN = 1;
    getDynamicVideoIds() {
      return useBiliStore().dynamicVideos.map((item) => {
        const archive = item.modules.module_dynamic.major.archive;
        return {
          aid: archive.aid,
          bvid: archive.bvid
        };
      });
    }
    async getVideoCoinInfo(aid, bvid) {
      try {
        const response = await BAPI.main.videoRelation(aid, bvid);
        this.logger.log(`BAPI.main.videoRelation(${aid}, ${bvid}) response`, response);
        if (response.code === 0) return response.data.coin;
        else {
          this.logger.error(`获取视频投币信息失败 aid = ${aid} bvid = ${bvid}`, response.message);
          return 0;
        }
      } catch (error) {
        this.logger.error(`获取视频投币信息出错 aid = ${aid} bvid = ${bvid}`, error);
        return 0;
      }
    }
    async coinDynamicVideos(left_coin_num) {
      const ids = this.getDynamicVideoIds();
      for (const { aid, bvid } of ids) {
        const coined_num = await this.getVideoCoinInfo(aid, bvid);
        const allowed_coin_num = this.MAX_COIN - coined_num;
        if (allowed_coin_num > 0) {
          const coin_num = Math.min(allowed_coin_num, left_coin_num);
          const result = await this.coin(aid, coin_num);
          if (result === 0) {
            left_coin_num -= coin_num;
            if (left_coin_num === 0) {
              this.logger.log("每日投币任务已完成");
              this.config._lastCompleteTime = tsm();
              this.status = "done";
              break;
            }
          } else if (result === 1) {
            this.logger.warn("硬币余额不足，每日投币任务终止");
            this.status = "error";
            break;
          }
        }
      }
      if (left_coin_num > 0) {
        this.logger.warn("硬币余额不足，每日投币任务终止");
        this.status = "error";
      }
    }
    async coin(aid, num) {
      try {
        const response = await BAPI.main.coinAdd(aid, num);
        this.logger.log(`BAPI.main.coinAdd(${aid}) response`, response);
        if (response.code === 0) {
          this.logger.log(`投币成功 视频aid = ${aid} 投币数量num = ${num}`);
          return 0;
        } else if (response.code === -104) {
          this.logger.warn("硬币余额不足，每日投币任务终止");
          return 1;
        } else {
          this.logger.error(`投币失败 视频aid = ${aid} 投币数量num = ${num}`, response.message);
          return 2;
        }
      } catch (err) {
        this.logger.error(`投币出错 视频aid = ${aid} 投币数量num = ${num}`, err);
        return 3;
      }
    }
    runCheck() {
      const biliStore = useBiliStore();
      if (!biliStore.dailyRewardInfo) {
        this.logger.error("主站每日任务完成情况不存在，不执行每日投币任务");
        this.status = "error";
        return false;
      }
      if (!biliStore.dynamicVideos) {
        this.logger.error("动态视频数据不存在，不执行每日投币任务");
        this.status = "error";
        return false;
      }
      return true;
    }
    async run() {
      this.logger.log("每日投币模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        if (!this.runCheck()) return;
        const biliStore = useBiliStore();
        this.status = "running";
        const total_coined_num = biliStore.dailyRewardInfo.coins / 10;
        if (total_coined_num < this.config.num) {
          const left_coin_num = this.config.num - total_coined_num;
          if (left_coin_num > (biliStore.userInfo.money ?? 5)) {
            this.logger.log("硬币余额不足，不执行每日投币任务");
            this.status = "done";
          } else await this.coinDynamicVideos(left_coin_num);
        } else {
          this.config._lastCompleteTime = tsm();
          this.status = "done";
          this.logger.log("每日投币任务已完成");
        }
      } else if (isNowIn(0, 0, 0, 5)) this.logger.log("昨天的每日投币任务已经完成过了，等到今天的00:05再执行");
      else {
        this.logger.log("今天已经完成过每日投币任务了");
        this.status = "done";
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离每日投币模块下次运行时间:", diff.str);
    }
  };
  var MedalModule = class MedalModule extends BaseModule {
    static get ROOM_STATUS_PROBE_DYNAMIC_DELAY() {
      return lodash.default.random(600, 800);
    }
    static get TASK_INFO_REQUEST_DYNAMIC_DELAY() {
      return lodash.default.random(300, 500);
    }
    static requestQueues = {
      taskInfo: Promise.resolve(),
      roomStatus: Promise.resolve()
    };
    static LIVE_STATUS_SNAPSHOT_FRESHNESS_THRESHOLD = 6e4;
    static liveStatusSnapshots = new Map();
    medalTasksConfig = useModuleStore().moduleConfig.DailyTasks.LiveTasks.medalTasks;
    PUBLIC_MEDAL_FILTERS = {
      whiteBlackList: (m) => this.medalTasksConfig.isWhiteList ? this.medalTasksConfig.roomidList.includes(m.room_info.room_id) : !this.medalTasksConfig.roomidList.includes(m.room_info.room_id),
      levelLt120: (medal) => medal.medal.level < 120
    };
    sortMedals(medals) {
      const orderMap = arrayToMap(this.medalTasksConfig.roomidList);
      return medals.sort((a, b) => orderMap.get(a.room_info.room_id) - orderMap.get(b.room_info.room_id));
    }
    waitForFansMedals() {
      return new Promise((resolve) => {
        const { fansMedalsStatus } = (0, pinia.storeToRefs)(useBiliStore());
        if (fansMedalsStatus.value === "loaded") {
          resolve(true);
          return;
        }
        if (fansMedalsStatus.value === "error") {
          resolve(false);
          return;
        }
        const unwatch = (0, vue.watch)(fansMedalsStatus, (status) => {
          if (status === "loaded") {
            unwatch();
            resolve(true);
          } else if (status === "error") {
            unwatch();
            resolve(false);
          }
        });
        if (fansMedalsStatus.value === void 0) try {
          Promise.resolve(useModuleStore().rerunModule("Default_FansMedals", true)).catch(() => { });
        } catch {
          unwatch();
          resolve(false);
        }
      });
    }
    sort_live_medals = (a, b) => {
      const roomid2 = this.medalTasksConfig.roomidList2;
      if (roomid2.includes(a.room_info.room_id) && roomid2.includes(b.room_info.room_id)) return roomid2.indexOf(a.room_info.room_id) - roomid2.indexOf(b.room_info.room_id);
      else if (roomid2.includes(a.room_info.room_id)) return -1;
      else if (roomid2.includes(b.room_info.room_id)) return 1;
      let flag = 0;
      if (a.medal.level === b.medal.level) flag = b.medal.intimacy - a.medal.intimacy;
      else flag = b.medal.level - a.medal.level;
      if (Math.min(a.medal.level, b.medal.level) <= 15) return -flag;
      return flag;
    };
    async fetchMedalPageForLiveStatus(page, roomid) {
      try {
        const response = await BAPI.live.fansMedalPanel(page);
        console.log(`BAPI.live.fansMedalPanel(${page}) response`, response);
        let status = null;
        if (response.code === 0) {
          const medals = [...response.data.special_list, ...response.data.list];
          const observedAt = tsm();
          for (const medal of medals) {
            const medalRoomid = medal.room_info.room_id;
            const medalLiveStatus = medal.room_info.living_status;
            MedalModule.liveStatusSnapshots.set(medalRoomid, {
              liveStatus: medalLiveStatus,
              observedAt
            });
            if (medalRoomid === roomid) status = medalLiveStatus;
          }
          const currentPage = response.data.page_info.current_page;
          const totalPage = response.data.page_info.total_page;
          const hasUnlightedMedal = medals.some((m) => !m.medal.is_lighted);
          return {
            status,
            canTryNextPage: currentPage < totalPage && !hasUnlightedMedal
          };
        }
        console.warn(`BAPI.live.fansMedalPanel(${page}) 失败`, response.message);
      } catch (error) {
        console.warn(`BAPI.live.fansMedalPanel(${page}) 出错`, error);
      }
      return {
        status: null,
        canTryNextPage: false
      };
    }
    ROOM_LIVE_STATUS_FETCHERS = [async (roomid) => {
      const roomids = useBiliStore().filteredFansMedals;
      let index = -1;
      for (const r of roomids) {
        index++;
        if (r.room_info.room_id === roomid) break;
      }
      const page = Math.floor(index / 10) + 1;
      const { status, canTryNextPage } = await this.fetchMedalPageForLiveStatus(page, roomid);
      if (status !== null) return status;
      if (canTryNextPage) {
        await sleep(lodash.default.random(300, 500));
        const { status } = await this.fetchMedalPageForLiveStatus(page + 1, roomid);
        return status;
      }
      return null;
    }, async (roomid) => {
      try {
        const response = await BAPI.live.getInfoByRoom(roomid);
        console.debug(`BAPI.live.getInfoByRoom(${roomid}) response`, response);
        if (response.code === 0) {
          const liveStatus = response.data.room_info.live_status;
          MedalModule.liveStatusSnapshots.set(roomid, {
            liveStatus,
            observedAt: tsm()
          });
          return liveStatus;
        }
        console.warn(`BAPI.live.getInfoByRoom(${roomid}) 失败`, response.message);
      } catch (error) {
        console.warn(`BAPI.live.getInfoByRoom(${roomid}) 出错`, error);
      }
      return null;
    }];
    static enqueueRequest(queueKey, getDelay, requester) {
      const task = MedalModule.requestQueues[queueKey].catch(() => { }).then(() => requester());
      MedalModule.requestQueues[queueKey] = task.catch(() => { }).then(() => getDelay());
      return task;
    }
    static enqueueRoomStatusProbe(requester) {
      return MedalModule.enqueueRequest("roomStatus", () => sleep(MedalModule.ROOM_STATUS_PROBE_DYNAMIC_DELAY), requester);
    }
    async fetchRoomLiveStatus(roomid, preferMedalAPI = false) {
      const fetchers = preferMedalAPI ? [this.ROOM_LIVE_STATUS_FETCHERS[0], ...lodash.default.shuffle(this.ROOM_LIVE_STATUS_FETCHERS.slice(1))] : lodash.default.shuffle(this.ROOM_LIVE_STATUS_FETCHERS);
      for (let i = 0; i < fetchers.length; i++) {
        const liveStatus = await fetchers[i](roomid);
        if (liveStatus !== null) return liveStatus;
        if (i < fetchers.length - 1) await sleep(MedalModule.ROOM_STATUS_PROBE_DYNAMIC_DELAY);
      }
      return null;
    }
    async resolveLiveStatus(roomid, preferMedalAPI = false) {
      const snapshot = MedalModule.liveStatusSnapshots.get(roomid);
      if (snapshot && tsm() - snapshot.observedAt < MedalModule.LIVE_STATUS_SNAPSHOT_FRESHNESS_THRESHOLD) return snapshot.liveStatus;
      return await MedalModule.enqueueRoomStatusProbe(() => this.fetchRoomLiveStatus(roomid, preferMedalAPI));
    }
    static async getActivatedMedalSummary(targetId) {
      try {
        const response = await BAPI.live.getActivatedMedalInfo(targetId);
        if (response.code !== 0) {
          console.error(`BAPI.live.getActivatedMedalInfo(${targetId}) 失败`, response.message);
          return null;
        }
        console.debug("BAPI.live.getActivatedMedalInfo response", response);
        const data = response.data;
        if (!data) return null;
        const isLighted = Boolean(data.is_lighted);
        if (isLighted && data.reach_free_intimacy_limit) console.warn(`${data.name}(uid: ${targetId}) 已储蓄满${data.free_intimacy}亲密度，无法进行任务`);
        else if (data.free_intimacy > 0) console.warn(`${data.name}(uid: ${targetId}) 已储蓄${data.free_intimacy}亲密度`);
        return {
          isLighted,
          freeIntimacy: data.free_intimacy ?? 0,
          reachFreeIntimacyLimit: Boolean(data.reach_free_intimacy_limit),
          tasks: data.task_info ?? []
        };
      } catch (error) {
        console.error("获取粉丝勋章信息出错:", error);
        return null;
      }
    }
    static parseMissionProgress(tasks, title) {
      if (!tasks) return [0, 0];
      for (const task of tasks) if (task.title === title) {
        const match = task.sub_title?.match(/每日上限\s*(\d+)\/(\d+)/);
        if (match) return [parseInt(match[1], 10), parseInt(match[2], 10)];
        return [0, 0];
      }
      return [0, 0];
    }
    static async getMissionProgress(targetId, title) {
      const summary = await MedalModule.getActivatedMedalSummary(targetId);
      if (!summary || summary.reachFreeIntimacyLimit) return [0, 0];
      return MedalModule.parseMissionProgress(summary.tasks, title);
    }
  };
  var LightTask = class LightTask extends MedalModule {
    config = this.medalTasksConfig.light;
    static DAILY_LIKE_LIMIT = 5e3;
    static LIKE_BATCH_SIZE = 10;
    static LIKE_ROUNDS = 12;
    static LIKE_MISSION_TITLE = "点赞30次";
    manualLikeRunning = false;
    checkedRooms = [];
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.LiveTasks.medalTasks.light = s;
    }
    get isManualLikeRunning() {
      return this.manualLikeRunning;
    }
    MEDAL_FILTERS = {
      isLighted: (medal) => medal.medal.is_lighted === 1,
      livingStatus: (medal) => medal.room_info.living_status === 1 ? "on" : "off"
    };
    getMedals() {
      const fansMedals = useBiliStore().filteredFansMedals;
      const result = {
        on: [],
        off: []
      };
      fansMedals.filter((medal) => this.PUBLIC_MEDAL_FILTERS.whiteBlackList(medal) && (this.MEDAL_FILTERS.livingStatus(medal) == "on" || this.medalTasksConfig.roomidList2.includes(medal.room_info.room_id))).forEach((medal) => {
        const livingStatus = this.MEDAL_FILTERS.livingStatus(medal);
        result[livingStatus].push(medal);
      });
      result.on.sort(this.sort_live_medals);
      result.off.sort(this.sort_live_medals);
      return result;
    }
    async like(medal, click_time) {
      const room_id = medal.room_info.room_id;
      const target_id = medal.medal.target_id;
      const nick_name = medal.anchor_info.nick_name;
      const logMessage = `粉丝勋章【${medal.medal.medal_name}】 给主播【${nick_name}】（UID：${target_id}）的直播间（${room_id}）点赞 ${click_time} 次`;
      try {
        const response = await BAPI.live.likeReport(room_id, target_id, click_time);
        this.logger.debug(`BAPI.live.likeReport(${room_id}, ${target_id}, ${click_time})`, response);
        if (response.code === 0) this.logger.log(`点亮熄灭勋章-点赞 ${logMessage} 成功`);
        else this.logger.error(`点亮熄灭勋章-点赞 ${logMessage} 失败`, response.message);
      } catch (error) {
        this.logger.error(`点亮熄灭勋章-点赞 ${logMessage} 出错`, error);
      }
    }
    async sendDanmu(medal, danmu) {
      const room_id = medal.room_info.room_id;
      const target_id = medal.medal.target_id;
      const nick_name = medal.anchor_info.nick_name;
      const logMessage = `粉丝勋章【${medal.medal.medal_name}】 在主播【${nick_name}】（UID：${target_id}）的直播间（${room_id}）发送弹幕 ${danmu}`;
      try {
        const response = await BAPI.live.sendMsg(danmu, room_id);
        this.logger.debug(`BAPI.live.sendMsg(${danmu}, ${room_id})`, response);
        if (response.code === 0) {
          if (response.msg === "k") this.logger.warn(`点亮熄灭勋章-发送弹幕 ${logMessage} 异常，弹幕可能包含屏蔽词`);
          else {
            this.logger.log(`点亮熄灭勋章-发送弹幕 ${logMessage} 成功`);
            return true;
          }
        } else this.logger.error(`点亮熄灭勋章-发送弹幕 ${logMessage} 失败`, response.message);
      } catch (error) {
        this.logger.error(`点亮熄灭勋章-发送弹幕 ${logMessage} 出错`, error);
      }
      return false;
    }
    async sendEmoji(medal, emoji) {
      const room_id = medal.room_info.room_id;
      const target_id = medal.medal.target_id;
      const nick_name = medal.anchor_info.nick_name;
      const logMessage = `粉丝勋章【${medal.medal.medal_name}】 在主播【${nick_name}】（UID：${target_id}）的直播间（${room_id}）发送表情 ${emoji}`;
      try {
        const response = await BAPI.live.sendEmoji(emoji, room_id);
        this.logger.debug(`BAPI.live.sendEmoji(${emoji}, ${room_id})`, response);
        if (response.code === 0) {
          if (response.msg === "k") this.logger.warn(`点亮熄灭勋章-发送表情 ${logMessage} 异常，表情可能包含屏蔽词`);
          else {
            this.logger.log(`点亮熄灭勋章-发送表情 ${logMessage} 成功`);
            return true;
          }
        } else this.logger.error(`点亮熄灭勋章-发送表情 ${logMessage} 失败`, response.message);
      } catch (error) {
        this.logger.error(`点亮熄灭勋章-发送表情 ${logMessage} 出错`, error);
      }
      return false;
    }
    syncDailyLikeState() {
      if (!isTimestampToday(this.config._lastLikeTime ?? 0)) {
        this.config._todayLightLikes = 0;
        this.config._lastLikeTime = tsm();
        this.checkedRooms = [];
      }
      return this.config._todayLightLikes;
    }
    isLikeLimitReached(totalLikes) {
      return totalLikes >= LightTask.DAILY_LIKE_LIMIT;
    }
    syncLightState(medal, isLighted) {
      const before = medal.medal.is_lighted === 1;
      if (before !== isLighted) {
        medal.medal.is_lighted = isLighted ? 1 : 0;
        this.logger.log(`${medal.anchor_info.nick_name} 点亮状态已更新: ${before ? "已点亮" : "未点亮"} → ${isLighted ? "已点亮" : "未点亮"}`);
      }
      return isLighted;
    }
    async fetchMissionState(medal, title) {
      const summary = await MedalModule.getActivatedMedalSummary(medal.medal.target_id);
      if (!summary) return {
        available: false,
        isLighted: medal.medal.is_lighted === 1,
        freeIntimacy: null,
        reachFreeIntimacyLimit: false,
        prog: 0,
        total: 0
      };
      const isLighted = this.syncLightState(medal, summary.isLighted);
      const [prog, total] = MedalModule.parseMissionProgress(summary.tasks, title);
      return {
        available: true,
        isLighted,
        freeIntimacy: summary.freeIntimacy,
        reachFreeIntimacyLimit: summary.reachFreeIntimacyLimit,
        prog,
        total
      };
    }
    async checkLikeRooms() {
      const medals = this.getMedals().on;
      const candidates = [];
      this.logger.log(`开始检查 ${medals.length} 个直播间是否可以点赞`);
      for (const medal of medals) {
        if (!this.config.likeEnabled) {
          this.logger.log("点赞开关已关闭，停止检查点赞列表");
          break;
        }
        const roomid = medal.room_info.room_id;
        const nick_name = medal.anchor_info.nick_name;
        if (await this.resolveLiveStatus(roomid) === 0) {
          this.logger.warn(`${nick_name} 已经下播，跳过点赞`);
          continue;
        }
        let isLighted = medal.medal.is_lighted === 1;
        let likeProgress = null;
        let likeProgressTotal = null;
        const state = await this.fetchMissionState(medal, LightTask.LIKE_MISSION_TITLE);
        isLighted = state.isLighted;
        if (isLighted) {
          if (!state.available) {
            this.logger.warn(`${nick_name} 勋章信息获取失败，跳过点赞`);
            continue;
          }
          if (state.reachFreeIntimacyLimit) continue;
          if (state.total == 0) {
            this.logger.warn(`${nick_name} 点赞任务信息不可用，跳过点赞`);
            continue;
          }
          this.logger.log(`${nick_name} 点赞进度: ${state.prog} / ${state.total}`);
          if (state.prog >= state.total) {
            this.logger.log(`${nick_name} 点赞任务进度已达到上限，跳过点赞`);
            continue;
          }
          likeProgress = state.prog;
          likeProgressTotal = state.total;
        }
        candidates.push({
          roomid,
          nick_name,
          medal_name: medal.medal.medal_name,
          avatar: medal.anchor_info.avatar,
          medal_level: medal.medal.level,
          is_lighted: isLighted,
          freeIntimacy: state.freeIntimacy,
          reachFreeIntimacyLimit: state.reachFreeIntimacyLimit,
          likeProgress,
          likeProgressTotal
        });
      }
      this.checkedRooms = candidates;
      this.logger.log(`共找到 ${candidates.length} 个可以点赞的直播间`);
      return candidates;
    }
    async collectLikeCandidates() {
      if (!this.config.enabled) {
        this.logger.warn("点亮熄灭勋章开关未开启，无法点赞");
        return null;
      }
      if (!this.config.likeEnabled) {
        this.logger.warn("点赞开关已关闭，无法点赞");
        return null;
      }
      if (!await this.waitForFansMedals()) {
        this.logger.error("粉丝勋章数据不存在，无法点赞");
        return null;
      }
      const totalLikes = this.syncDailyLikeState();
      this.logger.log(`今日已点亮勋章点赞 ${totalLikes} 次（上限 ${LightTask.DAILY_LIKE_LIMIT}，未点亮勋章的点赞不计数）`);
      if (this.isLikeLimitReached(totalLikes)) this.logger.log("已点亮勋章的今日点赞已达上限，本次只给未点亮的勋章点赞");
      const candidates = this.checkedRooms.length > 0 ? this.checkedRooms : await this.checkLikeRooms();
      if (this.checkedRooms.length > 0) this.logger.log(`${this.checkedRooms.length} 个可以点赞的直播间`);
      return {
        candidates: this.isLikeLimitReached(totalLikes) ? candidates.filter((room) => !room.is_lighted) : candidates,
        todayLikes: totalLikes,
        dailyLimit: LightTask.DAILY_LIKE_LIMIT
      };
    }
    async likeRooms(roomids) {
      if (this.manualLikeRunning) {
        this.logger.warn("点赞任务正在运行中，忽略本次触发");
        return;
      }
      this.manualLikeRunning = true;
      try {
        await this.executeLike(roomids);
      } finally {
        this.manualLikeRunning = false;
      }
    }
    async executeLike(roomids) {
      let totalLikes = this.syncDailyLikeState();
      this.logger.log(`今日已点亮勋章点赞 ${totalLikes} 次（上限 ${LightTask.DAILY_LIKE_LIMIT}，未点亮勋章的点赞不计数）`);
      if (this.isLikeLimitReached(totalLikes)) this.logger.log("已点亮勋章的今日点赞已达上限，本次只给未点亮的勋章点赞");
      if (roomids.length === 0) {
        this.logger.log("没有选择任何直播间，跳过点赞任务");
        return;
      }
      if (this.checkedRooms.length === 0) await this.checkLikeRooms();
      const checked = new Set(this.checkedRooms.map((room) => room.roomid));
      const wantedRoomids = roomids.filter((roomid) => checked.has(roomid));
      if (wantedRoomids.length !== roomids.length) this.logger.warn(`${roomids.length - wantedRoomids.length} 个直播间未通过检查（已下播或任务已完成），跳过点赞`);
      if (wantedRoomids.length === 0) {
        this.logger.log("没有符合条件的直播间，跳过点赞任务");
        return;
      }
      const medalByRoomid = new Map(this.getMedals().on.map((medal) => [medal.room_info.room_id, medal]));
      const medals = wantedRoomids.map((roomid) => medalByRoomid.get(roomid)).filter((medal) => Boolean(medal));
      const batchList = [];
      for (let i = 0; i < medals.length; i += LightTask.LIKE_BATCH_SIZE) batchList.push(medals.slice(i, i + LightTask.LIKE_BATCH_SIZE));
      for (const batch of batchList) {
        if (!this.config.likeEnabled) break;
        let n = batch.length;
        this.logger.log(`点赞列表(${batch.length}): ${batch.map((medal) => medal.anchor_info.nick_name)}`);
        batch.reverse();
        for (let j = 0; j < LightTask.LIKE_ROUNDS; j++) {
          if (n === 0) break;
          if (!this.config.likeEnabled) break;
          for (let i = n - 1; i >= 0; i--) {
            if (!this.config.likeEnabled) {
              this.logger.log("点赞开关已关闭，停止点赞任务");
              break;
            }
            const medal = batch[i];
            let skip = false;
            let countLike = medal.medal.is_lighted === 1;
            if (await this.resolveLiveStatus(medal.room_info.room_id) === 0) {
              this.logger.warn(`${medal.anchor_info.nick_name} 已经下播，跳过点赞任务`);
              skip = true;
            }
            if (!skip) {
              const state = await this.fetchMissionState(medal, LightTask.LIKE_MISSION_TITLE);
              countLike = state.isLighted;
              if (state.isLighted) {
                if (this.isLikeLimitReached(totalLikes)) {
                  this.logger.log(`${medal.anchor_info.nick_name} 已点亮且今日点赞已达上限，跳过点赞任务`);
                  skip = true;
                } else if (!state.available) {
                  this.logger.warn(`${medal.anchor_info.nick_name} 勋章信息获取失败，跳过点赞任务`);
                  skip = true;
                } else if (state.reachFreeIntimacyLimit) skip = true;
                else if (state.total == 0) {
                  this.logger.warn(`${medal.anchor_info.nick_name} 点赞任务信息不可用，跳过点赞任务`);
                  skip = true;
                } else {
                  this.logger.log(`${medal.anchor_info.nick_name} 点赞进度: ${state.prog} / ${state.total}`);
                  if (state.prog >= state.total || j - state.prog > 2) {
                    if (j - state.prog > 2) this.logger.warn(`${medal.anchor_info.nick_name} 点赞任务进度达到上限`);
                    skip = true;
                  }
                }
              }
            }
            if (skip) {
              [batch[i], batch[n - 1]] = [batch[n - 1], batch[i]];
              n--;
              continue;
            }
            const likeCount = lodash.default.random(30, 40);
            await this.like(medal, likeCount);
            if (countLike) {
              totalLikes += likeCount;
              this.config._todayLightLikes = totalLikes;
            } else this.logger.debug(`${medal.anchor_info.nick_name} 勋章未点亮，本次点赞 ${likeCount} 次不计入今日上限`);
            await sleep(lodash.default.random(5e3, 15e3));
          }
        }
      }
      this.checkedRooms = [];
      this.logger.log(`点赞任务已完成，今日已点亮勋章点赞 ${totalLikes} 次`);
    }
    async sendDanmuTask(medals) {
      const BATCH_SIZE = 20;
      const hours = new Date().getHours();
      if (hours >= 19 && hours < 23) {
        this.logger.log(`19-23点自动跳过弹幕任务`);
        return;
      }
      let danmuIndex = 0;
      const batchList = [];
      for (let i = 0; i < medals.length; i += BATCH_SIZE) batchList.push(medals.slice(i, i + BATCH_SIZE));
      for (const batch of batchList) {
        if (!this.config.danmuEnabled) break;
        let n = batch.length;
        this.logger.log(`发送弹幕列表(${batch.length}): ${batch.map((medal) => medal.anchor_info.nick_name)}`);
        batch.reverse();
        for (let j = 0; j < 12; j++) {
          if (!this.config.danmuEnabled) break;
          for (let i = n - 1; i >= 0; i--) {
            if (!this.config.danmuEnabled) {
              this.logger.log("弹幕开关已关闭，停止发送弹幕任务");
              break;
            }
            const medal = batch[i];
            let flag = 1;
            if (await this.resolveLiveStatus(medal.room_info.room_id) == 1) {
              this.logger.warn(`${medal.anchor_info.nick_name} 检测到直播中，跳过发送弹幕任务`);
              flag = 0;
            }
            if (flag !== 0) {
              const state = await this.fetchMissionState(medal, "发弹幕");
              if (state.isLighted) {
                if (!state.available) {
                  this.logger.warn(`${medal.anchor_info.nick_name} 勋章信息获取失败，跳过发送弹幕`);
                  flag = 0;
                } else if (state.reachFreeIntimacyLimit) flag = 0;
                else if (state.total == 0) {
                  this.logger.warn(`${medal.anchor_info.nick_name} 发弹幕任务信息不可用，跳过发送弹幕`);
                  flag = 0;
                } else {
                  this.logger.log(`${medal.anchor_info.nick_name} 发弹幕进度: ${state.prog} / ${state.total}`);
                  if (state.prog >= state.total) flag = 0;
                }
              }
            }
            if (flag == 0) {
              [batch[i], batch[n - 1]] = [batch[n - 1], batch[i]];
              n--;
              continue;
            }
            const success = await this.sendDanmu(medal, this.config.danmuList[danmuIndex++ % this.config.danmuList.length]);
            const sleep_time = 300 / batch.length * 1e3 + lodash.default.random(5e3, 1e4);
            if (!success) {
              await sleep(sleep_time);
              await this.sendEmoji(medal, this.config.emojiList[danmuIndex++ % this.config.emojiList.length]);
            }
            await sleep(sleep_time);
          }
        }
      }
      this.logger.log("发送弹幕任务已完成");
    }
    async run() {
      this.logger.log("点亮熄灭勋章模块开始运行");
      if (!await this.waitForFansMedals()) {
        this.logger.error("粉丝勋章数据不存在，不执行点亮熄灭勋章任务");
        this.status = "error";
        return;
      }
      this.status = "running";
      const fansMedals = this.getMedals();
      const tasks = [];
      if (this.config.likeEnabled) {
        this.syncDailyLikeState();
        tasks.push(this.checkLikeRooms().then(() => void 0));
      } else this.logger.log("点赞功能已关闭，跳过点赞任务");
      if (this.config.danmuEnabled) tasks.push(this.sendDanmuTask(fansMedals.off));
      else this.logger.log("弹幕功能已关闭，跳过发送弹幕任务");
      await Promise.allSettled(tasks);
      this.config._lastCompleteTime = tsm();
      this.status = "done";
      this.logger.log("点亮熄灭勋章任务已完成");
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离点亮熄灭勋章模块下次运行时间:", diff.str);
    }
  };
  var RoomHeart = class {
    constructor(roomID, areaID, parentID, ruid, watchedSeconds) {
      this.roomID = roomID;
      this.areaID = areaID;
      this.parentID = parentID;
      this.ruid = ruid;
      this.watchedSeconds = watchedSeconds;
      this.config = useModuleStore().moduleConfig.DailyTasks.LiveTasks.medalTasks.watch;
    }
    logger = new Logger("RoomHeart");
    config;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.LiveTasks.medalTasks.watch = s;
    }
    watchedSeconds;
    areaID;
    parentID;
    roomID;
    ruid;
    seq = 0;
    progress = -1;
    get id() {
      return [
        this.parentID,
        this.areaID,
        this.seq,
        this.roomID
      ];
    }
    updateProgress() {
      this.watchedSeconds += this.heartBeatInterval;
      useModuleStore().moduleConfig.DailyTasks.LiveTasks.medalTasks.watch._watchingProgress[this.roomID] = this.watchedSeconds;
    }
    buvid = useBiliStore().cookies.LIVE_BUVID;
    uuid = uuid();
    device = [this.buvid, this.uuid];
    ua = navigator.userAgent;
    heartBeatInterval;
    secretKey;
    secretRule;
    timestamp;
    start() {
      if (!this.buvid) {
        this.logger.error(`缺少buvid，无法为直播间 ${this.roomID} 执行观看直播任务，请尝试刷新页面`);
        return Promise.resolve();
      }
      this.watchedSeconds = 0;
      return this.E();
    }
    async E() {
      try {
        const response = await BAPI.liveTrace.E(this.id, this.device, this.ruid);
        this.logger.debug(`BAPI.liveTrace.E(${this.id}, ${this.device}, ${this.ruid}) response`, response);
        if (response.code === 0) {
          this.seq += 1;
          ({ heartbeat_interval: this.heartBeatInterval, secret_key: this.secretKey, secret_rule: this.secretRule, timestamp: this.timestamp } = response.data);
          await sleep(this.heartBeatInterval * 1e3);
          return this.X();
        } else this.logger.error(`BAPI.liveTrace.E(${this.id}, ${this.device}, ${this.ruid}) 失败`, response.message);
      } catch (error) {
        this.logger.error(`BAPI.liveTrace.E(${this.id}, ${this.device}, ${this.ruid}) 出错`, error);
      }
    }
    async X() {
      if (!this.config.enabled) {
        this.logger.log(`观看直播开关已关闭，停止直播间 ${this.roomID} 的X心跳`);
        return;
      }
      if (isNowIn(23, 59, 0, 5)) {
        this.logger.log(`即将或刚刚发生跨天，停止直播间 ${this.roomID} 的X心跳`);
        return;
      }
      try {
        const spyderData = {
          id: JSON.stringify(this.id),
          device: JSON.stringify(this.device),
          ets: this.timestamp,
          benchmark: this.secretKey,
          time: this.heartBeatInterval,
          ts: tsm(),
          ua: this.ua
        };
        const s = this.spyder(JSON.stringify(spyderData), this.secretRule);
        const response = await BAPI.liveTrace.X(s, this.id, this.device, this.ruid, this.timestamp, this.secretKey, this.heartBeatInterval, spyderData.ts);
        this.logger.debug(`BAPI.liveTrace.X(${s}, ${this.id}, ${this.device}, ${this.ruid}, ${this.timestamp}, ${this.secretKey}, ${this.heartBeatInterval}, ${spyderData.ts}) response`, response);
        if (response.code === 0) {
          this.seq += 1;
          this.updateProgress();
          const [prog, total] = await MedalModule.getMissionProgress(this.ruid, "观看直播满15分钟");
          if (prog != this.progress || this.progress == -1) {
            this.progress = prog;
            this.logger.log(`${this.roomID} 观看直播进度: ${prog}/${total}`);
          }
          if (prog == total) {
            this.logger.log(`${this.roomID} 观看直播进度已满，观看结束`);
            return;
          }
          if (this.watchedSeconds >= this.config.time * 60) return;
          ({ heartbeat_interval: this.heartBeatInterval, secret_key: this.secretKey, secret_rule: this.secretRule, timestamp: this.timestamp } = response.data);
          await sleep(this.heartBeatInterval * 1e3);
          return this.X();
        } else this.logger.error(`BAPI.liveTrace.X(${s}, ${this.id}, ${this.device}, ${this.ruid}, ${this.timestamp}, ${this.secretKey}, ${this.heartBeatInterval}) 失败`, response.message);
      } catch (error) {
        this.logger.error(`BAPI.liveTrace.X(s, ${this.id}, ${this.device}, ${this.ruid}, ${this.timestamp}, ${this.secretKey}, ${this.heartBeatInterval}) 出错`, error);
      }
    }
    spyder(str, rule) {
      const data = JSON.parse(str);
      const [parent_id, area_id, seq_id, room_id] = JSON.parse(data.id);
      const [buvid, uuid] = JSON.parse(data.device);
      const key = data.benchmark;
      const newData = {
        platform: "web",
        parent_id,
        area_id,
        seq_id,
        room_id,
        buvid,
        uuid,
        ets: data.ets,
        time: data.time,
        ts: data.ts
      };
      let s = JSON.stringify(newData);
      for (const r of rule) switch (r) {
        case 0:
          s = crypto_js.default.HmacMD5(s, key).toString(crypto_js.default.enc.Hex);
          break;
        case 1:
          s = crypto_js.default.HmacSHA1(s, key).toString(crypto_js.default.enc.Hex);
          break;
        case 2:
          s = crypto_js.default.HmacSHA256(s, key).toString(crypto_js.default.enc.Hex);
          break;
        case 3:
          s = crypto_js.default.HmacSHA224(s, key).toString(crypto_js.default.enc.Hex);
          break;
        case 4:
          s = crypto_js.default.HmacSHA512(s, key).toString(crypto_js.default.enc.Hex);
          break;
        case 5:
          s = crypto_js.default.HmacSHA384(s, key).toString(crypto_js.default.enc.Hex);
          break;
        default: s = crypto_js.default.HmacMD5(s, key).toString(crypto_js.default.enc.Hex);
      }
      return s;
    }
  };
  var WatchTask = class extends MedalModule {
    static runAt = "window-load";
    config = this.medalTasksConfig.watch;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.LiveTasks.medalTasks.watch = s;
    }
    playerStore = usePlayerStore();
    getMedals() {
      const result = useBiliStore().filteredFansMedals.filter((medal) => medal.medal.is_lighted && this.PUBLIC_MEDAL_FILTERS.whiteBlackList(medal) && (this.medalTasksConfig.roomidList2.includes(medal.room_info.room_id) || medal.medal.level < 20));
      result.sort(this.sort_live_medals);
      this.logger.log(`观看直播列表(${result.length}): ${result.map((medal) => medal.anchor_info.nick_name)} `);
      return result;
    }
    async getAreaInfo(url, roomid) {
      try {
        const urlObj = new URL(url);
        const area_id = Number(urlObj.searchParams.get("area_id"));
        const parent_area_id = Number(urlObj.searchParams.get("parent_area_id"));
        if (area_id > 0 && parent_area_id > 0) {
          this.logger.log(`已从直播间链接中（roomid = ${roomid}）获取到分区数据（area_id = ${area_id}，parent_area_id = ${parent_area_id}）`, urlObj);
          return [area_id, parent_area_id];
        }
        const response = await BAPI.live.getInfoByRoom(roomid);
        this.logger.log(`BAPI.live.getInfoByRoom(${roomid}) response`, response);
        if (response.code === 0) {
          const room_info = response.data.room_info;
          return [room_info.area_id, room_info.parent_area_id];
        } else return [-1, -1];
      } catch (error) {
        this.logger.error(`获取指定直播间的 area_id 和 parent_area_id(roomid = ${roomid}) 出错`, error);
        return [-1, -1];
      }
    }
    async run() {
      this.logger.log("观看直播模块开始运行");
      if (!await this.waitForFansMedals()) {
        this.logger.error("粉丝勋章数据不存在，不执行观看直播任务");
        this.status = "error";
        return;
      }
      this.status = "running";
      if (!isTimestampToday(this.config._lastWatchTime, 0, 0)) this.config._watchingProgress = {};
      else lodash.default.forOwn(this.config._watchingProgress, (value, key, object) => {
        object[key] -= value % 300;
      });
      this.config._lastWatchTime = tsm();
      const fansMedals = this.getMedals();
      if (fansMedals.length > 0) {
        let i = 0;
        for (; i < fansMedals.length; i++) {
          if (!this.config.enabled) {
            this.logger.log("观看直播开关已关闭，停止观看直播任务");
            break;
          }
          if (isNowIn(23, 55, 0, 5)) {
            this.logger.log("即将或刚刚发生跨天，提早结束本轮观看直播任务");
            break;
          }
          const medal = fansMedals[i];
          const roomid = medal.room_info.room_id;
          const uid = medal.medal.target_id;
          const [area_id, parent_area_id] = await this.getAreaInfo(medal.room_info.url, roomid);
          if (area_id > 0 && parent_area_id > 0) {
            if (!this.config._watchingProgress[roomid] || this.config._watchingProgress[roomid] < this.config.time * 60) {
              this.logger.log(`粉丝勋章【${medal.medal.medal_name}】 开始直播间 ${roomid}（主播【${medal.anchor_info.nick_name}】，UID：${uid}）的观看直播任务`);
              await new RoomHeart(roomid, area_id, parent_area_id, uid, this.config._watchingProgress[roomid] ?? 0).start();
            }
          }
        }
        if (i === fansMedals.length) {
          this.config._lastCompleteTime = tsm();
          this.logger.log("观看直播任务已完成");
          this.status = "done";
        } else this.status = "";
      } else {
        this.status = "done";
        this.config._lastCompleteTime = tsm();
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("距离观看直播模块下次运行时间:", diff.str);
    }
  };
  var SilverToCoinTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.OtherTasks.silverToCoin;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.OtherTasks.silverToCoin = s;
    }
    async exchange() {
      try {
        const response = await BAPI.live.silver2coin();
        this.logger.log(`BAPI.live.silver2coin response`, response);
        if (response.code === 0) {
          this.logger.log(`银瓜子换硬币已完成，获得硬币:`, response.data.coin);
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        } else if (response.code === 403) {
          this.logger.log("每天最多只能用银瓜子兑换1个硬币");
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        } else {
          this.logger.error("银瓜子换硬币失败", response.message);
          this.status = "error";
        }
      } catch (err) {
        this.logger.error("银瓜子换硬币出错", err);
        this.status = "error";
      }
    }
    run() {
      this.logger.log("银瓜子换硬币模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        this.status = "running";
        this.exchange();
      } else if (isNowIn(0, 0, 0, 5)) this.logger.log("昨天的银瓜子换硬币任务已经完成过了，等到今天的00:05再执行");
      else {
        this.logger.log("今天已经完成过银瓜子换硬币任务了");
        this.status = "done";
      }
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("银瓜子换硬币模块下次运行时间:", diff.str);
    }
  };
  var CoinToSilverTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.OtherTasks.coinToSilver;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.OtherTasks.coinToSilver = s;
    }
    async exchange() {
      try {
        const response = await BAPI.live.coin2silver(this.config.num);
        this.logger.log(`BAPI.live.coin2silver{${this.config.num}} response`, response);
        if (response.code === 0) {
          this.logger.log("硬币换银瓜子已完成，获得银瓜子:", response.data.silver);
          this.config._lastCompleteTime = tsm();
          this.status = "done";
        } else {
          this.logger.error("硬币换银瓜子失败", response.message);
          this.status = "error";
        }
      } catch (err) {
        this.logger.error("硬币换银瓜子出错", err);
        this.status = "error";
      }
    }
    async run() {
      this.logger.log("硬币换银瓜子模块开始运行");
      if (!isTimestampToday(this.config._lastCompleteTime)) {
        this.status = "running";
        await this.exchange();
      } else if (!isNowIn(0, 0, 0, 5)) {
        this.logger.log("今天已经完成过硬币换银瓜子任务了");
        this.status = "done";
      } else this.logger.log("昨天的硬币换银瓜子任务已经完成过了，等到今天的00:05再执行");
      const diff = delayToNextMoment();
      this.nextRunTimer = setTimeout(() => this.run(), diff.ms);
      this.logger.log("硬币换银瓜子模块下次运行时间:", diff.str);
    }
  };
  var GetYearVipPrivilegeTask = class extends BaseModule {
    config = useModuleStore().moduleConfig.DailyTasks.OtherTasks.getYearVipPrivilege;
    set status(s) {
      useModuleStore().moduleStatus.DailyTasks.OtherTasks.getYearVipPrivilege = s;
    }
    type2Name = {
      1: "年度专享B币赠送",
      2: "年度专享会员购优惠券",
      3: "年度专享漫画礼包 - 漫画福利券",
      4: "大会员专享会员购包邮券",
      5: "年度专享漫画礼包 - 漫画商城优惠券",
      6: "大会员专享会员体验卡",
      7: "大会员专享课堂优惠券",
      15: "年度专享会员购星光宝盒88折券",
      16: "大会员专享会员购10魔晶",
      17: "大会员专享游戏优惠券"
    };
    blackList = [
      8,
      14,
      18,
      19,
      20,
      21,
      24,
      25,
      26,
      27,
      200
    ];
    async myPrivilege() {
      try {
        const response = await BAPI.main.vip.myPrivilege();
        this.logger.log(`BAPI.main.vip.myPrivilege response`, response);
        if (response.code === 0) return response.data.list;
        else {
          this.logger.error(`获取年度大会员权益信息失败`, response.message);
          this.status = "error";
        }
      } catch (error) {
        this.logger.error(`获取年度大会员权益信息出错`, error);
        this.status = "error";
      }
    }
    async receivePrivilege(type) {
      try {
        const response = await BAPI.main.vip.receivePrivilege(type);
        this.logger.log(`BAPI.main.vip.receivePrivilege(${type}) response`, response);
        if (response.code === 0) this.logger.log(`领取年度大会员权益（type = ${type}, ${this.type2Name[type] ?? "未知"}）成功`);
        else this.logger.error(`领取年度大会员权益（type = ${type}, ${this.type2Name[type] ?? "未知"}）失败`, response.message);
      } catch (error) {
        this.logger.error(`领取年度大会员权益（type = ${type}, ${this.type2Name[type] ?? "未知"}）出错`, error);
      }
    }
    async addExperience() {
      try {
        const response = await BAPI.main.vip.addExperience();
        this.logger.log(`BAPI.main.vip.addExperience response`, response);
        if (response.code === 0) this.logger.log(`领取年度大会员权益（type = 9，专属等级加速包（10主站经验））成功`);
        else this.logger.error(`领取年度大会员权益（type = 9，专属等级加速包（10主站经验））失败`, response.message);
      } catch (error) {
        this.logger.error(`领取年度大会员权益（type = 9，专属等级加速包（10主站经验））出错`, error);
      }
    }
    isYearVip() {
      const userInfo = useBiliStore().userInfo;
      if (userInfo.vip.status === 1 && userInfo.vip.type === 2) return true;
      else {
        this.logger.log("当前账号不是年度大会员，不领取权益");
        return false;
      }
    }
    async run() {
      this.logger.log("领取年度大会员权益模块开始运行");
      if (this.isYearVip()) {
        if (ts() >= this.config._nextReceiveTime) {
          this.status = "running";
          const list = await this.myPrivilege();
          if (list) {
            for (const i of list) {
              if (this.blackList.includes(i.type)) continue;
              if (i.state === 0) {
                if (i.type === 9) await this.addExperience();
                else await this.receivePrivilege(i.type);
              } else if (i.state === 1) this.logger.log(`该权益（type = ${i.type}, ${this.type2Name[i.type] ?? "未知"}）已经领取过了`);
              else if (i.type === 9) {
                const watchTaskConfig = useModuleStore().moduleConfig.DailyTasks.MainSiteTasks.watch;
                if (watchTaskConfig.enabled) {
                  this.logger.log("等待观看视频任务完成后再领取专属等级加速包（10主站经验）...");
                  (0, vue.watch)(() => watchTaskConfig._lastCompleteTime, () => sleep(3e3).then(() => this.addExperience()), { once: true });
                } else this.logger.warn("领取专属等级加速包（10主站经验）前需要观看任意一个视频，请打开【主站任务】中的【每日观看视频】，或是在运行脚本前手动观看");
              }
              await sleep(500);
            }
            this.status = "done";
            this.config._nextReceiveTime = Math.min(...list.map((i) => i.period_end_unix).filter((unix) => unix > ts()));
          }
        }
        const diff = this.config._nextReceiveTime - ts() + 3e5;
        if (diff < 86400) {
          this.logger.log("领取年度大会员权益模块下次运行时间:", luxon.DateTime.fromSeconds(this.config._nextReceiveTime).toJSDate());
          this.nextRunTimer = setTimeout(() => this.run(), diff * 1e3);
        } else this.logger.log("距离下次领取年度大会员权益的时间超过一天，不计划下次运行");
      }
    }
  };
  var SwitchLiveStreamQuality = class extends BaseModule {
    static runOnMultiplePages = true;
    static runAt = "window-load";
    static runAfterDefault = false;
    static onFrame = "top";
    config = useModuleStore().moduleConfig.EnhanceExperience.switchLiveStreamQuality;
    playerStore = usePlayerStore();
    async switchQuality(livePlayer) {
      let playerInfo = livePlayer.getPlayerInfo();
      await this.playerStore.waitForLiveStatus(1, {
        onNeedWait: () => {
          this.logger.log("当前直播间未开播，开播后再切换画质");
        }
      });
      const isHDR = this.config.qualityDesc.includes("HDR");
      const searchStr = this.config.qualityDesc.replace(/（.*）/, "");
      const targetQuality = playerInfo.qualityCandidates.find(({ desc, hdrType }) => desc.includes(searchStr) && hdrType > 0 === isHDR) ?? (isHDR ? playerInfo.qualityCandidates.find(({ desc }) => desc.includes(searchStr)) : null);
      if (!targetQuality) {
        this.logger.log("当前直播不支持目标画质，保持默认画质");
        return;
      }
      if (isHDR && targetQuality.hdrType === 0) this.logger.log(`当前直播不支持 ${this.config.qualityDesc}，回退到 ${targetQuality.desc}`);
      const switchQualityTimer = setInterval(() => {
        playerInfo = livePlayer.getPlayerInfo();
        if (playerInfo.quality === targetQuality.qn && playerInfo.hdrType === targetQuality.hdrType) {
          this.logger.log(`已将画质切换为 ${targetQuality.desc}`, targetQuality);
          clearInterval(switchQualityTimer);
          clearTimeout(timeoutTimer);
        } else livePlayer.switchQuality(targetQuality.qn, targetQuality.hdrType);
      }, 500);
      const timeoutTimer = setTimeout(() => {
        clearInterval(switchQualityTimer);
        this.logger.warn("多次尝试自动切换画质失败");
      }, 1e4);
    }
    async run() {
      this.logger.log("自动切换画质模块开始运行");
      try {
        const livePlayer = await this.playerStore.getPlayer();
        this.switchQuality(livePlayer);
      } catch (e) {
        this.logger.error("自动切换画质模块出错", e);
      }
    }
  };
  var BanP2P = class extends BaseModule {
    static runOnMultiplePages = true;
    static runAt = "document-start";
    static onFrame = "all";
    static runAfterDefault = false;
    config = useModuleStore().moduleConfig.EnhanceExperience.banp2p;
    static createDOMException(message, name) {
      return new _unsafeWindow.DOMException(message, name);
    }
    static dispatchEvent(target, type, eventInit = {}) {
      const event = new _unsafeWindow.Event(type);
      Object.assign(event, eventInit);
      target.dispatchEvent?.(event);
    }
    banP2P() {
      class FakeEventTarget {
        listeners = new Map();
        addEventListener(type, listener) {
          if (!listener) return;
          if (!this.listeners.has(type)) this.listeners.set(type, new Set());
          this.listeners.get(type).add(listener);
        }
        removeEventListener(type, listener) {
          if (!listener) return;
          this.listeners.get(type)?.delete(listener);
        }
        dispatchEvent(event) {
          const { type } = event;
          const handler = this[`on${type}`];
          if (typeof handler === "function") handler.call(this, event);
          const listeners = this.listeners.get(type);
          if (!listeners) return true;
          for (const listener of listeners) if (typeof listener === "function") listener.call(this, event);
          else listener.handleEvent(event);
          return !event.defaultPrevented;
        }
      }
      class FakeRTCDataChannel extends FakeEventTarget {
        binaryType = "arraybuffer";
        bufferedAmount = 0;
        bufferedAmountLowThreshold = 0;
        id = null;
        label;
        maxPacketLifeTime = null;
        maxRetransmits = null;
        negotiated = false;
        ordered;
        protocol = "";
        readyState = "connecting";
        onbufferedamountlow = null;
        onclose = null;
        onclosing = null;
        onerror = null;
        onmessage = null;
        onopen = null;
        constructor(label, ordered = true) {
          super();
          this.label = label;
          this.ordered = ordered;
        }
        send(_data) {
          if (this.readyState !== "open") throw BanP2P.createDOMException("Failed to execute 'send' on 'RTCDataChannel': RTCDataChannel.readyState is not 'open'.", "InvalidStateError");
        }
        close() {
          if (this.readyState === "closed") return;
          this.readyState = "closing";
          setTimeout(() => {
            this.readyState = "closed";
            BanP2P.dispatchEvent(this, "close");
          }, 0);
        }
      }
      class FakeRTCPeerConnection extends FakeEventTarget {
        canTrickleIceCandidates = false;
        connectionState = "new";
        currentLocalDescription = null;
        currentRemoteDescription = null;
        iceConnectionState = "new";
        iceGatheringState = "new";
        localDescription = null;
        pendingLocalDescription = null;
        pendingRemoteDescription = null;
        remoteDescription = null;
        sctp = null;
        signalingState = "stable";
        onconnectionstatechange = null;
        ondatachannel = null;
        onicecandidate = null;
        onicecandidateerror = null;
        oniceconnectionstatechange = null;
        onicegatheringstatechange = null;
        onnegotiationneeded = null;
        onsignalingstatechange = null;
        ontrack = null;
        configuration;
        closed = false;
        dataChannels = [];
        static name = "RTCPeerConnection";
        constructor(configuration = {}) {
          super();
          this.configuration = configuration;
        }
        updateSignalingState(state) {
          this.signalingState = state;
          BanP2P.dispatchEvent(this, "signalingstatechange");
        }
        updateIceGatheringState(state) {
          this.iceGatheringState = state;
          BanP2P.dispatchEvent(this, "icegatheringstatechange");
        }
        updateIceConnectionState(state) {
          this.iceConnectionState = state;
          BanP2P.dispatchEvent(this, "iceconnectionstatechange");
        }
        updateConnectionState(state) {
          this.connectionState = state;
          BanP2P.dispatchEvent(this, "connectionstatechange");
        }
        isClosed() {
          return this.closed;
        }
        scheduleConnectionFailure() {
          this.updateIceGatheringState("gathering");
          this.updateIceConnectionState("checking");
          this.updateConnectionState("connecting");
          _unsafeWindow.setTimeout(() => {
            if (this.closed) return;
            this.updateIceGatheringState("complete");
            BanP2P.dispatchEvent(this, "icecandidate", { candidate: null });
          }, 0);
          _unsafeWindow.setTimeout(() => {
            if (this.closed) return;
            this.updateIceConnectionState("failed");
            this.updateConnectionState("failed");
            for (const channel of this.dataChannels) channel.close();
          }, 78);
        }
        createOffer() {
          return Promise.resolve({
            type: "offer",
            sdp: "v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
          });
        }
        createAnswer() {
          return Promise.resolve({
            type: "answer",
            sdp: "v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
          });
        }
        setLocalDescription(description) {
          if (this.isClosed()) return Promise.resolve();
          const nextDescription = description ? {
            type: description.type ?? "offer",
            sdp: description.sdp
          } : {
            type: "offer",
            sdp: "v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
          };
          this.pendingLocalDescription = nextDescription;
          this.localDescription = nextDescription;
          this.currentLocalDescription = nextDescription;
          this.updateSignalingState(nextDescription.type === "offer" ? "have-local-offer" : "stable");
          this.scheduleConnectionFailure();
          return Promise.resolve();
        }
        setRemoteDescription(description) {
          if (this.isClosed()) return Promise.resolve();
          this.pendingRemoteDescription = description;
          this.remoteDescription = description;
          this.currentRemoteDescription = description;
          this.canTrickleIceCandidates = false;
          this.updateSignalingState(description.type === "offer" ? "have-remote-offer" : "stable");
          this.scheduleConnectionFailure();
          return Promise.resolve();
        }
        addIceCandidate(_candidate) {
          return Promise.resolve();
        }
        createDataChannel(label, options = { ordered: true }) {
          const channel = new FakeRTCDataChannel(label, options.ordered);
          if (this.isClosed()) {
            channel.close();
            return channel;
          }
          this.dataChannels.push(channel);
          return channel;
        }
        getConfiguration() {
          return this.configuration;
        }
        getSenders() {
          return [];
        }
        getReceivers() {
          return [];
        }
        getTransceivers() {
          return [];
        }
        getStats() {
          return Promise.resolve(new Map());
        }
        addTrack() {
          return {};
        }
        removeTrack(_sender) { }
        restartIce() {
          if (this.isClosed()) return;
          this.scheduleConnectionFailure();
        }
        close() {
          if (this.closed) return;
          this.closed = true;
          this.updateSignalingState("closed");
          this.updateIceGatheringState("complete");
          this.updateIceConnectionState("closed");
          this.updateConnectionState("closed");
          for (const channel of this.dataChannels) channel.close();
        }
      }
      Object.defineProperty(FakeRTCPeerConnection.prototype, Symbol.toStringTag, {
        value: "RTCPeerConnection",
        configurable: true
      });
      for (const i of [
        "RTCPeerConnection",
        "mozRTCPeerConnection",
        "webkitRTCPeerConnection"
      ]) Object.defineProperty(_unsafeWindow, i, {
        value: FakeRTCPeerConnection,
        enumerable: false,
        writable: true,
        configurable: true
      });
    }
    run() {
      this.logger.log("禁用P2P模块开始运行");
      try {
        this.banP2P();
      } catch (e) {
        this.logger.error("禁用P2P失败", e);
      }
    }
  };
  var events = [
    "load",
    "loadend",
    "timeout",
    "error",
    "readystatechange",
    "abort"
  ];
  var OriginXhr = "__origin_xhr";
  function configEvent(event, xhrProxy) {
    var e = {};
    for (var attr in event) e[attr] = event[attr];
    e.target = e.currentTarget = xhrProxy;
    return e;
  }
  function hook$1(proxy, win) {
    win = win || window;
    var originXhr = win.XMLHttpRequest;
    var hooking = true;
    var HookXMLHttpRequest = function () {
      var xhr = new originXhr();
      for (var i = 0; i < events.length; ++i) {
        var key = "on" + events[i];
        if (xhr[key] === void 0) xhr[key] = null;
      }
      for (var attr in xhr) {
        var type = "";
        try {
          type = typeof xhr[attr];
        } catch (e) { }
        if (type === "function") this[attr] = hookFunction(attr);
        else if (attr !== OriginXhr) Object.defineProperty(this, attr, {
          get: getterFactory(attr),
          set: setterFactory(attr),
          enumerable: true
        });
      }
      var that = this;
      xhr.getProxy = function () {
        return that;
      };
      this[OriginXhr] = xhr;
    };
    HookXMLHttpRequest.prototype = originXhr.prototype;
    HookXMLHttpRequest.prototype.constructor = HookXMLHttpRequest;
    win.XMLHttpRequest = HookXMLHttpRequest;
    Object.assign(win.XMLHttpRequest, {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4
    });
    function getterFactory(attr) {
      return function () {
        var originValue = this[OriginXhr][attr];
        if (hooking) {
          var v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : originValue;
          var attrGetterHook = (proxy[attr] || {})["getter"];
          return attrGetterHook && attrGetterHook(v, this) || v;
        } else return originValue;
      };
    }
    function setterFactory(attr) {
      return function (v) {
        var xhr = this[OriginXhr];
        if (hooking) {
          var that = this;
          var hook = proxy[attr];
          if (attr.substring(0, 2) === "on") {
            that[attr + "_"] = v;
            xhr[attr] = function (e) {
              e = configEvent(e, that);
              proxy[attr] && proxy[attr].call(that, xhr, e) || v.call(that, e);
            };
          } else {
            var attrSetterHook = (hook || {})["setter"];
            v = attrSetterHook && attrSetterHook(v, that) || v;
            this[attr + "_"] = v;
            try {
              xhr[attr] = v;
            } catch (e) { }
          }
        } else xhr[attr] = v;
      };
    }
    function hookFunction(fun) {
      return function () {
        var args = [].slice.call(arguments);
        if (proxy[fun] && hooking) {
          var ret = proxy[fun].call(this, args, this[OriginXhr]);
          if (ret) return ret;
        }
        return this[OriginXhr][fun].apply(this[OriginXhr], args);
      };
    }
    function unHook() {
      hooking = false;
      if (win.XMLHttpRequest === HookXMLHttpRequest) {
        win.XMLHttpRequest = originXhr;
        HookXMLHttpRequest.prototype.constructor = originXhr;
        originXhr = void 0;
      }
    }
    return {
      originXhr,
      unHook
    };
  }
  var eventLoad = events[0];
  var eventLoadEnd = events[1];
  var eventTimeout = events[2];
  var eventError = events[3];
  var eventReadyStateChange = events[4];
  var eventAbort = events[5];
  var prototype = "prototype";
  function proxy(proxy, win) {
    win = win || window;
    return proxyAjax(proxy, win);
  }
  function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }
  function getEventTarget(xhr) {
    return xhr.watcher || (xhr.watcher = document.createElement("a"));
  }
  function triggerListener(xhr, name) {
    var xhrProxy = xhr.getProxy();
    var callback = "on" + name + "_";
    var event = configEvent({ type: name }, xhrProxy);
    xhrProxy[callback] && xhrProxy[callback](event);
    var evt;
    if (typeof Event === "function") evt = new Event(name, { bubbles: false });
    else {
      evt = document.createEvent("Event");
      evt.initEvent(name, false, true);
    }
    getEventTarget(xhr).dispatchEvent(evt);
  }
  function Handler(xhr) {
    this.xhr = xhr;
    this.xhrProxy = xhr.getProxy();
  }
  Handler[prototype] = Object.create({
    resolve: function resolve(response) {
      var xhrProxy = this.xhrProxy;
      var xhr = this.xhr;
      xhrProxy.readyState = 4;
      xhr.resHeader = response.headers;
      xhrProxy.response = xhrProxy.responseText = response.response;
      xhrProxy.statusText = response.statusText;
      xhrProxy.status = response.status;
      triggerListener(xhr, eventReadyStateChange);
      triggerListener(xhr, eventLoad);
      triggerListener(xhr, eventLoadEnd);
    },
    reject: function reject(error) {
      this.xhrProxy.status = 0;
      triggerListener(this.xhr, error.type);
      triggerListener(this.xhr, eventLoadEnd);
    }
  });
  function makeHandler(next) {
    function sub(xhr) {
      Handler.call(this, xhr);
    }
    sub[prototype] = Object.create(Handler[prototype]);
    sub[prototype].next = next;
    return sub;
  }
  var RequestHandler$1 = makeHandler(function (rq) {
    var xhr = this.xhr;
    rq = rq || xhr.config;
    xhr.withCredentials = rq.withCredentials;
    xhr.open(rq.method, rq.url, rq.async !== false, rq.user, rq.password);
    for (var key in rq.headers) xhr.setRequestHeader(key, rq.headers[key]);
    xhr.send(rq.body);
  });
  var ResponseHandler$1 = makeHandler(function (response) {
    this.resolve(response);
  });
  var ErrorHandler = makeHandler(function (error) {
    this.reject(error);
  });
  function proxyAjax(proxy, win) {
    var onRequest = proxy.onRequest, onResponse = proxy.onResponse, onError = proxy.onError;
    function getResponseData(xhrProxy) {
      var responseType = xhrProxy.responseType;
      if (!responseType || responseType === "text") return xhrProxy.responseText;
      var response = xhrProxy.response;
      if (responseType === "json" && !response) try {
        return JSON.parse(xhrProxy.responseText);
      } catch (e) {
        console.warn(e);
      }
      return response;
    }
    function handleResponse(xhr, xhrProxy) {
      var handler = new ResponseHandler$1(xhr);
      var ret = {
        response: getResponseData(xhrProxy),
        status: xhrProxy.status,
        statusText: xhrProxy.statusText,
        config: xhr.config,
        headers: xhr.resHeader || xhr.getAllResponseHeaders().split("\r\n").reduce(function (ob, str) {
          if (str === "") return ob;
          var m = str.split(":");
          ob[m.shift()] = trim(m.join(":"));
          return ob;
        }, {})
      };
      if (!onResponse) return handler.resolve(ret);
      onResponse(ret, handler);
    }
    function onerror(xhr, xhrProxy, error, errorType) {
      var handler = new ErrorHandler(xhr);
      error = {
        config: xhr.config,
        error,
        type: errorType
      };
      if (onError) onError(error, handler);
      else handler.next(error);
    }
    function preventXhrProxyCallback() {
      return true;
    }
    function errorCallback(errorType) {
      return function (xhr, e) {
        onerror(xhr, this, e, errorType);
        return true;
      };
    }
    function stateChangeCallback(xhr, xhrProxy) {
      if (xhr.readyState === 4 && xhr.status !== 0) handleResponse(xhr, xhrProxy);
      else if (xhr.readyState !== 4) triggerListener(xhr, eventReadyStateChange);
      return true;
    }
    var { originXhr, unHook } = hook$1({
      onload: preventXhrProxyCallback,
      onloadend: preventXhrProxyCallback,
      onerror: errorCallback(eventError),
      ontimeout: errorCallback(eventTimeout),
      onabort: errorCallback(eventAbort),
      onreadystatechange: function (xhr) {
        return stateChangeCallback(xhr, this);
      },
      open: function open(args, xhr) {
        var _this = this;
        var config = xhr.config = { headers: {} };
        config.method = args[0];
        config.url = args[1];
        config.async = args[2];
        config.user = args[3];
        config.password = args[4];
        config.xhr = xhr;
        var evName = "on" + eventReadyStateChange;
        if (!xhr[evName]) xhr[evName] = function () {
          return stateChangeCallback(xhr, _this);
        };
        if (onRequest) return true;
      },
      send: function (args, xhr) {
        var config = xhr.config;
        config.withCredentials = xhr.withCredentials;
        config.body = args[0];
        if (onRequest) {
          var req = function () {
            onRequest(config, new RequestHandler$1(xhr));
          };
          config.async === false ? req() : setTimeout(req);
          return true;
        }
      },
      setRequestHeader: function (args, xhr) {
        xhr.config.headers[args[0].toLowerCase()] = args[1];
        if (onRequest) return true;
      },
      addEventListener: function (args, xhr) {
        var _this = this;
        if (events.indexOf(args[0]) !== -1) {
          var handler = args[1];
          getEventTarget(xhr).addEventListener(args[0], function (e) {
            var event = configEvent(e, _this);
            event.type = args[0];
            event.isTrusted = true;
            handler.call(_this, event);
          });
          return true;
        }
      },
      getAllResponseHeaders: function (_, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          var header = "";
          for (var key in headers) header += key + ": " + headers[key] + "\r\n";
          return header;
        }
      },
      getResponseHeader: function (args, xhr) {
        var headers = xhr.resHeader;
        if (headers) return headers[(args[0] || "").toLowerCase()];
      }
    }, win);
    return {
      originXhr,
      unProxy: unHook
    };
  }
  var _fetch = window.fetch;
  var RequestHandler = class {
    _resolve;
    _error;
    _next = false;
    _input;
    _init;
    resolve(response) {
      this._resolve = Promise.resolve(response);
    }
    error(error) {
      this._error = error;
    }
    next(config) {
      this._next = true;
      this._input = config.input;
      this._init = config.init;
    }
  };
  var ResponseHandler = class {
    _resolve;
    _error;
    _next = false;
    _response;
    resolve(response) {
      this._resolve = Promise.resolve(response);
    }
    error(error) {
      this._error = error;
    }
    next(response) {
      this._next = true;
      this._response = response;
    }
  };
  var isHooked = false;
  var onRequestHandlers = [];
  var onResponseHandlers = [];
  var hook = (win) => {
    win.fetch = async (input, init) => {
      for (const handler of onRequestHandlers) {
        const requestHandler = new RequestHandler();
        await handler.apply(_unsafeWindow, [{
          input,
          init
        }, requestHandler]);
        if (requestHandler._resolve) return requestHandler._resolve;
        if (requestHandler._error) throw requestHandler._error;
        if (!requestHandler._next) break;
        input = requestHandler._input;
        init = requestHandler._init;
      }
      let response = await _fetch.apply(_unsafeWindow, [input, init]);
      for (const handler of onResponseHandlers) {
        const responseHandler = new ResponseHandler();
        await handler.apply(_unsafeWindow, [response, responseHandler]);
        if (responseHandler._resolve) return responseHandler._resolve;
        if (responseHandler._error) throw responseHandler._error;
        if (!responseHandler._next) break;
        response = responseHandler._response;
      }
      return response;
    };
  };
  var fproxy = (proxy, win = _unsafeWindow) => {
    if (proxy.onRequest) onRequestHandlers.push(proxy.onRequest);
    if (proxy.onResponse) onResponseHandlers.push(proxy.onResponse);
    if (!isHooked) {
      hook(win);
      isHooked = true;
    }
    return {
      unProxy: () => {
        if (proxy.onRequest) onRequestHandlers.splice(onRequestHandlers.findIndex((handler) => handler === proxy.onRequest), 1);
        if (proxy.onResponse) onResponseHandlers.splice(onResponseHandlers.findIndex((handler) => handler === proxy.onResponse), 1);
      },
      unHook: () => {
        win.fetch = _fetch;
        onRequestHandlers = [];
        onResponseHandlers = [];
      },
      originFetch: _fetch
    };
  };
  var NoReport = class NoReport extends BaseModule {
    static runOnMultiplePages = true;
    static runAt = "document-start";
    static onFrame = "all";
    static runAfterDefault = false;
    config = useModuleStore().moduleConfig.EnhanceExperience.noReport;
    static isTargetURL(url) {
      return url.includes("//data.bilibili.com") || url.includes("//data.bilivideo.com");
    }
    hookProperties(win) {
      Object.defineProperty(win.navigator, "sendBeacon", { value: () => { } });
      Object.defineProperties(win, {
        reportObserver: {
          get() {
            return () => { };
          },
          set() { }
        },
        reportConfig: {
          get() {
            return () => { };
          },
          set() { }
        },
        __biliMirror__: {
          get() {
            return {};
          },
          set() { }
        },
        __biliMirrorPbInstance__: {
          get() {
            return new Proxy({}, {
              get(_target, property) {
                return {
                  fpPromise: Promise.resolve(),
                  initBuvidPromise: Promise.resolve(),
                  miss: false,
                  options: {
                    feature: new Proxy({}, {
                      get() {
                        return false;
                      },
                      set() {
                        return true;
                      }
                    })
                  },
                  scheduler: {},
                  sequencer: {},
                  techEventReporter: {},
                  version: ""
                }[property] ?? (() => { });
              },
              set() {
                return true;
              }
            });
          },
          set() { }
        },
        __INITIAL_MIRROR__: {
          get() {
            return () => { };
          },
          set() { }
        },
        __MIRROR_REPORT__: {
          get() {
            return new Proxy({}, {
              get() {
                return () => { };
              },
              set() {
                return true;
              }
            });
          },
          set() { }
        },
        __MIRROR_VERSION__: {
          get() {
            return "";
          },
          set() { }
        },
        __statisObserver: {
          get() {
            return new Proxy({}, {
              get(_target, property) {
                switch (property) {
                  case "__initConfig":
                  case "__loadedFlag": return {};
                  case "__bufferFuns": return [];
                  case "__visitId": return "";
                  default: return () => { };
                }
              },
              set() {
                return true;
              }
            });
          },
          set() { }
        },
        __statisObserverConfig: {
          get() {
            return {};
          },
          set() { }
        },
        __cm_tracker__: {
          get() { },
          set() { }
        },
        bilicm: {
          get() {
            return {};
          },
          set() { }
        },
        BiliCm: {
          get() {
            return {};
          },
          set() { }
        },
        ReporterPb: {
          get() {
            return class ReporterPb {
              constructor() {
                return new Proxy({}, {
                  get() {
                    return () => { };
                  },
                  set() {
                    return true;
                  }
                });
              }
            };
          },
          set() { }
        }
      });
    }
    ajaxHook() {
      const ajaxHookProxyConfig = {
        onRequest(config, handler) {
          if (NoReport.isTargetURL(config.url)) handler.resolve({
            config,
            status: 200,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
            response: "{}"
          });
          else handler.next(config);
        }
      };
      const fetchHookConfig = {
        onRequest(config, handler) {
          const url = getUrlFromFetchInput(config.input);
          if (NoReport.isTargetURL(url)) handler.resolve(new Response("{}"));
          else handler.next(config);
        },
        onResponse(response, handler) {
          handler.next(response);
        }
      };
      proxy(ajaxHookProxyConfig, _unsafeWindow);
      fproxy(fetchHookConfig, _unsafeWindow);
    }
    run() {
      this.logger.log("拦截日志数据上报模块开始运行");
      try {
        this.hookProperties(_unsafeWindow);
        this.ajaxHook();
      } catch (e) {
        this.logger.error("拦截日志数据上报失败", e);
      }
    }
  };
  var NoSleep = class extends BaseModule {
    static runOnMultiplePages = true;
    static runAt = "window-load";
    static onFrame = "top";
    static runAfterDefault = false;
    config = useModuleStore().moduleConfig.EnhanceExperience.noSleep;
    run() {
      this.logger.log("屏蔽挂机检测模块开始运行");
      setInterval(() => {
        document.dispatchEvent(new MouseEvent("mousemove"));
      }, 6e4);
      try {
        Object.defineProperties(document, {
          visibilityState: { value: "visible" },
          hidden: { value: false }
        });
      } catch (e) {
        this.logger.warn("修改页面可见性相关属性失败，可能已被其它脚本锁定", e);
      }
    }
  };
  var Invisibility = class extends BaseModule {
    static runOnMultiplePages = true;
    static runAt = "document-start";
    static runAfterDefault = false;
    static onFrame = "all";
    config = useModuleStore().moduleConfig.EnhanceExperience.invisibility;
    run() {
      this.logger.log("隐身入场模块开始运行");
      fproxy({
        onRequest: (config, handler) => {
          const url = getUrlFromFetchInput(config.input);
          if (url.includes("//api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser")) config.input = createFetchInputWithNewUrl(url.replace("not_mock_enter_effect=0", "not_mock_enter_effect=1"), config.input);
          handler.next(config);
        }
      }, _unsafeWindow);
    }
  };
  var RemovePKBox = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removePKBox;
    removePKNode() {
      _GM_addStyle("#awesome-pk-vm { display: none !important }");
    }
    removePKToast() {
      const blackWordList = ["主播即将结束PK", "连线断开中"];
      new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) mutation.addedNodes.forEach((addedNode) => {
          if (addedNode instanceof HTMLElement && addedNode.classList.contains("link-toast") && blackWordList.some((word) => addedNode.textContent?.includes(word))) addedNode.style.display = "none";
        });
      }).observe(document.body, { childList: true });
    }
    async run() {
      this.logger.log("移除大乱斗元素模块开始运行");
      this.removePKNode();
      this.removePKToast();
    }
  };
  var RemoveLiveWaterMark = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeLiveWaterMark;
    async run() {
      this.logger.log("移除直播间水印模块开始运行");
      _GM_addStyle(".web-player-icon-roomStatus, .radio-room-brand-icon { display: none !important }");
    }
  };
  var RemoveShopPopover = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeShopPopover;
    async run() {
      this.logger.log("移除直播间小橙车弹窗模块开始运行");
      _GM_addStyle(".shop-popover { display: none !important }");
    }
  };
  var RemoveGameParty = class extends BaseModule {
    static runMultiple = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeGameParty;
    async run() {
      this.logger.log("移除直播间幻星派对标志模块开始运行");
      _GM_addStyle("#game-id { display: none !important }");
    }
  };
  var RemoveGiftPopover = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeGiftPopover;
    async run() {
      this.logger.log("移除礼物赠送提示弹窗模块开始运行");
      _GM_addStyle(".function-card { display: none !important }");
    }
  };
  var RemoveMicPopover = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeMicPopover;
    async run() {
      this.logger.log("移除连麦状态提示模块开始运行");
      _GM_addStyle(".lin-mic-cntr { display: none !important }");
    }
  };
  var RemoveComboCard = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeComboCard;
    async run() {
      this.logger.log("移除直播间相同弹幕连续提示模块开始运行");
      _GM_addStyle("#combo-card { display: none !important }");
    }
  };
  var RemoveHeaderStuff = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeHeaderStuff;
    async run() {
      this.logger.log("移除直播画面上方杂项模块开始运行");
      _GM_addStyle(".header-info-ctnr .right-section .right-dynamic-modules { display: none !important }");
    }
  };
  var RemoveFlipView = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeFlipView;
    async run() {
      this.logger.log("移除礼物栏下方广告模块开始运行");
      _GM_addStyle(".flip-view { display: none !important }");
    }
  };
  var RemoveLiveMosaic = class extends BaseModule {
    static runOnMultiplePages = true;
    config = useModuleStore().moduleConfig.RemoveElement.removeLiveMosaic;
    async run() {
      this.logger.log("移除直播间马赛克模块开始运行");
      _GM_addStyle("#web-player-module-area-mask-panel { opacity: 0 !important }");
    }
  };
  var modules_exports = __exportAll({
    DailyTask_LiveTask_LightTask: () => LightTask,
    DailyTask_LiveTask_WatchTask: () => WatchTask,
    DailyTask_MainSiteTask_CoinTask: () => CoinTask,
    DailyTask_MainSiteTask_LoginTask: () => LoginTask,
    DailyTask_MainSiteTask_ShareTask: () => ShareTask,
    DailyTask_MainSiteTask_WatchTask: () => WatchTask$1,
    DailyTask_OtherTask_CoinToSilverTask: () => CoinToSilverTask,
    DailyTask_OtherTask_GetYearVipPrivilegeTask: () => GetYearVipPrivilegeTask,
    DailyTask_OtherTask_SilverToCoinTask: () => SilverToCoinTask,
    EnhanceExperience_BanP2P: () => BanP2P,
    EnhanceExperience_Invisibility: () => Invisibility,
    EnhanceExperience_NoReport: () => NoReport,
    EnhanceExperience_NoSleep: () => NoSleep,
    EnhanceExperience_SwitchLiveStreamQuality: () => SwitchLiveStreamQuality,
    RemoveElement_RemoveComboCard: () => RemoveComboCard,
    RemoveElement_RemoveFlipView: () => RemoveFlipView,
    RemoveElement_RemoveGameParty: () => RemoveGameParty,
    RemoveElement_RemoveGiftPopover: () => RemoveGiftPopover,
    RemoveElement_RemoveHeaderStuff: () => RemoveHeaderStuff,
    RemoveElement_RemoveLiveMosaic: () => RemoveLiveMosaic,
    RemoveElement_RemoveLiveWaterMark: () => RemoveLiveWaterMark,
    RemoveElement_RemoveMicPopover: () => RemoveMicPopover,
    RemoveElement_RemovePKBox: () => RemovePKBox,
    RemoveElement_RemoveShopPopover: () => RemoveShopPopover
  });
  var dq = document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  var dce = document.createElement.bind(document);
  function waitForElement(parentElement, selector, timeout = 5e3) {
    return new Promise((resolve, reject) => {
      const element = parentElement.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      const observer = new MutationObserver(() => {
        const element = parentElement.querySelector(selector);
        if (element) {
          clearTimeout(timeoutId);
          observer.disconnect();
          resolve(element);
        }
      });
      observer.observe(parentElement, {
        childList: true,
        subtree: true
      });
      const timeoutId = setTimeout(() => {
        observer.disconnect();
        reject(new Error(`无法在${timeout}毫秒内找到${parentElement.localName}的子节点${selector}`));
      }, timeout);
    });
  }
  var isTargetFrame = () => document.head.innerHTML.includes("BilibiliLive");
  var isSelfTopFrame = () => window.self === window.top;
  var topFrameDocumentElement = () => window.top?.document.documentElement;
  var defaultModuleStatus = {
    DailyTasks: {
      MainSiteTasks: {
        login: "",
        watch: "",
        coin: "",
        share: ""
      },
      LiveTasks: {
        medalTasks: {
          light: "",
          watch: ""
        }
      },
      OtherTasks: {
        silverToCoin: "",
        coinToSilver: "",
        getYearVipPrivilege: ""
      }
    }
  };
  var allAndTopFrameModuleNames = [];
  var useModuleStore = (0, pinia.defineStore)("module", () => {
    const moduleConfig = (0, vue.ref)(Storage.getModuleConfig());
    const moduleStatus = (0, vue.ref)(defaultModuleStatus);
    const moduleInstances = (0, vue.ref)({});
    const moduleReset = (0, vue.ref)({
      DailyTasks: {
        MainSiteTasks: {
          login: async () => {
            moduleStatus.value.DailyTasks.MainSiteTasks.login = "";
            moduleConfig.value.DailyTasks.MainSiteTasks.login._lastCompleteTime = 0;
            await rerunModule("Default_DailyRewardInfo", true);
            await rerunModule("DailyTask_MainSiteTask_LoginTask");
          },
          watch: async () => {
            moduleStatus.value.DailyTasks.MainSiteTasks.watch = "";
            moduleConfig.value.DailyTasks.MainSiteTasks.watch._lastCompleteTime = 0;
            await Promise.all([rerunModule("Default_DailyRewardInfo", true), rerunModule("Default_DynamicVideos", true)]);
            await rerunModule("DailyTask_MainSiteTask_WatchTask");
          },
          coin: async () => {
            moduleStatus.value.DailyTasks.MainSiteTasks.coin = "";
            moduleConfig.value.DailyTasks.MainSiteTasks.coin._lastCompleteTime = 0;
            await Promise.all([rerunModule("Default_DailyRewardInfo", true), rerunModule("Default_DynamicVideos", true)]);
            rerunModule("DailyTask_MainSiteTask_CoinTask");
          },
          share: async () => {
            moduleStatus.value.DailyTasks.MainSiteTasks.share = "";
            moduleConfig.value.DailyTasks.MainSiteTasks.share._lastCompleteTime = 0;
            await Promise.all([rerunModule("Default_DailyRewardInfo", true), rerunModule("Default_DynamicVideos", true)]);
            rerunModule("DailyTask_MainSiteTask_ShareTask");
          }
        },
        LiveTasks: {
          medalTasks: {
            light: () => {
              moduleStatus.value.DailyTasks.LiveTasks.medalTasks.light = "";
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.light._lastCompleteTime = 0;
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.light._todayLightLikes = 0;
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.light._lastLikeTime = 0;
              rerunModule("Default_FansMedals", true);
              rerunModule("DailyTask_LiveTask_LightTask");
            },
            watch: () => {
              moduleStatus.value.DailyTasks.LiveTasks.medalTasks.watch = "";
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.watch._lastCompleteTime = 0;
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.watch._lastWatchTime = 0;
              moduleConfig.value.DailyTasks.LiveTasks.medalTasks.watch._watchingProgress = {};
              rerunModule("Default_FansMedals", true);
              rerunModule("DailyTask_LiveTask_WatchTask");
            }
          }
        },
        OtherTasks: {
          silverToCoin: () => {
            moduleStatus.value.DailyTasks.OtherTasks.silverToCoin = "";
            moduleConfig.value.DailyTasks.OtherTasks.silverToCoin._lastCompleteTime = 0;
            rerunModule("DailyTask_OtherTask_SilverToCoinTask");
          },
          coinToSilver: () => {
            moduleStatus.value.DailyTasks.OtherTasks.coinToSilver = "";
            moduleConfig.value.DailyTasks.OtherTasks.coinToSilver._lastCompleteTime = 0;
            rerunModule("DailyTask_OtherTask_CoinToSilverTask");
          },
          getYearVipPrivilege: () => {
            moduleStatus.value.DailyTasks.OtherTasks.getYearVipPrivilege = "";
            moduleConfig.value.DailyTasks.OtherTasks.getYearVipPrivilege._nextReceiveTime = 0;
            rerunModule("DailyTask_OtherTask_GetYearVipPrivilegeTask");
          }
        }
      }
    });
    function _runModule(module, name) {
      const moduleInstance = new module(name);
      moduleInstances.value[name] = moduleInstance;
      if (moduleInstance.isEnabled()) return moduleInstance.run();
    }
    function _loadDefaultModules() {
      const cacheStore = useCacheStore();
      const promiseArray = [];
      for (const [name, module] of Object.entries(default_exports)) if (module.runOnMultiplePages || cacheStore.currentScriptType !== "Other") promiseArray.push(_runModule(module, name));
      return Promise.allSettled(promiseArray);
    }
    function loadModules(isOnTargetFrame) {
      const cacheStore = useCacheStore();
      if (isOnTargetFrame === "unknown") {
        for (const [name, module] of Object.entries(modules_exports)) if (module.onFrame === "all" || module.onFrame === "top" && isSelfTopFrame()) {
          if (module.runOnMultiplePages || cacheStore.currentScriptType !== "Other") {
            if (!module.runAfterDefault) {
              waitForMoment(module.runAt).then(() => _runModule(module, name));
              allAndTopFrameModuleNames.push(name);
            }
          }
        }
      } else {
        const moduleAfterDefault = {};
        const defaultModulesLoadingResult = _loadDefaultModules();
        for (const [name, module] of Object.entries(modules_exports)) if (module.onFrame === "target" || module.onFrame === "top" && isSelfTopFrame() && !allAndTopFrameModuleNames.includes(name) || module.onFrame === "all" && !allAndTopFrameModuleNames.includes(name)) {
          if (module.runOnMultiplePages || cacheStore.currentScriptType !== "Other") {
            if (module.runAfterDefault) moduleAfterDefault[name] = module;
            else waitForMoment(module.runAt).then(() => _runModule(module, name));
          }
        }
        defaultModulesLoadingResult.then((results) => {
          for (const result of results) if (result.status === "rejected") {
            const error = result.reason;
            if (error instanceof ModuleCriticalError) {
              new Logger(error.moduleName).error(error.message);
              return;
            } else if (error instanceof ModuleError) new Logger(error.moduleName).error(error.message);
            else {
              new Logger("ModuleStore").error(`意外错误: ${error.message}`);
              return;
            }
          }
          for (const [name, module] of Object.entries(moduleAfterDefault)) waitForMoment(module.runAt).then(() => _runModule(module, name));
        });
      }
    }
    function rerunModule(moduleName, ...args) {
      const moduleInstance = moduleInstances.value[moduleName];
      if (moduleInstance) {
        clearTimeout(moduleInstance.nextRunTimer);
        return moduleInstance.run(...args);
      } else throw new ModuleError("ModuleStore", `模块 ${moduleName} 不存在`);
    }
    (0, vue.watch)(moduleConfig, lodash.default.debounce((newModuleConfig) => Storage.setModuleConfig(newModuleConfig), 250, {
      leading: true,
      trailing: true
    }), { deep: true });
    (function clearStatus() {
      setTimeout(() => {
        deepestIterate(moduleStatus.value, (_value, path) => {
          lodash.default.set(moduleStatus.value, path, "");
        });
        const lightConfig = moduleConfig.value.DailyTasks.LiveTasks.medalTasks.light;
        lightConfig._todayLightLikes = 0;
        lightConfig._lastLikeTime = 0;
        clearStatus();
      }, delayToNextMoment(0, 0).ms);
    })();
    return {
      moduleConfig,
      moduleInstances,
      moduleReset,
      moduleStatus,
      loadModules,
      rerunModule
    };
  });
  var DEFAULT_CONFIG = {
    getPlayer: {
      interval: 200,
      timeout: 12e3
    },
    waitForLiveStatus: { interval: 1e4 }
  };
  var usePlayerStore = (0, pinia.defineStore)("player", () => {
    const player = (0, vue.ref)();
    const getPlayer = async (config = DEFAULT_CONFIG.getPlayer) => {
      lodash.default.defaults(config, DEFAULT_CONFIG.getPlayer);
      if (player.value) return player.value;
      const isPlayerAvailable = () => {
        return _unsafeWindow.livePlayer && Object.hasOwn(_unsafeWindow.livePlayer, "getPlayerInfo");
      };
      await waitForMoment("window-load");
      if (isPlayerAvailable()) {
        player.value = _unsafeWindow.livePlayer;
        return player.value;
      }
      return new Promise(async (resolve, reject) => {
        const findPlayerTimer = setInterval(() => {
          if (isPlayerAvailable()) {
            clearInterval(findPlayerTimer);
            clearTimeout(timeoutTimer);
            player.value = _unsafeWindow.livePlayer;
            resolve(player.value);
          }
        }, config.interval);
        const timeoutTimer = setTimeout(() => {
          clearInterval(findPlayerTimer);
          reject("等待播放器超时");
        }, config.timeout);
      });
    };
    const waitForLiveStatus = async (status, config = DEFAULT_CONFIG.waitForLiveStatus) => {
      lodash.default.defaults(config, DEFAULT_CONFIG.waitForLiveStatus);
      const player = await getPlayer();
      if (player.getPlayerInfo().liveStatus === status) {
        config.onImmediateSuccess?.();
        return true;
      }
      config.onNeedWait?.();
      return new Promise((resolve) => {
        const liveStatusTimer = setInterval(() => {
          if (player.getPlayerInfo().liveStatus === status) {
            clearTimeout(timeoutTimer);
            clearInterval(liveStatusTimer);
            resolve(true);
          }
        }, config.interval);
        const timeoutTimer = config.timeout && setTimeout(() => {
          clearInterval(liveStatusTimer);
          resolve(false);
        }, config.timeout);
      });
    };
    return {
      player,
      getPlayer,
      waitForLiveStatus
    };
  });
  var index2name = {
    MainSiteTasks: "主站任务",
    LiveTasks: "直播任务",
    OtherTasks: "其它任务",
    EnhanceExperience: "体验优化",
    RemoveElement: "移除元素",
    ScriptSettings: "设置"
  };
  var useUIStore = (0, pinia.defineStore)("ui", () => {
    const uiConfig = (0, vue.ref)(Storage.getUiConfig());
    const activeMenuName = (0, vue.computed)(() => index2name[uiConfig.value.activeMenuIndex]);
    const livePlayerRect = (0, vue.ref)({
      top: 0,
      left: 0,
      height: 0,
      width: 0
    });
    const windowScrollPosition = (0, vue.ref)({
      x: 0,
      y: 0
    });
    const panelStyle = (0, vue.computed)(() => ({
      top: `${livePlayerRect.value.top + windowScrollPosition.value.y}px`,
      left: `${livePlayerRect.value.left + windowScrollPosition.value.x}px`,
      height: `${livePlayerRect.value.height}px`,
      width: `${livePlayerRect.value.width * uiConfig.value.panelWidthPercent / 100}px`
    }));
    const isShowPanelButtonText = (0, vue.computed)(() => uiConfig.value.isShowPanel ? "隐藏控制面板" : "显示控制面板");
    const scrollBarHeight = (0, vue.computed)(() => `${livePlayerRect.value.height - 60}px`);
    function changeCollapse() {
      uiConfig.value.isCollapse = !uiConfig.value.isCollapse;
    }
    function changeShowPanel() {
      uiConfig.value.isShowPanel = !uiConfig.value.isShowPanel;
    }
    function setActiveMenuIndex(index) {
      uiConfig.value.activeMenuIndex = index;
    }
    (0, vue.watch)(uiConfig, lodash.default.debounce((newUiConfig) => Storage.setUiConfig(newUiConfig), 350), { deep: true });
    return {
      isShowPanelButtonText,
      activeMenuName,
      livePlayerRect,
      windowScrollPosition,
      panelStyle,
      scrollBarHeight,
      uiConfig,
      changeCollapse,
      changeShowPanel,
      setActiveMenuIndex
    };
  });
  var PanelAside_vue_vue_type_script_setup_true_lang_default = (0, vue.defineComponent)({
    __name: "PanelAside",
    setup(__props) {
      const uiStore = useUIStore();
      const items = [
        {
          icon: "Tasks",
          title: "每日任务",
          index: "DailyTasks",
          subs: [
            {
              title: "主站任务",
              index: "MainSiteTasks"
            },
            {
              title: "直播任务",
              index: "LiveTasks"
            },
            {
              title: "其它任务",
              index: "OtherTasks"
            }
          ]
        },
        {
          icon: "Monitor",
          title: "体验优化",
          index: "EnhanceExperience"
        },
        {
          icon: "Scissor",
          title: "移除元素",
          index: "RemoveElement"
        },
        {
          icon: "Setting",
          title: "设置",
          index: "ScriptSettings"
        }
      ];
      return (_ctx, _cache) => {
        const _component_el_icon = (0, vue.resolveComponent)("el-icon");
        const _component_el_menu_item = (0, vue.resolveComponent)("el-menu-item");
        const _component_el_sub_menu = (0, vue.resolveComponent)("el-sub-menu");
        const _component_el_menu = (0, vue.resolveComponent)("el-menu");
        return (0, vue.openBlock)(), (0, vue.createBlock)(_component_el_menu, {
          id: "aside-el-menu",
          "default-active": (0, vue.unref)(uiStore).uiConfig.activeMenuIndex,
          style: (0, vue.normalizeStyle)({ "min-height": (0, vue.unref)(uiStore).scrollBarHeight }),
          collapse: (0, vue.unref)(uiStore).uiConfig.isCollapse,
          "unique-opened": "",
          onSelect: _cache[0] || (_cache[0] = (index) => (0, vue.unref)(uiStore).setActiveMenuIndex(index))
        }, {
          default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(items, (item) => {
            return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, [item.subs ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_sub_menu, {
              key: item.index,
              index: item.index
            }, {
              title: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_icon, null, {
                default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(item.icon)))]),
                _: 2
              }, 1024), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(item.title), 1)]),
              default: (0, vue.withCtx)(() => [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(item.subs, (subItem) => {
                return (0, vue.openBlock)(), (0, vue.createBlock)(_component_el_menu_item, {
                  key: subItem.index,
                  index: subItem.index
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(subItem.title), 1)]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))]),
              _: 2
            }, 1032, ["index"])) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_menu_item, {
              key: item.index,
              index: item.index
            }, {
              title: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(item.title), 1)]),
              default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_icon, null, {
                default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(item.icon)))]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1032, ["index"]))], 64);
          }), 64))]),
          _: 1
        }, 8, [
          "default-active",
          "style",
          "collapse"
        ]);
      };
    }
  });
  var _plugin_vue_export_helper_default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) target[key] = val;
    return target;
  };
  var PanelAside_default = _plugin_vue_export_helper_default(PanelAside_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-db397d59"]]);
  var _hoisted_1$2 = { class: "title" };
  var PanelHeader_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
    __name: "PanelHeader",
    setup(__props) {
      const uiStore = useUIStore();
      return (_ctx, _cache) => {
        const _component_el_icon = (0, vue.resolveComponent)("el-icon");
        const _component_el_text = (0, vue.resolveComponent)("el-text");
        return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, [(0, vue.createElementVNode)("div", {
          class: "collapse-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => (0, vue.unref)(uiStore).changeCollapse && (0, vue.unref)(uiStore).changeCollapse(...args))
        }, [(0, vue.unref)(uiStore).uiConfig.isCollapse ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_icon, { key: 0 }, {
          default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Expand))]),
          _: 1
        })) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_icon, { key: 1 }, {
          default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Fold))]),
          _: 1
        }))]), (0, vue.createElementVNode)("div", _hoisted_1$2, [(0, vue.createVNode)(_component_el_text, {
          tag: "b",
          class: "header-big-text"
        }, {
          default: (0, vue.withCtx)(() => [..._cache[1] || (_cache[1] = [(0, vue.createTextVNode)("控制面板", -1)])]),
          _: 1
        }), (0, vue.createVNode)(_component_el_text, { class: "header-small-text" }, {
          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)((0, vue.unref)(uiStore).activeMenuName), 1)]),
          _: 1
        })])], 64);
      };
    }
  }), [["__scopeId", "data-v-848fd8cc"]]);
  var helpInfo = {
    DailyTasks: {
      MainSiteTasks: {
        login: {
          title: "每日登录",
          message: "完成主站的每日登录任务。"
        },
        watch: {
          title: "每日观看视频",
          message: (0, vue.h)("p", [(0, vue.h)("div", "完成主站的每日观看视频任务。"), (0, vue.h)("div", "从动态中选取视频观看，会产生观看历史记录。")])
        },
        coin: {
          title: "每日投币",
          message: (0, vue.h)("p", [(0, vue.h)("div", "完成主站的每日投币任务。"), (0, vue.h)("div", "从动态中选取视频投币，会根据你今天已经投过的币的数量计算还要投几个币。")])
        },
        share: {
          title: "每日分享视频",
          message: (0, vue.h)("p", [(0, vue.h)("div", "完成主站的每日分享视频任务。"), (0, vue.h)("div", "不会真的分享到某处。")])
        }
      },
      LiveTasks: {
        medalTasks: {
          list: {
            title: "黑白名单 / 排序模式",
            message: (0, vue.h)("p", [
              (0, vue.h)("div", "为了更精细地控制为哪些粉丝勋章执行点亮熄灭勋章和观看直播任务，你可以使用黑名单或白名单模式。"),
              (0, vue.h)("ul", [(0, vue.h)("li", [
                (0, vue.h)("span", "黑名单：仅为"),
                (0, vue.h)("strong", "不在"),
                (0, vue.h)("span", "名单中的粉丝勋章执行任务。")
              ]), (0, vue.h)("li", [
                (0, vue.h)("span", "白名单：仅为"),
                (0, vue.h)("strong", "在"),
                (0, vue.h)("span", "名单中的粉丝勋章执行任务。")
              ])]),
              (0, vue.h)("div", "点击【编辑名单】按钮，然后使用第一列的多选框即可编辑名单中的粉丝勋章。"),
              (0, vue.h)("div", "使用白名单模式时，点击【编辑粉丝勋章名单】窗口右下角的开关即可在【常规模式】和【排序模式】之间切换。"),
              (0, vue.h)("div", "在排序模式下，你可以调整脚本执行观看任务的粉丝勋章顺序。"),
              (0, vue.h)("ul", [(0, vue.h)("li", "使用鼠标拖拽表格中的行来调整顺序。"), (0, vue.h)("li", "拖拽行至表格的顶部和底部可以触发滚动。")])
            ])
          },
          light: {
            title: "点亮熄灭勋章",
            message: (0, vue.h)("p", [
              (0, vue.h)("div", "在你的每个已熄灭的粉丝勋章对应的直播间完成点亮任务，从而点亮粉丝勋章。"),
              (0, vue.h)("div", "根据直播间是否开播，脚本会自动选择点亮方式："),
              (0, vue.h)("ol", [(0, vue.h)("li", (0, vue.h)("p", [
                (0, vue.h)("strong", "点赞"),
                (0, vue.h)("div", "对于正在直播的房间，给直播间点赞约30次。"),
                (0, vue.h)("ul", [
                  (0, vue.h)("li", [(0, vue.h)("span", "点赞次数为略微超过任务要求的随机值。")]),
                  (0, vue.h)("li", [(0, vue.h)("span", "部分直播间无法完成该任务，原因未知。")]),
                  (0, vue.h)("li", [(0, vue.h)("span", "点赞为手动运行：打开点赞开关（或模块运行时）会在后台把可以点赞的直播间查好（已剔除已下播、点赞任务已完成的房间），之后点击【选择直播间点赞】直接展示结果，在粉丝勋章名单窗口里勾选要执行的房间即可。窗口会显示今日已点赞次数，以及每个房间的勋章等级、点亮状态和「点赞30次」任务进度。")]),
                  (0, vue.h)("li", [(0, vue.h)("span", "候选列表只在模块运行（含打开点赞开关、手动重跑）时检查一次，窗口反复打开或重复点按钮都不会重新探测；真正点赞时每个房间每一轮仍会重新确认直播状态与任务进度，已经下播或任务已完成的房间会被跳过。")])
                ])
              ])), (0, vue.h)("li", (0, vue.h)("p", [
                (0, vue.h)("strong", "发送弹幕"),
                (0, vue.h)("div", "对于未开播的房间，发送十条弹幕。"),
                (0, vue.h)("div", [
                  (0, vue.h)("div", "点击【编辑弹幕】按钮编辑要发送的弹幕，脚本会从中按顺序循环抽取弹幕发送。建议修改默认的弹幕。"),
                  (0, vue.h)("div", "部分直播间无法完成该任务，可能的原因有:"),
                  (0, vue.h)("ul", [
                    (0, vue.h)("li", "你被禁言了"),
                    (0, vue.h)("li", "发言有粉丝勋章等级要求"),
                    (0, vue.h)("li", "发送的弹幕包含屏蔽词"),
                    (0, vue.h)("li", [
                      (0, vue.h)("span", "特殊直播间（比如"),
                      (0, vue.h)("a", {
                        href: "https://live.bilibili.com/54",
                        rel: "noreferrer",
                        target: "_blank"
                      }, "54"),
                      (0, vue.h)("span", "）")
                    ])
                  ])
                ])
              ]))])
            ])
          },
          watch: {
            title: "观看直播",
            message: (0, vue.h)("p", [
              (0, vue.h)("div", "完成粉丝勋章的观看直播任务。"),
              (0, vue.h)("ul", [
                (0, vue.h)("li", "部分直播间因为没有设置直播分区导致任务无法完成。"),
                (0, vue.h)("li", "主播当前是否开播不会影响该任务的完成。"),
                (0, vue.h)("li", "根据目前规则，观看15分钟可点亮粉丝勋章，再观看25分钟即可获得全部30亲密度。"),
                (0, vue.h)("li", "由于计时存在误差，可以在目标基础上适当增加一些观看时长。")
              ]),
              (0, vue.h)("div", [(0, vue.h)("strong", "注意："), (0, vue.h)("span", "使用本功能时不能以任何方式观看直播（网页、APP、电视），否则可能无法获得任何亲密度。")])
            ])
          }
        }
      },
      OtherTasks: {
        silverToCoin: {
          title: "银瓜子换硬币",
          message: (0, vue.h)("p", [(0, vue.h)("div", "把银瓜子兑换为硬币。"), (0, vue.h)("div", "具体兑换规则请点击直播间页面的“立即充值→银瓜子商店”查看。")])
        },
        coinToSilver: {
          title: "硬币换银瓜子",
          message: (0, vue.h)("p", [(0, vue.h)("div", "把硬币兑换为银瓜子。"), (0, vue.h)("div", "具体兑换规则请点击直播间页面的“立即充值→银瓜子商店”查看。")])
        },
        getYearVipPrivilege: {
          title: "领取年度大会员权益",
          message: (0, vue.h)("p", [(0, vue.h)("div", "自动领取年度大会员权益。"), (0, vue.h)("div", [
            (0, vue.h)("span", "具体权益请前往"),
            (0, vue.h)("a", {
              href: "https://account.bilibili.com/account/big/myPackage",
              rel: "noreferrer",
              target: "_blank"
            }, "卡券包"),
            (0, vue.h)("span", "查看。")
          ])])
        }
      }
    },
    EnhanceExperience: {
      switchLiveStreamQuality: {
        title: "自动切换画质",
        message: (0, vue.h)("p", [(0, vue.h)("div", "打开直播间后自动把播放器切换到目标画质。"), (0, vue.h)("div", "如果目标画质不存在，先查找无HDR版本的画质，仍没有则使用B站的默认画质。")])
      },
      banp2p: {
        title: "禁用P2P",
        message: (0, vue.h)("p", [(0, vue.h)("div", "禁用直播流的P2P上传/下载"), (0, vue.h)("div", "B站使用WebRTC技术把许多浏览器点对点（P2P）地连接起来，实现视频流和音频流的传输。这样做是为了减轻B站服务器的压力，但是会占用你一定的上行带宽（大约几百kb每秒）。如果你不想被占用上行带宽，可以开启该功能。若开启后发现观看直播时有明显卡顿，请关闭。")])
      },
      noReport: {
        title: "拦截日志数据上报",
        message: (0, vue.h)("p", [(0, vue.h)("div", "禁止B站上报日志数据。"), (0, vue.h)("div", [
          (0, vue.h)("span", "B站会实时地上报大量日志信息，比如直播观看情况、代码报错等等。开启本功能后绝大多数日志上报都会被劫持或拦截并返回一个成功的响应。相比于带有广告拦截功能的浏览器拓展，比如"),
          (0, vue.h)("a", {
            href: "https://github.com/uBlockOrigin/uBOL-home",
            rel: "noreferrer",
            target: "_blank"
          }, "uBlock Origin Lite"),
          (0, vue.h)("span", "，本功能会通过劫持的方式从根源上阻止部分日志上报，并模拟成功的响应来尽可能地减少B站代码的报错。理论上来说这样做会有更好的性能表现。")
        ])])
      },
      noSleep: {
        title: "屏蔽挂机检测",
        message: (0, vue.h)("p", [(0, vue.h)("div", "屏蔽B站直播间的挂机检测。"), (0, vue.h)("div", "如果长时间没有操作，会提示“检测到您已离开当前屏幕，倒计时后即将暂停播放”。此外切换标签页或把浏览器切到后台导致直播间页面不可见时，播放器可能会自动切换到低画质或暂停播放。开启本功能即可避免这类情况。")])
      },
      invisibility: {
        title: "隐身入场",
        message: (0, vue.h)("p", [(0, vue.h)("div", "进入直播间时其他人不会收到提示，但还是会出现在高能用户榜单上。")])
      }
    },
    RemoveElement: {
      removePKBox: {
        title: "移除大乱斗元素",
        message: "移除直播间的大乱斗元素（进度条，弹出的提示等）。"
      },
      removeLiveWaterMark: {
        title: "移除直播间水印",
        message: "移除直播画面左上角的水印。"
      },
      removeShopPopover: {
        title: "移除直播间小橙车弹窗",
        message: "移除直播间左上角的小橙车弹窗。"
      },
      removeGameParty: {
        title: "移除直播间幻星派对标志",
        message: "移除直播间右下角的幻星派对标志。"
      },
      removeGiftPopover: {
        title: "移除礼物赠送提示弹窗",
        message: "移除直播间右下角的礼物赠送提示弹窗（赠送一个牛蛙牛蛙支持主播）。"
      },
      removeMicPopover: {
        title: "移除连麦状态提示",
        message: "移除直播间左上角的连麦提示弹窗（连线功能只能在手机端使用，快使用手机登录吧～）。"
      },
      removeComboCard: {
        title: "移除直播间相同弹幕连续提示",
        message: "移除直播间相同弹幕连续提示。"
      },
      removeHeaderStuff: {
        title: "移除直播画面上方杂项",
        message: "移除直播画面上方各种杂七杂八的东西，比如排行榜、活动轮播图等。"
      },
      removeFlipView: {
        title: "移除礼物栏下方广告",
        message: "移除礼物栏下方广告。"
      },
      removeLiveMosaic: {
        title: "移除直播间马赛克",
        message: "移除部分直播间特有的马赛克。"
      }
    }
  };
  var MainSiteTasks_default = (0, vue.defineComponent)({
    __name: "MainSiteTasks",
    setup(__props) {
      const moduleStore = useModuleStore();
      const config = moduleStore.moduleConfig.DailyTasks.MainSiteTasks;
      const status = moduleStore.moduleStatus.DailyTasks.MainSiteTasks;
      const reset = moduleStore.moduleReset.DailyTasks.MainSiteTasks;
      return (_ctx, _cache) => {
        const _component_el_switch = (0, vue.resolveComponent)("el-switch");
        const _component_Info = (0, vue.resolveComponent)("Info");
        const _component_TaskStatus = (0, vue.resolveComponent)("TaskStatus");
        const _component_el_space = (0, vue.resolveComponent)("el-space");
        const _component_el_row = (0, vue.resolveComponent)("el-row");
        const _component_el_option = (0, vue.resolveComponent)("el-option");
        const _component_el_select = (0, vue.resolveComponent)("el-select");
        const _component_el_text = (0, vue.resolveComponent)("el-text");
        const _component_el_divider = (0, vue.resolveComponent)("el-divider");
        const _component_el_link = (0, vue.resolveComponent)("el-link");
        return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [
          (0, vue.createVNode)(_component_el_row, null, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
              wrap: "",
              size: [8, 0]
            }, {
              default: (0, vue.withCtx)(() => [
                (0, vue.createVNode)(_component_el_switch, {
                  modelValue: (0, vue.unref)(config).login.enabled,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(config).login.enabled = $event),
                  "active-text": "每日登录"
                }, null, 8, ["modelValue"]),
                (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.MainSiteTasks.login }, null, 8, ["item"]),
                (0, vue.createVNode)(_component_TaskStatus, {
                  status: (0, vue.unref)(status).login,
                  onClick: (0, vue.unref)(reset).login
                }, null, 8, ["status", "onClick"])
              ]),
              _: 1
            })]),
            _: 1
          }),
          (0, vue.createVNode)(_component_el_row, null, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
              wrap: "",
              size: [8, 0]
            }, {
              default: (0, vue.withCtx)(() => [
                (0, vue.createVNode)(_component_el_switch, {
                  modelValue: (0, vue.unref)(config).watch.enabled,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(config).watch.enabled = $event),
                  "active-text": "每日观看视频"
                }, null, 8, ["modelValue"]),
                (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.MainSiteTasks.watch }, null, 8, ["item"]),
                (0, vue.createVNode)(_component_TaskStatus, {
                  status: (0, vue.unref)(status).watch,
                  onClick: (0, vue.unref)(reset).watch
                }, null, 8, ["status", "onClick"])
              ]),
              _: 1
            })]),
            _: 1
          }),
          (0, vue.createVNode)(_component_el_row, null, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
              wrap: "",
              size: [8, 0]
            }, {
              default: (0, vue.withCtx)(() => [
                (0, vue.createVNode)(_component_el_switch, {
                  modelValue: (0, vue.unref)(config).coin.enabled,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(config).coin.enabled = $event),
                  "active-text": "每日投币"
                }, null, 8, ["modelValue"]),
                (0, vue.createVNode)(_component_el_select, {
                  modelValue: (0, vue.unref)(config).coin.num,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (0, vue.unref)(config).coin.num = $event),
                  placeholder: "Select",
                  style: { "width": "64px" }
                }, {
                  default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(5, (i) => {
                    return (0, vue.createVNode)(_component_el_option, {
                      key: i,
                      label: i,
                      value: i
                    }, null, 8, ["label", "value"]);
                  }), 64))]),
                  _: 1
                }, 8, ["modelValue"]),
                (0, vue.createVNode)(_component_el_text, null, {
                  default: (0, vue.withCtx)(() => [..._cache[5] || (_cache[5] = [(0, vue.createTextVNode)("个", -1)])]),
                  _: 1
                }),
                (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.MainSiteTasks.coin }, null, 8, ["item"]),
                (0, vue.createVNode)(_component_TaskStatus, {
                  status: (0, vue.unref)(status).coin,
                  onClick: (0, vue.unref)(reset).coin
                }, null, 8, ["status", "onClick"])
              ]),
              _: 1
            })]),
            _: 1
          }),
          (0, vue.createVNode)(_component_el_row, null, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
              wrap: "",
              size: [8, 0]
            }, {
              default: (0, vue.withCtx)(() => [
                (0, vue.createVNode)(_component_el_switch, {
                  modelValue: (0, vue.unref)(config).share.enabled,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0, vue.unref)(config).share.enabled = $event),
                  "active-text": "每日分享视频"
                }, null, 8, ["modelValue"]),
                (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.MainSiteTasks.share }, null, 8, ["item"]),
                (0, vue.createVNode)(_component_TaskStatus, {
                  status: (0, vue.unref)(status).share,
                  onClick: (0, vue.unref)(reset).share
                }, null, 8, ["status", "onClick"])
              ]),
              _: 1
            })]),
            _: 1
          }),
          (0, vue.createVNode)(_component_el_divider),
          (0, vue.createVNode)(_component_el_row, null, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_text, null, {
              default: (0, vue.withCtx)(() => [
                (0, vue.createVNode)(_component_el_text, null, {
                  default: (0, vue.withCtx)(() => [..._cache[6] || (_cache[6] = [(0, vue.createTextVNode)("  主站每日任务的完成情况可在", -1)])]),
                  _: 1
                }),
                (0, vue.createVNode)(_component_el_link, {
                  rel: "noreferrer",
                  type: "primary",
                  href: "https://account.bilibili.com/account/home",
                  target: "_blank",
                  style: { "vertical-align": "unset" }
                }, {
                  default: (0, vue.withCtx)(() => [..._cache[7] || (_cache[7] = [(0, vue.createTextVNode)("个人中心", -1)])]),
                  _: 1
                }),
                (0, vue.createVNode)(_component_el_text, null, {
                  default: (0, vue.withCtx)(() => [..._cache[8] || (_cache[8] = [(0, vue.createTextVNode)("查看。", -1)])]),
                  _: 1
                }),
                (0, vue.createVNode)(_component_el_text, null, {
                  default: (0, vue.withCtx)(() => [..._cache[9] || (_cache[9] = [(0, vue.createTextVNode)("数据更新可能有一定的延时。", -1)])]),
                  _: 1
                })
              ]),
              _: 1
            })]),
            _: 1
          })
        ]);
      };
    }
  });
  var _hoisted_1$1 = { class: "avatar-wrap" };
  var __default__ = (0, vue.defineComponent)({
    components: {
      MainSiteTasks: MainSiteTasks_default,
      LiveTasks: _plugin_vue_export_helper_default((0, vue.defineComponent)({
        __name: "LiveTasks",
        setup(__props) {
          const moduleStore = useModuleStore();
          const biliStore = useBiliStore();
          const uiStore = useUIStore();
          const medalTableMaxHeight = screen.height * .55;
          const danmuTableMaxHeight = screen.height * .5;
          const config = moduleStore.moduleConfig.DailyTasks.LiveTasks;
          const status = moduleStore.moduleStatus.DailyTasks.LiveTasks;
          const reset = moduleStore.moduleReset.DailyTasks.LiveTasks;
          const medalDanmuPanelVisible = (0, vue.ref)(false);
          const danmuTableData = (0, vue.computed)(() => config.medalTasks.light.danmuList.map((danmu) => {
            return { content: danmu };
          }));
          const handleEditDanmu = (index, row) => {
            element_plus.ElMessageBox.prompt("请输入弹幕内容", "修改弹幕", {
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              inputPattern: /^.{1,30}$/,
              inputErrorMessage: "弹幕内容不得为空且长度不能超过30",
              inputValue: row.content,
              lockScroll: false
            }).then(({ value }) => {
              config.medalTasks.light.danmuList[index] = value;
            }).catch(() => { });
          };
          const handleDeleteDanmu = (index) => {
            if (config.medalTasks.light.danmuList.length === 1) {
              element_plus.ElMessage.warning({
                message: "至少要有一条弹幕",
                appendTo: ".el-dialog"
              });
              return;
            }
            config.medalTasks.light.danmuList.splice(index, 1);
          };
          const handleAddDanmu = () => {
            element_plus.ElMessageBox.prompt("请输入新增的弹幕内容", "新增弹幕", {
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              inputPattern: /^.{1,30}$/,
              inputErrorMessage: "弹幕内容不得为空且长度不能超过30",
              lockScroll: false
            }).then(({ value }) => {
              config.medalTasks.light.danmuList.push(value);
            }).catch(() => { });
          };
          const medalInfoPanelVisible = (0, vue.ref)(false);
          const medalInfoPanelMode = (0, vue.ref)("list");
          const isLikeMode = (0, vue.computed)(() => medalInfoPanelMode.value === "like");
          const medalInfoTableData = (0, vue.computed)({
            get() {
              const medals = biliStore.filteredFansMedals.map((medal) => ({
                avatar: medal.anchor_info.avatar,
                nick_name: medal.anchor_info.nick_name,
                medal_name: medal.medal.medal_name,
                medal_level: medal.medal.level,
                roomid: medal.room_info.room_id,
                is_lighted: medal.medal.is_lighted === 1
              }));
              if (uiStore.uiConfig.medalInfoPanelSortMode) {
                const filteredMedals = medals.filter((medal) => config.medalTasks.isWhiteList ? config.medalTasks.roomidList.includes(medal.roomid) : !config.medalTasks.roomidList.includes(medal.roomid));
                const orderMap = arrayToMap(config.medalTasks.roomidList);
                return filteredMedals.sort((a, b) => orderMap.get(a.roomid) - orderMap.get(b.roomid));
              }
              return medals;
            },
            set(newValue) {
              config.medalTasks.roomidList = newValue.map((row) => row.roomid);
            }
          });
          const medalTableData = (0, vue.computed)({
            get() {
              return isLikeMode.value ? likeCandidates.value : medalInfoTableData.value;
            },
            set(rows) {
              if (!isLikeMode.value) medalInfoTableData.value = rows;
            }
          });
          const medalInfoLoading = (0, vue.ref)(false);
          const handleEditList = async () => {
            medalInfoPanelMode.value = "list";
            medalInfoPanelVisible.value = true;
            await (0, vue.nextTick)();
            medalInfoTableRef.value?.clearSelection();
            if (!biliStore.fansMedals) {
              medalInfoLoading.value = true;
              (0, vue.watch)(medalInfoTableData, (newData) => {
                (0, vue.nextTick)(() => {
                  initSelection(newData);
                  medalInfoLoading.value = false;
                });
              }, { once: true });
              if (!biliStore.fansMedalsStatus) moduleStore.rerunModule("Default_FansMedals", true);
              return;
            }
            initSelection(medalInfoTableData.value);
          };
          const medalInfoTableRef = (0, vue.ref)();
          const initSelection = (rows) => {
            if (rows && !uiStore.uiConfig.medalInfoPanelSortMode) config.medalTasks.roomidList.forEach((roomid, index) => {
              const row = rows.find((row) => row.roomid === roomid);
              if (row) medalInfoTableRef.value?.toggleRowSelection(row, true);
              else config.medalTasks.roomidList.splice(index, 1);
            });
          };
          function handleSelect(selection) {
            if (isLikeMode.value) {
              likeSelection.value = selection;
              return;
            }
            config.medalTasks.roomidList = selection.map((row) => row.roomid);
          }
          function handleRowClick(row) {
            if (!isLikeMode.value && uiStore.uiConfig.medalInfoPanelSortMode) return;
            medalInfoTableRef.value?.toggleRowSelection(row);
            const selection = medalInfoTableRef.value?.getSelectionRows() ?? [];
            if (isLikeMode.value) likeSelection.value = selection;
            else config.medalTasks.roomidList = selection.map((row) => row.roomid);
          }
          const manualLikeLoading = (0, vue.ref)(false);
          const likeCandidates = (0, vue.ref)([]);
          const likeTodayLikes = (0, vue.ref)(0);
          const likeDailyLimit = (0, vue.ref)(0);
          const likeSelection = (0, vue.ref)([]);
          function getLightTaskInstance() {
            return moduleStore.moduleInstances["DailyTask_LiveTask_LightTask"];
          }
          const handleManualLike = async () => {
            const instance = getLightTaskInstance();
            if (!instance) {
              element_plus.ElMessage.warning("点赞模块尚未加载，请稍后再试");
              return;
            }
            if (instance.isManualLikeRunning) {
              element_plus.ElMessage.warning("点赞任务正在运行中，请等待当前任务结束");
              return;
            }
            if (manualLikeLoading.value) return;
            manualLikeLoading.value = true;
            try {
              const snapshot = await instance.collectLikeCandidates();
              if (!snapshot) return;
              if (snapshot.candidates.length === 0) {
                element_plus.ElMessage.info("没有可以点赞的直播间");
                return;
              }
              likeCandidates.value = snapshot.candidates;
              likeTodayLikes.value = snapshot.todayLikes;
              likeDailyLimit.value = snapshot.dailyLimit;
              likeSelection.value = [];
              medalInfoPanelMode.value = "like";
              medalInfoPanelVisible.value = true;
              await (0, vue.nextTick)();
              medalInfoTableRef.value?.clearSelection();
              likeCandidates.value.filter((row) => !row.reachFreeIntimacyLimit).forEach((row) => {
                medalInfoTableRef.value?.toggleRowSelection(row, true);
              });
            } catch (error) {
              element_plus.ElMessage.error(`获取可点赞直播间失败：${error.message}`);
            } finally {
              manualLikeLoading.value = false;
            }
          };
          const handleConfirmLikeSelection = async () => {
            const instance = getLightTaskInstance();
            if (!instance) {
              medalInfoPanelVisible.value = false;
              return;
            }
            const roomids = likeSelection.value.map((row) => row.roomid);
            medalInfoPanelVisible.value = false;
            try {
              await instance.likeRooms(roomids);
            } catch (error) {
              element_plus.ElMessage.error(`点赞任务执行出错：${error.message}`);
            }
          };
          const handleCancelLikeSelection = () => {
            medalInfoPanelVisible.value = false;
          };
          const handleSelectionChange = (rows) => {
            if (isLikeMode.value) likeSelection.value = rows;
          };
          const hasLikeProgress = (row) => typeof row.likeProgress === "number" && (row.likeProgressTotal ?? 0) > 0;
          const likePercent = (row) => {
            const total = row.likeProgressTotal ?? 0;
            if (!hasLikeProgress(row) || total <= 0) return 0;
            return Math.min(100, Math.round(row.likeProgress / total * 100));
          };
          (0, vue.watch)(() => config.medalTasks.light.likeEnabled, (newVal, oldVal) => {
            if (!newVal || oldVal) return;
            if (moduleStore.moduleStatus.DailyTasks.LiveTasks.medalTasks.light === "running") return;
            if (!moduleStore.moduleInstances["DailyTask_LiveTask_LightTask"]) return;
            moduleStore.rerunModule("DailyTask_LiveTask_LightTask");
          });
          (0, vue.watch)(() => config.medalTasks.light.danmuEnabled, (newVal, oldVal) => {
            if (!newVal || oldVal) return;
            if (moduleStore.moduleStatus.DailyTasks.LiveTasks.medalTasks.light === "running") return;
            if (!moduleStore.moduleInstances["DailyTask_LiveTask_LightTask"]) return;
            moduleStore.rerunModule("DailyTask_LiveTask_LightTask");
          });
          (0, vue.watch)(() => config.medalTasks.watch.enabled, (newVal, oldVal) => {
            if (!newVal || oldVal) return;
            if (moduleStore.moduleStatus.DailyTasks.LiveTasks.medalTasks.watch === "running") return;
            if (!moduleStore.moduleInstances["DailyTask_LiveTask_WatchTask"]) return;
            moduleStore.rerunModule("DailyTask_LiveTask_WatchTask");
          });
          return (_ctx, _cache) => {
            const _component_el_switch = (0, vue.resolveComponent)("el-switch");
            const _component_el_button = (0, vue.resolveComponent)("el-button");
            const _component_Info = (0, vue.resolveComponent)("Info");
            const _component_TaskStatus = (0, vue.resolveComponent)("TaskStatus");
            const _component_el_space = (0, vue.resolveComponent)("el-space");
            const _component_el_row = (0, vue.resolveComponent)("el-row");
            const _component_el_option = (0, vue.resolveComponent)("el-option");
            const _component_el_select = (0, vue.resolveComponent)("el-select");
            const _component_el_text = (0, vue.resolveComponent)("el-text");
            const _component_el_divider = (0, vue.resolveComponent)("el-divider");
            const _component_el_link = (0, vue.resolveComponent)("el-link");
            const _component_el_table_column = (0, vue.resolveComponent)("el-table-column");
            const _component_el_dialog = (0, vue.resolveComponent)("el-dialog");
            const _component_el_image = (0, vue.resolveComponent)("el-image");
            const _component_el_tag = (0, vue.resolveComponent)("el-tag");
            const _component_el_progress = (0, vue.resolveComponent)("el-progress");
            const _directive_loading = (0, vue.resolveDirective)("loading");
            return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).medalTasks.light.enabled,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(config).medalTasks.light.enabled = $event),
                      "active-text": "点亮熄灭勋章"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).medalTasks.light.likeEnabled,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(config).medalTasks.light.likeEnabled = $event),
                      "active-text": "点赞（手动）",
                      disabled: !(0, vue.unref)(config).medalTasks.light.enabled
                    }, null, 8, ["modelValue", "disabled"]),
                    (0, vue.createVNode)(_component_el_button, {
                      type: "primary",
                      size: "small",
                      icon: (0, vue.unref)(_element_plus_icons_vue.Check),
                      loading: manualLikeLoading.value,
                      disabled: !(0, vue.unref)(config).medalTasks.light.enabled || !(0, vue.unref)(config).medalTasks.light.likeEnabled,
                      onClick: handleManualLike
                    }, {
                      default: (0, vue.withCtx)(() => [..._cache[15] || (_cache[15] = [(0, vue.createTextVNode)("选择直播间点赞 ", -1)])]),
                      _: 1
                    }, 8, [
                      "icon",
                      "loading",
                      "disabled"
                    ]),
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).medalTasks.light.danmuEnabled,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(config).medalTasks.light.danmuEnabled = $event),
                      "active-text": "弹幕",
                      disabled: !(0, vue.unref)(config).medalTasks.light.enabled
                    }, null, 8, ["modelValue", "disabled"]),
                    (0, vue.createVNode)(_component_el_button, {
                      type: "primary",
                      size: "small",
                      icon: (0, vue.unref)(_element_plus_icons_vue.Edit),
                      onClick: _cache[3] || (_cache[3] = ($event) => medalDanmuPanelVisible.value = !medalDanmuPanelVisible.value)
                    }, {
                      default: (0, vue.withCtx)(() => [..._cache[16] || (_cache[16] = [(0, vue.createTextVNode)("编辑弹幕 ", -1)])]),
                      _: 1
                    }, 8, ["icon"]),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.LiveTasks.medalTasks.light }, null, 8, ["item"]),
                    (0, vue.createVNode)(_component_TaskStatus, {
                      status: (0, vue.unref)(status).medalTasks.light,
                      onClick: (0, vue.unref)(reset).medalTasks.light
                    }, null, 8, ["status", "onClick"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).medalTasks.watch.enabled,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0, vue.unref)(config).medalTasks.watch.enabled = $event),
                      "active-text": "观看直播"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_select, {
                      modelValue: (0, vue.unref)(config).medalTasks.watch.time,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (0, vue.unref)(config).medalTasks.watch.time = $event),
                      placeholder: "Select",
                      style: { "width": "70px" }
                    }, {
                      default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(12, (i) => {
                        return (0, vue.createVNode)(_component_el_option, {
                          key: i,
                          label: i * 5,
                          value: i * 5
                        }, null, 8, ["label", "value"]);
                      }), 64))]),
                      _: 1
                    }, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_text, null, {
                      default: (0, vue.withCtx)(() => [..._cache[17] || (_cache[17] = [(0, vue.createTextVNode)("分钟 / 直播间", -1)])]),
                      _: 1
                    }),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.LiveTasks.medalTasks.watch }, null, 8, ["item"]),
                    (0, vue.createVNode)(_component_TaskStatus, {
                      status: (0, vue.unref)(status).medalTasks.watch,
                      onClick: (0, vue.unref)(reset).medalTasks.watch
                    }, null, 8, ["status", "onClick"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).medalTasks.isWhiteList,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => (0, vue.unref)(config).medalTasks.isWhiteList = $event),
                      "active-text": "白名单",
                      "inactive-text": "黑名单",
                      onChange: _cache[7] || (_cache[7] = (val) => !val && ((0, vue.unref)(uiStore).uiConfig.medalInfoPanelSortMode = false))
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_button, {
                      type: "primary",
                      size: "small",
                      icon: (0, vue.unref)(_element_plus_icons_vue.Edit),
                      onClick: handleEditList
                    }, {
                      default: (0, vue.withCtx)(() => [..._cache[18] || (_cache[18] = [(0, vue.createTextVNode)("编辑名单 ", -1)])]),
                      _: 1
                    }, 8, ["icon"]),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.LiveTasks.medalTasks.list }, null, 8, ["item"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_divider),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [
                  (0, vue.createVNode)(_component_el_text, null, {
                    default: (0, vue.withCtx)(() => [..._cache[19] || (_cache[19] = [(0, vue.createTextVNode)("直播任务相关信息可在", -1)])]),
                    _: 1
                  }),
                  (0, vue.createVNode)(_component_el_link, {
                    rel: "noreferrer",
                    type: "primary",
                    href: "https://link.bilibili.com/p/help/index#/audience-fans-medal",
                    target: "_blank"
                  }, {
                    default: (0, vue.withCtx)(() => [..._cache[20] || (_cache[20] = [(0, vue.createTextVNode)("帮助中心 ", -1)])]),
                    _: 1
                  }),
                  (0, vue.createVNode)(_component_el_text, null, {
                    default: (0, vue.withCtx)(() => [..._cache[21] || (_cache[21] = [(0, vue.createTextVNode)("查看。", -1)])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _cache[28] || (_cache[28] = (0, vue.createElementVNode)("br", null, null, -1)),
              (0, vue.createVNode)(_component_el_dialog, {
                modelValue: medalDanmuPanelVisible.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => medalDanmuPanelVisible.value = $event),
                title: "编辑弹幕内容",
                "lock-scroll": false,
                width: "40%"
              }, {
                footer: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_button, {
                  type: "primary",
                  onClick: handleAddDanmu
                }, {
                  default: (0, vue.withCtx)(() => [..._cache[24] || (_cache[24] = [(0, vue.createTextVNode)("新增弹幕", -1)])]),
                  _: 1
                })]),
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(element_plus.ElTable), {
                  data: danmuTableData.value,
                  "max-height": danmuTableMaxHeight
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_table_column, {
                      type: "index",
                      width: "80"
                    }),
                    (0, vue.createVNode)(_component_el_table_column, {
                      prop: "content",
                      label: "弹幕内容"
                    }),
                    (0, vue.createVNode)(_component_el_table_column, {
                      label: "操作",
                      width: "220",
                      align: "center"
                    }, {
                      default: (0, vue.withCtx)((scope) => [(0, vue.createVNode)(_component_el_button, {
                        text: "",
                        icon: (0, vue.unref)(_element_plus_icons_vue.Edit),
                        onClick: ($event) => handleEditDanmu(scope.$index, scope.row)
                      }, {
                        default: (0, vue.withCtx)(() => [..._cache[22] || (_cache[22] = [(0, vue.createTextVNode)(" 修改 ", -1)])]),
                        _: 1
                      }, 8, ["icon", "onClick"]), (0, vue.createVNode)(_component_el_button, {
                        text: "",
                        icon: (0, vue.unref)(_element_plus_icons_vue.Delete),
                        type: "danger",
                        onClick: ($event) => handleDeleteDanmu(scope.$index)
                      }, {
                        default: (0, vue.withCtx)(() => [..._cache[23] || (_cache[23] = [(0, vue.createTextVNode)(" 删除 ", -1)])]),
                        _: 1
                      }, 8, ["icon", "onClick"])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])]),
                _: 1
              }, 8, ["modelValue"]),
              (0, vue.createVNode)(_component_el_dialog, {
                modelValue: medalInfoPanelVisible.value,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => medalInfoPanelVisible.value = $event),
                title: isLikeMode.value ? "选择要点赞的直播间" : "编辑粉丝勋章名单",
                "lock-scroll": false,
                "close-on-click-modal": !isLikeMode.value,
                width: isLikeMode.value ? "85%" : "65%"
              }, {
                footer: (0, vue.withCtx)(() => [isLikeMode.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createVNode)(_component_el_button, { onClick: _cache[11] || (_cache[11] = ($event) => handleCancelLikeSelection()) }, {
                  default: (0, vue.withCtx)(() => [..._cache[27] || (_cache[27] = [(0, vue.createTextVNode)("取消", -1)])]),
                  _: 1
                }), (0, vue.createVNode)(_component_el_button, {
                  type: "primary",
                  disabled: likeSelection.value.length === 0,
                  onClick: handleConfirmLikeSelection
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)(" 开始点赞（" + (0, vue.toDisplayString)(likeSelection.value.length) + "） ", 1)]),
                  _: 1
                }, 8, ["disabled"])], 64)) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_switch, {
                  key: 1,
                  modelValue: (0, vue.unref)(uiStore).uiConfig.medalInfoPanelSortMode,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => (0, vue.unref)(uiStore).uiConfig.medalInfoPanelSortMode = $event),
                  disabled: !(0, vue.unref)(config).medalTasks.isWhiteList,
                  "inactive-text": "常规模式",
                  "active-text": "排序模式",
                  onChange: _cache[13] || (_cache[13] = (val) => !val && (0, vue.nextTick)(() => initSelection(medalInfoTableData.value)))
                }, null, 8, ["modelValue", "disabled"]))]),
                default: (0, vue.withCtx)(() => [isLikeMode.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_text, {
                  key: 0,
                  type: "info",
                  class: "like-summary"
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)(" 共 " + (0, vue.toDisplayString)(likeCandidates.value.length) + " 个直播间可以点赞；今日已点亮勋章点赞 " + (0, vue.toDisplayString)(likeTodayLikes.value) + " 次（上限 " + (0, vue.toDisplayString)(likeDailyLimit.value) + "，未点亮勋章的点赞不计数、不受限）。亲密度储蓄已满的勋章标记为【已满】并默认不勾选，需要时手动勾上。勾选后点击【开始点赞】，关闭窗口视为取消。 ", 1)]),
                  _: 1
                })) : (0, vue.createCommentVNode)("", true), (0, vue.createVNode)((0, vue.unref)(vue_draggable_plus.VueDraggable), {
                  modelValue: medalTableData.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => medalTableData.value = $event),
                  target: "#draggable-fans-medal-table table tbody",
                  disabled: isLikeMode.value || !(0, vue.unref)(uiStore).uiConfig.medalInfoPanelSortMode,
                  animation: 150,
                  "scroll-sensitivity": 36,
                  "scroll-speed": 8
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(element_plus.ElTable), {
                    id: "draggable-fans-medal-table",
                    ref_key: "medalInfoTableRef",
                    ref: medalInfoTableRef,
                    data: medalTableData.value,
                    "max-height": medalTableMaxHeight,
                    "empty-text": "没有粉丝勋章",
                    "row-key": (row) => row.roomid.toString(),
                    onSelect: handleSelect,
                    onSelectAll: handleSelect,
                    onSelectionChange: handleSelectionChange,
                    onRowClick: handleRowClick
                  }, {
                    default: (0, vue.withCtx)(() => [
                      isLikeMode.value || !(0, vue.unref)(uiStore).uiConfig.medalInfoPanelSortMode ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_table_column, {
                        key: 0,
                        type: "selection",
                        align: "center",
                        width: "60"
                      })) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_table_column, {
                        key: 1,
                        type: "index",
                        align: "center",
                        width: "60"
                      })),
                      (0, vue.createVNode)(_component_el_table_column, {
                        prop: "avatar",
                        label: "头像",
                        width: "90"
                      }, {
                        default: (0, vue.withCtx)((scope) => [(0, vue.createElementVNode)("div", _hoisted_1$1, [(0, vue.createVNode)(_component_el_image, {
                          src: scope.row.avatar,
                          loading: "lazy",
                          referrerpolicy: "origin",
                          class: "avatar"
                        }, {
                          error: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_image, {
                            src: "//i0.hdslb.com/bfs/face/member/noface.jpg",
                            referrerpolicy: "origin",
                            class: "avatar"
                          })]),
                          _: 1
                        }, 8, ["src"])])]),
                        _: 1
                      }),
                      (0, vue.createVNode)(_component_el_table_column, {
                        prop: "nick_name",
                        label: "昵称",
                        "min-width": "110"
                      }),
                      (0, vue.createVNode)(_component_el_table_column, {
                        prop: "medal_name",
                        label: "粉丝勋章",
                        "min-width": "100"
                      }),
                      (0, vue.createVNode)(_component_el_table_column, {
                        prop: "medal_level",
                        label: "等级",
                        width: "70",
                        align: "center"
                      }),
                      (0, vue.createVNode)(_component_el_table_column, {
                        label: "点亮状态",
                        width: "90",
                        align: "center"
                      }, {
                        default: (0, vue.withCtx)((scope) => [(0, vue.createVNode)(_component_el_tag, {
                          type: scope.row.is_lighted ? "success" : "info",
                          size: "small",
                          effect: "plain"
                        }, {
                          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(scope.row.is_lighted ? "已点亮" : "未点亮"), 1)]),
                          _: 2
                        }, 1032, ["type"])]),
                        _: 1
                      }),
                      isLikeMode.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_table_column, {
                        key: 2,
                        label: "亲密度",
                        width: "120",
                        align: "center"
                      }, {
                        default: (0, vue.withCtx)((scope) => [scope.row.reachFreeIntimacyLimit ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_tag, {
                          key: 0,
                          type: "warning",
                          size: "small",
                          effect: "plain"
                        }, {
                          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)(" 已满 " + (0, vue.toDisplayString)(scope.row.freeIntimacy), 1)]),
                          _: 2
                        }, 1024)) : typeof scope.row.freeIntimacy === "number" ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_text, {
                          key: 1,
                          type: "info",
                          size: "small"
                        }, {
                          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(scope.row.freeIntimacy), 1)]),
                          _: 2
                        }, 1024)) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_text, {
                          key: 2,
                          type: "info"
                        }, {
                          default: (0, vue.withCtx)(() => [..._cache[25] || (_cache[25] = [(0, vue.createTextVNode)("—", -1)])]),
                          _: 1
                        }))]),
                        _: 1
                      })) : (0, vue.createCommentVNode)("", true),
                      isLikeMode.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_table_column, {
                        key: 3,
                        label: "点赞进度",
                        width: "150"
                      }, {
                        default: (0, vue.withCtx)((scope) => [hasLikeProgress(scope.row) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createVNode)(_component_el_progress, {
                          percentage: likePercent(scope.row),
                          "stroke-width": 6,
                          "show-text": false
                        }, null, 8, ["percentage"]), (0, vue.createVNode)(_component_el_text, { size: "small" }, {
                          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(scope.row.likeProgress) + " / " + (0, vue.toDisplayString)(scope.row.likeProgressTotal), 1)]),
                          _: 2
                        }, 1024)], 64)) : ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_text, {
                          key: 1,
                          type: "info"
                        }, {
                          default: (0, vue.withCtx)(() => [..._cache[26] || (_cache[26] = [(0, vue.createTextVNode)("—", -1)])]),
                          _: 1
                        }))]),
                        _: 1
                      })) : (0, vue.createCommentVNode)("", true),
                      (0, vue.createVNode)(_component_el_table_column, {
                        prop: "roomid",
                        label: "房间号",
                        width: "120"
                      }, {
                        default: (0, vue.withCtx)((scope) => [(0, vue.createVNode)(_component_el_link, {
                          href: "https://live.bilibili.com/" + scope.row.roomid + "?visit_id=",
                          rel: "noreferrer",
                          type: "primary",
                          target: "_blank",
                          onClick: _cache[9] || (_cache[9] = (0, vue.withModifiers)(() => { }, ["stop"]))
                        }, {
                          default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(scope.row.roomid), 1)]),
                          _: 2
                        }, 1032, ["href"])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["data", "row-key"])), [[_directive_loading, medalInfoLoading.value]])]),
                  _: 1
                }, 8, ["modelValue", "disabled"])]),
                _: 1
              }, 8, [
                "modelValue",
                "title",
                "close-on-click-modal",
                "width"
              ])
            ]);
          };
        }
      }), [["__scopeId", "data-v-59627b65"]]),
      OtherTasks: (0, vue.defineComponent)({
        __name: "OtherTasks",
        setup(__props) {
          const moduleStore = useModuleStore();
          const config = moduleStore.moduleConfig.DailyTasks.OtherTasks;
          const status = moduleStore.moduleStatus.DailyTasks.OtherTasks;
          const reset = moduleStore.moduleReset.DailyTasks.OtherTasks;
          return (_ctx, _cache) => {
            const _component_el_switch = (0, vue.resolveComponent)("el-switch");
            const _component_Info = (0, vue.resolveComponent)("Info");
            const _component_TaskStatus = (0, vue.resolveComponent)("TaskStatus");
            const _component_el_space = (0, vue.resolveComponent)("el-space");
            const _component_el_row = (0, vue.resolveComponent)("el-row");
            const _component_el_text = (0, vue.resolveComponent)("el-text");
            const _component_el_option = (0, vue.resolveComponent)("el-option");
            const _component_el_select = (0, vue.resolveComponent)("el-select");
            const _component_el_divider = (0, vue.resolveComponent)("el-divider");
            return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, { wrap: "" }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).silverToCoin.enabled,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(config).silverToCoin.enabled = $event),
                      "active-text": "银瓜子换硬币"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.OtherTasks.silverToCoin }, null, 8, ["item"]),
                    (0, vue.createVNode)(_component_TaskStatus, {
                      status: (0, vue.unref)(status).silverToCoin,
                      onClick: (0, vue.unref)(reset).silverToCoin
                    }, null, 8, ["status", "onClick"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).coinToSilver.enabled,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(config).coinToSilver.enabled = $event),
                      "active-text": "硬币换银瓜子"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_text, null, {
                      default: (0, vue.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, vue.createTextVNode)("花费硬币", -1)])]),
                      _: 1
                    }),
                    (0, vue.createVNode)(_component_el_select, {
                      modelValue: (0, vue.unref)(config).coinToSilver.num,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(config).coinToSilver.num = $event),
                      placeholder: "Select",
                      style: { "width": "64px" }
                    }, {
                      default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(50, (i) => {
                        return (0, vue.createVNode)(_component_el_option, {
                          key: i,
                          label: i,
                          value: i
                        }, null, 8, ["label", "value"]);
                      }), 64))]),
                      _: 1
                    }, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_text, null, {
                      default: (0, vue.withCtx)(() => [..._cache[5] || (_cache[5] = [(0, vue.createTextVNode)("个", -1)])]),
                      _: 1
                    }),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.OtherTasks.coinToSilver }, null, 8, ["item"]),
                    (0, vue.createVNode)(_component_TaskStatus, {
                      status: (0, vue.unref)(status).coinToSilver,
                      onClick: (0, vue.unref)(reset).coinToSilver
                    }, null, 8, ["status", "onClick"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).getYearVipPrivilege.enabled,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (0, vue.unref)(config).getYearVipPrivilege.enabled = $event),
                      "active-text": "领取年度大会员权益"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).DailyTasks.OtherTasks.getYearVipPrivilege }, null, 8, ["item"]),
                    (0, vue.createVNode)(_component_TaskStatus, {
                      status: (0, vue.unref)(status).getYearVipPrivilege,
                      onClick: (0, vue.unref)(reset).getYearVipPrivilege
                    }, null, 8, ["status", "onClick"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_divider)
            ]);
          };
        }
      }),
      EnhanceExperience: (0, vue.defineComponent)({
        __name: "EnhanceExperience",
        setup(__props) {
          const config = useModuleStore().moduleConfig.EnhanceExperience;
          const qualityDescList = [
            "原画（HDR）",
            "原画",
            "蓝光",
            "超清",
            "高清"
          ];
          if (!qualityDescList.includes(config.switchLiveStreamQuality.qualityDesc)) config.switchLiveStreamQuality.qualityDesc = "原画";
          return (_ctx, _cache) => {
            const _component_el_switch = (0, vue.resolveComponent)("el-switch");
            const _component_el_option = (0, vue.resolveComponent)("el-option");
            const _component_el_select = (0, vue.resolveComponent)("el-select");
            const _component_Info = (0, vue.resolveComponent)("Info");
            const _component_el_space = (0, vue.resolveComponent)("el-space");
            const _component_el_row = (0, vue.resolveComponent)("el-row");
            const _component_el_divider = (0, vue.resolveComponent)("el-divider");
            return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [
                    (0, vue.createVNode)(_component_el_switch, {
                      modelValue: (0, vue.unref)(config).switchLiveStreamQuality.enabled,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(config).switchLiveStreamQuality.enabled = $event),
                      "active-text": "自动切换画质"
                    }, null, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_el_select, {
                      modelValue: (0, vue.unref)(config).switchLiveStreamQuality.qualityDesc,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(config).switchLiveStreamQuality.qualityDesc = $event),
                      placeholder: "Select",
                      style: { "width": "140px" }
                    }, {
                      default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(qualityDescList, (i) => {
                        return (0, vue.createVNode)(_component_el_option, {
                          key: i,
                          label: i,
                          value: i
                        }, null, 8, ["label", "value"]);
                      }), 64))]),
                      _: 1
                    }, 8, ["modelValue"]),
                    (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).EnhanceExperience.switchLiveStreamQuality }, null, 8, ["item"])
                  ]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).banp2p.enabled,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(config).banp2p.enabled = $event),
                    "active-text": "禁用P2P"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).EnhanceExperience.banp2p }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).noReport.enabled,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (0, vue.unref)(config).noReport.enabled = $event),
                    "active-text": "拦截日志数据上报"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).EnhanceExperience.noReport }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).noSleep.enabled,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0, vue.unref)(config).noSleep.enabled = $event),
                    "active-text": "屏蔽挂机检测"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).EnhanceExperience.noSleep }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).invisibility.enabled,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (0, vue.unref)(config).invisibility.enabled = $event),
                    "active-text": "隐身入场"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).EnhanceExperience.invisibility }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_divider)
            ]);
          };
        }
      }),
      RemoveElement: (0, vue.defineComponent)({
        __name: "RemoveElement",
        setup(__props) {
          const config = useModuleStore().moduleConfig.RemoveElement;
          return (_ctx, _cache) => {
            const _component_el_switch = (0, vue.resolveComponent)("el-switch");
            const _component_Info = (0, vue.resolveComponent)("Info");
            const _component_el_space = (0, vue.resolveComponent)("el-space");
            const _component_el_row = (0, vue.resolveComponent)("el-row");
            const _component_el_divider = (0, vue.resolveComponent)("el-divider");
            return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removePKBox.enabled,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(config).removePKBox.enabled = $event),
                    "active-text": "移除大乱斗元素"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removePKBox }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeLiveWaterMark.enabled,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(config).removeLiveWaterMark.enabled = $event),
                    "active-text": "移除直播间水印"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeLiveWaterMark }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeShopPopover.enabled,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(config).removeShopPopover.enabled = $event),
                    "active-text": "移除直播间小橙车弹窗"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeShopPopover }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeGameParty.enabled,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (0, vue.unref)(config).removeGameParty.enabled = $event),
                    "active-text": "移除直播间幻星派对标志"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeGameParty }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeGiftPopover.enabled,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0, vue.unref)(config).removeGiftPopover.enabled = $event),
                    "active-text": "移除礼物赠送提示弹窗"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeGiftPopover }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeMicPopover.enabled,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (0, vue.unref)(config).removeMicPopover.enabled = $event),
                    "active-text": "移除连麦状态提示"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeMicPopover }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeComboCard.enabled,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => (0, vue.unref)(config).removeComboCard.enabled = $event),
                    "active-text": "移除直播间相同弹幕连续提示"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeComboCard }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeHeaderStuff.enabled,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => (0, vue.unref)(config).removeHeaderStuff.enabled = $event),
                    "active-text": "移除直播画面上方杂项"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeHeaderStuff }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeFlipView.enabled,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => (0, vue.unref)(config).removeFlipView.enabled = $event),
                    "active-text": "移除礼物栏下方广告"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeFlipView }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_row, null, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                  wrap: "",
                  size: [8, 0]
                }, {
                  default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_switch, {
                    modelValue: (0, vue.unref)(config).removeLiveMosaic.enabled,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => (0, vue.unref)(config).removeLiveMosaic.enabled = $event),
                    "active-text": "移除直播间马赛克"
                  }, null, 8, ["modelValue"]), (0, vue.createVNode)(_component_Info, { item: (0, vue.unref)(helpInfo).RemoveElement.removeLiveMosaic }, null, 8, ["item"])]),
                  _: 1
                })]),
                _: 1
              }),
              (0, vue.createVNode)(_component_el_divider)
            ]);
          };
        }
      }),
      ScriptSettings: _plugin_vue_export_helper_default((0, vue.defineComponent)({
        __name: "ScriptSettings",
        setup(__props) {
          const uiConfig = useUIStore().uiConfig;
          return (_ctx, _cache) => {
            const _component_el_text = (0, vue.resolveComponent)("el-text");
            const _component_el_slider = (0, vue.resolveComponent)("el-slider");
            const _component_el_space = (0, vue.resolveComponent)("el-space");
            const _component_el_row = (0, vue.resolveComponent)("el-row");
            return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", null, [(0, vue.createVNode)(_component_el_row, { align: "middle" }, {
              default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_space, {
                wrap: "",
                size: [16, 0]
              }, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_text, { class: "label-text" }, {
                  default: (0, vue.withCtx)(() => [..._cache[1] || (_cache[1] = [(0, vue.createTextVNode)("控制面板宽度", -1)])]),
                  _: 1
                }), (0, vue.createVNode)(_component_el_slider, {
                  modelValue: (0, vue.unref)(uiConfig).panelWidthPercent,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(uiConfig).panelWidthPercent = $event),
                  style: { "width": "150px" },
                  class: "slider",
                  min: 30,
                  max: 60
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            })]);
          };
        }
      }), [["__scopeId", "data-v-0ed6e292"]])
    }
  });
  var PanelMain_default = (0, vue.defineComponent)({
    ...__default__,
    __name: "PanelMain",
    setup(__props) {
      const uiStore = useUIStore();
      return (_ctx, _cache) => {
        return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)((0, vue.unref)(uiStore).uiConfig.activeMenuIndex));
      };
    }
  });
  var App_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
    __name: "App",
    setup(__props) {
      const uiStore = useUIStore();
      const logger = new Logger("App.vue");
      const isShowPanel = uiStore.uiConfig.isShowPanel;
      uiStore.uiConfig.isShowPanel = false;
      let button;
      function updatePosition() {
        const rect = livePlayer.getBoundingClientRect();
        uiStore.livePlayerRect.top = rect.top;
        uiStore.livePlayerRect.left = rect.left;
        uiStore.livePlayerRect.height = rect.height;
        uiStore.livePlayerRect.width = rect.width;
        uiStore.windowScrollPosition.x = _unsafeWindow.scrollX;
        uiStore.windowScrollPosition.y = _unsafeWindow.scrollY;
      }
      function buttonOnClick() {
        uiStore.changeShowPanel();
        button.innerText = uiStore.isShowPanelButtonText;
      }
      const throttleButtonOnClick = lodash.default.throttle(buttonOnClick, 300);
      const livePlayer = dq(".player-section");
      if (livePlayer) {
        updatePosition();
        waitForElement(dq("#player-ctnr"), ".header-info-ctnr .normal-row-ctnr", 1e4).then((normalRowCtnr) => {
          button = dce("button");
          button.setAttribute("class", "blth-btn");
          button.onclick = throttleButtonOnClick;
          button.innerText = uiStore.isShowPanelButtonText;
          const firstChild = normalRowCtnr.firstChild;
          if (firstChild) firstChild.after(button);
          else {
            logger.warn(".normal-row-ctnr 没有子节点", normalRowCtnr);
            normalRowCtnr.appendChild(button);
          }
          if (!isSelfTopFrame()) (0, hotkeys_js.default)("alt+b", { element: topFrameDocumentElement() }, throttleButtonOnClick);
          (0, hotkeys_js.default)("alt+b", throttleButtonOnClick);
        }).catch((e) => logger.error(e));
        window.addEventListener("resize", () => updatePosition());
        const observer = new MutationObserver(() => updatePosition());
        observer.observe(document.body, { attributes: true });
        observer.observe(document.documentElement, { attributes: true });
        if (isShowPanel) uiStore.uiConfig.isShowPanel = true;
      } else logger.error("livePlayer not found");
      return (_ctx, _cache) => {
        const _component_el_header = (0, vue.resolveComponent)("el-header");
        const _component_el_aside = (0, vue.resolveComponent)("el-aside");
        const _component_el_scrollbar = (0, vue.resolveComponent)("el-scrollbar");
        const _component_el_main = (0, vue.resolveComponent)("el-main");
        const _component_el_container = (0, vue.resolveComponent)("el-container");
        const _component_el_collapse_transition = (0, vue.resolveComponent)("el-collapse-transition");
        return (0, vue.openBlock)(), (0, vue.createBlock)(_component_el_collapse_transition, null, {
          default: (0, vue.withCtx)(() => [(0, vue.withDirectives)((0, vue.createVNode)(_component_el_container, {
            style: (0, vue.normalizeStyle)((0, vue.unref)(uiStore).panelStyle),
            class: "base"
          }, {
            default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_header, { class: "header" }, {
              default: (0, vue.withCtx)(() => [(0, vue.createVNode)(PanelHeader_default)]),
              _: 1
            }), (0, vue.createVNode)(_component_el_container, null, {
              default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_aside, { class: "aside" }, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(PanelAside_default)]),
                _: 1
              }), (0, vue.createVNode)(_component_el_main, { class: "main" }, {
                default: (0, vue.withCtx)(() => [(0, vue.createVNode)(_component_el_scrollbar, { height: (0, vue.unref)(uiStore).scrollBarHeight }, {
                  default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)(vue.KeepAlive, null, [(0, vue.createVNode)(vue.Transition, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: (0, vue.withCtx)(() => [(0, vue.createVNode)(PanelMain_default, { class: "panel-main" })]),
                    _: 1
                  })], 1024))]),
                  _: 1
                }, 8, ["height"])]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["style"]), [[vue.vShow, (0, vue.unref)(uiStore).uiConfig.isShowPanel]])]),
          _: 1
        });
      };
    }
  }), [["__scopeId", "data-v-28de2807"]]);
  var cssLoader = (name) => _GM_addStyle(_GM_getResourceText(name));
  cssLoader("element-plus/dist/index.css");
  _css("/*! Modified from element-plus/theme-chalk/dark/css-vars.css */\nhtml[lab-style*=dark]{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--el-color-primary:#409eff;--el-color-primary-light-3:#3375b9;--el-color-primary-light-5:#2a598a;--el-color-primary-light-7:#213d5b;--el-color-primary-light-8:#1d3043;--el-color-primary-light-9:#18222b;--el-color-primary-dark-2:#66b1ff;--el-color-success:#67c23a;--el-color-success-light-3:#4e8e2f;--el-color-success-light-5:#3e6b27;--el-color-success-light-7:#2d481f;--el-color-success-light-8:#25371c;--el-color-success-light-9:#1c2518;--el-color-success-dark-2:#85ce61;--el-color-warning:#e6a23c;--el-color-warning-light-3:#a77730;--el-color-warning-light-5:#7d5b28;--el-color-warning-light-7:#533f20;--el-color-warning-light-8:#3e301c;--el-color-warning-light-9:#292218;--el-color-warning-dark-2:#ebb563;--el-color-danger:#f56c6c;--el-color-danger-light-3:#b25252;--el-color-danger-light-5:#854040;--el-color-danger-light-7:#582e2e;--el-color-danger-light-8:#412626;--el-color-danger-light-9:#2a1d1d;--el-color-danger-dark-2:#f78989;--el-color-error:#f56c6c;--el-color-error-light-3:#b25252;--el-color-error-light-5:#854040;--el-color-error-light-7:#582e2e;--el-color-error-light-8:#412626;--el-color-error-light-9:#2a1d1d;--el-color-error-dark-2:#f78989;--el-color-info:#909399;--el-color-info-light-3:#6b6d71;--el-color-info-light-5:#525457;--el-color-info-light-7:#393a3c;--el-color-info-light-8:#2d2d2f;--el-color-info-light-9:#202121;--el-color-info-dark-2:#a6a9ad;--el-box-shadow:0px 12px 32px 4px #0000005c, 0px 8px 20px #000000b8;--el-box-shadow-light:0px 0px 12px #000000b8;--el-box-shadow-lighter:0px 0px 6px #000000b8;--el-box-shadow-dark:0px 16px 48px 16px #000000b8, 0px 12px 32px #000, 0px 8px 16px -8px #000;--el-bg-color-page:#0a0a0a;--el-bg-color:#141414;--el-bg-color-overlay:#1d1e1f;--el-text-color-primary:#e5eaf3;--el-text-color-regular:#cfd3dc;--el-text-color-secondary:#a3a6ad;--el-text-color-placeholder:#8d9095;--el-text-color-disabled:#6c6e72;--el-border-color-darker:#636466;--el-border-color-dark:#58585b;--el-border-color:#4c4d4f;--el-border-color-light:#414243;--el-border-color-lighter:#363637;--el-border-color-extra-light:#2b2b2c;--el-fill-color-darker:#424243;--el-fill-color-dark:#39393a;--el-fill-color:#303030;--el-fill-color-light:#262727;--el-fill-color-lighter:#1d1d1d;--el-fill-color-extra-light:#191919;--el-fill-color-blank:transparent;--el-mask-color:#000c;--el-mask-color-extra-light:#0000004d}html[lab-style*=dark] .el-button{--el-button-disabled-text-color:#ffffff80}html[lab-style*=dark] .el-card{--el-card-bg-color:var(--el-bg-color-overlay)}html[lab-style*=dark] .el-empty{--el-empty-fill-color-0:var(--el-color-black);--el-empty-fill-color-1:#4b4b52;--el-empty-fill-color-2:#36383d;--el-empty-fill-color-3:#1e1e20;--el-empty-fill-color-4:#262629;--el-empty-fill-color-5:#202124;--el-empty-fill-color-6:#212224;--el-empty-fill-color-7:#1b1c1f;--el-empty-fill-color-8:#1c1d1f;--el-empty-fill-color-9:#18181a}");
  var _sfc_main = {};
  var _hoisted_1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    class: "icon",
    viewBox: "0 0 1024 1024"
  };
  function _sfc_render(_ctx, _cache) {
    return (0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("path", { d: "M831.825 63.94H191.94c-70.692 0-128 57.308-128 128v639.885c0 70.692 57.308 128 128 128h639.885c70.692 0 128-57.308 128-128V191.94c0-70.692-57.308-128-128-128zM895.885 832a63.835 63.835 0 0 1-63.973 63.886H192.088c-17.112 0-33.27-6.575-45.372-18.676S127.88 849.112 127.88 832V192a64.236 64.236 0 0 1 64.208-64.12h639.824A64.038 64.038 0 0 1 895.885 192v640z" }, null, -1), (0, vue.createElementVNode)("path", { d: "M791.998 351.852H536a31.97 31.97 0 0 0 0 63.94h256a31.97 31.97 0 0 0 0-63.94zm0 256.121H536a31.97 31.97 0 0 0 0 63.94h256a31.97 31.97 0 0 0 0-63.94zm-447.996-79.975c-61.856 0-111.986 50.144-111.986 111.985S282.16 751.97 344.002 751.97s111.985-50.144 111.985-111.986-50.13-111.985-111.985-111.985zm33.982 145.982a48.045 48.045 0 1 1 14.088-33.982 47.746 47.746 0 0 1-14.088 33.986zm39.412-376.586L311.999 402.787l-41.391-41.395a31.97 31.97 0 1 0-45.213 45.213l63.997 64.002a31.97 31.97 0 0 0 45.214 0l128-128a31.97 31.97 0 0 0-45.21-45.213z" }, null, -1)])]);
  }
  var TasksIcon_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
  var InfoIcon_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
    __name: "InfoIcon",
    props: { item: {} },
    setup(__props) {
      const props = __props;
      const open = () => {
        const { title, message } = props.item;
        (0, element_plus.ElMessageBox)({
          title,
          message,
          lockScroll: false,
          autofocus: true,
          confirmButtonText: "OK"
        }).catch(() => { });
      };
      return (_ctx, _cache) => {
        const _component_el_icon = (0, vue.resolveComponent)("el-icon");
        return (0, vue.openBlock)(), (0, vue.createBlock)(_component_el_icon, {
          class: "info-icon",
          onClick: open
        }, {
          default: (0, vue.withCtx)(() => [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "128",
            height: "128",
            class: "icon",
            viewBox: "0 0 1024 1024"
          }, [(0, vue.createElementVNode)("path", {
            fill: "#276BC0",
            d: "M512.67 959.47c-246.343 0-446.76-200.632-446.76-447.24S266.326 64.98 512.67 64.98s446.76 200.642 446.76 447.25-200.416 447.24-446.76 447.24zm0-829.04c-210.291 0-381.38 171.283-381.38 381.8s171.089 381.79 381.38 381.79 381.381-171.273 381.381-381.79-171.09-381.8-381.38-381.8z"
          }), (0, vue.createElementVNode)("path", {
            fill: "#276BC0",
            d: "M447.29 317.172a63.891 63.959 0 1 0 130.76 0 63.891 63.959 0 1 0-130.76 0Zm64.907 503.047c-30.093 0-54.235-24.416-54.235-54.541V482.062c0-30.126 24.142-54.541 54.235-54.541 30.094 0 54.236 24.416 54.236 54.541v283.616c0 30.125-24.142 54.54-54.236 54.54z"
          })], -1)])]),
          _: 1
        });
      };
    }
  }), [["__scopeId", "data-v-02b5bf3e"]]);
  var TaskStatusIcon_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
    __name: "TaskStatusIcon",
    props: { status: {} },
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const throttleClick = lodash.default.throttle(() => emit("click"), 1e3);
      const isHovered = (0, vue.ref)(false);
      const isRunning = (0, vue.computed)(() => props.status === "running");
      const isDone = (0, vue.computed)(() => props.status === "done");
      const isError = (0, vue.computed)(() => props.status === "error");
      const iconComponent = (0, vue.computed)(() => {
        if (isRunning.value) return _element_plus_icons_vue.Loading;
        if (isDone.value) return isHovered.value ? _element_plus_icons_vue.Refresh : _element_plus_icons_vue.Select;
        if (isError.value) return _element_plus_icons_vue.CloseBold;
        return null;
      });
      (0, vue.watch)(() => props.status, () => isHovered.value = false);
      return (_ctx, _cache) => {
        const _component_el_icon = (0, vue.resolveComponent)("el-icon");
        return (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_icon, {
          class: (0, vue.normalizeClass)(["status-icon", {
            "is-loading": isRunning.value,
            done: isDone.value,
            error: isError.value,
            "is-hovered": isDone.value && isHovered.value
          }]),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => isDone.value && (isHovered.value = true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => isDone.value && (isHovered.value = false)),
          onClick: _cache[2] || (_cache[2] = ($event) => isDone.value && (0, vue.unref)(throttleClick)())
        }, {
          default: (0, vue.withCtx)(() => [isDone.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(vue.Transition, {
            key: 0,
            name: "icon-fade",
            mode: "out-in"
          }, {
            default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(iconComponent.value)))]),
            _: 1
          })) : ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(iconComponent.value), { key: 1 }))]),
          _: 1
        }, 8, ["class"])), [[vue.vShow, __props.status]]);
      };
    }
  }), [["__scopeId", "data-v-16fb8116"]]);
  var icons_exports = __exportAll({
    Info: () => InfoIcon_default,
    TaskStatus: () => TaskStatusIcon_default,
    Tasks: () => TasksIcon_default
  });
  _css(".blth-btn{color:#fff;cursor:pointer;background-color:#23ade5;border:none;border-radius:4px;margin-left:15px;padding:5px;font-size:small;line-height:10px;box-shadow:0 0 2px #00000075}.blth-btn:hover{background-color:#1097cc}.blth-btn:hover:active{background-color:#0e86b6;position:relative;top:1px}.el-message-box ul,ol{padding-left:1em!important}.el-message-box ul{list-style:initial!important}.el-message-box ol{list-style:decimal!important}@media screen and (width>=1930px){html[lab-style*=adaptive] .base{zoom:calc(15 / 16)}}@media screen and (width>=2058px){html[lab-style*=adaptive] .base{zoom:calc(3 / 4)}}@media screen and (width>=2570px){html[lab-style*=adaptive] .base{zoom:calc(2 / 3)}}@media screen and (width>=3210px){html[lab-style*=adaptive] .base{zoom:calc(1 / 2)}}@media screen and (width>=3850px){html[lab-style*=adaptive] .base{zoom:calc(15 / 32)}}");
  var logger = new Logger("Main");
  logger.log("document.readyState", document.readyState);
  var pinia$1 = (0, pinia.createPinia)();
  var cacheStore = useCacheStore(pinia$1);
  var moduleStore = useModuleStore(pinia$1);
  cacheStore.checkCurrentScriptType();
  logger.log("当前脚本的类型为", cacheStore.currentScriptType);
  if (cacheStore.currentScriptType === "Main") cacheStore.startMainBLTHAliveHeartBeat();
  moduleStore.loadModules("unknown");
  await (waitForMoment("document-body"));
  if (isTargetFrame()) {
    const app = (0, vue.createApp)(App_default);
    app.use(element_plus.default);
    app.use(pinia$1);
    for (const [key, component] of Object.entries(_element_plus_icons_vue)) app.component(key, component);
    for (const [key, component] of Object.entries(icons_exports)) app.component(key, component);
    moduleStore.loadModules("yes");
    await (waitForMoment("document-end"));
    const div = dce("div");
    div.id = "BLTH";
    document.body.append(div);
    app.mount(div);
  }
})(Vue, hotkeys, _, Pinia, CryptoJS, luxon, ElementPlusIconsVue, ElementPlus, VueDraggablePlus);
