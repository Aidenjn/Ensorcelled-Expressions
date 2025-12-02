'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WavyShape } from '@/lib/types/WavyShapes';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default function Slideshow({
  images,
  interval = 5000,
  minimumLoadingTimeMS = 1500,
  loadingIcons = [],
}: {
  images: string[]; // local image paths or imported static files
  interval?: number;
  minimumLoadingTimeMS?: number;
  loadingIcons?: CustomIcon[];
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  const SLIDE_DIST = 30;

  // Preload local images
  useEffect(() => {
    images.forEach((src) => {
      const preload = new Image();
      preload.src = src;
    });
  }, [images]);

  // Auto-advance
  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setDirection(1);
      setInitialLoad(false);
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;
  const imageUrl = images[index];
  const loadingIcon = loadingIcons.length > 0 ? loadingIcons[index] : CustomIcon.SpiralCutGaze;

  // Animation variants
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

  // Take a little time to load the first image, then less for the subsequent ones.
  const minLoadTime: number = initialLoad ? minimumLoadingTimeMS : 1000;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative w-full aspect-4/3 rounded-lg overflow-visible">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial={initialLoad ? 'initialLoad' : 'enter'}
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 z-20"
          >
            <WavyBorderImage
              imageUrl={imageUrl}
              shape={WavyShape.Rectangle}
              minimumLoadingTimeMS={minLoadTime}
              loadingIcon={loadingIcon}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
