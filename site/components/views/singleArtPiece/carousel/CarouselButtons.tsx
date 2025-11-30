'use client';

import { motion } from 'framer-motion';

export default function CarouselButtons({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        onClick={onPrev}
        className="carousel-button"
      >
        ‹
      </motion.button>

      <motion.button
        whileTap={{
          scale: 0.8,
          color: 'var(--color-hover_background_color)',
          borderColor: 'var(--color-hover_background_color)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        onClick={onNext}
        className="carousel-button"
      >
        ›
      </motion.button>
    </div>
  );
}
