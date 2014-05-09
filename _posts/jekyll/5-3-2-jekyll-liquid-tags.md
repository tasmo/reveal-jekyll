---
layout: slide
title: "Tags im Template"
classes:
data:
  transition: linear
---

Die Parameter
{% highlight markdown %}
tags: [eins, zwei]
{% endhighlight %}
werden mit

{% highlight html %}
{{ "{% for tag in page.tags " }}%}
<a href="/tag/{{ "{{ tag | escape " }}}}.html">{{ "{{ tag " }}}}</a><br />
{{ "{% endfor " }}%}
{% endhighlight %}

<div markdown="1" class="fragment">
in `_layouts/default.html` zu folgendem HTML

{% highlight html %}
<a href="/tag/eins.html">eins</a>
<a href="/tag/zwei.html">zwei</a>
{% endhighlight %}
</div>
<aside markdown="1" class="notes">
</aside>