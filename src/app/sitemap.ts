import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projets/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...skills.map((skill) => ({
      url: `${site.url}/competences/${skill.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
