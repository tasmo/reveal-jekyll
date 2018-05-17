---
layout: slide
title: "git init"
published: true
classes:
data:
  transition: linear
---

<div markdown="1" class="fragment">
Neues git-Hauptverzeichnis auf dem Server anlegen
([remote repository](http://git-scm.com/book/en/Git-Basics-Working-with-Remotes){: .external}):

{% highlight bash %}
$ mkdir PROJEKT.git # Projekt-Ordner namens "PROJEKT.git" anlegen
$ cd PROJEKT.git    # in den Ordner wechseln
$ git init -bare    # leeres git repository anlegen
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Am eigenen Rechner den Arbeitsordner anlegen und initialisieren:

{% highlight bash %}
$ cd PROKEKT    # in den Arbeitsordner namens "PROJEKT" wechseln
$ git init      # Verzeichnis an git anmelden
$ git remote add -f MASTER NAME@SERVER:/PFAD/PROKEKT.git
                # Verzeichnisse verbinden
{% endhighlight %}
</div>
