import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = "https://www.siobois.com";

     return [
          {
               url: baseUrl,
               lastModified: new Date(),
               changeFrequency: "monthly",
               priority: 1,
          },
          {
               url: `${baseUrl}/realisations`,
               lastModified: new Date(),
               changeFrequency: "monthly",
               priority: 0.8,
          },
     ];
}
