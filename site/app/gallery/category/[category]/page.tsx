import { client } from '@/lib/sanity';
import ArtGrid from '@/components/ArtGrid';
import PageHeading from '@/components/PageHeading';
import { notFound } from 'next/navigation';
import { CustomIcon } from '@/lib/types/CustomIcon';

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

function getIconFromCategory(category: string): CustomIcon | null {
  console.log("🙏", category);
  if (category === "soap-dispensers")
    return CustomIcon.Dispenser;
  else if (category === "pots")
    return CustomIcon.Pot;
  else if (category === "mugs")
    return CustomIcon.Mug;
  else if (category === "aliens")
    return CustomIcon.Alien;
  else if (category === "demons")
    return CustomIcon.Demon;
  else if (category === "dogs")
    return CustomIcon.Dog;
  else if (category === "oddities")
    return CustomIcon.Oddity;
  else if (category === "goblins")
    return CustomIcon.Goblin;
  return CustomIcon.Confused; 
}

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
      { getIconFromCategory(category) ?
        <PageHeading titleText={ categoryDoc.plural_title } icon={ getIconFromCategory(category)! } /> :
        <PageHeading titleText={ categoryDoc.plural_title }/>
      }
      <ArtGrid artworks={artworks} />
    </main>
  );
}