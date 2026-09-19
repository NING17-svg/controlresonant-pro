import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "CONTROL Resonant Guide",
  brandMark: "CR",
  gameName: "CONTROL Resonant",
  domain: "controlresonant.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://controlresonant.pro").replace(/\/$/, ""),
  description:
    "Independent launch reference hub for CONTROL Resonant — planned release date, launch platforms, system requirements, editions, characters, and the Oldest House setting.",
  tagline: "Release status, platforms, system specs, and launch reference for CONTROL Resonant.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "CONTROL Resonant Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "CONTROL Resonant on Steam",
      href: "https://store.steampowered.com/app/3669870/",
      description: "Official Steam store page for CONTROL Resonant (AppID 3669870).",
    },
    {
      label: "Remedy Entertainment",
      href: "https://www.remedygames.com/",
      description: "Developer and publisher of the CONTROL series.",
    },
  ],
  disclaimer:
    "This is an unofficial fan reference hub. Facts are drawn from the official Steam store page, SteamDB metadata, and Remedy Entertainment news as of the 2026-09-19 research snapshot.",
};