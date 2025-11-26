import { client } from '@/lib/sanity';
import ArtGrid from "@/components/shared/ArtGrid";
import { notFound } from 'next/navigation';
import PageHeading from '@/components/shared/PageHeading';
import { CustomIcon } from '@/lib/types/CustomIcon';

const tagQuery = `
  *[_type == "tag" && slug.current == $category][0]{
    _id,
    plural_title
  }
`;

const artworksQuery = `
  *[_type == "artwork" && $tagId in tags[]._ref && saleStatus == "forSale"]{
    _id,
    title,
    images,
    saleStatus,
    slug,
    dateCreated
  } | order(dateCreated desc)
`;

function getIconFromCategory(tag: string): CustomIcon | null {
  switch (tag) {
    case "soap-dispenser": return CustomIcon.Dispenser;
    case "soap-dispenser": return CustomIcon.Dispenser;
    default: return null 
  }
}

export default async function AvailableCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;

  // Fetch category/tag

  const categoryDoc = await client.fetch(tagQuery, { category });

  if (!categoryDoc) notFound();

  // Fetch artworks for this tag
  const artworks = await client.fetch(artworksQuery, {
    tagId: categoryDoc._id,
  });

  return (
    <main className="max-w-5xl mx-auto p-6">
      { getIconFromCategory(category) ?
        <PageHeading titleText={ categoryDoc.plural_title } icon={ getIconFromCategory(category)! } /> :
        <PageHeading titleText={ categoryDoc.plural_title }/>
      }
      <ArtGrid artworks={artworks} />
    </main>
  );
}