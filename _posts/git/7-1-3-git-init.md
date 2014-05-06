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
([remote repository](http://git-scm.com/book/en/Git-Basics-Working-with-Remotes)):

{% highlight bash %}
mkdir PROJEKT.git # Projekt-Ordner namens "PROJEKT.git" anlegen
cd PROJEKT.git    # in den Ordner wechseln
git init -bare    # leeres git repository anlegen
{% endhighlight %}
</div>

<div markdown="1" class="fragment">
Am eigenen Rechner den Arbeitsordner anlegen und initialisieren:

{% highlight bash %}
mkdir PROJEKT # Arbeitsordner namens "PROJEKT" anlegen
cd PROKEKT    # in den Ordner wechseln
git init      # Verzeichnis an git anmelden
git remote add -f MASTER NAME@SERVER:/PFAD/PROKEKT.git
              # Verzeichnisse verbinden
{% endhighlight %}
</div>
