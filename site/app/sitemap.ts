import { client } from "@/lib/sanity";
import { ALL_CATEGORIES } from "@/lib/constants/categories"
import { Category } from "@/lib/types/Category";

export default async function sitemap() {
  const baseUrl = "https://ensorcelledexpressions.com";

  // Fetch dynamic art piece slugs from Sanity
  const artworks = await client.fetch(
    `*[_type == "artwork" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  // Build art piece URLs
  const artworkEntries = artworks.map((art: any) => ({
    url: `${baseUrl}/gallery/${art.slug}`,
    lastModified: art._updatedAt ? new Date(art._updatedAt) : new Date(),
  }));

  // Build category URLs (from constants)
  const categoryEntries = ALL_CATEGORIES.map((category:Category) => ({
    url: `${baseUrl}/gallery/category/${category.slug}`,
    lastModified: new Date(),
  }));

  // Add static pages
  const staticEntries = [
    "",
    "/about",
    "/gallery",
    "/available",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...artworkEntries,
  ];
}
