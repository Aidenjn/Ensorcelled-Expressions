import { client } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Carousel from '@/components/views/singleArtView/carousel/Carousel';
import PageHeading from '@/components/shared/PageHeading';
import { Artwork } from '@/lib/types/SanityTypes';
import { getCategoriesFromTags } from '@/lib/utils/categories/getCategoriesFromTags';
import { CustomIcon } from '@/lib/types/CustomIcon';
import { Category, CategoryFamily } from '@/lib/types/Category';

// GROQ query for one artwork
const query = `
  *[_type == "artwork" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    images[],
    saleStatus,
    etsyUrl,
    tags[]->{
      _id,
      slug,
    }
  }
`;

export default async function ArtPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the Promise
  const { slug } = await params;

  // Now slug is available
  const artwork: Artwork = await client.fetch(query, { slug });

  if (!artwork) notFound();

  // Use one of the aesthetic form icons for the loading image
  const asthetic_artwork_categories: Category[] = getCategoriesFromTags(artwork.tags).filter(
    (category) => category.categoryFamily === CategoryFamily.AstheticForm,
  );

  let loadingIcon: CustomIcon | undefined = undefined;
  if (asthetic_artwork_categories.length > 0) loadingIcon = asthetic_artwork_categories[0]?.icon;

  return (
    <main>
      <PageHeading
        titleText={artwork.title}
        categories={getCategoriesFromTags(artwork.tags)}
        // Only include descriptionText as a prop if it's defined
        {...(artwork.description && { descriptionText: artwork.description })}
      />

      <div className="mx-auto pt-6 max-w-200">
        <Carousel images={artwork.images} loadingIcon={loadingIcon} />

        {/*
        <SaleStatus status={artwork.saleStatus} etsyUrl={artwork.etsyUrl} /> */}
      </div>
    </main>
  );
}
