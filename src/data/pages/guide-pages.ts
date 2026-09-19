import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Walkthrough and Mission Help`,
    metaDescription:
      "CONTROL Resonant guides hub: walkthrough skeleton, characters reference, and setting primer until the launch-day mission walkthrough is available.",
    summary:
      "A launch-day guides index for CONTROL Resonant. The walkthrough page fills post-launch with the verified main-missions walkthrough, and the characters and oldest-house pages provide supporting reference.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Launch-day guides for CONTROL Resonant: walkthrough skeleton, characters reference, and setting primer until verified post-launch content is available.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "The CONTROL Resonant guides hub collects the walkthrough skeleton, the characters reference, the Oldest House setting page, and the new-player primer in one place. Verified mission content fills the walkthrough page post-launch.",
    keyFacts: [
      { label: "Game status", value: "Unreleased as of 2026-09-19" },
      { label: "Walkthrough", value: "Skeleton page, fills post-launch" },
      { label: "Source rule", value: "Only confirmed content from Steam store and Remedy news" },
    ],
    modules: [
      {
        id: "guides-launch",
        type: "prose",
        heading: "Launch-Day Controls",
        body:
          "Use the walkthrough page for the expected Remedy action-adventure structure, the characters page for Dylan Faden and the antagonist roster, the oldest-house page for the setting, and the new-player primer for prior Remedyverse continuity questions.",
        links: [
          { label: "Walkthrough", href: "/walkthrough", description: "Skeleton page, fills post-launch." },
          { label: "Characters", href: "/characters", description: "Dylan Faden, the Aberrant, the Hiss, the Mold." },
          { label: "Oldest House", href: "/oldest-house", description: "Setting and warped Manhattan expansion." },
          { label: "New Player Primer", href: "/new-player-primer", description: "Required prior Remedyverse knowledge." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-walkthrough-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US", "fixed-new-player-primer-en-US"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },
];