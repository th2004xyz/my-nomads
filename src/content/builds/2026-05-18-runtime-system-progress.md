---
title: "Day 8 — I Redesigned My Homepage. Without Knowing CSS."
summary: "Tailwind installed, a real domain purchased, and more broken things fixed than I can count."
date: 2026-05-13
tags: ['build-log', 'astro', 'tailwind']
---

Day 8. The site looks completely different from yesterday. Let me explain what happened.

I came in with one goal: fix the homepage visual hierarchy. No more flat gray walls of content. No more cards that sink when you hover instead of float.

Eight hours later, I had a redesigned homepage, a Tailwind setup that actually works, and a real domain name.

## What I actually built today

The homepage had a problem nobody would name directly: everything looked the same.

Every section had the same background color. Same padding. Same shadow weight. Scroll down and it felt like one long gray block with text in it.

The fix was a background rhythm — white, light blue, white, light gray, white, deep blue. Each section gets its own visual identity. The page breathes now.

I also fixed the hover direction on every card. The original code used `hover:translate-y-1` — which pushes cards *down* when you hover. That's backwards. Cards should float *up*. One character fix: `hover:-translate-y-1`.

Small thing. Completely changes how the site feels.

## The Tailwind problem that took three hours

Here's what nobody tells you about using an AI-generated template: it assumes your setup matches the template.

Mine didn't. The project had no Tailwind installed. So every class I'd been writing — `bg-blue-600`, `rounded-2xl`, `grid-cols-3` — was doing absolutely nothing.

The fix required four separate steps:
1. Install Tailwind via `npx astro add tailwind`
2. Add `@import "tailwindcss"` to global.css
3. Remove the old global CSS that was overriding everything
4. Create a new BaseLayout that actually loads the stylesheet

Each step revealed the next problem. That's just how this works.

## Buying a domain name with Alipay

I wanted a real domain. Not `my-nomads.pages.dev`. Something that felt like a brand.

The core word I kept coming back to was *zephyr* — the west wind. Free, light, always moving. That's the brand.

Combined with `dn` for digital nomad: `zephyrdn.com`.

Bought it on Namesilo for $17/year. Paid with Alipay. Took four minutes.

Then came the DNS configuration — pointing Namesilo's nameservers to Cloudflare, waiting for propagation, connecting the domain to Cloudflare Pages. More steps than expected. More waiting than I wanted.

But it's done.

## The mistake that cost me an hour

I pushed my code to GitHub. Cloudflare Pages tried to build. Build failed.

Error: `Invalid declaration: 'bord'`

Somewhere in `resources.astro`, a CSS line had been cut off mid-word. The file ended with `border` — no value, no semicolon, just a fragment hanging in the air.

One broken line. One failed deployment. One hour of debugging.

The fix was four characters. That's coding.

## What I actually think about all this

There's a version of "building in public" that only shows the wins. The shipped product. The follower count going up. The clean before-and-after.

I'm not doing that version.

Today I fixed a hover direction, debugged a CSS import chain, bought a domain I almost talked myself out of, and pushed broken code to production twice.

None of that is glamorous. It's all real.

The gap between "I want a good website" and "I have a good website" is just a long series of small broken things. You fix them one at a time. The site gets better. You understand more than you did yesterday.

That's the whole process.

## This week's numbers

- Homepage redesign: complete
- Tailwind: installed and working
- Domain: zephyrdn.com (live soon)
- CSS errors fixed: more than I'd like to admit
- Revenue: $0

Still showing the zeros.

---

*Next up: connecting zephyrdn.com to the live site, fixing the remaining page layouts, and getting the first real visitor who isn't me.*
