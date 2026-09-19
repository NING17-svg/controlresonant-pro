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
    "CONTROL Resonant launches September 24, 2026 from Remedy Entertainment. Find the release date, platforms, characters, setting, editions, and PC specs.",
  summary:
    "CONTROL Resonant is Remedy's upcoming supernatural sequel starring Dylan Faden inside the FBC's Oldest House. Use this hub to jump to release timing, platforms, characters, and setting.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "CONFIRMED: CONTROL Resonant launches worldwide on September 24, 2026 from Remedy Entertainment on PC (Steam), PlayStation 5, and Xbox Series.",
    ctas: [
      { label: "Release Status", href: "/release-status" },
      { label: "Platforms", href: "/platforms" },
      { label: "Overview", href: "/overview" },
    ],
  },
  quickAnswer:
    "CONTROL Resonant is Remedy Entertainment's upcoming supernatural action-adventure sequel, planned to launch worldwide on September 24, 2026. Players step into the role of Dylan Faden as the Oldest House's lockdown fails and a warped Manhattan threatens the FBC. The game arrives on PC via Steam, PlayStation 5, and Xbox Series, with pre-order bonuses already listed on the Steam store page.",
  keyFacts: [
    { label: "Release date", value: "September 24, 2026 (worldwide)" },
    { label: "Developer / Publisher", value: "Remedy Entertainment" },
    { label: "Protagonist", value: "Dylan Faden" },
    { label: "Signature weapon", value: "The Aberrant (shapeshifting)" },
    { label: "Antagonists", value: "Hiss, Mold" },
    { label: "Platforms", value: "PC (Steam), PS5, Xbox Series" },
    { label: "Pre-order bonuses", value: "Hiss Corruption Outfit, Pickpocket's Tool Artifact" },
    { label: "Setting", value: "FBC Oldest House + warped Manhattan" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "What is CONTROL Resonant",
      body:
        "CONTROL Resonant is the next major entry in Remedy Entertainment's CONTROL line, set in the same paranatural world as the 2019 CONTROL. Remedy develops and publishes the title, continuing its signature blend of supernatural combat, shifting environments, and dense Federal Bureau of Control lore. Dylan Faden replaces his sister Jesse Faden as the playable lead, while the shapeshifting weapon called the Aberrant sits at the center of the new combat system. The Steam store page for AppID 3669870 confirms the September 24, 2026 release, an English-first audio and subtitle package, and 15 supported languages.",
    },
    {
      id: "home-launch",
      type: "prose",
      heading: "Launch Plans, Platforms, and Where to Go Next",
      body:
        "The game launches on PC (Steam), PlayStation 5, and Xbox Series. Pre-order is live on Steam with two confirmed bonus items: the Hiss Corruption Outfit and the Pickpocket's Tool Artifact. A Steelbook edition is also part of the launch lineup; a collector's edition remains unconfirmed by Remedy as of 2026-09-19. Use the routes below to move from this hub into the specific page that matches your question.",
      links: [
        { label: "Release Status", href: "/release-status", description: "Confirmed timing and dated status notes." },
        { label: "Platforms", href: "/platforms", description: "Per-platform details for PC, PS5, and Xbox Series." },
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
        { title: "Release Status", summary: "Confirmed date and dated status notes.", href: "/release-status" },
        { title: "Editions", summary: "Standard, Steelbook, and pre-order bonuses.", href: "/editions" },
        { title: "System Requirements", summary: "Minimum PC specs from the Steam store.", href: "/system-requirements" },
        { title: "Platforms", summary: "PC, PS5, and Xbox Series per-platform view.", href: "/platforms" },
        { title: "Characters", summary: "Dylan Faden, Jesse Faden, Hiss, Mold.", href: "/characters" },
        { title: "Oldest House", summary: "Setting and warped Manhattan expansion.", href: "/oldest-house" },
        { title: "Walkthrough", summary: "Mission skeleton, post-launch expansion.", href: "/walkthrough" },
        { title: "New Player Primer", summary: "Prior Remedyverse knowledge required.", href: "/new-player-primer" },
        { title: "vs Original CONTROL", summary: "How this sequel differs from 2019.", href: "/vs-original-control" },
      ],
    },
  ],
  faqIds: ["what-is-control-resonant", "who-develops-control-resonant", "is-control-resonant-on-pc"],
  relatedPageIds: ["fixed-overview-en-US", "fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-editions-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-walkthrough-en-US"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-19",
};