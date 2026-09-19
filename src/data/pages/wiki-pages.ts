import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const wikiPages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Identity, Setting, and Reference`,
    metaDescription:
      "CONTROL Resonant wiki hub: identity, characters, setting, and platform reference collected from the Steam store and Remedy news.",
    summary:
      "A wiki hub for CONTROL Resonant: identity, characters, oldest-house setting, and platform reference.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Collect official facts, characters, setting, and reference material for CONTROL Resonant in one place.",
      ctas: [
        { label: "Overview", href: "/overview" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "The CONTROL Resonant wiki hub lists identity, characters, the Oldest House setting, and platform reference. All current-game facts are from the Steam store snapshot 2026-09-19, SteamDB metadata, and Remedy Entertainment news posts.",
    keyFacts: [
      { label: "Game", value: "CONTROL Resonant (Steam AppID 3669870)" },
      { label: "Developer", value: "Remedy Entertainment" },
      { label: "Release", value: "September 24, 2026" },
      { label: "Source rule", value: "Official facts only; dated status notes for unannounced items" },
    ],
    modules: [
      {
        id: "wiki-launch",
        type: "prose",
        heading: "Launch-Day Wiki",
        body:
          "Use the overview page for the full identity answer, characters for Dylan Faden and the antagonist roster, oldest-house for the setting, platforms for per-platform detail, and editions for the Steelbook and pre-order bonus lineup.",
        links: [
          { label: "Overview", href: "/overview", description: "Identity, developer, and launch window." },
          { label: "Characters", href: "/characters", description: "Dylan Faden and the antagonist roster." },
          { label: "Oldest House", href: "/oldest-house", description: "Setting and warped Manhattan expansion." },
          { label: "Platforms", href: "/platforms", description: "Per-platform detail for PC, PS5, Xbox Series." },
          { label: "Editions", href: "/editions", description: "Standard, Steelbook, and pre-order bonuses." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-overview-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-platforms-en-US", "fixed-editions-en-US"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },
];