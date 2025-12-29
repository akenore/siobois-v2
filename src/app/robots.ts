import type { MetadataRoute } from "next";

/**
 * robots.txt configuration for SEO
 * Allows all crawlers to index the site
 */
export default function robots(): MetadataRoute.Robots {
     return {
          rules: {
               userAgent: "*",
               allow: "/",
               disallow: ["/api/", "/_next/"],
          },
          sitemap: "https://www.siobois.com/sitemap.xml",
     };
}
