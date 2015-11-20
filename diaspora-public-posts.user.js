// ==UserScript==
// @name        Diaspora* Public Posts
// @description Select the Public aspect as default for Diaspora*.
// @namespace   diaspora-public-posts
// @include     https://diaspora-fr.org/*
// @include     https://framasphere.org/*
// @version     1
// @copyright   Public domain (http://unlicense.org/)
// @grant       none
// @require     https://greasyfork.org/scripts/12083-jquery-extras/code/jquery-extras.js?version=71338
// ==/UserScript==

/**
 *
 * Replace https://diaspora-fr.org/* and https://framasphere.org/* by https://your-pod-url/stream
 *
 */

$(document).ready(function(){
	$(".aspect_dropdown li.public").click(); // For dev version
	$(".public_toggle li.public").click(); // For =< 5.3.0
});
