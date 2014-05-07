---
layout: slide
title: ""
classes:
data:
  transition: linear
---

## Die Konfigurationsdatei

## `_config.yml`

{% highlight YAML %}
name:        Bloggen wie ein Nerd
markdown:    redcarpet
pygments:    true

# zusätzliche Parameter
timezone:    Europe/Berlin
future:      false
url:         # wenn nicht sicher, dann frei lassen
permalink:   /:categories/:year/:month/:title.html
paginate:    10

author:      Thomas Friese
description: Presentation für die RP14
disqus_shortname:

include: [".htaccess"]
exclude: ["_ORDNER_", "_DATEI_"]
{% endhighlight %}

<aside markdown="1" class="notes">
YAML ist eine vereinfachte Auszeichnungssprache (englisch markup language) zur Datenserialisierung, angelehnt an XML (ursprünglich) und an die Datenstrukturen in den Sprachen Perl, Python und C sowie dem in RFC 2822 vorgestellten E-Mail-Format. Die Idee zu YAML stammt von Clark Evans, die Spezifikation wurde von ihm selbst, Brian Ingerson und Oren Ben-Kiki erstellt.

YAML ist ein rekursives Akronym für „YAML Ain’t Markup Language“ (ursprünglich „Yet Another Markup Language“).
</aside>