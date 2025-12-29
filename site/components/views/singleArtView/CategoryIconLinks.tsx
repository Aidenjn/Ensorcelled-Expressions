'use client';

import CustomIconSVG from '@/components/shared/CustomIconSVG';
import { Category, CategoryFamily } from '@/lib/types/Category';
import { motion } from 'motion/react';
import Link from 'next/link';
import CategoryIconTooltip from './CategoryIconTooltip';

// Sort categories to have aethetic categories first and functional categories last.
function sortCategories(categories: Category[]) {
  categories.sort((categoryA: Category, categoryB: Category) => {
    if (
      categoryA.categoryFamily === CategoryFamily.AstheticForm &&
      categoryB.categoryFamily === CategoryFamily.FunctionForm
    )
      return -1;
    else if (
      categoryA.categoryFamily === CategoryFamily.FunctionForm &&
      categoryB.categoryFamily === CategoryFamily.AstheticForm
    )
      return 1;
    return 0;
  });
}

// Determines which side the tooltip should go based on the index and amount of categories.
function chooseSide(index: number, category_amount: number) {
  // If this index is on the left half, return left.
  if (index < category_amount / 2) return "left";
  return "right"
}

export default function CategoryIconLinks({ categories }: { categories: Category[] }) {
  const oneCategory: boolean = categories.length === 1;
  if (!oneCategory) sortCategories(categories);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {categories.map((category: Category, index: number) => {
        return (
          <CategoryIconTooltip
            tip={category.descriptor}
            key={category.title}
            side={chooseSide(index, categories.length)}
          >
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link
                href={`/gallery/category/${category.slug}`}
                className="inline-flex stroke-background_text_color"
              >
                <CustomIconSVG
                  icon={category.icon}
                  className="w-14 h-14 nav-link-in-content"
                />
              </Link>
            </motion.div>
          </CategoryIconTooltip>
        );
      })}
    </div>
  );
}