---
title: My logo inspiration
metaDescription: This is a sample meta description. If one is not present in
  your page/post's front matter, the default metadata.desciption will be used
  instead.
date: 2021-10-07T18:42:01.802Z
author: Torsten Knabe
summary: I found an awesome graphic designer on tiktok who inspired me to make a
  logo using the letters in my first name.
tags:
  - portfolio
  - design
---
I've always been interested in logo design and what goes into it. I've had the benefit of working with professional graphic designers at Fireside21 and seeing the process in action. Many times we'll start with an abstract statement of goals for the logo and inspiration. Then we'll do a call that goes over the specifics - for example, this committee covers these 3 main issue areas and so we need to incorporate something from all of those. The designers will then come up with multiple different concepts driven by that conversation. They might be literal - icons for specific topics, or they might be more abstract with shapes that evoke an idea without explicitly using that iconography. Then we have to work with the relevant stakeholders and get their sign off.

Mostly this has worked well as a process, but sometimes at the last minute a new stakeholder will come in and blow up the process since their vision is completely different than the folks we have worked with. Typically age also is a factor - the more senior stakeholders may have delegated the project, then changed their mind about being hands off at the last minute and they want a more staid design. Thank goodness for hourly billing contracts amirite?

Fortunately/Unfortunately when designing a logo for myself, I don't have different stakeholders to engage with instead I get to be both the designer and the decision maker. For myself, I looked to different inspiration online. I have an eclectic group of interests and topics that I want to display on this site, but I also have an uncommon name for an American. As such, I decided to use the letters in my name as a base to work off of since that's something that is uniquely me and unchanging.

I really like symmetry and on tiktok (Where I get inspired by really creative content) I ran across [Cami Creative](https://www.tiktok.com/@cami.creative) who turns different words and names into shapes. I really enjoyed her videos, and decided that I could adapt her style to making an animated logo with SVG and CSS for my name.

I also really liked [Cassie Evans](https://www.cassie.codes/)' logo and the animation that she did on her site. Her logo and her [discussion of her animation process and usage of SVG](https://www.cassie.codes/posts/creating-my-logo-animation/) was really informative. She took a JavaScript approach to animation with [GSAP](https://greensock.com/gsap/), but I didn't want to include any client side JavaScript dependencies, so I went with a pure CSS approach to the animation.

I started with paper and pen to iterate quickly on varying patterns. My goal was to achieve a symmetric design that incorporated each letter of my name. I got stuck for a bit on symmetry, what finally got me headed in the right direction is that I broke down each letter into constituent shapes that were as simple as possible. I discovered that my first name has 6 vertical lines, 5 horizontal lines, 1.5 diagonal lines, 2 left semi-circles, and 3 right semi-circles. That got me to expiriment with just those specific shapes in different orders and overlapping, and then to form those together into a cohesive design.

I finally landed on the final design. 

Making the design in SVG - experimenting with shapes, paths, lines

Animating the logo with CSS. Hand editing the SVG to add appropriate classes and ids and clean up the canvas to make sure it was perfect shapes.

Adding additional layers to it to achieve the drawing like effect.

Animating the CSS and manually setting the timing.

Lessons learned:

Hand editing SVG isn't too bad if you're smart about what you're drawing and how you want to achieve that.

CSS approaches do lend themselves to writing some tedious code. It might be easier in SASS, but I'm unsure. If you want to make the performance budget for it, JavaScript probably makes it much simpler.



## Section Header

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

```text/2-3
// this is a command
function myCommand() {
	let counter = 0;
	counter++;
}
```

Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.