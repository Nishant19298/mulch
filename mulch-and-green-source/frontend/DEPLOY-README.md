# Mulch & Green Landscape — Production Build

This ZIP contains a 100% static, production-ready React build of the
Mulch & Green Landscape website. No backend, no database, no Node runtime
needed on the host.

## Contents

- `build/` — Production-ready static files. **Upload the contents of this
  folder to your web host's public root (e.g., `public_html/`,
  `www/`, an S3 bucket, Netlify drop, Vercel static, etc.).**
- `src/`, `public/`, `package.json`, `craco.config.js`, etc. — Original
  source code, if your team wants to make future edits and rebuild.

## Quick deploy (host the `build/` folder)

The simplest path — no Node.js required on the server:

1. Open `build/`
2. Upload **everything inside it** to your web host's public web root.
3. Done. The site will load at your domain.

Required server config:
- Serve `index.html` for any unknown route (single-page app fallback).
  Examples:
  - Apache `.htaccess`:
    ```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
    ```
  - Nginx:
    ```
    location / { try_files $uri /index.html; }
    ```
  - Netlify: add a `_redirects` file containing `/*  /index.html  200`
  - Vercel / Cloudflare Pages: works out of the box.

## Domain & DNS

Point your domain (e.g., `mulchngreen.ca`) to your host's public root
where you uploaded the `build/` contents. SSL/HTTPS is recommended.

## Need to rebuild from source

If your team wants to make changes and rebuild:

```bash
cd frontend
yarn install     # one-time
yarn build       # outputs to build/
```

Requires Node.js 18+ and Yarn 1.x.

## Contact form

The contact form opens the visitor's email client with a pre-filled
mailto: to `moudgil1975@yahoo.com`. No backend or SMTP setup needed.

## Brand assets

- Logo files: `build/brand/logo-clean-256.png`, `build/brand/logo-clean-96.png`
- Real client photos: `build/projects/*.jpg`
- Worker hero image: `build/brand/worker.jpg`

— Designed & Developed by Cybertron Softech Inc · https://www.cybertronsoftech.ca/
