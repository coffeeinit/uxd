# UXD Studio

UXD Studio is a React + Vite marketing site for a digital transformation studio. The experience uses an editorial visual system built around coral, lime, cream, lavender, and ink, with a strong emphasis on clear hierarchy, expressive typography, and practical product storytelling.

## Product surface

The app includes the homepage, native case-studies route, project intake form, blog index, blog post routes, SEO metadata, structured data, and supporting security and sitemap files. The homepage combines service discovery, selected work, proof points, client marks, leadership, and a project enquiry form in one responsive experience.

## V2 homepage refresh

The `feat/v2-homepage-refresh` branch adds the v2 direction from `public/v2.html` into the React homepage rather than leaving the mockup as a separate static page.

- The hero now uses a centered “Build what’s next.” composition with supporting technology chips and a calmer product-system visual treatment.
- Services and Technologies now open click-driven mega menus with capability groupings, connected-system links, and contextual calls to action.
- A new Connected Systems section introduces Odoo / ERPNext, AI + automation, and commerce ecosystems using the local technology artwork in `public/`.
- A new Enterprise Technology section introduces AI, ERP, CRM, multi-vendor marketplace, and ecommerce solution cards using the local SVG artwork.
- Both new sections include responsive tablet and mobile layouts and reuse the existing design tokens, interactions, focus states, and motion preferences.
- The implementation keeps the existing router, page routes, contact details, analytics hook, and SEO structure intact.

## Repository structure

| Path | Purpose |
| --- | --- |
| `src/pages/Home.tsx` | Homepage content, navigation state, hero, systems, enterprise, work, and contact sections |
| `src/index.css` | Global tokens, responsive layouts, accessibility polish, and homepage styles |
| `src/pages/` | Routed pages including case studies, blog, and project intake |
| `public/` | Local SVG/WebP artwork, sitemap, robots, security files, and the original v2 HTML reference |
| `index.html` | Document shell, metadata, JSON-LD, and font loading |

## Run locally

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:5173`.

To inspect a production build locally:

```bash
npm run build
npm run preview -- --port 4173
```

## Production build

```bash
npm run build
```

The generated production files are written to `dist/`.

## Included improvements

- Responsive mobile navigation and layout refinements.
- Click-to-open Services and Technologies mega menus on the homepage.
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

The v2 branch is suitable for a Vercel preview deployment. The branch name is `feat/v2-homepage-refresh`, and the implementation does not require a custom build command beyond the existing `npm run build` script.

## Verification completed

- `npm run build` — passed after the v2 homepage update.
- `npx tsc --noEmit` — passed for the production source tree.
- `git diff --check` — passed.
- Local production preview on port `4173` — returned the site shell successfully.
- The v2 branch was pushed to GitHub at commit `e695fe5` before this documentation update.
