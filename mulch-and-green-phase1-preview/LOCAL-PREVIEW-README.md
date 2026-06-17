# Mulch & Green Landscape — Phase 1 Local Preview

This is Phase 1 of the website redesign: the new "Landscaping" dropdown
navigation (Hardscape / Softscape), the Landscaping hub page, and the full
Hardscape, Softscape, and Creative Plant Beds & Garden Design pages — each
with a real-photo, step-by-step process section, before/after sliders,
photo galleries, benefits, and FAQs.

## How to run this on your PC (Node.js already installed)

1. Unzip this folder anywhere on your computer.
2. Open a terminal / command prompt **inside the unzipped folder**
   (the one containing `package.json`).
3. Install dependencies (only needed once):

   ```
   yarn install
   ```

   If you don't have yarn installed, you can use npm instead:

   ```
   npm install
   ```

4. Start the local dev server:

   ```
   yarn start
   ```

   or with npm:

   ```
   npm start
   ```

5. Your browser should open automatically to **http://localhost:3000**.
   If it doesn't, open that address manually.

6. To stop the server, go back to the terminal and press `Ctrl + C`.

## What to check in this Phase 1 preview

- Hover (desktop) or tap (mobile) **"Landscaping"** in the top navigation —
  it should open a dropdown showing **Hardscape** and **Softscape**.
- **"Garden Design"** appears as its own separate top-level nav item.
- On the homepage, scroll to the new **"Our Main Services"** section —
  three cards (Hardscape / Softscape / Garden Design), each with a
  "View Process" and "Get Free Estimate" button.
- Visit each of the three new pages directly:
  - `/landscaping` — the Landscaping hub page
  - `/landscaping/hardscape` — full Hardscape page with 9-step real-photo process
  - `/landscaping/softscape` — full Softscape page with 9-step process + Irrigation section
  - `/landscaping/creative-plant-beds-garden-design` — 8-step Garden Design process
- Check the photos throughout — these are your own real project photos
  (from the WhatsApp photo batch you provided), optimized to WebP.
- Resize your browser window (or open dev tools device toolbar) to check
  mobile / tablet / desktop responsiveness.

## Notes on this phase

- The original pages (Home, About, Services, Projects, Gallery,
  Testimonials, Service Areas, Contact, etc.) are untouched and still work
  exactly as before — only the navigation and the new Landscaping pages
  were added.
- A few real photos that contained visible house numbers or one with a
  license plate/person were intentionally **not** used in this pass —
  flagged for your review before any public photo featuring identifiable
  people or addresses goes live.
- Schema markup (LocalBusiness / Service schema) and the homepage
  "Services" SEO copy pass haven't been added yet — that's planned for a
  later phase, along with the before/after and full project galleries
  the brief also asked for.

## What's next (not yet built)

- JSON-LD schema markup for each service
- Expanded photo galleries (Before & After / Recent Projects sections)
  using more of your real project photos
- Final full-site review pass for the remaining SEO/meta requirements
