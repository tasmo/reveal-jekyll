# reveal-jekyll

Transforms Markdown files into presentation slides using [Jekyll](http://jekyllrb.com/). The theme is based on [Solarized colors by Ethan Schoonover](https://github.com/altercation/solarized) ([MIT License](https://github.com/altercation/solarized/blob/master/LICENSE)) containing a light and a dark theme.

reveal-jekyll contains the third party fonts [Open Sans](https://www.google.com/fonts/specimen/Open+Sans) ([Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)), [Droid Serif](https://www.google.com/fonts/specimen/Droid+Serif) ([Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)) and [Font Awesome](https://github.com/FortAwesome/Font-Awesome) ([License: SIL OFL 1.1](http://fontawesome.io/license/)).

## [reveal.js](http://lab.hakim.se/reveal-js/)

A framework for easily creating beautiful presentations using HTML.

[reveal.js](https://github.com/hakimel/reveal.js) comes with a broad range of features including [nested slides](https://github.com/hakimel/reveal.js#markup), [markdown contents](https://github.com/hakimel/reveal.js#markdown), [PDF export](https://github.com/hakimel/reveal.js#pdf-export), [speaker notes](https://github.com/hakimel/reveal.js#speaker-notes) and a [JavaScript API](https://github.com/hakimel/reveal.js#api). It's best viewed in a browser with support for CSS 3D transforms but [fallbacks](https://github.com/hakimel/reveal.js/wiki/Browser-Support) are available to make sure your presentation can still be viewed elsewhere.

### Links for reveal.js:

- [Installation](#installation): Step-by-step instructions for getting reveal.js running on your computer.
- [Changelog](https://github.com/hakimel/reveal.js/releases): Up-to-date version history.
- [Examples](https://github.com/hakimel/reveal.js/wiki/Example-Presentations): Presentations created with reveal.js, add your own!
- [Browser Support](https://github.com/hakimel/reveal.js/wiki/Browser-Support): Explanation of browser support and fallbacks.
- [Instructions](https://github.com/hakimel/reveal.js#instructions) How to use reveal.js.
- [MIT License](https://github.com/hakimel/reveal.js/blob/master/LICENSE)

## [Jekyll](http://jekyllrb.com/)

[Jekyll](https://github.com/jekyll/jekyll) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server. Jekyll is the engine behind [GitHub Pages](http://pages.github.com), which you can use to host sites right from your GitHub repositories.

### Links for Jekyll:

- [Getting Started](https://github.com/jekyll/jekyll#getting-started) If you don't know Jekyll yet.
- [Runtime Dependencies](https://github.com/jekyll/jekyll#runtime-dependencies)
- [MIT License](https://github.com/jekyll/jekyll/blob/master/LICENSE)
- [Contributors](https://github.com/jekyll/jekyll/graphs/contributors)

## Differences and Limitations

### Slide Attributes

Attributes to the slide `<section>` elements are written in the [Front-matter](http://jekyllrb.com/docs/frontmatter/):

```markdown
---
layout: slide
title: Background Transitions
data:
  transition: linear
  background: '#d33682'
  background-transition: slide
---
```

### Fragments

Markdown fragments must be covered in a HTML block element using the attribute `markdown="1"`:

```html
<div markdown="1" class="fragment">
## Markdown Heading
 
Fragment 1 text
</div>
<div markdown="1" class="fragment">
Fragment 2 text
</div>
```

Fragments can be nested.

### Vertical Slides

For vertical scrolling you need to leave the `title:` blank. All content on vertical slides must be wrapped in HTML `<section>` blocks.

```html
---
layout: slide
title:
---

<section markdown="1">
## Top Slide
</section>
<section markdown="1">
## Bottom Slide
</section>
```

### Configuration

All options for the reveal.js presentation are available in the `_config.yml` under `reveal:`.

The configuration will be built at the bottom of the presentation.

### Code syntax highlighting

reveal-jekyll uses [kramdown](https://github.com/gettalong/kramdown) for Markdown rendering and [rouge](https://github.com/jneen/rouge) for syntax highlighting. Below is an example with CoffeeScript code that will be syntax highlighted.

```coffee
{% highlight coffee %}
# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x
{% endhighlight %}
```

### Slide numbers

- not working yet

### Speaker Notes

reveal.js comes with a speaker notes plug-in which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the 's' key on your keyboard to open the notes window.

Notes are defined by appending an ```<aside>``` element to a slide as seen below. You can add the ```markdown="1"``` attribute to the aside element if you prefer writing notes using Markdown.

When used locally, this feature requires that reveal.js [runs from a local web server](#full-setup).

```html
---
layout: slide
---

Slide text...

<aside class="notes" markdown="1">
Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
</aside>
```

## Runtime Dependencies

### For running Jekyll:

- Commander: Command-line interface constructor (Ruby)
- Colorator: Colourizes command line output (Ruby)
- Classifier: Generating related posts (Ruby)
- Directory Watcher: Auto-regeneration of sites (Ruby)
- Kramdown: Default Markdown engine (Ruby)
- Liquid: Templating system (Ruby)
- Pygments.rb: Syntax highlighting (Ruby/Python)
- Safe YAML: YAML Parser built for security (Ruby)
- Sass: CSS extension language (Ruby)
- CoffeeScript: compiling to JavaScript (Ruby)

### For running reveal.js:

Reveal.js doesn't _rely_ on any third party scripts to work but a few optional libraries are included by default. These libraries are loaded as dependencies in the order they appear, for example:

```javascript
Reveal.initialize({
  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

    // Zoom in and out with Alt+click
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

    // Speaker notes
    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },

    // Remote control your reveal.js presentation using a touch device
    { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } },

    // MathJax
    { src: 'plugin/math/math.js', async: true }
  ]
});
```

You can add your own extensions using the same syntax. The following properties are available for each dependency object:
- **src**: Path to the script to load
- **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
- **callback**: [optional] Function to execute when the script has loaded
- **condition**: [optional] Function which must return true for the script to be loaded

## License

MIT licensed

Copyright (C) 2014 Thomas Friese, http://tasmo.de
