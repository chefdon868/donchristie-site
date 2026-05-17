# donchristie.com

A digital home, public journal, and creative operating base for Don Christie.

## Stack

- **Next.js 14** — App Router, SSG
- **Tailwind CSS** — design system in `tailwind.config.ts`
- **MDX** (via `next-mdx-remote`) — markdown-driven journal entries
- **Vercel** — hosting and CI
- **Cloudflare** — DNS

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Design language

Editorial-warm. Bourdain × Ferriss × Bloom. Warm cream pages, deep navy headlines, a single brass accent. Cormorant Garamond for display, Inter for body.

Colour tokens live in `tailwind.config.ts` (see `colors`).
Type scale lives in `tailwind.config.ts` (see `fontSize`).
Reusable utility classes live in `app/globals.css` (see `eyebrow`, `container-*`, `accent-line`, `rule`).

## Project structure

```
app/
  layout.tsx           Root layout — fonts, metadata, Header/Footer chrome
  page.tsx             Homepage (Stage 1 preview; Stage 2 replaces this)
  globals.css          Tailwind base + custom component classes
  (sections)/          About, Now, Journal, Projects, Uses, Contact — Stage 3
components/
  Header.tsx           Sticky nav
  Footer.tsx           Site map + wordmark
  ImagePlaceholder.tsx Labelled image slots; swap with real photos post-launch
content/
  journal/             MDX journal entries — added in Stage 2
lib/
  cn.ts                Class-name joiner
public/
  images/              Real photos go here
```

## Build stages

1. **Stage 1 — Foundation.** Scaffold, design system, layout, ImagePlaceholder, demo page.
2. **Stage 2 — Homepage + sample journal.** Full homepage with all six sections; one MDX journal post end-to-end.
3. **Stage 3 — Remaining pages.** About, Now, Projects, Uses, Contact.
4. **Stage 4 — SEO + metadata.** Sitemap, robots, JSON-LD, OG metadata per page.
5. **Stage 5 — Repo + deploy.** Push to `chefdon868/donchristie-site`, connect Vercel.
6. **Stage 6 — DNS + live.** Configure Cloudflare, verify `donchristie.com` resolves.

## Swapping image placeholders

Every `<ImagePlaceholder />` carries a descriptive `label` prop. To find all image slots, grep the codebase:

```bash
rg "ImagePlaceholder" app components content
```

Replace each `<ImagePlaceholder ... />` with a `<Image ... />` from `next/image`. Keep the same aspect ratio and surrounding layout.
