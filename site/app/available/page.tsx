import ComingSoonIcon from '@/public/custom_graphics/starry_eyes.svg';
import PageHeading from '@/components/shared/PageHeading';

export default async function ForSaleGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto -my-32 p-5">
      <PageHeading titleText="Coming 2026" />
      <ComingSoonIcon className="stroke-foreground w-full h-34 my-9" />
      <p className="text-left mt-4 mb-4">
        I plan to have items available to purchase during Spring in 2026. I will make the official
        announcement of when pieces are available on my Instagram account{' '}
        <a href="https://www.instagram.com/ensorcelledexpressions?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
          @EnsorcelledExpressions
        </a>
        .
      </p>
    </div>
  );
  // const artworks = await client.fetch(`
  //   *[_type == "artwork" && saleStatus == "forSale"] | order(dateCreated desc)
  // `);

  // return <ArtGrid artworks={artworks} />;
}
