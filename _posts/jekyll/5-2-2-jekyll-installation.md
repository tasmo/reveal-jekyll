---
layout: slide
title: ""
classes:
data:
  transition: linear
---

## Installation von Jekyll

### Linux Debian-like (z.B. Ubuntu™):

{% highlight bash %}
$ sudo apt-get install ruby ruby-dev jekyll
{% endhighlight %}

<div markdown="1" class="fragment">
### Mac:

#### mit [Homebrew][Homebrew]{: .external}:

{% highlight bash %}
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)" # installiert den Homebrew Paketmanager
$ brew install brew-gem # installiert den Ruky-Paketmanager
$ brew gem jekyll       # installiert Jekyll
{% endhighlight %}
</div>
<div markdown="1" class="fragment">
#### mit OS-X-Paketmanager:

[Ruby][Ruby download]{: .external}-Paket herunterladen und installieren:

{% highlight bash %}
$ gem install jekyll
{% endhighlight %}
</div>

[Ruby download]: https://www.ruby-lang.org/en/downloads/
[Homebrew]: http://brew.sh/