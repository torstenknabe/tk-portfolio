---
title: Setting Custom DNS with Network Solutions and Netlify
date: 2021-11-03T02:46:28.914Z
author: Torsten Knabe
summary: Set up a website using Network Solutions as your domain name provider
  and Netlify as your hosting provider.
tags:
  - Netlify
  - Programming
  - Portfolio
---
I use Network Solutions as my domain name provider. Way back in 2006 or 2007 when I was in college, my dad recommended Network Solutions to me to buy my own domain name. Google Domains was not available yet. The domain name torstenknabe.com was available, so I bought it for 10 years. Who knew in the 80s that my parents giving me a German name would be a boon in the age of the internet. I have since kept them as my domain name provider when I had to renew in 2017, and I didn't feel like spending the money and effort to switch to something else. However, I didn't run across any guides to using Network Solutions specifically with Netlify. It ended up being fairly straightforward, but the documentation was unclear to me, so I'm writing up what I did and got working for anyone else in a similar situation.

1. Log into Netlify and [add a domain I own](https://docs.netlify.com/domains-https/netlify-dns/#add-a-domain-you-own).
2. Follow the instructions here to [Delegate your domain to Netlify](https://docs.netlify.com/domains-https/netlify-dns/delegate-to-netlify/) to take advantage of the Netlify DNS servers.

   1. I did not have any DNS records to transfer first. If you're using email hosting, absolutely transfer those records first and pay attention to the Netlify documentation
3.