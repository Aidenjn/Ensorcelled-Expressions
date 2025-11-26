import { Category } from '@/lib/types/Category';
import { ALL_CATEGORIES } from '@/lib/constants/categories';

export function getCategoryFromSlug(slug: string): Category | undefined {
  return ALL_CATEGORIES.find((category) => (category.slug === slug));
}