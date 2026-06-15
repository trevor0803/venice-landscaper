import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = ["", "/services", "/gallery", "/blog", "/about", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date + "T12:00:00"),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
