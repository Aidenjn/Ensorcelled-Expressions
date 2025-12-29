import PageHeading from '@/components/shared/PageHeading';
import AboutSection from '@/components/views/aboutView/AboutSection';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default async function ForSaleGalleryPage() {
  return (
    <div>
      <PageHeading titleText="About the Artist" icon={CustomIcon.JoySquint} />
      <AboutSection />
    </div>
  );
}
