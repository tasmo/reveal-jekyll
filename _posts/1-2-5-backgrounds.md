---
layout: slide
title: ""
---

<section markdown="1" data-background="#cb4b16">

## Slide Backgrounds

Set `data-background="#cb4b16"` on a slide to change the full page background to the given color. All CSS color formats are supported.

{% highlight markdown %}
---
data:
  background: '#cb4b16'
---
{% endhighlight %}

[![Down arrow](https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png)](#){: .image .navigate-down}

</section>
<section markdown="1" data-background="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png">

## Image Backgrounds

{% highlight markdown %}
---
data:
  background: image.png
---
{% endhighlight %}

</section>
<section markdown="1" data-background="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" data-background-repeat="repeat" data-background-size="100px">

## Repeated Image Backgrounds

{% highlight markdown %}
---
data:
  background: image.png
  background-repeat: repeat
  background-size: 100px
---
{% endhighlight %}

</section>
