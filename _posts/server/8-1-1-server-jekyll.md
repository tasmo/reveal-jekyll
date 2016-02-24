---
layout: slide
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

<div markdown="1" class="fragment">
Und damit Jekyll auf dem Server im Hintergrund läuft

{% highlight bash %}
$ jekyll serve -B # (--detach)
{% endhighlight %}
</div>
<div markdown="1" class="fragment">
Jekyll mit Apache braucht ein `.htaccess`-Datei

{% highlight conf %}
<IfModule mod_rewrite.c>
    Options +FollowSymlinks
    RewriteEngine On
    RewriteBase /
    RewriteRule (.*) http://localhost:4000/$1 [QSA,P]
</IfModule>
{% endhighlight %}
</div>

