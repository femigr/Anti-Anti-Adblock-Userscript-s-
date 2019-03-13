// ==UserScript==
// @name     Spiegel Unblocker
// @version  1
// @match	http://www.spiegel.de/*
// @match	https://www.spiegel.de/*
// @grant    none
// @description	Entfernt die Adblocker Warnung von Spiegel-Online
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
  setTimeout(function(){
    $('[class^="sp_"]').css('display', 'none');
  	$("body").css("overflow-y", "scroll");
    $("html").css("overflow-y", "scroll");
    $("body").css("height", "auto");
    $("html").css("height", "auto");
	}, 4000);//The Adblock Warning has first to be loaded to be hidden, stupid workaround. Somehow happens after document is ready. Depending on the specific timing on the machine this value can be editied.
}); 