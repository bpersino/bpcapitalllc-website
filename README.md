# BP Capital LLC Website

Marketing site for **BP Capital LLC** (`bpcapitalllc.com`) — a Texas proprietary algorithmic trading firm.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Static export (`output: "export"`) for free CDN hosting

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All site copy lives in [`src/lib/content.ts`](src/lib/content.ts):

- Company details, hero, about, approach pillars
- Contact email
- Optional `formspreeEndpoint` (leave empty for mailto fallback)
- Optional `calendlyUrl`
- Legal disclaimer text

## Production build

```bash
npm run build
```

Static files are written to `out/`.

## Free hosting (recommended): Cloudflare Pages

You already use Cloudflare for DNS — **Cloudflare Pages** is free and keeps everything in one place.

### One-time setup

1. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select the `bpcapitalllc-website` repo
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) or None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (default)
   - **Node version:** `22` (or `20`) — set under Environment variables → `NODE_VERSION=22`
4. Deploy

### Custom domain (`bpcapitalllc.com`)

1. In the Pages project → **Custom domains** → add `bpcapitalllc.com` and `www.bpcapitalllc.com`
2. Cloudflare will create/verify the DNS records automatically for zones already on Cloudflare
3. Prefer apex + www; redirect www → apex (or the reverse) in Pages / Redirect Rules

No paid plan required for a static marketing site.

### Alternative free hosts

| Host | Notes |
|------|--------|
| **Cloudflare Pages** | Best fit if DNS is already on Cloudflare |
| **Vercel Hobby** | Native Next.js; point a CNAME at Vercel from Cloudflare DNS |
| **Netlify Free** | Similar static deploy from `out/` |

## Legal

The footer includes a required proprietary-trading disclaimer. Do not remove or weaken it without legal review.
