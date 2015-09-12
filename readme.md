Diaspora* Public Posts
======================

Specially useful for official organisation account.

## Install

* Install browser extension [Scriptish](https://addons.mozilla.org/firefox/addon/scriptish) or [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or whatever
* Click [this link](https://raw.githubusercontent.com/SansPseudoFix/diaspora-public-posts/master/diaspora-public-posts.js)
* Click ``Install``
* Access to your account

## My pod is not diaspora-fr.org nor framasphere.org

I made this script for these two pods, but I can't add every pod. So, to install this script for **your** pod:

* Go to your browser settings (Firefox ``about:addons``)
* ``User Scripts``
* Click ``Edit`` in front of ``Diaspora* Public Posts``
* Remove lines 8, 9, 10
* Replace ``diaspora-fr.org`` lines 5, 6, 7 by your pod url

Example: if your pod is joindiaspora:

``
// @include     http://joindiaspora.com/stream
// @include     http://joindiaspora.com/activity
// @include     http://joindiaspora.com/aspects
``

## What this script does

* Set publication with **Public** aspect (no need to remember to switch aspect before posting)
* Download [jQuery extras](https://greasyfork.org/fr/scripts/12083-jquery-extras) file

## What this script does not

Coffee and everything else than set **Public** aspect to your posts.
