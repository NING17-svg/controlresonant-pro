# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-22 - Launch-day details and Aberrant & Abilities

- Task: Refresh release-status, platforms, editions, and characters with confirmed launch-day details and add a dedicated Aberrant & Abilities page covering the four shapeshifting forms, Reach / Shift / Gravitational Anomalies, and the Gap progression loop.
- Files changed: `src/data/pages/fixed-pages.ts` (release-status, platforms, editions, characters blocks plus new `/aberrant-abilities` block), `src/data/pages/home.ts`, `src/data/faq.ts`, `src/data/navigation.ts`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: `/`, `/release-status`, `/platforms`, `/editions`, `/characters`, plus new `/aberrant-abilities`.
- Launch facts updated: Sept 24 14:00 GMT global unlock; Sept 18 6:00 AM PT review-embargo lift; Sept 20 (Deluxe) / Sept 22 (Standard) pre-load; PS5 Deluxe 48-hour early access starting Sept 22; Game Pass not at launch; GeForce NOW day one; Mac later 2026; physical editions ship Oct 15.
- Combat coverage added: four Aberrant forms (hammer, blades, scythe, fists), Reach / Shift / Gravitational Anomalies toolkit, the Gap as the progression space, Talents + Artifacts layering into build archetypes.
- Verification: typecheck, lint, template/content/SEO validation, route-manifest, and full verify all pass.

### 2026-09-20 - Adsterra fixed six-unit integration

- Task: Replace the placeholder Adsterra units in `src/data/ads.ts` with real codes collected from the Adsterra publisher dashboard for `controlresonant.pro`.
- Files changed: `src/data/ads.ts` (six non-empty unit values).
- URLs affected: none (no URL or layout changes).
- Ads: Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink populated with real Adsterra codes.
- Verification: typecheck, lint, template/content/SEO validation, indexnow local tests, and full build all pass.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
