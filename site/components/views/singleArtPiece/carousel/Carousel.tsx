'use client';

import { useState, useEffect } from 'react';
import { urlFor } from '@/lib/image';
import { WavyShape } from '@/lib/types/WavyShapes';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import CarouselButtons from './CarouselButtons';
import { motion, AnimatePresence } from 'framer-motion';
import { SanityImage } from '@/lib/types/SanityTypes';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default function Carousel({
  images,
  loadingIcon,
}: {
  images: SanityImage[];
  loadingIcon?: CustomIcon | undefined;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  const SLIDE_DIST = 30;

  if (!images || images.length === 0) return null;

  // Preload images so that they appear immeadiately when flipping through the carousel
  useEffect(() => {
    images.forEach((img) => {
      const preload = new Image();
      preload.src = urlFor(img).width(800).height(600).url();
    });
  }, [images]);

  const next = () => {
    setHasInteracted(true);
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setHasInteracted(true);
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const imageUrl = urlFor(images[index]).width(800).height(600).url();

  // Variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? SLIDE_DIST : -SLIDE_DIST,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -SLIDE_DIST : SLIDE_DIST,
      opacity: 0,
    }),
    initialLoad: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative w-full aspect-4/3 rounded-lg mb-6 overflow-visible">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial={hasInteracted ? 'enter' : 'initialLoad'}
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 z-20"
          >
            <WavyBorderImage
              imageUrl={imageUrl}
              shape={WavyShape.Rectangle}
              loadingIcon={loadingIcon}
              disableLoadingEffect={hasInteracted}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && <CarouselButtons onPrev={prev} onNext={next} />}
    </div>
  );
}
