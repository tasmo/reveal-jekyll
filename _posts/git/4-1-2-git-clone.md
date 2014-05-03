---
layout: default
title: "Co-Working"
published: true
classes:
data:
  transition: linear
---

<div markdown="1" class="fragment">
Änderungen an Server übertragen ([commit][commit]):

{% highlight bash linenos %}
git add -A # alle Änderungen lokal mitteilen
git commit # die Änderungen mit Server abgleichen
git push   # alles zum Server übertragen
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Mit weiteren Computern arbeiten:

{% highlight bash linenos %}
git clone NAME@SERVER:/PFAD/PROKEKT.git PROJEKT # download
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Änderungen vom Server abholen:

{% highlight bash linenos %}
git pull
{% endhighlight %}
</div>

[commit]: http://git-scm.com/book/en/Git-Basics-Recording-Changes-to-the-Repository
