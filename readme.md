Diaspora* Public Posts
======================

Specially useful for official organisation account.

## Install

* Install browser extension [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Scriptish](https://addons.mozilla.org/firefox/addon/scriptish) or whatever
* Click [this link](https://raw.githubusercontent.com/SansPseudoFix/diaspora-public-posts/master/diaspora-public-posts.user.js)
* Click ``Install``
* Access to your account

## My pod is not diaspora-fr.org nor framasphere.org

I made this script for these two pods, but it could be adapted and add to other pods. So, to install this script for **your** pod:

**With GreaseMonkey**:

* Go to your browser settings (Firefox ``about:addons``)
* ``User Scripts``
* Click ``Edit`` in front of ``Diaspora* Public Posts``
* Click ``Settings``
* Add your pod url in *Allowed pages** section (Don't forget to add a *joker* at the end : ``https://my-pod-url/*``)
* Desactive and active the script to enable changes

**Manually**:

* Go to your browser settings (Firefox ``about:addons``)
* ``User Scripts``
* Click ``Edit`` in front of ``Diaspora* Public Posts``
* Remove line 6
* Replace ``diaspora-fr.org`` line 5 by your pod url (Don't forget to add a *joker* at the end : ``https://my-pod-url/*``)

Example: if your pod is joindiaspora:

````
// @include     http://joindiaspora.com/*
````

## What this script does

* Set publication with **Public** aspect (no need to remember to switch aspect before posting)
* Download [jQuery extras](https://greasyfork.org/fr/scripts/12083-jquery-extras) file

## What this script does not

Coffee and everything else than set **Public** aspect to your posts.
