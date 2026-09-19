import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/overview", labels: { "en-US": "Overview" } },
  { href: "/release-status", labels: { "en-US": "Release Status" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/editions", labels: { "en-US": "Editions" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/characters", labels: { "en-US": "Characters" } },
  { href: "/oldest-house", labels: { "en-US": "Oldest House" } },
  { href: "/walkthrough", labels: { "en-US": "Walkthrough" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/overview", labels: { "en-US": "Overview" } },
  { href: "/release-status", labels: { "en-US": "Release Status" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/editions", labels: { "en-US": "Editions" } },
  { href: "/characters", labels: { "en-US": "Characters" } },
  { href: "/oldest-house", labels: { "en-US": "Oldest House" } },
  { href: "/walkthrough", labels: { "en-US": "Walkthrough" } },
  { href: "/new-player-primer", labels: { "en-US": "New Player Primer" } },
  { href: "/vs-original-control", labels: { "en-US": "vs Original CONTROL" } },
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}