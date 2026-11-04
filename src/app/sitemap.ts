import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { locales, localePath } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    ...projects.map((p) => ({ path: `/projets/${p.slug}`, priority: 0.8 })),
    ...skills.map((s) => ({ path: `/competences/${s.slug}`, priority: 0.6 })),
  ];

  // Chaque page existe en français et en anglais, reliées entre elles (hreflang).
  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
