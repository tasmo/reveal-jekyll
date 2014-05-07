---
layout: slide
title: "Mein erster Post"
classes:
data:
  transition: linear
---

Datei `2014-05-07-toller-titel.md` in `_posts` oder `_drafts` anlegen.

{% highlight text %}
---
layout:     post
title:      "Toller Titel"
date:       2014-05-07 15:15:00
categories: jekyll update
tags:       [eins, zwei]
---
 
_MARKDOWN_INHALT_
{% endhighlight %}

<div markdown="1" class="fragment">
Der Kopf zwischen den `---`-Zeilen heißt “Front-matter”.

Die Parameter im Front-matter werden vom Liquid-Template abgerufen.

`layout:` bestimmt die Art der HTML-Seite aus dem Ordner `_layouts`.
</div>
<aside markdown="1" class="notes">
Liquid is the templating engine, developed for and used by Shopify.
</aside>