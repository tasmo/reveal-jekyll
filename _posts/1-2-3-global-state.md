---
layout: slide
title: Global State
---

Set `data-state="something"` on a slide and `"something"`
will be added as a class to the document element when the slide is open. This lets you
apply broader style changes, like switching the background.

In "reveal-jekyll" you can do this by setting it in the Front-matter of the slide like this:

{% highlight markdown %}
---
data:
  state: something
---
{% endhighlight %}