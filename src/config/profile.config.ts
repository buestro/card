import { ProfileConfigSchema, type ProfileConfig } from "./types";

/* ─────────────────────────────────────────────────────────────
   Buestro Card — Your profile configuration
   This is the ONLY file you need to edit.
   ───────────────────────────────────────────────────────────── */

const config: ProfileConfig = ProfileConfigSchema.parse({
  // ── Identity ────────────────────────────────────────────────
  name: "Alex Rivera",
  handle: "@alexrivera",
  tagline: "Full-stack developer / San Francisco, CA",
  bio: "Building tools for the web. Open source enthusiast and occasional blogger.",
  avatar: "/avatar.jpg",

  // ── Tech stack ──────────────────────────────────────────────
  // Your core technologies shown as pills below the avatar.
  // Keep to 3–6 tags for best layout.
  tags: ["astro", "typescript", "react"],

  // ── CTA button (optional) ───────────────────────────────────
  // A call-to-action button linking to your résumé, portfolio, etc.
  // Remove this block to hide the button.
  cta: {
    label: "View résumé",
    url: "https://alexrivera.dev/resume",
  },

  // ── Theme ───────────────────────────────────────────────────
  // Free version includes: "carbon-mint"
  // To customize colors, edit the CSS variables in src/styles/global.css
  // Upgrade to Pro for 5 additional themes → buestro.com/card
  theme: "carbon-mint",

  // ── Links ───────────────────────────────────────────────────
  // Supported platforms: github, linkedin, twitter, instagram,
  // youtube, tiktok, twitch, bluesky, mastodon, threads,
  // email, website
  // Free: up to 8 links. Order here = order on the card.
  links: [
    {
      platform: "github",
      url: "https://github.com/alexrivera",
      label: "github.com/alexrivera",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/alexrivera",
      label: "in/alexrivera",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/alexrivera",
      label: "@alexrivera",
    },
    {
      platform: "email",
      url: "mailto:hello@alexrivera.dev",
      label: "hello@alexrivera.dev",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Alex Rivera — Full-stack developer",
    description:
      "Full-stack developer based in San Francisco. Building tools for the web.",
    canonical: "https://card.buestro.com",
  },
});

export const profile = config;
