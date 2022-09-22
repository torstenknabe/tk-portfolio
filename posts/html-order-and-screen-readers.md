---
title: HTML Order and Screen Readers
date: 2022-09-22T02:34:46.055Z
author: Torsten Knabe
summary: Can you hear? This site does something unique for the HTML order and
  screen readers.
tags:
  - a11y
---
I want this site to be perfectly accessible and a joy to use on screen readers. To that end I've tested on screen readers (NVDA, VoiceOver, and TalkBack) and it sounds good to me. However, I am not a native screen reader user so I absolutely will miss something. Unfortunately I don't have a budget to do user testing for my personal site. If someone is using a screen reader to access my site and finds a problem please fill out the contact form on this page to let me know.

One design choice that sounds good to me but I'm curious about is how I set up the sites HTML order. Most sites put the header and navigation (nav) information at the top of the site HTML. This means that on every page you go to, you need to start by skipping the navigation to get to the appropriate content area. Instead lieu of that, I put the main content first and then at the end added the nav below the main content. I'm using css grid order to swap the display order but keeping the semantic order content first. If any native screen reader user runs across my site, how does this sound to you? It sounds better to me and I enjoy not having to skip the nav on every page, but I'm curious if that's a bad guess on my part. The guidelines around using grid order do warn against flipping the display order but not the content order which they are afraid could degrade the experience for screen reader users. However, I am think I am enhancing the experience by carefully using this behavior.

Specifically here's what's going on in the HTML.

```html
<div class="wrapper" id="wrapper">
  <div class="main-content">
    <main id="main">
    </main>
  </div>
  <div class="side-nav nav">
	<header class="header-holder">
      <nav role="navigation" aria-label="Primary Navigation" class="primary-nav" id="primary-nav">
      </nav>
     </header>
   </div>
 </div>
```

That sets up the main content first followed by the nav.

Then this CSS sets the display order:

```css
/* Sets up a grid with two columns */
.wrapper {
	display: grid;
	grid-template-columns: 18rem 1fr;
	grid-template-rows: 100%;
	grid-auto-flow: dense;
}
/* Puts the main content second */
.main-content {
	grid-column: 2;
}
```

What do you think? Has anyone else run across an approach like this, and what did they think about it? If you use or test with screen readers, how does this sound?