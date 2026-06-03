import type { MetadataRoute } from "next";

const BASE_URL = "https://panaceasolution.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: "/",        priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: "/services", priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/courses",  priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: "/about",    priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/contact",  priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/blog",     priority: 0.7,  changeFrequency: "weekly"  as const },
    { url: "/career",   priority: 0.6,  changeFrequency: "monthly" as const },
  ];

  const coursePages = [
    "mern-stack",
    "python-data-science",
    "mobile-app-development",
    "digital-marketing-mastery",
  ].map((slug) => ({
    url: `/courses/${slug}`,
    priority: 0.75 as const,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...coursePages].map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
