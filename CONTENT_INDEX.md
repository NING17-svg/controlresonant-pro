# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/overview` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant overview | Identity, developer, launch window | Release Status / Platforms / Characters / Oldest House | Supporting hub | Launch reference hub for the sequel. |
| `/release-status` | `src/data/pages/fixed-pages.ts` | Release | CONTROL Resonant release date | Unlock time, pre-load, embargo, Game Pass | Editions / Platforms / Aberrant & Abilities | Supporting hub | Confirmed Sept 24 14:00 GMT unlock; Sept 18 embargo lift. |
| `/platforms` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant platforms | Per-platform notes including GeForce NOW and Mac | Release Status / Editions / System Requirements | Supporting hub | PC, PS5, Xbox Series, GeForce NOW day one, Mac later 2026. |
| `/editions` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant editions | Standard, Steelbook, pre-order bonuses | Release Status / Platforms / Overview | Supporting hub | Physical editions ship October 15. |
| `/aberrant-abilities` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant Aberrant abilities | Forms, Reach / Shift / Gravitational Anomalies, the Gap | Characters / Release Status / Walkthrough | Supporting hub | Lists four confirmed forms and Gap progression. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant system requirements | Minimum PC specs | Release Status / Platforms / Overview | Supporting hub | Steam store minimum tier only. |
| `/characters` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant characters | Dylan Faden, antagonists, the Aberrant | Oldest House / New Player Primer / Aberrant & Abilities | Supporting hub | Links to Aberrant & Abilities page. |
| `/oldest-house` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant Oldest House | Setting and warped Manhattan expansion | Characters / vs Original CONTROL / Overview | Supporting hub | Failed lockdown framing. |
| `/walkthrough` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant walkthrough | Mission skeleton, post-launch expansion | Characters / Oldest House / New Player Primer | Supporting hub | Fills after launch. |
| `/new-player-primer` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant new player primer | Prior Remedyverse knowledge required | Characters / vs Original CONTROL / Overview | Supporting hub | No prerequisite policy announced. |
| `/vs-original-control` | `src/data/pages/fixed-pages.ts` | Guide | CONTROL Resonant vs original | Differences from the 2019 original | Characters / Oldest House / New Player Primer | Supporting hub | Side-by-side comparison table. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-status`, `/platforms`, `/editions`, `/aberrant-abilities`
- Official facts and safe guide structure: `/overview`, `/wiki`, `/guides`, `/system-requirements`, `/characters`, `/oldest-house`, `/walkthrough`, `/new-player-primer`, `/vs-original-control`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages (Release Status, Aberrant & Abilities, Platforms).
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Status should link to FAQ, Editions, Platforms, and Aberrant & Abilities.
- FAQ should include all current high-demand answer pages.
- Characters should link to Aberrant & Abilities for weapon/ability detail.
- Aberrant & Abilities should link back to Characters, Release Status, and Walkthrough.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
