# Mulch & Green Landscape — Project Source

This is the **complete source code** for the Mulch & Green Landscape website.
It's a 100% static React single-page application (SPA) built with:

- React 19
- React Router 7
- Tailwind CSS + Shadcn UI
- CRACO (Create React App + Customizations)
- yarn

There is **no backend, no database, no API**. Everything is rendered client-side and
shipped as static HTML/CSS/JS.

---

## Folder structure

```
frontend/
├── public/              # static assets, favicon, robots.txt, sitemap.xml, project photos, logo
├── src/
│   ├── components/      # Header, Footer, Seo helper, SEO sections, Shadcn UI primitives
│   ├── data/
│   │   ├── site.js          # core copy (vision, mission, services, testimonials, areas)
│   │   └── seoContent.js    # all 9 SEO service pages, 8 area pages, 7 blog posts
│   ├── pages/           # Home, About, Services, ServiceDetail, Projects, ServiceAreas, Contact, Blog, etc.
│   ├── App.js           # Routes (incl. SEO flat URLs)
│   ├── index.js
│   └── index.css        # Tailwind layers
├── craco.config.js
├── tailwind.config.js
├── package.json
└── yarn.lock
```

---

## 1. Install dependencies

```bash
cd frontend
yarn install
```

(Use yarn, not npm — the lockfile is `yarn.lock`.)

---

## 2. Run locally

```bash
yarn start
```

Opens at http://localhost:3000.

---

## 3. Build for production

```bash
yarn build
```

Produces a `build/` folder containing the optimized static site. Upload the **contents** of
that folder to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, Nginx,
Apache, GitHub Pages, etc.).

### Important: SPA fallback

This site uses client-side routing for the SEO landing pages
(`/landscaping-windsor-on`, `/blog/...`, etc.). Your host must serve `index.html`
for any path that doesn't match a static file.

- **Apache** (`.htaccess`):
  ```
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```
- **Nginx**:
  ```
  try_files $uri $uri/ /index.html;
  ```
- **Netlify** (`public/_redirects` or `_redirects` in build root):
  ```
  /* /index.html 200
  ```
- **Cloudflare Pages / Vercel / Render**: SPA fallback is automatic.

---

## 4. Editing content

All client copy lives in two files:

- `src/data/site.js` — hero copy, services list, testimonials, areas, why-choose-us
- `src/data/seoContent.js` — SEO service/area/blog pages, FAQs

Change the text in those files; the rest of the site updates automatically.

To swap photos, drop new images in `public/projects/` and update the references in
`src/data/site.js` and `src/pages/Home.jsx` (`HERO_SLIDES` array).

---

## 5. Environment variables

The `.env` file in the repo only contains `REACT_APP_BACKEND_URL` for the Emergent
preview environment. **It is not needed for production** — the site has no backend.
You can safely delete it or leave it as-is.

---

## SEO checklist (already implemented)

- ✅ JSON-LD schemas in `public/index.html` — Organization, WebSite, LocalBusiness/LandscapingBusiness, BreadcrumbList
- ✅ Per-page Service / FAQPage / Article schemas
- ✅ Open Graph + Twitter card meta
- ✅ `robots.txt` + `sitemap.xml` in `public/`
- ✅ All images have meaningful `alt` text
- ✅ Hero LCP image preloaded with `fetchpriority="high"`
- ✅ Mobile-responsive, accessibility-friendly markup

After deployment to `mulchngreen.ca`, submit the production `sitemap.xml`
URL to Google Search Console and Bing Webmaster Tools.

---

Built by **Cybertron Softech Inc** for Mulch & Green Landscape (Windsor, ON).
