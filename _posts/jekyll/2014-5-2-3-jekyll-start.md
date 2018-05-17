---
layout: slide
title: "Das erste Jekyll-Projekt"
classes:
data:
  transition: linear
---

Struktur anlegen und in den Ordner wechseln

<div markdown="1" class="fragment">
{% highlight bash %}
$ jekyll new jekyll-demo && cd jekyll-demo
{% endhighlight %}
</div>

Seite generieren

<div markdown="1" class="fragment">
{% highlight bash %}
$ jekyll build # (--destination _testsite)
{% endhighlight %}
</div>

Testseite starten

<div markdown="1" class="fragment">
{% highlight bash %}
$ jekyll serve # (--port 8000) (--watch)
{% endhighlight %}
</div>