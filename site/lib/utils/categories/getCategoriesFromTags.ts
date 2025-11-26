import { Category } from '@/lib/types/Category';
import { getCategoryFromSlug } from './getCategoryFromSlug';
import { ArtworkTag } from '@/lib/types/SanityTypes'

export function getCategoriesFromTags(tags: ArtworkTag[]): Category[] {
  return tags
    .map((tag: ArtworkTag) => getCategoryFromSlug(tag.slug.current)) // Try to get the categories from the slugs
    .filter((category: Category | undefined) => (category !== undefined)); // Only return the defined categories
}