**Depuis que [cette PR](https://github.com/diaspora/diaspora/pull/7118) a été mergée, ce script n'est plus nécessaire si votre pod utilise diaspora* >= 0.6.1.0.**

Diaspora* Public Posts
======================

Particulièrement utile pour les associations, et les têtes en l'air.

## Installation

* Installez l'extension [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) ou [Scriptish](https://addons.mozilla.org/firefox/addon/scriptish) ou autre
* Cliquez sur [ce lien](https://raw.githubusercontent.com/SansPseudoFix/diaspora-public-posts/master/diaspora-public-posts.user.js)
* Cliquez sur ``Installer``
* Utilisez :)

## Mon pod n'est ni diaspora-fr.org ni framasphere.org

J'ai fait ce script pour ces deux pods, donc si vous souhaitez l'utiliser sur un autre pod, vous devez l'ajouter :

**Avec GreaseMonkey** :

* Allez dans le gestionnaire de modules de votre navigateur (``CTRL+SHIFT+A`` sur Firefox)
* Allez dans ``Scripts utilisateur``
* Cliquez sur ``Préférences`` en face de ``Diaspora* Public Posts``
* Dans la section ``Paramètres utilisateur`` -> ``Pages autorisées`` cliquez sur **Ajouter** et entrez l'url de votre pod en n'oubliez pas d'ajouter ``*`` à la fin.
* Cliquez sur ``OK`` et désacivez/réactivez le script.

**Manuellement** :

* Allez dans le gestionnaire de modules de votre navigateur (``CTRL+A`` sur Firefox)
* Allez dans ``Scripts utilisateur``
* Cliquez sur ``Préférences`` en face de ``Diaspora* Public Posts``
* Cliquez sur ``Modifier ce script`` (tout en bas)
* Supprimez la ligne 6
* Remplacez ``diaspora-fr`` ligne 5 par l'url de votre pod (n'oubliez pas le ``*`` à la fin : ``https://mon-pod/*``)

Exemple : si votre pod est joindiaspora :

````
// @include     http://joindiaspora.com/*
````

## Ce que fait ce script

* Active **Public** par défaut (plus besoin de penser à l'activer)
* ~~Télécharge [jQuery extras](https://greasyfork.org/fr/scripts/12083-jquery-extras)~~ (en fait, non)

## Ce que ce script ne fait pas

Le café et tout autre chose qu'activer **Public** par défaut dans diaspora*.
