import { Artwork } from '@/lib/types/SanityObjects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '@/lib/image';
import SaleBadge from '@/components/SaleBadge';
import WavyBorderImage from '@/components/WavyBorderImage/WavyBorderImage';
import HoverOverlay from '@/components/HoverOverlay';
import React from 'react';

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const image = artwork.images?.[0];
  const imageUrl = React.useMemo(() => {
    const img = artwork.images?.[0];
    return img ? urlFor(img).width(350).height(350).url() : null;
  }, [artwork.images]);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative w-full bg-background rounded-xl overflow-hidden cursor-pointer"
    >
      <Link href={`/gallery/${ artwork.slug.current }`}>        
        <div className="relative w-full aspect-square">
          <WavyBorderImage imageUrl={ imageUrl }/>
          <HoverOverlay title={ artwork.title }/>
          {/* { artwork.saleStatus && <SaleBadge saleStatus={ artwork.saleStatus } /> } */}
        </div>
      </Link>
    </motion.div>
  )
}
