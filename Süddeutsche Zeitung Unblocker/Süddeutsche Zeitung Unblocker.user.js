// ==UserScript==
// @name     Süddeutsche Zeitung Unblocker
// @version  1
// @match	https://www.sueddeutsche.de/*
// @grant    none
// @description	Removes the Adblock warning message on sueddeutsche.de
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
  setTimeout(function(){
    $('[data-class~="lock-layer"]').css('display', 'none');
  	$("body").css("overflow-y", "scroll");
	}, 1000);//The Adblock Warning has first to be loaded to be hidden, stupid workaround. Somehow happens after document is ready. Depending on the specific timing on the machine this value can be editied.
}); 