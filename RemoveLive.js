// ==UserScript==
// @name        hello world
// @namespace    http://mfds.cn/
// @version      1.1
// @description  去除B站多余的直播播放器
// @author       WH
// @include      https://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?domain=greasyfork.org
// @license      AGPL-3.0
// ==/UserScript==
(() => {
    "use strict";
    let VEnable = localStorage.getItem("VEnable") === "true";
    if (VEnable) {
        setTimeout(() => {
            document.getElementById("live-player").remove();
        }, 3000);
    }
    let btnArea = document.querySelector(".right-ctnr");
    let btn = document.createElement("button");
    btn.id = "removeLive";
    btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
    btn.addEventListener("click", () => {
        VEnable = !VEnable;
        localStorage.setItem("VEnable", VEnable);
        btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
        if (VEnable) {
            document.getElementById("live-player").remove();
        } else {
            location.reload();
        }
    });
    btnArea.insertBefore(btn, btnArea.children[0]);
}
)();