---
layout: slide
title: "Co-Working"
published: true
classes:
data:
  transition: linear
---

<div markdown="1" class="fragment">
Änderungen an Server übertragen ([commit][commit]{: .external}):

{% highlight bash %}
$ git add -A # alle Änderungen lokal mitteilen
$ git commit # die Änderungen mit Server abgleichen
$ git push   # alles zum Server übertragen
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Mit weiteren Computern arbeiten:

{% highlight bash %}
$ git clone NAME@SERVER:/PFAD/PROKEKT.git PROJEKT # download
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Änderungen vom Server abholen:

{% highlight bash %}
$ git pull
{% endhighlight %}
</div>

[commit]: http://git-scm.com/book/en/Git-Basics-Recording-Changes-to-the-Repository
