// ==UserScript==
// @name BCS
// @namespace https://www.bondageprojects.com/
// @version 0.1
// @description New ways to struggle and lockpick in BC
// @author W
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
setTimeout(
	function () {
			let n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://wozzey.github.io/BCS.js?_=" + Date.now());
			n.onload = () => n.remove();
			document.head.appendChild(n);
	}, 
        10000
);