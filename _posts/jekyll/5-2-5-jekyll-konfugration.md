---
layout: slide
title: ""
classes:
data:
  transition: linear
---

## Die Konfigurationsdatei

## `_config.yml`

{% highlight  yaml %}
name:        Bloggen wie ein Nerd # Platz für Kreativität
highlighter: rouge                # für farbige Anzeige von Code
markdown:    kramdown             # seit Jekyll 2.0 default

# zusätzliche, optionale Parameter:
timezone:    Europe/Berlin
future:      false                # für vorbereitete Posts
url:         # wenn nicht sicher, dann frei lassen
permalink:   /:categories/:year/:month/:title.html
paginate:    10                   # n Posts auf der Index-Seite

author:      Thomas Friese
description: Presentation für die rp14
disqus_shortname:

include: [".htaccess"]            # für Dateien mit "." oder "_"
exclude: ["_ORDNER_", "_DATEI_"]
{% endhighlight %}

<aside markdown="1" class="notes">
</aside>