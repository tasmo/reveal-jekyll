---
layout: slide
title: "Die Dateistruktur"
classes:
data:
  transition: linear
---

{% highlight text %}
.
├── _config.yml (Konfiguration)
├── _drafts (Entwürfe / bei Bedarf anlegen)
|   ├── eine-Idee-zur-Rettung-der-Welt.textile
|   └── noch-eine-Idee.markdown
├── _includes (HTML-Fragmente, die eingebunden werden können)
|   ├── footer.html
|   └── header.html
├── _layouts (die Templates)
|   ├── default.html (für alles, was übrig ist)
|   └── post.html (für Blog-Posts)
├── _posts (hier kommen alles Blogeinträge hinein)
|   └── 2014-05-06-welcome-to-jekyll.markdown
├── _data (für eventuell zusätzliche Einstellungen)
|   └── members.yml
├── _site (hier generiert Jekyll die Seiten hinein)
├── css
|   ├── main.css (das Haupt-Style-Sheet)
|   └── syntax.css (das Style-Sheet zur Hervorhebung von Code)
└── index.html (das Template für die Index-Seite)
{% endhighlight %}

<aside markdown="1" class="notes">
Jekyll verknüpft jede einzelne Datei mit der Vorlage und speichert die HTML-Seiten unterhalb von `_site` unter demselben relativen Pfad wie die Originalinhalt mit der Endung `.html` ab. Allen anderen Dateien wie CSS-, JavaScript- oder Bilddateien werden relativ kopiert. Sämtliche Dateien und Verzeichnisse, die mit einem Punkt oder Unterstrich anfangen (_site, _layouts ...) werden ignoriert.
</aside>