import { client } from '@/lib/sanity';
import ArtGrid from '@/components/ArtGrid';
import PageHeading from '@/components/PageHeading';
import { notFound } from 'next/navigation';

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

  // Fetch category/tag

  const categoryDoc = await client.fetch(tagQuery, { category });

  if (!categoryDoc) notFound();

  // Fetch artworks for this tag
  const artworks = await client.fetch(artworksQuery, {
    tagId: categoryDoc._id,
  });

  return (
    <main>
      <PageHeading titleText={ categoryDoc.plural_title }/>
      <ArtGrid artworks={artworks} />
    </main>
  );
}