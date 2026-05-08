# Deploy guide

## Vercel (recommended)

1. Push your repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repo.
4. Framework preset: **Astro** (auto-detected).
5. Click **Deploy**. Done.

Your site will be live at `your-project.vercel.app`. Add a custom domain in Project Settings → Domains.

## Netlify

1. Push your repo to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
3. Choose your repo.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**. Done.

## Cloudflare Pages

1. Push your repo to GitHub.
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select your repo.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click **Save and Deploy**. Done.

## Environment variables

This project has no required environment variables for the free version.
