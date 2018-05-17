---
layout: slide
title: "SSH-Key anstatt Passwort"
published: true
classes:
data:
  transition: linear
---

Einen privaten und einen öffentlichen Schlüssel generieren

{% highlight bash %}
[erna@Heimrechner ~]$ ssh-keygen -t rsa
# ...
# Your identification has been saved in /home/erna/.ssh/id_rsa.
# Your public key has been saved in /home/erna/.ssh/id_rsa.pub.
# ...
{% endhighlight %}

<div markdown="1" class="fragment">
Dem Server den öffentlichen Key übergeben

{% highlight bash %}
$ rsync -v -e ssh --archive ~/.ssh/id_rsa.pub _SERVER_:new_key.pub
$ ssh _SERVER_ "test -d .ssh || mkdir .ssh && chmod 700 .ssh"
$ ssh _SERVER_ "cat new_key.pub >> .ssh/authorized_keys"
$ ssh _SERVER_ "shred -u new_key.pub"
$ ssh-add ~/.ssh/id_rsa.pub
{% endhighlight %}
</div>

<aside class="notes">
</aside>
