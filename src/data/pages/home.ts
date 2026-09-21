import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "CONTROL Resonant - Launch Hub for the Upcoming Sequel",
  seoTitle: "CONTROL Resonant - Launch Hub for the Upcoming Sequel",
  metaDescription:
    "CONTROL Resonant launches September 24, 2026 at 14:00 GMT from Remedy Entertainment. Pre-load opens Sept 20 (Deluxe) / Sept 22 (Standard). PC, PS5, Xbox Series, GeForce NOW day one, Mac later in 2026.",
  summary:
    "CONTROL Resonant is Remedy's supernatural sequel starring Dylan Faden inside the FBC's Oldest House. Global unlock September 24, 2026 at 14:00 GMT. Use this hub to jump to release timing, platforms, characters, and the Aberrant & Abilities loadout.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "CONFIRMED: CONTROL Resonant unlocks worldwide on September 24, 2026 at 14:00 GMT from Remedy Entertainment on PC (Steam), PlayStation 5, and Xbox Series. GeForce NOW day one, Mac later in 2026.",
    ctas: [
      { label: "Release Status", href: "/release-status" },
      { label: "Aberrant & Abilities", href: "/aberrant-abilities" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  quickAnswer:
    "CONTROL Resonant is Remedy Entertainment's supernatural action-adventure sequel, launching worldwide on September 24, 2026 at 14:00 GMT. Dylan Faden takes the field as the Oldest House's lockdown fails and warped Manhattan threatens the FBC. The game ships on PC via Steam, PlayStation 5, and Xbox Series, with GeForce NOW streaming day one and a Mac client arriving later in 2026. Review embargo lifted September 18; pre-load opens September 20 (Deluxe) / September 22 (Standard); PS5 Deluxe gets a 48-hour early-access window.",
  keyFacts: [
    { label: "Global unlock", value: "September 24, 2026 at 14:00 GMT" },
    { label: "Review embargo", value: "Lifted September 18, 2026 at 6:00 AM PT" },
    { label: "Pre-load", value: "Sept 20 (Deluxe) / Sept 22 (Standard)" },
    { label: "PS5 Deluxe early access", value: "48 hours, starting September 22" },
    { label: "Platforms", value: "PC (Steam), PS5, Xbox Series, GeForce NOW, Mac later 2026" },
    { label: "Game Pass", value: "Not at launch" },
    { label: "Physical editions", value: "October 15, 2026" },
    { label: "Developer / Publisher", value: "Remedy Entertainment" },
    { label: "Protagonist", value: "Dylan Faden" },
    { label: "Signature weapon", value: "The Aberrant (four forms, Reach / Shift / Gravitational Anomalies)" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "What is CONTROL Resonant",
      body:
        "CONTROL Resonant is the next major entry in Remedy Entertainment's CONTROL line, set in the same paranatural world as the 2019 CONTROL. Remedy develops and publishes the title, continuing its signature blend of supernatural combat, shifting environments, and dense Federal Bureau of Control lore. Dylan Faden replaces his sister Jesse Faden as the playable lead, while the shapeshifting weapon called the Aberrant sits at the center of the new combat system with four confirmed forms (hammer, blades, scythe, fists) and a Reach / Shift / Gravitational Anomalies toolkit that progress through the Gap.",
    },
    {
      id: "home-launch",
      type: "prose",
      heading: "Launch Day, Platforms, and Where to Go Next",
      body:
        "The game unlocks worldwide on September 24, 2026 at 14:00 GMT on PC (Steam), PlayStation 5, and Xbox Series, with GeForce NOW streaming day one and a Mac client arriving later in 2026. Review embargo lifted September 18 at 6:00 AM PT, so PC Gamer's launch review is already public. Pre-load opens September 20 for Deluxe and September 22 for Standard. PS5 Deluxe owners get 48-hour early access starting September 22. Game Pass is not at launch; physical Standard and Steelbook editions ship October 15. Use the routes below to move from this hub into the specific page that matches your question.",
      links: [
        { label: "Release Status", href: "/release-status", description: "Unlock time, pre-load, embargo, Game Pass status." },
        { label: "Aberrant & Abilities", href: "/aberrant-abilities", description: "Forms, Reach / Shift / Gravitational Anomalies, the Gap." },
        { label: "Platforms", href: "/platforms", description: "PC, PS5, Xbox, GeForce NOW, Mac details." },
        { label: "Overview", href: "/overview", description: "Identity, developer, and launch context." },
        { label: "Characters", href: "/characters", description: "Dylan Faden and the antagonist roster." },
        { label: "Oldest House", href: "/oldest-house", description: "Setting and warped Manhattan expansion." },
      ],
    },
    {
      id: "home-pages",
      type: "entity-grid",
      heading: "Launch Pages",
      items: [
        { title: "Overview", summary: "Identity, developer, and launch window.", href: "/overview" },
        { title: "Release Status", summary: "Unlock time, pre-load, embargo, Game Pass.", href: "/release-status" },
        { title: "Aberrant & Abilities", summary: "Forms, Reach / Shift / Gravitational Anomalies, the Gap.", href: "/aberrant-abilities" },
        { title: "Editions", summary: "Standard, Steelbook, and pre-order bonuses.", href: "/editions" },
        { title: "System Requirements", summary: "Minimum PC specs from the Steam store.", href: "/system-requirements" },
        { title: "Platforms", summary: "PC, PS5, Xbox, GeForce NOW, Mac details.", href: "/platforms" },
        { title: "Characters", summary: "Dylan Faden, Jesse Faden, Hiss, Mold.", href: "/characters" },
        { title: "Oldest House", summary: "Setting and warped Manhattan expansion.", href: "/oldest-house" },
        { title: "Walkthrough", summary: "Mission skeleton, post-launch expansion.", href: "/walkthrough" },
        { title: "New Player Primer", summary: "Prior Remedyverse knowledge required.", href: "/new-player-primer" },
        { title: "vs Original CONTROL", summary: "How this sequel differs from 2019.", href: "/vs-original-control" },
      ],
    },
  ],
  faqIds: ["what-is-control-resonant", "who-develops-control-resonant", "is-control-resonant-on-pc"],
  relatedPageIds: ["fixed-overview-en-US", "fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-editions-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-walkthrough-en-US", "fixed-aberrant-abilities-en-US"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};