import CustomIconSVG from "@/components/shared/CustomIconSVG";
import { Category, CategoryFamily } from "@/lib/types/Category";
import Link from "next/link";

// Sort categories to have aethetic categories first and functional categories last.
function sortCategories(categories: Category[]) {
  categories.sort((categoryA: Category, categoryB: Category) => {
    if ((categoryA.categoryFamily === CategoryFamily.AstheticForm) && (categoryB.categoryFamily === CategoryFamily.FunctionForm)) return -1;
    else if ((categoryA.categoryFamily === CategoryFamily.FunctionForm) && (categoryB.categoryFamily === CategoryFamily.AstheticForm)) return 1;
    return 0;
  });
}

export default function CategoryIconLinks({
  categories,
}: {
  categories: Category[];
}) {
  const oneCategory: boolean = categories.length === 1;
  if (!oneCategory) sortCategories(categories);
  console.log(categories)

  return (
    <div className="flex justify-center gap-5">{
      categories.map((category: Category) => {
        return (
          <Link key={ category.slug } href={ `/gallery/category/${ category.slug }`}> 
            <CustomIconSVG icon={ category.icon } className="w-14 h-14 nav-link-in-content" />
          </Link>
        );
      })
    }</div>
  );
}