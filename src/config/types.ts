import { z } from "zod";

/* ─────────────────────────────────────────────────────────────
   Buestro Card — Type definitions
   ───────────────────────────────────────────────────────────── */

export const SUPPORTED_PLATFORMS = [
  "github",
  "linkedin",
  "twitter",
  "instagram",
  "youtube",
  "tiktok",
  "twitch",
  "bluesky",
  "mastodon",
  "threads",
  "email",
  "website",
] as const;

export type Platform = (typeof SUPPORTED_PLATFORMS)[number];

export const LinkSchema = z.object({
  /** Social platform or "website" / "email" */
  platform: z.enum(SUPPORTED_PLATFORMS),
  /** Full URL. For email use "mailto:you@example.com" */
  url: z.string().url().or(z.string().startsWith("mailto:")),
  /** Override the default display label (e.g. "@handle" instead of the URL) */
  label: z.string().optional(),
});

export const CtaSchema = z.object({
  /** Button text, e.g. "View résumé" or "See my work" */
  label: z.string().min(1),
  /** Destination URL */
  url: z.string().url(),
});

export const SeoSchema = z.object({
  /** <title> tag. Defaults to profile.name if omitted. */
  title: z.string().optional(),
  /** <meta name="description"> */
  description: z.string().max(160).optional(),
  /** Canonical URL of the deployed site */
  canonical: z.string().url().optional(),
  /** OG image URL (absolute). Falls back to /og.png if omitted. */
  ogImage: z.string().url().optional(),
});

export const ProfileConfigSchema = z.object({
  /* ── Identity ── */
  /** Your full name, displayed as the main heading */
  name: z.string().min(1),
  /** Short @handle shown below your avatar, e.g. "@alexrivera" */
  handle: z.string().optional(),
  /** One-liner shown below your name (role, location, tagline) */
  tagline: z.string().optional(),
  /** Short bio paragraph (max 200 chars recommended) */
  bio: z.string().optional(),
  /** Path to avatar image relative to /public, e.g. "/avatar.jpg" */
  avatar: z.string().optional(),

  /* ── Tech stack tags ── */
  /**
   * Your core technologies or skills, shown as pills below the avatar.
   * Keep to 3–6 tags for best layout.
   */
  tags: z.array(z.string().min(1)).min(1).max(8),

  /* ── CTA button ── */
  /**
   * Optional call-to-action button shown on your card.
   * Great for linking to a résumé, portfolio, or featured project.
   */
  cta: CtaSchema.optional(),

  /* ── Theme ── */
  /**
   * Free version: only "carbon-mint" is available.
   * To customize colors without upgrading, edit the CSS variables
   * in src/styles/global.css — no theme value change needed.
   *
   * Pro themes: "light-minimal" | "sunset" | "retro-terminal" | "mono" | "ocean"
   * Upgrade at → buestro.com/card
   */
  theme: z.enum(["carbon-mint"]).default("carbon-mint"),

  /* ── Links ── */
  /**
   * Up to 8 links in the free version.
   * Order here = order on the card.
   */
  links: z.array(LinkSchema).min(1).max(8),

  /* ── SEO ── */
  seo: SeoSchema.optional(),
});

export type Link = z.infer<typeof LinkSchema>;
export type Cta = z.infer<typeof CtaSchema>;
export type ProfileConfig = z.infer<typeof ProfileConfigSchema>;
