import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const supportEmail = `support@${site.domain}`;

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the CONTROL Resonant launch reference hub: unofficial status, sourcing rules, and editorial scope.",
    summary:
      "Trust page explaining the unofficial status of the CONTROL Resonant guide, sourcing rules, and editorial scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the CONTROL Resonant guide covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial launch reference hub for CONTROL Resonant (Steam AppID 3669870). Facts are drawn from the Steam store snapshot 2026-09-19, SteamDB metadata, and Remedy Entertainment news posts.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference hub" },
      { label: "Game", value: "CONTROL Resonant (Steam AppID 3669870)" },
      { label: "Editorial rule", value: "Official facts only; dated status notes for unannounced items" },
      { label: "Scope", value: "Release status, platforms, system requirements, editions, characters, setting, walkthrough" },
    ],
    modules: [
      {
        id: "about-mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help CONTROL Resonant readers confirm the game's identity, launch timing, platform availability, system requirements, editions, characters, and setting — without pretending this site knows more than official sources support.",
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use the Steam store page for AppID 3669870, SteamDB metadata for the same AppID, Remedy Entertainment official news posts, and the Steam Community hub as the canonical sources for current-game facts. Items not announced by Remedy as of the 2026-09-19 snapshot (Game Pass inclusion, review embargo outcome, regional unlock times, DLC plans) are listed with dated status notes rather than filled with speculation.",
      },
      {
        id: "about-fact-boundaries",
        type: "callout",
        tone: "caution",
        title: "Fact Boundaries",
        body:
          "Current-game facts come only from the Steam store AppID 3669870 snapshot 2026-09-19, SteamDB metadata, and Remedy Entertainment news posts. The 2019 CONTROL and the wider Remedyverse (Alan Wake, Alan Wake 2) are used only as legacy reference on clarification pages; legacy lore is never stated as a current-game fact.",
      },
    ],
    faqIds: ["what-is-control-resonant"],
    relatedPageIds: ["fixed-overview-en-US", "fixed-release-status-en-US", "fixed-characters-en-US", "fixed-oldest-house-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `Contact ${site.name}`,
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the CONTROL Resonant launch reference hub: corrections, official source updates, and feedback.",
    summary:
      "Trust page for corrections, source updates, and feedback about the CONTROL Resonant launch reference hub.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Reach out for corrections, official source updates, and feedback about the CONTROL Resonant launch reference hub.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      `Use the support mailbox linked on this site to send corrections, official source updates, and feedback about the CONTROL Resonant launch reference hub. Do not include private account credentials.`,
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Channel", value: supportEmail },
      { label: "Scope", value: "Guide content only — not Remedy or Steam support" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          `Send corrections, official source updates, and feedback to ${supportEmail}. The mailbox is configured through the Cloudflare Email Routing integration on this domain and forwards to the verified owner account.`,
      },
      {
        id: "contact-corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials. Updates to the dated status statements on each guide page are recorded with the source URL and the date the page was refreshed.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the CONTROL Resonant launch reference hub: aggregate GA4 analytics, contact messages, and policy updates.",
    summary:
      "Starter privacy policy for the CONTROL Resonant launch reference hub: aggregate GA4 analytics, contact messages, and policy update notes.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the CONTROL Resonant launch reference hub collects, why it is used, and how visitors can contact the maintainers.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The CONTROL Resonant launch reference hub collects aggregate analytics when GA4 is configured, stores contact messages sent to the support mailbox, and updates this policy when the deployed setup changes.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Contact mailbox", value: supportEmail },
    ],
    modules: [
      {
        id: "privacy-data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled by an external integrator, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads. No personally identifying information is collected beyond what visitors choose to send through the contact mailbox.",
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          `If a contact method is used, messages may include the information visitors choose to send to ${supportEmail}. Do not request sensitive personal information through this channel.`,
      },
      {
        id: "privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the CONTROL Resonant launch reference hub: scope, disclaimers, and acceptable use.",
    summary:
      "Starter terms page for the CONTROL Resonant launch reference hub: unofficial status, informational use, and site changes.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This terms page documents unofficial status, informational use, and acceptable use for the CONTROL Resonant launch reference hub.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Updated 2026-09-19" },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Remedy Entertainment, the CONTROL IP, Steam, PlayStation, Xbox, or any trademark owners unless explicitly stated.",
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "terms-acceptable",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-19",
  },
];