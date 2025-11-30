'use client';

import CustomIconSVG from '@/components/shared/CustomIconSVG';
import { Category, CategoryFamily } from '@/lib/types/Category';
import { motion } from 'motion/react';
import Link from 'next/link';

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

export default function CategoryIconLinks({ categories }: { categories: Category[] }) {
  const oneCategory: boolean = categories.length === 1;
  if (!oneCategory) sortCategories(categories);
  console.log(categories);

  return (
    <div className="flex justify-center gap-5">
      {categories.map((category: Category) => {
        return (
          <motion.button
            className="stroke-background_text_color"
            whileTap={{
              scale: 0.8,
              stroke: 'var(--color-hover_background_color)',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            key={category.slug}
          >
            <Link href={`/gallery/category/${category.slug}`}>
              <CustomIconSVG icon={category.icon} className="w-14 h-14 nav-link-in-content" />
            </Link>
          </motion.button>
        );
      })}
    </div>
  );
}
