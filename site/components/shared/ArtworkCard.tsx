"use client"

import { Artwork } from '@/lib/types/SanityTypes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '@/lib/image';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import HoverOverlay from '@/components/shared/HoverOverlay';
import React from 'react';

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const imageUrlFetch: string | null = (React.useMemo(() => {
    const img = artwork.images?.[0];
    return img ? urlFor(img).width(350).height(350).url() : null;
  }, [artwork.images]));

  const imageUrl: string | undefined = imageUrlFetch ? imageUrlFetch : undefined;

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
        </div>
      </Link>
    </motion.div>
  )
}
