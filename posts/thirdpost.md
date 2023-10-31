---
title: Making my logo in SVG and CSS
date: 2021-10-24T00:02:35.725Z
author: Torsten Knabe
summary: Once I had a logo design on paper, I had to actually translate that
  paper to code to make a logo I could use on my site.
tags:
  - SVG
  - CSS
  - Design
  - Portfolio
  - post
---
Now that I had a logo design sketched out on paper that I liked, it was time to translate that into code. I quickly decided on using SVG. SVG allows for infinite scaling, easy use in other contexts like print, and lends itself easily to animation. Trying to draw my logo with HTML and CSS seemed like a mess of ugly divs, and unresponsive code.

As such, I reached for Illustrator first and drew out my design. Then I exported it to see what that looks like in code. I ended up switching a couple times how exactly I drew the lines, to get the desired SVG. I set a very small 24 x 24 canvas because I wanted to make the math easy on myself. I also made sure to use shapes in Illustrator that would translate well to SVG like `<line>` and `<ellipse>`. What I didn't want to end up with was markup that would be difficult to work with, with ugly paths or disjointed shapes. I definitely had to try multiple times and then massage the SVG by hand to make sure that I ended up with what I wanted.

```svg
<svg id="tk-logo" data-name="Layer 1" role="decorative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
  <!-- Middle T vertical line -->
  <line class="tk-logo lines brush" id="vtop" x1="12" x2="12" y2="24"/>
  <line class="tk-logo lines" id="vtop2" x1="12" x2="12" y2="24"/>
  <line class="tk-logo lines brush" id="vtop3" x1="12" x2="12" y2="24"/>
  <line class="tk-logo lines" id="vtop4" x1="12" x2="12" y2="24"/>
  <line class="tk-logo lines" id="vtop5" x1="12" x2="12" y2="24"/>
  <line class="tk-logo lines" id="vtop6" x1="12" x2="12" y2="24"/>
  <!-- Top T horizontal line -->
  <line class="tk-logo lines brush" id="htop" y1="0.5" x2="24" y2="0.5"/>
  <line class="tk-logo lines" id="htop2" y1="0.5" x2="24" y2="0.5"/>
  <line class="tk-logo lines" id="htop3" y1="0.5" x2="24" y2="0.5"/>
  <line class="tk-logo lines" id="htop4" y1="0.5" x2="24" y2="0.5"/>
  <line class="tk-logo lines" id="htop5" y1="0.5" x2="24" y2="0.5"/>
  <line class="tk-logo lines" id="htop6" y1="0.5" x2="24" y2="0.5"/>
  <!-- Bottom O ellipse -->
  <ellipse class="tk-logo ellipse brush" id="efull" cx="12" cy="17.75" rx="11.5" ry="5.75"/>
  <ellipse class="tk-logo ellipse" id="efull2" cx="12" cy="17.75" rx="11.5" ry="5.75"/>
  <!-- Bottom R diagonal line -->
  <line class="tk-logo diagonal" id="dfull" x1="12.5" y1="12.5" x2="23.5" y2="23.5"/>
  <line class="tk-logo diagonal" id="dfull2" x1="12.5" y1="12.5" x2="23.5" y2="23.5"/>
  <!-- Middle E Horizontal Line -->
  <line class="tk-logo lines" id="hcenter" y1="12" x2="24" y2="12"/>
  <line class="tk-logo lines" id="hcenter2" y1="12" x2="24" y2="12"/>
  <!-- Bottom E Horizontal Line -->
  <line class="tk-logo lines" id="hbottom" y1="23.5" x2="24" y2="23.5"/>
  <line class="tk-logo lines" id="hbottom2" y1="23.5" x2="24" y2="23.5"/>
  <!-- Left N Vertical Line -->
  <line class="tk-logo lines" id="vleft" x1="0.5" x2="0.5" y2="24"/>
  <line class="tk-logo lines" id="vleft2" x1="0.5" x2="0.5" y2="24"/>
  <line class="tk-logo lines" id="vleft3" x1="0.5" x2="0.5" y2="24"/>
  <line class="tk-logo lines" id="vleft4" x1="0.5" x2="0.5" y2="24"/>
  <!-- Right N Vertical Line -->
  <line class="tk-logo lines" id="vright" x1="23.5" x2="23.5" y2="24"/>
  <line class="tk-logo lines" id="vright2" x1="23.5" x2="23.5" y2="24"/>
  <!-- Middle N Diagonal Line -->
  <line class="tk-logo diagonal" id="dhalf" x1="0.5" y1="0.5" x2="23.5" y2="23.5"/>
  <line class="tk-logo diagonal" id="dhalf2" x1="0.5" y1="0.5" x2="23.5" y2="23.5"/>
  <!-- Top R half ellipse -->
  <path class="tk-logo ellipse" id="etopright" d="M12,.5c6.35,0,11.5,2.57,11.5,5.75S18.42,12,12.13,12"/>
  <path class="tk-logo ellipse" id="etopright2" d="M12,.5c6.35,0,11.5,2.57,11.5,5.75S18.42,12,12.13,12"/>
  <!-- Top S Left half ellipse -->
  <path class="tk-logo ellipse" id="ehalfleft" d="M12,.5C5.65.5.5,3.07.5,6.25S5.58,12,11.87,12"/>
  <path class="tk-logo ellipse" id="ehalfleft2" d="M12,.5C5.65.5.5,3.07.5,6.25S5.58,12,11.87,12"/>
  <!-- Bottom S right half ellipse -->
  <path class="tk-logo ellipse" id="ebottomright" d="M12,12c6.35,0,11.5,2.57,11.5,5.75s-5.08,5.71-11.37,5.75"/>
  <path class="tk-logo ellipse" id="ebottomright2" d="M12,12c6.35,0,11.5,2.57,11.5,5.75s-5.08,5.71-11.37,5.75"/>
</svg>
```

One inspiration for me was [Cassie Evans](https://www.cassie.codes/)' logo and the animation on her site. I really like what she did. Her logo and her [discussion of her animation process and usage of SVG](https://www.cassie.codes/posts/creating-my-logo-animation/) was incredibly informative for me. She took a JavaScript approach to animation with [GSAP.](https://greensock.com/gsap/)

Once I had my SVG code exported, I knew that I wanted to animate it. I wanted to make it look like my logo was being drawn, similar to how it would look on video. However, with animation there are multiple approaches you can take to achieve the same effect. I investigated 3 approaches: SMIL, CSS, and JavaScript.

I actually first started with SMIL - looking up the specs, it seemed to be widely supported in everything except Internet Explorer. I am not targeting IE for full support, and missing logo animation is absolutely a progressive enhancement. What I discovered is that the documentation on SMIL is fairly old and not comprehensive, apparently IE decided that they would never support it and the standard was supposed to be deprecated. However, after push back browser vendors have not deprecated it. In a weird twist of fate since Trident/EdgeHTML has instead been deprecated as a rendering engine, now SMIL has excellent modern browser support. I am curious as to if more folks will start using it for simple SVG animations because it is incredibly performant, if limited. In particular, I found the ease of use of [chaining animations incredibly intuitive](https://css-tricks.com/guide-svg-animations-smil/).

However, the animations that I wanted to do were just a tad too complicated for SMIL, so I had to reach for a different tool. I next took a look at CSS animations. This is where I've ended up - my logo is animated entirely with CSS. I ended up adding specific ids for each SVG element, and adding classes for the similar movements. This has led to some very tedious CSS. I imagine that if I was using a preprocessor like SASS I could consolidate this code. I decided to leave it as is because I was able to achieve most of the effect I wanted and it is incredibly lightweight from a performance perspective.

After I'd worked out the animation in CSS, I investigated taking a JavaScript approach using GSAP to see if that would let me do some even fancier animations and have smoother timing. I decided that what would probably come closest to my use case is the [DrawSVG plugin](https://greensock.com/drawsvg/). Unfortunately, this plugin costs $100/year to use. Since I plan on only using this plugin a single time for this one site, and it isn't part of a larger part of my work, I didn't want a $100 annual dependency for this site. Additionally, I know that GSAP is pretty performant, but I feel like having less client side JS on your site will almost always be a better performance option, particularly for something like a logo which is mostly decorative.

I'm pretty happy with the final animation, but it took a lot of dead ends to end up where I'm at today.