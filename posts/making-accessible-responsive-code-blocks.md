---
title: Making accessible, responsive code blocks
date: 2021-10-31T19:01:06.168Z
author: Torsten Knabe
summary: I added code blocks to my site with markdown but I had to figure out
  how to make them responsive and accessible.
tags:
  - eleventy
  - markdown
  - a11y
  - JavaScript
  - HTML  
  - CSS

---
As I started to write out different posts on this site, I realized that I wanted to add code examples to my posts so that I could show code that I'm discussing. My first thought was great, I can simply insert a code block in markdown and call it a day. Three back-tics to the rescue! ```` ``` ````. However, once I did that I quickly discovered that these code blocks were not responsive. On mobile they would break the responsiveness of the page and make it almost entirely unreadable because the width of the page jutted out to the width of the entire `<code>` element, which was invariably wider than the width of my screen.

## Making code blocks responsive

I realized of course that this is a solved problem, and that other sites certainly have responsive code blocks and I can simply copy what they are doing. My first thought was <https://css-tricks.com/> which is an excellent resources for problems like this. A quick google got me to this great article on [styling in and out of code blocks](https://css-tricks.com/styling-code-in-and-out-of-blocks/). That article has some great styling suggestions, and I also inspected the code blocks on that article to see what was happening with them. In fact, those did everything I wanted on my own site, so I attempted to simply copy exactly what was suggested. However, that didn't entirely work for me and I'm still unsure as to why. Perhaps there's some different context to my site, or some special CSS I am missing that enables what the article suggests. For whatever reason, that didn't work for me. I would open an article with a code block in dev tools, and then `display: none;` the `pre` and `code` elements, and sure enough the page snapped back into good responsive behavior when they are gone. So, I continued my search. I eventually realized that I had actually independently solved a similar problem before - long content that I need to make horizontally scroll on mobile - for my work I updated a shared component on [vote record pages](https://huizenga.house.gov/voterecord/) such that on mobile you can horizontally scroll across a wide table. I don't love the solution I used there, but it does work - I'm using calc to set a fixed width on an outer element, but using 100vw as a part of the calculation so that it's responsive. This works, but requires a magic number to account for any padding on the page. Fortunately because I use ems and rems in CSS, those numbers are usually pretty straightforward. In this case I need 4 rems before my single breakpoint, and 22 rems after that breakpoint. Once I set a fixed width on the outer element and enable scrolling, then the inner element can set the appropriate text styling rules. That leaves me with the following:

```css
pre {
	padding: 1rem;
	max-width: calc(100vw - 22rem);
	overflow: auto;
	tab-size: 2;
	word-break: normal;
	hyphens: none;
}
pre code {
	overflow-x: auto;
	white-space: pre;
	display: block;
	min-width: 100px;
	max-width: 100%;
	min-height: 100px;
}
```

Once I added those styles, huzzah I now had a responsive code block. 

## Making those code blocks accessible

However, as I ran accessibility testing on my site after this change, I was left with a new problem - the code blocks are now scrollable regions, and these scrollable regions are not focusable by default. Fortunately, the axe dev tools always include an explainer link for errors and those pages usually have helpful suggestions on best practices and remediation which is exactly what happened here. My responsive work had caused this accessibility error - [Ensure that scrollable region has keyboard access](https://dequeuniversity.com/rules/axe/4.3/scrollable-region-focusable). The suggested fix is to simply add `tabindex="0"` to the scrollable region, in this case to the `<code>` element. If I was writing pure HTML, this wouldn't be a problem. I would simply add that attribute to the element and call it a day. However, I'm using markdown as a part of eleventy, so I can't as simply independently control which HTML attributes are on each markdown generated element. That led to another round of googling - surely somebody else has encountered this problem and solved it. I eventually ran across the [eleventy syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/). As of version 3.1.1, you can add HTML attributes to `<pre>` and `<code>` tags. This is exactly what I needed. I followed the documentation to install and I thought that I had everything I needed. However, the one thing that isn't as clear in the documentation is that you *must* declare the language for the markdown element for the plugin to take effect. It's as easy as 

````css
```css
.class {
  display: block;
}
```
````

where you simply add in the name of the language after the three back-ticks. I'm using the Netlify CMS and so I just have to quickly switch to markdown in the browser to add it in. However, once it gets initialized, then the syntax highlighter kicks in and it also adds the `tabindex="0"` to the elements I specified in my eleventy.js file. This of course, has the added bonus of giving me syntax highlighting as well, which is a nice bonus and something I wanted anyway.

After I got the tabindex attribute working I then went to retest for accessibility, and bam, I got 48 color contrast errors. It turns out that the eleventy syntax highlighter plugin is using PrismJS. I was using the default Okaidia theme which is unfortunately inaccessible. Fortunately after reading through the documentation, it is very easy to use a different theme. I took a look on the [prism themes page](https://github.com/PrismJS/prism-themes) and found that likely, someone else ([Eric Bailey](https://github.com/ericwbailey)) has encountered the exact same problem I just ran into, and they've solved it by making their own accessible theme - the [A11y Dark theme](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-a11y-dark.css). I then used that theme, rechecked my site for accessibility errors and found no more automated errors!

This was relatively straightforward for me to implement, but would have been immensely more difficult without the syntax highlighting plugin 3.1.1 update that came out on May 23, 2021 - just a mere 5 months ago. I would have had to either somehow make that change myself, find some other solution, change the page to HTML markup, or run some client side JS to add in that attribute to all code blocks. Additionally, if there was no accessible PrismJS theme, I would have had to write my own, which would have been fairly straightforward, if tedious. I stand on the shoulders of giants, but also hope that more projects take accessibility in mind from the beginning so that the default is accessibility and it doesn't get ad hoc patches.