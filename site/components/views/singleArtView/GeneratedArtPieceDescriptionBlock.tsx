import { Category, CategoryFamily } from '@/lib/types/Category';

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

export default function GeneratedArtPieceDescriptionBlock({
  pieceCategories,
}: {
  pieceCategories: Category[];
}) {
  const oneCategory: boolean = pieceCategories.length === 1;
  if (!oneCategory) sortCategories(pieceCategories);

  return (
    <span>
      {oneCategory ? 'An ensorcelled' : 'A'}{' '}
      {pieceCategories.map((category, index) => {
        const isLast = index === pieceCategories.length - 1;
        const isSecondToLast = index === pieceCategories.length - 2;

        return (
          <span key={category.slug}>
            <a href={`/gallery/category/${category.slug}`} className="nav-link-in-content">
              {category.descriptor}
            </a>

            {/* punctuation rules */}
            {!isLast && pieceCategories.length > 2 && !isSecondToLast && ', '}
            {isSecondToLast && ' '}
            {pieceCategories.length === 2 && index === 0 && ' '}
          </span>
        );
      })}
      .
    </span>
  );
}
