---
layout: default
title: "SSH-Key anstatt Passwort"
published: true
classes:
data:
  transition: linear
---

Einen privaten und einen öffentlichen Schlüssel generieren

{% highlight bash %}
[erna@Heimrechner ~]$ ssh-keygen -t dsa
...
Your identification has been saved in /home/erna/.ssh/id_dsa.
Your public key has been saved in /home/erna/.ssh/id_dsa.pub.
...
{% endhighlight %}

<div markdown="1" class="fragment">
Dem Server den öffentlichen Key übergeben

{% highlight bash %}
rsync -v -e ssh --archive ~/.ssh/id_dsa.pub [server]:new_key.pub
ssh [server] "test -d .ssh || mkdir .ssh && chmod 700 .ssh"
ssh [server] "cat new_key.pub >> .ssh/authorized_keys"
ssh [server] rm new_key.pub
{% endhighlight %}
</div>

<aside class="notes">
</aside>
