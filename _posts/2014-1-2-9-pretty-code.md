---
layout: slide
title: Pretty Code
---

{% highlight javascript %}
function linkify( selector ) {
  if( supports3DTransforms ) {
 
    var nodes = document.querySelectorAll( selector );
 
    for( var i = 0, len = nodes.length; i &lt; len; i++ ) {
      var node = nodes[i];
 
      if( !node.className ) {
        node.className += ' roll';
      }
    }
  }
}
{% endhighlight %}

Courtesy of [Rouge](https://github.com/jneen/rouge){: .external}.