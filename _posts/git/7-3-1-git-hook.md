---
layout: default
title: "Alles von selbst"
published: true
classes:
data:
  transition: linear
---

> Git-Hooks lösen bei Git-Aktionen andere Aktionen aus.

Ein Hook ist ein Skript, dass sich im Git-Unter&shy;verzeichnis hooks befindet. Die Skriptsprache wird am Anfang des Skriptes festgelegt (z.B. `#!/bin/bash`).

<div markdown="1" class="fragment">
{% highlight bash %}
#!/bin/sh
GIT_WORK_TREE=/PFAD_HTML_ORDNER git checkout -f
LC_ALL="en_US.UTF-8" /.../bin/jekyll build -s \
/PFAD_HTML_ORDNER -d /PFAD_HTML_ORDNER/_site
exit
{% endhighlight %}

`GIT_PROJEKT/hooks/post-receive`  
löst auf dem Server den Shell-Befehl `jekyll build` aus
</div>