// app/gallery/page.tsx
import { client } from '@/lib/sanity';
import ArtGrid from '@/components/ArtGrid';
import PageHeading from '@/components/PageHeading';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default async function GalleryPage() {
  const artworks = await client.fetch(`*[_type == "artwork"] | order(dateCreated desc)`);

  return (
    <div>
      <PageHeading titleText="Gallery" icon={ CustomIcon.ExcitedGlace }/>
      <ArtGrid artworks={artworks}/>
    </div>
  );
}