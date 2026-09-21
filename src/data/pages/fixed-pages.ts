import type { PageContent } from "@/types/content";

export const fixedPages: PageContent[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // /overview — Identity & "what is this game"
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-overview-en-US",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "overview",
    url: "/overview",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "CONTROL Resonant - What It Is and When It Launches",
    seoTitle: "CONTROL Resonant - What It Is and When It Launches",
    metaDescription:
      "CONTROL Resonant is Remedy's upcoming supernatural sequel starring Dylan Faden. Confirmed launch on September 24, 2026 for PC, PS5, and Xbox Series.",
    summary:
      "CONTROL Resonant is an upcoming supernatural action-adventure sequel from Remedy Entertainment, starring Dylan Faden inside the Federal Bureau of Control's Oldest House.",
    hero: {
      eyebrow: "Overview",
      subtitle:
        "Identify the upcoming CONTROL sequel and confirm what CONTROL Resonant is, who develops it, and when it launches.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Platforms", href: "/platforms" },
        { label: "Characters", href: "/characters" },
        { label: "Oldest House", href: "/oldest-house" },
      ],
    },
    quickAnswer:
      "CONTROL Resonant is an upcoming supernatural action-adventure sequel from Remedy Entertainment, starring Dylan Faden inside the Federal Bureau of Control's Oldest House. The game is planned for worldwide release on September 24, 2026 across PC via Steam, PlayStation 5, and Xbox Series. It continues the 2019 CONTROL story while introducing a new protagonist, a shapeshifting weapon called the Aberrant, and a warped Manhattan expansion.",
    keyFacts: [
      { label: "Developer", value: "Remedy Entertainment" },
      { label: "Publisher", value: "Remedy Entertainment" },
      { label: "Release date", value: "September 24, 2026 (worldwide)" },
      { label: "Platforms", value: "PC (Steam), PS5, Xbox Series" },
      { label: "Protagonist", value: "Dylan Faden" },
      { label: "Signature weapon", value: "The Aberrant (shapeshifting)" },
      { label: "Antagonists", value: "Hiss, Mold" },
      { label: "Setting", value: "FBC Oldest House + warped Manhattan" },
      { label: "Supported languages", value: "15 (English primary)" },
    ],
    modules: [
      {
        id: "overview-identity",
        type: "prose",
        heading: "CONTROL Resonant Identity, Developer, and Publisher",
        body:
          "CONTROL Resonant is developed and published by Remedy Entertainment, the Finnish studio behind the 2019 CONTROL and Alan Wake 2. The title is positioned as a direct sequel within Remedy's Connected Universe rather than a remake, with Dylan Faden replacing his sister Jesse Faden as the playable lead. The Steam store page for AppID 3669870 lists English as the primary audio and subtitle language alongside 14 additional supported languages. The game's identity blends three pillars: paranatural combat around the Aberrant, exploration of the FBC's Oldest House, and a narrative that escalates from a failed lockdown into a warped Manhattan crisis.",
      },
      {
        id: "overview-launch-window",
        type: "prose",
        heading: "Launch Window and Platforms",
        body:
          "The sequel is scheduled for September 24, 2026 worldwide. Launch platforms are PC (Steam), PlayStation 5, and Xbox Series, with all three storefronts already serving pre-orders or wishlists. The Steam store snapshot 2026-09-19 is the authoritative reference for release timing, and Remedy's own communications match that date.",
      },
      {
        id: "overview-story",
        type: "prose",
        heading: "Story Snapshot and Protagonist",
        body:
          "The narrative picks up after Jesse Faden's lockdown can no longer contain the threats inside the Oldest House. Dylan Faden, Jesse's brother, becomes the playable protagonist and inherits the Aberrant, a shapeshifting weapon that sits at the center of the new combat system. Confirmed antagonists are the Hiss and Mold, both drawn from established Remedy lore and the 2019 CONTROL setting.",
      },
    ],
    faqIds: ["is-control-resonant-sequel", "who-is-protagonist", "does-control-resonant-require-original"],
    relatedPageIds: ["fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /release-status — Release date & launch plans
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-release-status-en-US",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-status",
    url: "/release-status",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant Release Date, Pre-Load, and Launch Day",
    seoTitle: "CONTROL Resonant Release Date, Pre-Load, and Launch Day",
    metaDescription:
      "CONTROL Resonant unlocks worldwide on September 24, 2026 at 14:00 GMT. Review embargo lifted Sept 18, pre-load Sept 20 (Deluxe) / Sept 22 (Standard), PS5 48-hour early access for Deluxe, Game Pass not at launch, GeForce NOW day one, Mac later in 2026.",
    summary:
      "CONTROL Resonant unlocks worldwide on September 24, 2026 at 14:00 GMT. Review embargo lifted Sept 18 at 6:00 AM PT. Pre-load opens Sept 20 (Deluxe) / Sept 22 (Standard). PS5 Deluxe gets 48-hour early access. Game Pass is not at launch; GeForce NOW is day one; Mac arrives later in 2026; physical editions ship October 15.",
    hero: {
      eyebrow: "Release Status",
      subtitle:
        "Confirm CONTROL Resonant unlock time, pre-load windows, review embargo, and which subscription services carry the game at launch.",
      ctas: [
        { label: "Editions", href: "/editions" },
        { label: "Platforms", href: "/platforms" },
        { label: "Aberrant & Abilities", href: "/aberrant-abilities" },
      ],
    },
    quickAnswer:
      "CONTROL Resonant unlocks worldwide on September 24, 2026 at 14:00 GMT. The review embargo lifted on September 18 at 6:00 AM PT. Pre-load opens September 20 for Deluxe editions and September 22 for Standard. PS5 Deluxe owners get 48-hour early access starting September 22. Game Pass is not included at launch, GeForce NOW carries it day one, Mac arrives later in 2026, and physical editions ship October 15.",
    keyFacts: [
      { label: "Global unlock", value: "September 24, 2026 at 14:00 GMT" },
      { label: "Review embargo", value: "Lifted September 18, 2026 at 6:00 AM PT" },
      { label: "Pre-load (Deluxe)", value: "September 20, 2026" },
      { label: "Pre-load (Standard)", value: "September 22, 2026" },
      { label: "PS5 48-hour early access", value: "September 22, 2026 (Deluxe only)" },
      { label: "Game Pass at launch", value: "Not included" },
      { label: "GeForce NOW", value: "Day one" },
      { label: "Mac release", value: "Later in 2026" },
      { label: "Physical editions", value: "October 15, 2026" },
    ],
    modules: [
      {
        id: "release-unlock",
        type: "prose",
        heading: "Global Unlock Time on September 24",
        body:
          "CONTROL Resonant unlocks simultaneously worldwide on September 24, 2026 at 14:00 GMT. The 14:00 GMT anchor translates to 7:00 AM PT, 10:00 AM ET, 11:00 AM BST, 15:00 CEST, 16:00 KST/JST crossover, and the equivalent regional stamp in BR/SA timezones. Insider Gaming's published embargo schedule and Remedy's own launch communication both anchor on this single global timestamp, so players should plan to start the session at the regional equivalent rather than expecting per-region staggered unlocks.",
      },
      {
        id: "release-preload",
        type: "prose",
        heading: "Pre-Load Dates and What to Install",
        body:
          "Pre-load opens September 20, 2026 for Deluxe editions and September 22, 2026 for the Standard edition on every platform that supports pre-loading (PC via Steam, PlayStation 5, Xbox Series). Pre-loading lets the client finish downloading in the background so the September 24 unlock does not require a multi-hour download on launch day. Console players should reserve at least 120 GB of SSD space to match the published minimum storage line.",
      },
      {
        id: "release-early-access",
        type: "prose",
        heading: "PS5 48-Hour Early Access for Deluxe Owners",
        body:
          "PS5 Deluxe edition owners receive 48-hour early access starting September 22, 2026 at the same 14:00 GMT anchor. This window is the only confirmed way to play CONTROL Resonant before the global September 24 unlock. PC and Xbox Series editions do not publish a parallel early-access window in the published launch plan, so the September 22 PS5 Deluxe window is platform- and edition-specific.",
      },
      {
        id: "release-embargo",
        type: "callout",
        tone: "confirmed",
        title: "Review Embargo Lifted September 18",
        body:
          "The review embargo lifted on September 18, 2026 at 6:00 AM PT. Major outlets including PC Gamer published their launch reviews on or after this stamp. PC Gamer's review notes combat repetition as a known weakness, which is useful context for players planning a melee-heavy Dylan build on day one.",
      },
      {
        id: "release-services",
        type: "prose",
        heading: "Game Pass, GeForce NOW, and Mac",
        body:
          "Game Pass: CONTROL Resonant is not included at launch. Microsoft and Remedy have not announced a same-day Game Pass tier for the title, so Xbox players who want it day one must buy it through the Xbox Store. GeForce NOW: CONTROL Resonant streams day one on GeForce NOW, so subscribers can play on under-spec PCs, Macs that do not yet have a native client, or any other supported device without a local install. Mac: a native macOS client arrives later in 2026, after the September 24 Windows launch. Players on macOS can use GeForce NOW in the meantime.",
      },
      {
        id: "release-physical",
        type: "prose",
        heading: "Physical Editions Ship October 15",
        body:
          "Physical editions (Standard disc and Steelbook on PS5 / Xbox Series) ship October 15, 2026, three weeks after the September 24 digital launch. Players who pre-order a physical copy still receive the digital pre-order bonuses (Hiss Corruption Outfit, Pickpocket's Tool Artifact) tied to their account on launch day, even though the disc arrives later.",
      },
      {
        id: "release-schedule",
        type: "schedule",
        heading: "Launch Week at a Glance",
        items: [
          { label: "Review embargo lifts", timing: "Sept 18, 6:00 AM PT", detail: "PC Gamer and other outlets publish reviews.", tone: "confirmed" },
          { label: "Deluxe pre-load opens", timing: "Sept 20", detail: "Pre-load available on PC, PS5, Xbox Series for Deluxe owners.", tone: "confirmed" },
          { label: "PS5 Deluxe 48-hour early access", timing: "Sept 22, 14:00 GMT", detail: "PS5 Deluxe only, 48-hour exclusive window before global unlock.", tone: "confirmed" },
          { label: "Standard pre-load opens", timing: "Sept 22", detail: "Pre-load available for the Standard edition across all platforms.", tone: "confirmed" },
          { label: "Global unlock", timing: "Sept 24, 14:00 GMT", detail: "Worldwide launch on PC, PS5, and Xbox Series.", tone: "confirmed" },
          { label: "GeForce NOW day one", timing: "Sept 24", detail: "Streaming available on GeForce NOW from launch.", tone: "confirmed" },
          { label: "Physical editions ship", timing: "Oct 15", detail: "Standard and Steelbook discs ship to retailers and pre-order customers.", tone: "confirmed" },
          { label: "Mac native client", timing: "Later in 2026", detail: "macOS build follows the Windows launch.", tone: "confirmed" },
        ],
      },
    ],
    faqIds: ["what-is-release-date", "is-control-resonant-on-game-pass", "has-review-embargo-lifted", "when-can-i-preload", "is-control-resonant-on-geforce-now", "when-do-physical-editions-ship"],
    relatedPageIds: ["fixed-editions-en-US", "fixed-platforms-en-US", "fixed-system-requirements-en-US", "fixed-overview-en-US", "fixed-aberrant-abilities-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-22",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /editions — Editions & pre-order bonuses
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-editions-en-US",
    translationKey: "editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "editions",
    url: "/editions",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant Editions - Standard, Steelbook, and Bonuses",
    seoTitle: "CONTROL Resonant Editions - Standard, Steelbook, and Bonuses",
    metaDescription:
      "CONTROL Resonant editions compared: Standard and Steelbook bundles, pre-order bonuses (Hiss Corruption Outfit, Pickpocket's Tool Artifact), and per-platform notes.",
    summary:
      "CONTROL Resonant has a Standard edition on every launch platform and a Steelbook physical edition on consoles, with two pre-order bonuses and no collector's edition confirmed as of 2026-09-19.",
    hero: {
      eyebrow: "Editions",
      subtitle:
        "Compare the standard edition and the Steelbook/pre-order bonus bundles and list per-platform pricing.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Platforms", href: "/platforms" },
        { label: "Overview", href: "/overview" },
      ],
    },
    quickAnswer:
      "The CONTROL Resonant editions lineup includes a Standard digital edition on every launch platform and a Steelbook physical edition on consoles. Pre-ordering from the Steam store unlocks two bonus items: the Hiss Corruption Outfit and the Pickpocket's Tool Artifact. Physical editions ship October 15, 2026. A collector's edition is not confirmed; the Steelbook variant is the highest physical tier listed on the storefronts at this time.",
    keyFacts: [
      { label: "Standard edition", value: "Available on every launch platform" },
      { label: "Steelbook edition", value: "Physical case on PS5 + Xbox Series, ships October 15" },
      { label: "Pre-order bonuses", value: "Hiss Corruption Outfit, Pickpocket's Tool Artifact" },
      { label: "Physical ship date", value: "October 15, 2026" },
      { label: "Collector's edition", value: "Not confirmed as of 2026-09-22" },
    ],
    modules: [
      {
        id: "editions-standard",
        type: "prose",
        heading: "Standard Edition Contents",
        body:
          "The Standard edition is the base purchase on every launch platform and includes the full CONTROL Resonant campaign starring Dylan Faden, with the Aberrant as the signature weapon and access to all FBC / Oldest House locations as the lockdown fails. On PC, the Standard edition is the Steam AppID 3669870 listing without any physical media. On PlayStation 5 and Xbox Series, the Standard edition is the digital storefront entry, with no Steelbook case or extra collectible items. The Standard edition ships with the same pre-order bonuses as every other edition that qualifies for the pre-order window. Those bonuses are digital-only items, so they do not change the physical contents of the console Steelbook edition; they are attached to the account rather than to the disc.",
      },
      {
        id: "editions-steelbook",
        type: "prose",
        heading: "Steelbook Edition Contents",
        body:
          "The Steelbook edition is confirmed for CONTROL Resonant on consoles and features a Steelbook case in place of the standard plastic amaray packaging. Remedy has confirmed the Steelbook as a physical-tier option for players who want a metal case. The Steelbook edition includes the same base game and the same digital pre-order bonuses as the Standard edition; the difference is the physical packaging, not extra in-game content. Steelbook discs ship October 15, 2026 — three weeks after the September 24 digital unlock — even though digital pre-order bonuses apply on launch day.",
      },
      {
        id: "editions-bonuses",
        type: "prose",
        heading: "Pre-Order Bonuses",
        body:
          "The Steam store page lists two pre-order bonus items that are granted to every qualifying purchase made during the pre-order window, regardless of platform: the Hiss Corruption Outfit (a cosmetic outfit for Dylan Faden themed around the Hiss antagonist presence) and the Pickpocket's Tool Artifact (a cosmetic artifact accessory). Both bonuses are digital items delivered to the account tied to the qualifying purchase. They are not separate DLC packs, and they do not unlock new missions or areas.",
      },
      {
        id: "editions-collectors",
        type: "callout",
        tone: "caution",
        title: "Collector's Edition Status",
        body:
          "Status as of 2026-09-22: a CONTROL Resonant collector's edition is not confirmed by Remedy Entertainment. Autocomplete signals such as 'control resonant collector's edition' reflect player demand, but no official collector's SKU has been announced on the Steam store, PlayStation Store, or Xbox Store at the time of this snapshot. The Steelbook edition remains the highest physical tier currently listed.",
      },
      {
        id: "editions-platform-table",
        type: "data-table",
        heading: "Per-Platform Edition Availability",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "standard", label: "Standard Edition" },
          { key: "steelbook", label: "Steelbook Edition" },
          { key: "bonuses", label: "Pre-Order Bonuses" },
        ],
        rows: [
          { platform: "PC (Steam)", standard: "Yes (digital)", steelbook: "Not applicable", bonuses: "Hiss Corruption Outfit, Pickpocket's Tool Artifact" },
          { platform: "PlayStation 5", standard: "Yes (digital + physical)", steelbook: "Yes (physical, ships Oct 15)", bonuses: "Hiss Corruption Outfit, Pickpocket's Tool Artifact" },
          { platform: "Xbox Series", standard: "Yes (digital + physical)", steelbook: "Yes (physical, ships Oct 15)", bonuses: "Hiss Corruption Outfit, Pickpocket's Tool Artifact" },
        ],
      },
    ],
    faqIds: ["what-editions-available", "what-are-preorder-bonuses", "is-collectors-edition-confirmed", "when-do-physical-editions-ship"],
    relatedPageIds: ["fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-22",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /system-requirements — PC minimum specs
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-system-requirements-en-US",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant System Requirements - Minimum PC Specs",
    seoTitle: "CONTROL Resonant System Requirements - Minimum PC Specs",
    metaDescription:
      "CONTROL Resonant system requirements minimum PC specs: Win 10/11 64-bit, i5-8500 or Ryzen 5 3500, 16 GB RAM, GTX 1070 or RX 5600 XT or Arc A580, 120 GB SSD.",
    summary:
      "CONTROL Resonant minimum PC requirements are Win 10/11 64-bit, i5-8500 or Ryzen 5 3500, 16 GB RAM, GTX 1070 / RX 5600 XT / Arc A580, and 120 GB SSD. Recommended specs are not yet published by Remedy as of 2026-09-19.",
    hero: {
      eyebrow: "System Requirements",
      subtitle:
        "Look up minimum and recommended PC specifications (CPU, GPU, RAM, storage) to confirm the local PC can run CONTROL Resonant.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Platforms", href: "/platforms" },
        { label: "Overview", href: "/overview" },
      ],
    },
    quickAnswer:
      "The CONTROL Resonant system requirements on its Steam store page list minimum PC requirements: Windows 10 or Windows 11 64-bit, an Intel Core i5-8500 or AMD Ryzen 5 3500 CPU, 16 GB of RAM, an NVIDIA GTX 1070, AMD RX 5600 XT, or Intel Arc A580 GPU, and 120 GB of SSD storage. Status as of 2026-09-19: Remedy has not yet published recommended specifications, so any 'recommended' tier shown outside the Steam store should be treated as community guidance rather than an official line.",
    keyFacts: [
      { label: "OS", value: "Windows 10 / Windows 11 (64-bit)" },
      { label: "CPU", value: "Intel Core i5-8500 or AMD Ryzen 5 3500" },
      { label: "RAM", value: "16 GB" },
      { label: "GPU", value: "NVIDIA GTX 1070 / AMD RX 5600 XT / Intel Arc A580" },
      { label: "Storage", value: "120 GB SSD" },
      { label: "Recommended specs", value: "Not yet published by Remedy as of 2026-09-19" },
    ],
    modules: [
      {
        id: "sysreq-os",
        type: "prose",
        heading: "Operating System",
        body:
          "CONTROL Resonant requires a 64-bit Windows installation. The Steam store page lists Windows 10 and Windows 11 as the supported operating systems for the minimum tier. 32-bit Windows is not supported. macOS and Linux are not listed as supported platforms on the Steam store page; players on those platforms should not expect a native client at launch.",
      },
      {
        id: "sysreq-cpu",
        type: "prose",
        heading: "CPU",
        body:
          "The Steam store page lists the following processors as the minimum tier: Intel Core i5-8500 and AMD Ryzen 5 3500. Both are six-core, six-thread parts from the eighth-generation Intel era and the third-generation AMD Ryzen era, respectively. These are the floor that Remedy has published, not a recommendation. CPUs below this tier may launch the game but are outside the officially supported minimum. Status as of 2026-09-19: Remedy has not yet published a recommended CPU tier.",
      },
      {
        id: "sysreq-ram",
        type: "prose",
        heading: "Memory (RAM)",
        body:
          "The minimum RAM requirement is 16 GB. The Steam store listing applies this floor to the minimum tier. The page does not currently break out a separate 'recommended' memory tier, so 16 GB should be treated as both the minimum and the published baseline.",
      },
      {
        id: "sysreq-gpu",
        type: "prose",
        heading: "Graphics Card (GPU)",
        body:
          "The Steam store page lists three GPUs as acceptable for the minimum tier: NVIDIA GeForce GTX 1070, AMD Radeon RX 5600 XT, and Intel Arc A580. This is the broadest GPU floor Remedy has published for the title, spanning the three major discrete GPU vendors. Status as of 2026-09-19: Remedy has not yet published a recommended GPU tier.",
      },
      {
        id: "sysreq-storage",
        type: "prose",
        heading: "Storage",
        body:
          "The minimum storage requirement is 120 GB on a solid-state drive (SSD). The Steam store page calls out SSD explicitly, which is consistent with Remedy's other recent PC releases that benefit from fast streaming for the shifting Oldest House environment. A 120 GB SSD allocation should be reserved for the install, with additional headroom for save data, optional high-resolution texture packs, and platform updates. Players installing on a hard disk drive (HDD) are outside the published minimum.",
      },
      {
        id: "sysreq-table",
        type: "data-table",
        heading: "Minimum vs Recommended PC Specs",
        columns: [
          { key: "component", label: "Component" },
          { key: "min", label: "Minimum" },
          { key: "rec", label: "Recommended" },
        ],
        rows: [
          { component: "OS", min: "Windows 10 / 11 (64-bit)", rec: "Not yet published by Remedy" },
          { component: "CPU", min: "Intel Core i5-8500 or AMD Ryzen 5 3500", rec: "Not yet published by Remedy" },
          { component: "RAM", min: "16 GB", rec: "Not yet published by Remedy" },
          { component: "GPU", min: "GTX 1070 / RX 5600 XT / Arc A580", rec: "Not yet published by Remedy" },
          { component: "Storage", min: "120 GB SSD", rec: "Not yet published by Remedy" },
        ],
      },
    ],
    faqIds: ["what-are-min-pc-specs", "has-remedy-published-recommended", "does-control-resonant-need-ssd"],
    relatedPageIds: ["fixed-release-status-en-US", "fixed-platforms-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /platforms — Per-platform overview
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-platforms-en-US",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant Platforms and Launch Features",
    seoTitle: "CONTROL Resonant Platforms and Launch Features",
    metaDescription:
      "CONTROL Resonant launches on PC (Steam), PS5, and Xbox Series on September 24, 2026. GeForce NOW streams day one, Mac arrives later in 2026, Game Pass is not at launch.",
    summary:
      "CONTROL Resonant launches simultaneously on PC via Steam, PlayStation 5, and Xbox Series on September 24, 2026 at 14:00 GMT. GeForce NOW streams day one, Mac arrives later in 2026, Game Pass is not at launch.",
    hero: {
      eyebrow: "Platforms",
      subtitle:
        "Understand which platforms CONTROL Resonant launches on (PC / PS5 / Xbox) and where to play on launch day (Steam, GeForce NOW, future Mac).",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Editions", href: "/editions" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "CONTROL Resonant launches on PC via Steam, PlayStation 5, and Xbox Series on September 24, 2026 at 14:00 GMT. GeForce NOW streams the game day one for under-spec PCs and Macs. A native macOS build arrives later in 2026. Game Pass is not included at launch. All three storefronts are taking pre-orders or wishlists.",
    keyFacts: [
      { label: "PC", value: "Steam (AppID 3669870) day one, GeForce NOW day one" },
      { label: "PlayStation 5", value: "PlayStation Store, 48-hour Deluxe early access Sept 22" },
      { label: "Xbox Series", value: "Xbox Store, not on Game Pass at launch" },
      { label: "GeForce NOW", value: "Day one streaming from September 24" },
      { label: "Mac", value: "Native client later in 2026" },
    ],
    modules: [
      {
        id: "platforms-pc",
        type: "prose",
        heading: "PC via Steam",
        body:
          "The Steam store page (AppID 3669870) is the canonical PC storefront for CONTROL Resonant. Pre-order is live, and the Steam listing carries two confirmed pre-order bonus items: the Hiss Corruption Outfit and the Pickpocket's Tool Artifact. PC players receive a digital-only Standard edition; a Steelbook SKU is not sold on PC. Pre-load opens September 20 (Deluxe) and September 22 (Standard). Minimum PC specifications are listed on the system-requirements page. Status as of 2026-09-22: no Remedy news post has confirmed platform parity details specific to PC (such as ultrawide support, frame-rate targets, or HDR).",
        links: [
          { label: "System Requirements", href: "/system-requirements", description: "Minimum PC specs from the Steam store." },
          { label: "Editions", href: "/editions", description: "Standard edition and pre-order bonuses." },
        ],
      },
      {
        id: "platforms-ps5",
        type: "prose",
        heading: "PlayStation 5",
        body:
          "CONTROL Resonant is listed on the PlayStation Store with pre-order available for both the Standard digital edition and the Steelbook physical variant. PS5 Deluxe owners get a 48-hour early-access window starting September 22, 2026 at 14:00 GMT. Standard and Deluxe digital pre-load opens September 22; physical editions ship October 15. Status as of 2026-09-22: PS5-specific feature announcements (such as DualSense haptics integration, activity card support, or 4K/HDR targets) have not been published by Remedy. The PS5 listing page on the PlayStation Store is the canonical source for platform-specific launch details as Remedy publishes them.",
      },
      {
        id: "platforms-xbox",
        type: "prose",
        heading: "Xbox Series",
        body:
          "CONTROL Resonant is listed on the Xbox Store with pre-order available for both the Standard digital edition and the Steelbook physical variant. The Steelbook case is the highest physical SKU for the Xbox Series launch window. Game Pass is not included at launch; Xbox players who want it day one must buy it through the Xbox Store. Status as of 2026-09-22: Xbox-specific feature announcements (such as Smart Delivery details, Quick Resume support, or 4K/HDR targets) have not been published by Remedy. The Xbox Store listing is the canonical source for platform-specific launch details as Remedy publishes them.",
      },
      {
        id: "platforms-cloud",
        type: "prose",
        heading: "GeForce NOW and Mac",
        body:
          "GeForce NOW streams CONTROL Resonant from launch day (September 24). Players on under-spec PCs, Macs without a native client, Chromebooks, or other GeForce NOW-supported devices can stream the game without a local install. A native macOS client arrives later in 2026, after the September 24 Windows launch. Until the native Mac build ships, GeForce NOW is the recommended path for Mac players who want to play on day one.",
      },
    ],
    faqIds: ["what-platforms-launch", "is-control-resonant-on-ps5", "is-control-resonant-on-xbox", "is-control-resonant-on-geforce-now", "is-control-resonant-on-mac"],
    relatedPageIds: ["fixed-release-status-en-US", "fixed-editions-en-US", "fixed-system-requirements-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-22",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /characters — Dylan Faden and antagonist roster
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-characters-en-US",
    translationKey: "characters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "CONTROL Resonant Characters, Cast, and Antagonists",
    seoTitle: "CONTROL Resonant Characters, Cast, and Antagonists",
    metaDescription:
      "Dylan Faden is the CONTROL Resonant protagonist. Jesse Faden is his sister and FBC Director. Antagonists include the Hiss, Mold, and the shapeshifting Aberrant weapon.",
    summary:
      "Dylan Faden replaces his sister Jesse Faden as the playable lead in CONTROL Resonant. The Hiss and Mold return as antagonists, and the Aberrant is a shapeshifting weapon at the center of the new combat system.",
    hero: {
      eyebrow: "Characters",
      subtitle:
        "Learn who Dylan Faden is, his relationship to Jesse Faden, and the antagonist roster (Hiss, Mold, the Aberrant).",
      ctas: [
        { label: "Oldest House", href: "/oldest-house" },
        { label: "New Player Primer", href: "/new-player-primer" },
        { label: "Overview", href: "/overview" },
      ],
    },
    quickAnswer:
      "Dylan Faden is the playable protagonist of CONTROL Resonant, replacing his sister Jesse Faden (former FBC Director from the 2019 original) as the lead. The shapeshifting Aberrant is his signature weapon and the centrepiece of the new combat system, with four confirmed forms (hammer, blades, scythe, fists) tied to the Reach / Shift / Gravitational Anomalies toolkit and a Gap-based progression loop. The Hiss and Mold return as antagonists.",
    keyFacts: [
      { label: "Protagonist", value: "Dylan Faden" },
      { label: "Sister", value: "Jesse Faden (2019 CONTROL protagonist, FBC Director)" },
      { label: "Signature weapon", value: "The Aberrant (shapeshifting, four confirmed forms)" },
      { label: "Ability toolkit", value: "Reach, Shift, Gravitational Anomalies" },
      { label: "Progression space", value: "The Gap — Talents and Artifacts layer into build archetypes" },
      { label: "Antagonists", value: "Hiss, Mold" },
      { label: "Supporting cast", value: "Not yet announced by Remedy as of 2026-09-22" },
    ],
    modules: [
      {
        id: "characters-protagonist",
        type: "prose",
        heading: "Dylan Faden — Protagonist",
        body:
          "Dylan Faden is the playable lead of CONTROL Resonant. He is the brother of Jesse Faden, the protagonist of the 2019 CONTROL and the sitting Director of the Federal Bureau of Control at the start of the sequel. Dylan inherits the Aberrant, a shapeshifting weapon that drives the new combat system, and progresses through the Gap where Talents and Artifacts layer into his melee-focused build archetypes. His role shifts the player perspective from the Director-led 2019 game to the family member caught in the Oldest House's failed lockdown.",
      },
      {
        id: "characters-jesse",
        type: "prose",
        heading: "Jesse Faden — Sister, Former FBC Director",
        body:
          "Jesse Faden returns as a key narrative figure rather than a playable character. She is Dylan's sister and the Director of the Federal Bureau of Control following the events of the 2019 CONTROL. The CONTROL Resonant story opens after the lockdown that once contained the Oldest House can no longer hold, with Jesse's absence the lens through which Dylan inherits the role of playable lead. Jesse's role in CONTROL Resonant is described as legacy reference rather than current-game protagonist status.",
      },
      {
        id: "characters-aberrant",
        type: "prose",
        heading: "The Aberrant — Shapeshifting Weapon",
        body:
          "The Aberrant is the signature weapon of CONTROL Resonant, inherited by Dylan Faden. It is a shapeshifting weapon that adapts between four confirmed forms during combat — hammer, blades, scythe, and fists — each suited to a different combat role. The Aberrant is the centrepiece of the new progression system and replaces the Service Weapon-and-ability loadout of the 2019 CONTROL. The full forms, Reach / Shift / Gravitational Anomalies toolkit, and Gap progression loop are detailed on the Aberrant & Abilities page.",
        links: [
          { label: "Aberrant & Abilities", href: "/aberrant-abilities", description: "Forms, abilities, and the Gap progression loop." },
        ],
      },
      {
        id: "characters-antagonists",
        type: "prose",
        heading: "Hiss and Mold — Antagonists",
        body:
          "The Hiss and Mold return as antagonists in CONTROL Resonant. The Hiss is the paranatural micro-organism threat introduced in the 2019 CONTROL, and Mold is the second established Remedy antagonist presence drawn from the same universe. Both threats are described as confirmed current-game antagonists on the Steam store page. The exact in-game role of each antagonist — whether they appear as recurring bosses, environmental hazards, or faction-level threats — will be confirmed at launch and on this page as Remedy publishes that detail.",
      },
      {
        id: "characters-supporting",
        type: "callout",
        tone: "caution",
        title: "Supporting Cast Status",
        body:
          "Status as of 2026-09-22: Remedy has not announced a full supporting cast beyond Dylan Faden, Jesse Faden, the Aberrant, the Hiss, and Mold. Any further named characters should be treated as not yet announced until Remedy or the launch credits confirm them.",
      },
    ],
    faqIds: ["who-is-protagonist-control-resonant", "what-is-the-aberrant", "are-hiss-and-mold-returning"],
    relatedPageIds: ["fixed-oldest-house-en-US", "fixed-new-player-primer-en-US", "fixed-overview-en-US", "fixed-aberrant-abilities-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-22",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /oldest-house — Setting
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-oldest-house-en-US",
    translationKey: "oldest-house",
    locale: "en-US",
    routeKind: "fixed",
    slug: "oldest-house",
    url: "/oldest-house",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant Oldest House and Warped Manhattan",
    seoTitle: "CONTROL Resonant Oldest House and Warped Manhattan",
    metaDescription:
      "The Oldest House is the Federal Bureau of Control headquarters. In CONTROL Resonant the lockdown fails and a warped Manhattan expansion threatens the FBC.",
    summary:
      "CONTROL Resonant is set in the Oldest House, the Federal Bureau of Control's paranatural skyscraper. The story opens after the lockdown fails and a warped Manhattan expansion threatens the FBC.",
    hero: {
      eyebrow: "Oldest House",
      subtitle:
        "Understand the Oldest House setting and how its lockdown failure drives the CONTROL Resonant story.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "vs Original CONTROL", href: "/vs-original-control" },
        { label: "Overview", href: "/overview" },
      ],
    },
    quickAnswer:
      "The Oldest House is the paranatural Federal Bureau of Control skyscraper in Manhattan introduced in the 2019 CONTROL. CONTROL Resonant opens after its lockdown fails, with a warped Manhattan crisis threatening the FBC and forcing Dylan Faden to take the field.",
    keyFacts: [
      { label: "Setting", value: "Federal Bureau of Control's Oldest House + warped Manhattan" },
      { label: "Lockdown status", value: "Failed at start of CONTROL Resonant" },
      { label: "Geographic scope", value: "Oldest House + warped Manhattan expansion" },
      { label: "Legacy reference", value: "2019 CONTROL setting is treated as legacy reference here" },
    ],
    modules: [
      {
        id: "oldest-house-overview",
        type: "prose",
        heading: "The Oldest House and the Federal Bureau of Control",
        body:
          "The Oldest House is the Federal Bureau of Control's paranatural skyscraper in Manhattan, introduced as the central location of the 2019 CONTROL. It is a brutalist, shifting building that doubles as the franchise's visual signature and a location that constantly redefines itself in response to paranatural threats. The Federal Bureau of Control (FBC) is the in-universe agency responsible for investigating, containing, and weaponizing paranatural phenomena. In CONTROL Resonant the FBC remains the central organisation, but the Oldest House's lockdown has failed by the time Dylan Faden takes the field.",
      },
      {
        id: "oldest-house-lockdown",
        type: "prose",
        heading: "Lockdown Failure and Warped Manhattan",
        body:
          "CONTROL Resonant opens after the lockdown that once contained the threats inside the Oldest House can no longer hold. The escalation extends beyond the building itself: a warped Manhattan expansion threatens the FBC and turns the surrounding cityscape into a contested paranatural zone. This warped Manhattan setting is the new geographic scope of the sequel and the reason Dylan Faden must leave the building and engage threats beyond its walls. (2019 CONTROL lore is referenced here only as background; it is not stated as a current-game fact on this page.)",
      },
      {
        id: "oldest-house-legacy",
        type: "callout",
        tone: "caution",
        title: "Legacy Reference Boundary",
        body:
          "The Oldest House, the FBC, the Hiss, and Jesse Faden's 2019 CONTROL role are part of the legacy Remedy / CONTROL IP. Any specific in-game location, room, or set piece from the 2019 game is treated as legacy reference here. Only the warped Manhattan expansion and the failed lockdown are explicitly labeled as current-game setting facts on this page.",
      },
    ],
    faqIds: ["what-is-oldest-house", "what-is-warped-manhattan", "is-oldest-house-same-as-2019"],
    relatedPageIds: ["fixed-characters-en-US", "fixed-vs-original-control-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /walkthrough — Main missions walkthrough skeleton
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-walkthrough-en-US",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: "CONTROL Resonant Walkthrough and Mission Guide",
    seoTitle: "CONTROL Resonant Walkthrough and Mission Guide",
    metaDescription:
      "CONTROL Resonant walkthrough skeleton. Page fills post-launch with the main-missions walkthrough, key ability upgrades, and collectible notes once the game is playable.",
    summary:
      "CONTROL Resonant walkthrough skeleton. The game is unreleased on 2026-09-19; this page lists the expected Remedy action-adventure structure and links to related reference pages until launch.",
    hero: {
      eyebrow: "Walkthrough",
      subtitle:
        "Get a main-missions walkthrough with mission order, key ability upgrades, and collectible notes once the game is playable.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Oldest House", href: "/oldest-house" },
        { label: "New Player Primer", href: "/new-player-primer" },
      ],
    },
    quickAnswer:
      "CONTROL Resonant is unreleased on 2026-09-19. This walkthrough page lists the expected Remedy action-adventure structure (main missions, ability progression, collectibles) and links out to characters, Oldest House, and the new-player primer until launch, when this page fills with verified mission content.",
    keyFacts: [
      { label: "Game status", value: "Unreleased as of 2026-09-19" },
      { label: "Walkthrough scope", value: "Skeleton page, fills post-launch" },
      { label: "Source rule", value: "Only confirmed content from Steam store and Remedy news" },
    ],
    modules: [
      {
        id: "walkthrough-status",
        type: "callout",
        tone: "caution",
        title: "Status as of 2026-09-19",
        body:
          "CONTROL Resonant is unreleased. The full main-missions walkthrough, ability upgrade order, and collectible locations will be added to this page after the September 24, 2026 launch and once verified content is available. Pre-launch guidance below is limited to the expected Remedy action-adventure structure (main missions with named set pieces, Aberrant ability progression, collectibles, and boss encounters).",
      },
      {
        id: "walkthrough-skeleton",
        type: "steps",
        heading: "Expected Walkthrough Skeleton",
        items: [
          {
            title: "Prologue — Oldest House Lockdown Failure",
            body:
              "Tutorial set piece inside the Oldest House as the lockdown fails. Dylan Faden takes the field with the Aberrant. (Expected structure, not yet confirmed mission content.)",
          },
          {
            title: "Warped Manhattan Expansion",
            body:
              "Dylan leaves the Oldest House to engage threats in the warped Manhattan zone. (Expected structure, not yet confirmed mission content.)",
          },
          {
            title: "Mid-game Set Pieces",
            body:
              "Mid-game mission structure around the FBC, the Hiss, the Mold, and Aberrant ability progression. (Expected structure, not yet confirmed mission content.)",
          },
          {
            title: "Endgame Resolution",
            body:
              "Endgame mission arc resolving the warped Manhattan crisis. (Expected structure, not yet confirmed mission content.)",
          },
        ],
      },
      {
        id: "walkthrough-related",
        type: "prose",
        heading: "Related Pages Until Launch",
        body:
          "Until verified mission content is available, use the related pages below for confirmed launch reference material: characters for Dylan Faden, Jesse Faden, the Aberrant, the Hiss, and Mold; oldest-house for the failed lockdown and warped Manhattan setting; new-player-primer for whether prior Remedy / 2019 CONTROL knowledge is required; and overview for the broader identity and launch window.",
        links: [
          { label: "Characters", href: "/characters", description: "Dylan Faden, the Aberrant, the Hiss, the Mold." },
          { label: "Oldest House", href: "/oldest-house", description: "Setting and warped Manhattan expansion." },
          { label: "New Player Primer", href: "/new-player-primer", description: "Required prior Remedyverse knowledge." },
          { label: "Overview", href: "/overview", description: "Identity and launch window." },
        ],
      },
    ],
    faqIds: ["when-will-walkthrough-be-available", "is-walkthrough-available-pre-launch"],
    relatedPageIds: ["fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-new-player-primer-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /new-player-primer — Prior Remedyverse knowledge
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-new-player-primer-en-US",
    translationKey: "new-player-primer",
    locale: "en-US",
    routeKind: "fixed",
    slug: "new-player-primer",
    url: "/new-player-primer",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant New Player Remedyverse Primer",
    seoTitle: "CONTROL Resonant New Player Remedyverse Primer",
    metaDescription:
      "Do you need to play CONTROL or Alan Wake 2 before CONTROL Resonant? This primer separates confirmed prerequisites from community signals as of 2026-09-19.",
    summary:
      "CONTROL Resonant is positioned as the next major CONTROL entry with Dylan Faden as the new protagonist. Remedy has not announced a prerequisite policy; community discussion flags prior Remedyverse knowledge as helpful but optional.",
    hero: {
      eyebrow: "New Player Primer",
      subtitle:
        "Understand what prior Remedyverse (CONTROL, Alan Wake 2) knowledge is required to enjoy CONTROL Resonant.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "vs Original CONTROL", href: "/vs-original-control" },
        { label: "Overview", href: "/overview" },
      ],
    },
    quickAnswer:
      "Remedy has not announced a prerequisite policy for CONTROL Resonant. The Steam store description and the Oldest House setting both assume familiarity with the 2019 CONTROL, but Remedyverse continuity is presented as supporting context rather than a hard requirement. Players who have not played the 2019 CONTROL can start with CONTROL Resonant and pick up the Oldest House lore as the story unfolds.",
    keyFacts: [
      { label: "Prior game requirement", value: "Not announced by Remedy as of 2026-09-19" },
      { label: "Helpful background", value: "2019 CONTROL lore (FBC, Hiss, Mold, Jesse Faden)" },
      { label: "Optional", value: "Alan Wake 2 — supporting Remedyverse context" },
      { label: "Community signal", value: "Steam Community discussion flags this as a recurring question" },
    ],
    modules: [
      {
        id: "primer-remedyverse",
        type: "prose",
        heading: "Remedyverse Continuity",
        body:
          "CONTROL Resonant sits in Remedy's Connected Universe. The two anchor titles are the 2019 CONTROL (set inside the FBC's Oldest House) and Alan Wake 2 (set in Remedy's Bright Falls horror universe, with connective threads to the FBC). Remedy has not published an official prerequisite policy, but the Steam store description for AppID 3669870 and the Oldest House setting both assume familiarity with the prior FBC lockdown story.",
      },
      {
        id: "primer-prior-control",
        type: "prose",
        heading: "Do You Need to Play the 2019 CONTROL First?",
        body:
          "Remedy has not announced that CONTROL Resonant requires the 2019 CONTROL. The new protagonist Dylan Faden, the failed lockdown framing, and the warped Manhattan expansion all carry the necessary exposition to follow the story. However, the 2019 game's introductions to the FBC, Jesse Faden, the Hiss, and Mold remain the cleanest background for anyone who wants full Remedyverse continuity. Players who arrive at CONTROL Resonant without playing the 2019 game will pick up the Oldest House lore as the story unfolds.",
      },
      {
        id: "primer-alan-wake",
        type: "prose",
        heading: "Alan Wake 2 — Optional Background",
        body:
          "Alan Wake 2 is the other major Remedy Connected Universe title released prior to CONTROL Resonant. It is not required and is treated as supporting context rather than a prerequisite. Players who have played Alan Wake 2 will recognise shared Remedy narrative motifs, but CONTROL Resonant's core cast and setting are anchored in the FBC and the Oldest House rather than the Bright Falls horror thread.",
      },
      {
        id: "primer-community",
        type: "callout",
        tone: "caution",
        title: "Community Signal",
        body:
          "Status as of 2026-09-19: the Steam Community discussion threads for AppID 3669870 flag this question as a recurring pre-launch topic. Remedy has not made an official statement on prerequisites at the time of this snapshot, and the Steam store description does not require either the 2019 CONTROL or Alan Wake 2 as a prerequisite.",
      },
    ],
    faqIds: ["do-i-need-to-play-control-first", "is-alan-wake-2-required", "is-control-resonant-required-to-play-2019"],
    relatedPageIds: ["fixed-characters-en-US", "fixed-vs-original-control-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /vs-original-control — Comparison with 2019 CONTROL
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-vs-original-control-en-US",
    translationKey: "vs-original-control",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-original-control",
    url: "/vs-original-control",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant vs Control - Differences from the 2019 Original",
    seoTitle: "CONTROL Resonant vs Control - Differences from the 2019 Original",
    metaDescription:
      "CONTROL Resonant vs Control: Dylan Faden replaces Jesse Faden as protagonist, the Aberrant replaces the Service Weapon, the warped Manhattan setting extends beyond the Oldest House.",
    summary:
      "CONTROL Resonant is positioned as a new game, not a remake. It swaps Jesse Faden for Dylan Faden, replaces the Service Weapon with the shapeshifting Aberrant, and extends the setting beyond the Oldest House into warped Manhattan.",
    hero: {
      eyebrow: "vs Original CONTROL",
      subtitle:
        "Compare CONTROL Resonant with the 2019 original CONTROL and decide whether to start with the new sequel.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Oldest House", href: "/oldest-house" },
        { label: "New Player Primer", href: "/new-player-primer" },
      ],
    },
    quickAnswer:
      "CONTROL Resonant is positioned as the next major CONTROL entry, not a remake. It swaps Jesse Faden for Dylan Faden as protagonist, replaces the 2019 Service Weapon with the shapeshifting Aberrant, and extends the setting beyond the Oldest House into a warped Manhattan expansion.",
    keyFacts: [
      { label: "Release model", value: "Next major entry (not a remake)" },
      { label: "Protagonist", value: "Dylan Faden (replaces Jesse Faden)" },
      { label: "Signature weapon", value: "The Aberrant (replaces Service Weapon)" },
      { label: "Setting", value: "Oldest House + warped Manhattan (extends beyond 2019)" },
      { label: "Developer / Publisher", value: "Remedy Entertainment (same as 2019)" },
    ],
    modules: [
      {
        id: "vs-framing",
        type: "prose",
        heading: "CONTROL Resonant vs the 2019 CONTROL — Framing",
        body:
          "CONTROL Resonant is positioned as the next major entry in Remedy's CONTROL line. It is not a remake of the 2019 CONTROL. Remedy develops and publishes both titles. The 2019 CONTROL established the FBC, the Oldest House, the Hiss, and Jesse Faden as the playable Director; CONTROL Resonant keeps the franchise's paranatural combat and shifting environments but introduces Dylan Faden as the new protagonist and the Aberrant as the signature weapon.",
      },
      {
        id: "vs-comparison",
        type: "data-table",
        heading: "Side-by-side Comparison",
        columns: [
          { key: "aspect", label: "Aspect" },
          { key: "resonant", label: "CONTROL Resonant (2026)" },
          { key: "original", label: "CONTROL (2019, legacy reference)" },
        ],
        rows: [
          { aspect: "Protagonist", resonant: "Dylan Faden", original: "Jesse Faden" },
          { aspect: "Signature weapon", resonant: "The Aberrant, shapeshifting", original: "Service Weapon" },
          { aspect: "Setting scope", resonant: "Oldest House + warped Manhattan", original: "Oldest House (Manhattan)" },
          { aspect: "Primary antagonist", resonant: "Hiss + Mold", original: "Hiss" },
          { aspect: "Lockdown status", resonant: "Failed at start of story", original: "Active during story" },
          { aspect: "Developer / Publisher", resonant: "Remedy Entertainment", original: "Remedy Entertainment" },
          { aspect: "Launch platforms", resonant: "PC (Steam), PS5, Xbox Series", original: "PC, PS4, Xbox One (legacy)" },
          { aspect: "Release date", resonant: "September 24, 2026", original: "August 27, 2019" },
        ],
      },
      {
        id: "vs-which-first",
        type: "prose",
        heading: "Should You Start with the 2019 CONTROL?",
        body:
          "Starting with the 2019 CONTROL is the cleanest path into Remedyverse continuity because it introduces the FBC, Jesse Faden, the Hiss, and the Oldest House before Dylan Faden's story begins. Remedy has not announced a prerequisite policy, and CONTROL Resonant carries the necessary exposition for new players. Players who prefer to start with the new sequel and return to the 2019 game afterward will not be locked out by Remedy's narrative design. Players who want maximum Remedyverse continuity should also consider Alan Wake 2 as optional supporting context, but neither the 2019 CONTROL nor Alan Wake 2 is announced as required.",
        links: [
          { label: "New Player Primer", href: "/new-player-primer", description: "Prior Remedyverse knowledge required." },
          { label: "Characters", href: "/characters", description: "Dylan, Jesse, the Aberrant, the Hiss, the Mold." },
        ],
      },
    ],
    faqIds: ["is-control-resonant-a-sequel-or-remake", "do-i-need-to-play-2019-first", "what-is-different-from-2019"],
    relatedPageIds: ["fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-new-player-primer-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // /aberrant-abilities — Aberrant forms, abilities, and the Gap progression loop
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "fixed-aberrant-abilities-en-US",
    translationKey: "aberrant-abilities",
    locale: "en-US",
    routeKind: "fixed",
    slug: "aberrant-abilities",
    url: "/aberrant-abilities",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "CONTROL Resonant Aberrant Forms and Abilities - The Gap",
    seoTitle: "CONTROL Resonant Aberrant Forms and Abilities - The Gap",
    metaDescription:
      "The Aberrant has four confirmed shapeshifting forms (hammer, blades, scythe, fists). Reach, Shift, and Gravitational Anomalies are the core abilities, and the Gap is the progression space where Talents and Artifacts layer into build archetypes.",
    summary:
      "The Aberrant is Dylan Faden's shapeshifting weapon in CONTROL Resonant. It has four confirmed forms — hammer, blades, scythe, fists — paired with the Reach / Shift / Gravitational Anomalies toolkit. The Gap is the progression space where Talents and Artifacts layer into build archetypes.",
    hero: {
      eyebrow: "Aberrant & Abilities",
      subtitle:
        "See the four confirmed Aberrant forms, the Reach / Shift / Gravitational Anomalies toolkit, and how the Gap turns them into build archetypes.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Release Status", href: "/release-status" },
        { label: "Walkthrough", href: "/walkthrough" },
      ],
    },
    quickAnswer:
      "The Aberrant is Dylan Faden's shapeshifting weapon in CONTROL Resonant. It has four confirmed forms: hammer (heavy single-target), blades (fast combo), scythe (wide AoE), and fists (close-range brawler). The core ability toolkit is Reach, Shift, and Gravitational Anomalies. Progression happens in the Gap, where Talents and Artifacts layer onto a chosen form to build distinct archetypes.",
    keyFacts: [
      { label: "Confirmed forms", value: "Hammer, Blades, Scythe, Fists" },
      { label: "Core abilities", value: "Reach, Shift, Gravitational Anomalies" },
      { label: "Progression space", value: "The Gap" },
      { label: "Build layers", value: "Talents + Artifacts on top of form choice" },
      { label: "Unrevealed forms", value: "At least one unrevealed form expected at launch" },
    ],
    modules: [
      {
        id: "aberrant-overview",
        type: "prose",
        heading: "What the Aberrant Is",
        body:
          "The Aberrant is the signature weapon of CONTROL Resonant, inherited by Dylan Faden. It replaces the 2019 CONTROL's Service Weapon-and-ability loadout and is the centrepiece of the new combat system. Unlike a fixed gun with alternate firing modes, the Aberrant is a shapeshifting weapon: it adapts between named forms mid-combat, each form changing range, swing arc, and damage profile. The four forms listed below are the confirmed launch roster; pre-launch coverage also references additional unrevealed forms that the launch build will fill in.",
      },
      {
        id: "aberrant-forms-table",
        type: "data-table",
        heading: "Confirmed Aberrant Forms",
        columns: [
          { key: "form", label: "Form" },
          { key: "role", label: "Combat Role" },
          { key: "bestFor", label: "Best For" },
        ],
        rows: [
          { form: "Hammer", role: "Heavy single-target melee", bestFor: "Staggering elite Hiss and breaking Mold walls" },
          { form: "Blades", role: "Fast dual-wield combo", bestFor: "Mob clear and short-range DPS windows" },
          { form: "Scythe", role: "Wide-arc area-of-effect", bestFor: "Grouping clusters of Hiss in warped Manhattan zones" },
          { form: "Fists", role: "Close-range brawler", bestFor: "Hyper-aggressive stagger chains when parry is mastered" },
        ],
      },
      {
        id: "aberrant-abilities",
        type: "prose",
        heading: "Reach, Shift, and Gravitational Anomalies",
        body:
          "The Aberrant's combat toolkit is built around three named abilities, all confirmed by Remedy and the launch coverage: Reach lets Dylan extend a hit beyond his current position to pull, push, or strike distant targets; Shift moves Dylan or the Aberrant through space, used for closing distance and for repositioning out of telegraphed AoE; Gravitational Anomalies manipulate physics around the Aberrant's swing, lifting, slamming, or compressing objects and enemies. Each form draws on these abilities differently — Hammer amplifies Reach into a pull-pounce, Blades weave Shift into dash-cancel combos, Scythe uses Gravitational Anomalies to gather groups, and Fists leans on Shift frames to stay glued to a single target.",
      },
      {
        id: "aberrant-gap",
        type: "prose",
        heading: "The Gap as Progression Space",
        body:
          "The Gap is the in-fiction and mechanical progression space where Dylan levels up the Aberrant and his personal toolkit. Inside the Gap, Talents are the passive and active nodes that define a build archetype (for example, a hammer-centric Reach-heavy stagger build vs. a scythe + Gravitational Anomalies crowd-control build). Artifacts are equippable modifiers that layer on top of Talents and the chosen form, shaping secondary effects like cooldown reduction, status application, or survivability. The combination of form choice + Talent path + Artifact loadout is what defines a CONTROL Resonant build, and the Gap is where those choices are made and refined across the campaign.",
      },
      {
        id: "aberrant-builds",
        type: "comparison",
        heading: "Build Archetypes at a Glance",
        options: [
          { name: "Hammer + Reach", summary: "Heavy stagger and single-target deletion, built around Reach pulls and slow Gravitational Anomaly slams.", bestFor: "Elite Hiss encounters and boss windows", badge: "Tank" },
          { name: "Blades + Shift", summary: "Fast combo DPS with dash-cancel windows, leaning on Shift for repositioning and Reach as a finisher.", bestFor: "Mob clear with quick disengage", badge: "Skirmisher" },
          { name: "Scythe + Gravitational Anomalies", summary: "AoE crowd control using Gravitational lifts and Reach pulls to group enemies into scythe arcs.", bestFor: "Wide warped Manhattan engagements", badge: "Controller" },
          { name: "Fists + Shift", summary: "Close-range brawler with Shift-frame cancels; high risk, high uptime on a single target.", bestFor: "Players who master parry and stagger chaining", badge: "Berserker" },
        ],
      },
      {
        id: "aberrant-unrevealed",
        type: "callout",
        tone: "confirmed",
        title: "Unrevealed Forms",
        body:
          "Pre-launch coverage flags the four forms above as confirmed and references at least one additional unrevealed form that the launch build will introduce. This page will list every launched form once the September 24 launch exposes the full roster. Treat any fifth-or-later form mentioned before launch as community speculation until Remedy or the launch credits confirm it.",
      },
    ],
    faqIds: ["what-is-the-aberrant", "how-many-aberrant-forms", "what-are-reach-shift-gravitational-anomalies", "what-is-the-gap", "how-do-talents-and-artifacts-work"],
    relatedPageIds: ["fixed-characters-en-US", "fixed-release-status-en-US", "fixed-walkthrough-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-22",
  },
];