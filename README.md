# Buestro Card

A beautiful, themeable personal profile page. Edit one config file, deploy anywhere.

**Live demo coming soon** · [Get Pro](https://buestro.com/card) · [Docs](./docs/customization.md)

![License](https://img.shields.io/github/license/buestro/card?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5-FF5D01?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Zero JS](https://img.shields.io/badge/client_JS-zero-10b981?style=flat-square)

---

## Features

- Edit a single `profile.config.ts` — no HTML, no CSS required
- Carbon Mint theme with automatic dark/light mode (follows OS)
- 12 social platform icons built in (no icon library needed)
- Optimized for Performance, Accessibility, and SEO
- Zero client-side JavaScript in the free version
- Deploys in minutes to Vercel, Netlify, or Cloudflare Pages
- MIT licensed — free for personal and commercial use

## Quick start

```bash
# 1. Clone and install
git clone https://github.com/buestro/card.git my-card
cd my-card
npm install

# 2. Edit your profile
# Open src/config/profile.config.ts and fill in your info

# 3. Run locally
npm run dev
```

Your card will be live at `http://localhost:4321`.

## Customization

See [docs/customization.md](./docs/customization.md) for a full reference on changing your name, handle, bio, avatar, tags, links, and SEO settings.

## Deploy

See [docs/deploy.md](./docs/deploy.md) for step-by-step guides for Vercel, Netlify, and Cloudflare Pages.

## Tech stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- [TypeScript](https://typescriptlang.org) — strict mode
- [Zod](https://zod.dev) — config validation

## Pro version

The Pro version adds 5 additional themes, QR code, vCard download, persistent dark/light toggle, and dynamic OG images.

[Upgrade to Pro →](https://buestro.com/card)

## License

MIT © [Buestro](https://buestro.com)
