---
title: About this site
date: 2022-05-08T01:56:52.045Z
author: Torsten Knabe
summary: What tools I've used to build this site.
tags:
  - blog
---
* This site is built with [Eleventy](https://www.11ty.dev/) and hosted on [Netlify](https://www.netlify.com/).
* This means that the whole site is static and compiled at build time. This keeps it [lightening fast and performant](https://www.11ty.dev/speedlify/torstenknabe-com/).
* When I push an update to git, netlify rebuilds the site and updates their CDN.
* I'm currently using the Netlify CMS to manage the content. It *works* but over time I may change to something else like Contentful because I want a stellar mobile content creation experience and the Netlify CMS doesn't provide that.

  * Alternatively I may aim for contributing to the Netlfiy CMS project, although I looked into it and it's [quite complicated](https://github.com/netlify/netlify-cms/issues/2557) to make everything responsive.
* I have intentionally added as little client side JS as I can, and made design decisions to enforce that (limiting animation to just CSS for example). The majority of the site logic is CSS, with a single media breakpoint.
* On mobile the navigation button is on the lower left because I'm left handed. I'm tired of always having to reach to the bottom right hand corner on other sites.