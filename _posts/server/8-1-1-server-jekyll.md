---
layout: default
title: "Run, Jekyll, run"
published: true
classes:
data:
  transition: linear
---

Zum Testen auf dem Computer überwacht Jekyll veränderungen und generiert sie neu mit dem Befehl

{% highlight bash %}
$ jekyll serve --watch
{% endhighlight %}

Und damit Jekyll auf dem Server im Hintergrund läuft

{% highlight bash %}
$ jekyll serve -B # (--detach)
{% endhighlight %}

