import { client } from '@/lib/sanity';
import ArtGrid from "@/components/shared/ArtGrid";
import PageHeading from '@/components/shared/PageHeading';
import { notFound } from 'next/navigation';
import { Category } from '@/lib/types/Category';
import { getCategoryFromSlug } from '@/lib/utils/categories/getCategoryFromSlug';

const tagQuery = `
  *[_type == "tag" && slug.current == $category][0]{
    _id,
    plural_title
  }
`;

const artworksQuery = `
  *[_type == "artwork" && $tagId in tags[]._ref]{
    _id,
    title,
    images,
    saleStatus,
    slug,
    dateCreated
  } | order(dateCreated desc)
`;

export default async function GalleryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;

  // Fetch category from Sanity
  const categoryDoc = await client.fetch(tagQuery, { category });
  if (!categoryDoc) notFound();

  // Fetch artworks for this category
  const artworks = await client.fetch(artworksQuery, {
    tagId: categoryDoc._id,
  });

  // Find local info for category
  const categoryObject: Category | undefined = getCategoryFromSlug(category);

  return (
    <main>
      { categoryObject ?
        <PageHeading titleText={ categoryObject.title } icon={ categoryObject.icon } /> :
        <PageHeading titleText={ categoryDoc.plural_title }/>
      }
      <ArtGrid artworks={artworks} />
    </main>
  );
}