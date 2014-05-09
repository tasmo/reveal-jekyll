---
layout: slide
title: "Templating mit Liquid"
classes:
data:
  transition: linear
---

Im Template wird der Parameter `title` mit `{{ "{{ page.title " }}}}` abgerufen.

<div markdown="1" class="fragment">
{% highlight markdown %}
title:      "Mein erster Post"
{% endhighlight %}

wird zu HTML gewandelt

{% highlight html %}
<title>Mein erster Post</title>
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
und aus

{% highlight markdown %}
title:      "Mein erster Post"
date:       2014-05-07 15:15:00
categories: jekyll update
{% endhighlight %}

wird die URL  
`/jekyll/update/2014/05/07/mein-erster-post.html`.
</div>
<aside markdown="1" class="notes">
</aside>