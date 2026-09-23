# UXD Studio

A React + Vite marketing site for UXD Studio, with an editorial visual system built around coral, lime, cream, lavender, and ink. The app includes the homepage, native case-studies route, project intake form, blog index, and blog post routes.

## Run locally

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:5173`.

## Production build

```bash
npm run build
```

The generated production files are written to `dist/`.

## Included improvements

- Responsive mobile navigation and layout refinements.
- Keyboard skip link, visible focus states, touch-target sizing, semantic landmarks, and reduced-motion support.
- Route-aware page titles, meta descriptions, canonical URLs, Open Graph metadata, and Twitter metadata.
- Inline JSON-LD for `Organization`, `WebSite`, and UAE/India `LocalBusiness` entities.
- Optional GA4 initialization through `VITE_GA4_MEASUREMENT_ID`; tracking is disabled when the variable is blank.
- `robots.txt`, `sitemap.xml`, `security.txt`, `.well-known/security.txt`, and the requested `security.xml`.
- Vite aliases and restored build metadata for the source archive.
- Performance-conscious `content-visibility` for below-the-fold sections.
- TypeScript checking for the production source tree.

## SEO and deployment notes

The sitemap and canonical URLs currently use `https://uxdstudio.com`. Update those values if the production domain changes. The standard security contact format is `.well-known/security.txt`; `security.xml` is included only as a compatibility companion because XML security files are not a broadly standardized replacement.

To enable Google Analytics 4, copy `.env.example` to `.env`, set `VITE_GA4_MEASUREMENT_ID` to the real GA4 Measurement ID, and rebuild. Do not use a placeholder ID. Add a consent banner and consent-mode configuration if the production jurisdiction or privacy policy requires opt-in analytics consent.

The homepage enquiry form and project brief form currently provide client-side confirmation only. Connect them to the preferred CRM, email endpoint, or backend before treating submissions as production leads.

## Verification completed

- `npm run build` — passed.
- `npx tsc --noEmit` — passed for the production source tree.
- Preview routes `/`, `/blog`, and `/start-a-project` — HTTP 200.
- `/robots.txt`, `/sitemap.xml`, `/security.xml`, and `/.well-known/security.txt` — HTTP 200.
