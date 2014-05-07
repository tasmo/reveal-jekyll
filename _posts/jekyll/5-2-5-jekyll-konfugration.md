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
</aside>