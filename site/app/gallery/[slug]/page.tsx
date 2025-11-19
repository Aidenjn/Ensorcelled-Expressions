import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Carousel from '@/components/Carousel/Carousel';
import PageHeading from '@/components/PageHeading';
import SaleStatus from '@/components/SaleStatus';

// GROQ query for one artwork
const query = `
  *[_type == "artwork" && slug.current == $slug][0]{
    _id,
    title,
    description,
    images[],
    saleStatus,
    etsyUrl,
    tags[]->{
      _id,
      name
    }
  }
`;

export default async function ArtPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Unwrap the Promise
  const { slug } = await params

  // Now slug is available
  const artwork = await client.fetch(query, { slug })

  if (!artwork) notFound();

  return (
    <main>
      <PageHeading titleText={ artwork.title } descriptionText={ artwork.description } />

      <div className="max-w-5xl mx-auto pt-6 pr-6 pl-6 max-w-200">
        {/* 🖼️ Image carousel */}
        <Carousel images={ artwork.images } />

        {/* 🏷️ Sale status
        <SaleStatus status={artwork.saleStatus} etsyUrl={artwork.etsyUrl} /> */}

        {/* 🪄 Tags */}
        {/* {artwork.tags?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map((tag: any) => (
                <span
                  key={tag._id}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </main>
  )
}