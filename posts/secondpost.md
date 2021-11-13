---
title: Hiding my email address from bots
date: 2021-10-08T16:45:07.498Z
author: Torsten Knabe
summary: I've attempted to hide my email address from bots using some clever JS,
  but still make it available to most humans.
description: I've attempted to hide my email address from bots using some clever
  JS, but still make it available to most humans.
tags:
  - Programming
  - JavaScript
  - HTML
---
On the footer of this site you may see that I have my email address available. I want people to be able to contact me, but I don't want my email address swept up by bots. Many bots parse through HTML documents to steal email addresses and then use them for nefarious purposes. Fortunately, many of these bots don't/can't load JavaScript on a page they're scanning. As such, if I insert my email into the DOM with JS, then I have less to worry about for bots scraping pages.

I got this approach from [tatestrickland.com](https://tatestrickland.com) although it appears that he has since removed it from his current site. What he was doing was the below:

```html
<li>
<script type="text/javascript">
  var part1 = "name";
  var part2 = "gmail.com";
  document.write('<a href="mai' + 'lto:' + part1 + '@' + part2 + '">');
</script>Email</a>
```

This makes it much harder to parse if JavaScript is not enabled, and is a line of defense against bots.

However, after I changed var to const and added this to my site and was doing testing for console errors, I got a warning that said: "An unbalanced tree was written using document.write() causing data from the network to be reparsed. For more information <https://developer.mozilla.org/en/Optimizing_Your_Pages_for_Speculative_Parsing>". That had a broken link in Firefox to MDN, but I did some handy googling and landed on this [MDN page about speculative parsing](https://developer.mozilla.org/en-US/docs/Glossary/speculative_parsing).

That very helpful document showed me what I was doing wrong - "Don't write unbalanced trees. `<script>document.write("<div>");</script>` is bad. `<script>document.write("<div></div>");</script>` is OK." I was using `document.write` to insert just the opening `<a>` tag, and not also the closing `</a>` tag.

Fortunately, that's an easy enough fix. Now my code looked like below:

```html
<li>
<script type="text/javascript">
  const part1 = "torsten.knabe";
  const part2 = "gmail.com";
  const part3 = "Email</a>";
  document.write('<a href="mai' + 'lto:' + part1 + '@' + part2 + '">' + part3');
</script>
</li>
```

But then I thought about, well what happens if JavaScript is disabled - I'd be left with an empty `<li>` and that creates an accessibility error. As such, I then included the `<li>` in my script so I'm left with:

```html
<script type="text/javascript">
  const part1 = "torsten.knabe";
  const part2 = "gmail.com";
  const part3 = "Email</a>";
  document.write('<li><a href="mai' + 'lto:' + part1 + '@' + part2 + '">' + part3 + '</li>');
</script>
```

## Rewriting for Performance

After I implemented the above solution and started performance optimization testing, I re-remembered that using document.write is a bad practice because it blocks the main thread. As such, you don't want to use it unless absolutely necessary. As this is definitely not absolutely necessary, and what it renders is in the footer of the page, I can rewrite it to use different JavaScript methods that don't block the main thread.

A bit of perusing MDN gave me two helpful articles. The first for [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) which gave me the main outline for what I want to do - on load, run a function that creates a new element. However, what I need to do is to create two HTML elements - an `<li>` and an `<a>`. This brought me to [Node.InsertBefore()](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) which talks about how to insert elements inside of each other. Modifying the example code on those two pages gets me the below:

```html
<script type="text/javascript">
  document.body.onload = addEmail;
  function addEmail () {
    const newLi = document.createElement("li");
    const newLink = document.createElement("a");
    const newLinkText = document.createTextNode("Email");
    newLink.appendChild(newLinkText);
    const part1 = "torsten.knabe";
    const part2 = "gmail.com";
    newLink.setAttribute("href", "mailto:" + part1 + "@" + part2);
    newLi.appendChild(newLink);
    const existingLi = document.getElementById("contact");
    const parentUl = existingLi.parentNode;
    parentUl.insertBefore(newLi, existingLi);
  }
</script>
```

Now I have some JS that accomplishes the exact same thing as document.write, but it doesn't block the main thread so it's more performant, even though it is longer.

What I'm left with is that if JS is disabled, then the page simply skips that entire list item instead of leaving the user with some incorrect HTML. This is somewhat unfortunate, but I consider it a progressive enhancement - every page on my site in the footer has a contact form, so there is still an equivalent way to contact me even if you have JS disabled.