// ==UserScript==
// @name         zhihu-no-login
// @namespace    https://github.com/CyrusYip/zhihu-no-login
// @version      1.1
// @description  Redirect login page of zhihu.com to explore page so that you can browse Zhihu without logging in. 将知乎登陆页面跳转到发现页面，这样不用登陆也能看知乎。
// @author       Cyrus Yip
// @grant        none
// @match        *://www.zhihu.com/signin*
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @run-at       document-start
// ==/UserScript==

window.open("https://www.zhihu.com/explore", "_self");
