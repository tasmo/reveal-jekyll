# reveal-jekyll

Transforms Markdown files into presentation slides using [reveal.js](#revealjs) and [Jekyll](#jekyll). The theme is based on [Solarized Colors](//github.com/altercation/solarized) (by Ethan Schoonover) containing a light and a dark theme.  
**reveal-jekyll** is ready for [GitHub Pages](https://pages.github.com/) :octocat:.

[![Build Status](https://travis-ci.org/tasmo/reveal-jekyll.svg?branch=master)](https://travis-ci.org/tasmo/reveal-jekyll)

Try the **[DEMO presentation](http://gh.tasmo.de/reveal-jekyll/)** (how to use Jekyll written in German).

## Howto

### Get reveal-jekyll

#### Hosting on Github Pages

Follow the instructions on [get started with GitHub Pages](//pages.github.com/).

##### As a User or Organization Site

To set up a user or organization site `https://<yourname>.github.io/`, fork [reveal-jekyll](//github.com/tasmo/reveal-jekyll) and name your fork with your user or organisation name like `<yourname>.github.io`. Your site will build off the master branch.

##### As a Project Site

To set up a [project site](https://help.github.com/articles/user-organization-and-project-pages/#project-pages) `https://<yourname>.github.io/<projectname>`:

 - Fork as above, but name your fork with whatever `<projectname>` you want.
 - Your site will build from the `gh-pages` branch, so you should [set that as the default branch](https://help.github.com/articles/setting-the-default-branch/).
 - In [_config.yml](./_config.yml) in your `gh-pages` branch, change `baseurl: ""` to `baseurl: /<projectname`. This is [needed](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) to construct asset include and internal link URLs correctly when you are serving your site from a non-root path.

##### For an Existing Repository

- clone your repository
- go into it
- add [reveal-jekyll](//github.com/tasmo/reveal-jekyll) as an upstream remote
- create an empty branch named `gh-pages`
- delete all cached files of new `gh-pages` branch from git
- clean the directory from uncached files
- merge [reveal-jekyll](//github.com/tasmo/reveal-jekyll)/master with your `<repository>/gh-pages`

```shell
git clone git@github.com/<yourname>/<repository>.git
cd <repository>
git remote add upstream https://github.com/tasmo/reveal-jekyll.git
git checkout --orphan gh-pages
git rm --cached -r .
git clean -fdx
git merge upstream/master
```

#### With Jekyll:

Install [RubyGems](//rubygems.org/pages/download) for your system.

Clone [reveal-jekyll](//github.com/tasmo/reveal-jekyll) with submodule reveal.js (recommended):

```shell
git clone --recursive --depth 1 https://github.com/tasmo/reveal-jekyll.git
```

…or just download the [zip file](//github.com/tasmo/reveal-jekyll/archive/master.zip).

Make sure you have a `Gemfile` in the root of your project containing at least:

```ruby
source "https://rubygems.org"

gem 'github-pages'
```

Install [Bundler](http://bundler.io/) and the dependencies:

```shell
gem install bundler \
bundle install
```

### Write your slides

Put your Markdown slides in the _\_posts_ folder.  
Name the files in order with pattern `YEAR-MONTH-DAY-TITLE.md` like:

```text
2014-1-1-start.md
2014-1-1-intro.md
…
2014-3-2-third-topic-second-slide.md
…
2014-9-8-end.md
2014-9-9-very-last-slide.md
```

Write the slide's header in [Front-matter](http://jekyllrb.com/docs/frontmatter/) and put the Markdown formatted content below. In the header you need at least the `layout: slide` attribute:

```markdown
---
layout: slide
title:
---

MARKDOWN_FOMATTED_SLIDE_CONTENT
```

### Personalize

In the `_config.yml` give your slide show an name, author's name and a description:

```yml
title:       reveal-jekyll
author:      Thomas Friese
description: Reveal.js for Jekyll with Solarized Color theme
```

### Start your slide show

On GitHub Pages you are done. Just watch `https://YOUR_GITHUB_NAME.github.io/`.

An your local machine run:

```shell
bundle exec jekyll serve
```

…and go to `http://127.0.0.1:4000/`.

***

## [reveal.js](http://lab.hakim.se/reveal-js/)

A framework for easily creating beautiful presentations using HTML.

[reveal.js](//github.com/hakimel/reveal.js) comes with a broad range of features including [nested slides](//github.com/hakimel/reveal.js#markup), [markdown contents](//github.com/hakimel/reveal.js#markdown), [PDF export](//github.com/hakimel/reveal.js#pdf-export), [speaker notes](//github.com/hakimel/reveal.js#speaker-notes) and a [JavaScript API](//github.com/hakimel/reveal.js#api). It's best viewed in a browser with support for CSS 3D transforms but [fallbacks](//github.com/hakimel/reveal.js/wiki/Browser-Support) are available to make sure your presentation can still be viewed elsewhere.

### Links for reveal.js:

- [Installation](#installation): Step-by-step instructions for getting reveal.js running on your computer.
- [Changelog](//github.com/hakimel/reveal.js/releases): Up-to-date version history.
- [Examples](//github.com/hakimel/reveal.js/wiki/Example-Presentations): Presentations created with reveal.js, add your own!
- [Browser Support](//github.com/hakimel/reveal.js/wiki/Browser-Support): Explanation of browser support and fallbacks.
- [Instructions](//github.com/hakimel/reveal.js#instructions) How to use reveal.js.
- [MIT License](//github.com/hakimel/reveal.js/blob/master/LICENSE)

## [Jekyll](http://jekyllrb.com/)

[Jekyll](//github.com/jekyll/jekyll) is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server. Jekyll is the engine behind [GitHub Pages](http://pages.github.com), which you can use to host sites right from your GitHub repositories.

### Links for Jekyll:

- [Getting Started](//github.com/jekyll/jekyll#getting-started) If you don't know Jekyll yet.
- [Runtime Dependencies](//github.com/jekyll/jekyll#runtime-dependencies)
- [MIT License](//github.com/jekyll/jekyll/blob/master/LICENSE)
- [Contributors](//github.com/jekyll/jekyll/graphs/contributors)

## Differences and Limitations

### Slide attributes

Attributes to the slide `<section>` elements are written in the [Front-matter](http://jekyllrb.com/docs/frontmatter/):

```markdown
---
layout: slide
title: Background Transitions
data:
  transition: linear
  background: 'red'
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

### Vertical slides

For vertical scrolling you need to leave the `title:` blank. All content on vertical slides must be wrapped in HTML `<section>` blocks:

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

All options for the reveal.js presentation are available in the `_config.yml` as sub keys of `reveal:`.

The configuration will be built in the `<script />` block at the bottom of the `index.html` presentation file.

### Code syntax highlighting

reveal-jekyll uses [kramdown](//github.com/gettalong/kramdown) for Markdown rendering and [rouge](//github.com/jneen/rouge) for syntax highlighting. Below is an example with CoffeeScript code that will be syntax highlighted:

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

You can show slide numbers by selecting a format in the `_config.yml` file:

```coffee
slideNumber:
  # Slide number formatting can be configured using these variables:
  #  "h.v":  horizontal . vertical slide number (default)
  #  "h/v":  horizontal / vertical slide number
  #    "c":  flattened slide number
  #  "c/t":  flattened slide number / total slides
  # "none":  don't show slide numbers
  format:    "c/t"
```

### Speaker notes

reveal.js comes with a speaker notes plug-in which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the 's' key on your keyboard to open the notes window.

Notes are defined by appending an `<aside>` element to a slide as seen below. You can add the `markdown="1"` attribute to the aside element if you prefer writing notes using Markdown:

```html
---
layout: slide
---

Slide text...

<aside class="notes" markdown="1">
Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
</aside>
```

When used locally, this feature requires that reveal.js [runs from a local web server](//github.com/hakimel/reveal.js#full-setup).

***

## Runtime dependencies for development

### Running Jekyll on your server:

- Commander: Command-line interface constructor (Ruby)
- Colorator: Colorizes command line output (Ruby)
- Classifier: Generating related posts (Ruby)
- Directory Watcher: Auto-regeneration of sites (Ruby)
- Kramdown: Default Markdown engine (Ruby)
- Liquid: Templating system (Ruby)
- Pygments.rb: Syntax highlighting (Ruby/Python)
- Safe YAML: YAML Parser built for security (Ruby)
- Sass: CSS extension language (Ruby)
- CoffeeScript: compiling to JavaScript (Ruby)

### Running reveal.js:

Reveal.js doesn't _rely_ on any third party scripts to work but a few optional libraries are included by default. These libraries are loaded as dependencies in the order they appear, for example:

```javascript
Reveal.initialize({
  dependencies: [
    // Cross-browser shim that fully implements classList - //github.com/eligrey/classList.js/
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

    // Zoom in and out with Alt+click
    { src: 'plugin/zoom-js/zoom.js', async: true },

    // Speaker notes
    { src: 'plugin/notes/notes.js', async: true },

    // Remote control your reveal.js presentation using a touch device
    { src: 'plugin/remotes/remotes.js', async: true },

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

## Licenses

[Jekyll](//github.com/jekyll/jekyll): [MIT licensed](//github.com/jekyll/jekyll/blob/master/LICENSE)

[reveal.js](//github.com/hakimel/reveal.js): [MIT licensed](//github.com/hakimel/reveal.js/blob/master/LICENSE)  
Copyright (C) 2016 Hakim El Hattab, http://hakim.se

[reveal-jekyll](//github.com/tasmo/reveal-jekyll) contains the third party fonts
 - [Open Sans](https://www.google.com/fonts/specimen/Open+Sans) ([Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)),
 - [Droid Serif](https://www.google.com/fonts/specimen/Droid+Serif) ([Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)),
 - [Font Awesome](//github.com/FortAwesome/Font-Awesome) ([License: SIL OFL 1.1](http://fontawesome.io/license/))
and the color scheme [Solarized Colors](//github.com/altercation/solarized) ([MIT License](//github.com/altercation/solarized/blob/master/LICENSE)).

[reveal-jekyll](//github.com/tasmo/reveal-jekyll): [MIT licensed](//github.com/tasmo/reveal-jekyll/blob/master/LICENSE)  
Copyright (C) 2016 Thomas Friese, http://tasmo.rocks
