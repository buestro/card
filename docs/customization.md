# Customization guide

All configuration lives in a single file: `src/config/profile.config.ts`.

## Identity

```ts
name: "Your Name",           // Required. Shown as the main heading.
handle: "@yourhandle",       // Optional. Shown below your avatar.
tagline: "Role · Location",  // Optional. Shown below your name.
bio: "Short bio here.",      // Optional. Max ~200 chars recommended.
avatar: "/avatar.jpg",       // Optional. Place your image in /public.
```

To use your own avatar, drop a square image (recommended: 400×400px) into the `public/` folder and set `avatar: "/your-file.jpg"`.

## Tech stack tags

```ts
tags: ["astro", "typescript", "react"],  // Required. Shown as pills below your avatar.
```

Keep to 3–6 tags for best layout. Maximum 8.

## Links

```ts
links: [
  { platform: "github",   url: "https://github.com/you" },
  { platform: "twitter",  url: "https://twitter.com/you", label: "@you" },
  { platform: "email",    url: "mailto:you@example.com" },
],
```

**Supported platforms:** `github`, `linkedin`, `twitter`, `instagram`, `youtube`, `tiktok`, `twitch`, `bluesky`, `mastodon`, `threads`, `email`, `website`

The free version supports up to **8 links**. Order here = order on the card.

Use `label` to override the default display text (e.g. show `@handle` instead of the full URL).

## SEO

```ts
seo: {
  title: "Your Name",
  description: "Short description for search engines (max 160 chars).",
  canonical: "https://yoursite.com",
},
```

## Theme

The free version includes the **Carbon Mint** theme. The card automatically switches between light and dark mode based on the visitor's OS preference.

### Customizing colors

You can change any color by editing the CSS variables in `src/styles/global.css`. No theme value change is needed in `profile.config.ts`.

The most common customization is changing the accent color. For example, to switch from mint to violet:

```css
:root {
  --accent:        #7c3aed;  /* main accent — buttons, icons, links */
  --accent-subtle: #ede9fe;  /* light tint — hover backgrounds */
  --accent-hover:  #6d28d9;  /* darker shade — hover states */
  --accent-muted:  #ddd6fe;  /* lightest tint — borders */
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent:        #a78bfa;
    --accent-subtle: #2e1065;
    --accent-hover:  #c4b5fd;
    --accent-muted:  #2e1065;
  }
}
```

Every CSS variable is documented inline in `global.css` with a description of where it is used.

To unlock 5 additional pre-built themes, [upgrade to Pro](https://buestro.com/card).
