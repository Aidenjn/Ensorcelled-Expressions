'use client';

import { motion } from 'framer-motion';

export default function CarouselButtons({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  const variants = {
    initial: {
      color: "var(--color-background)",
      borderColor: "var(--color-foreground)",
    },
    tap: {
      scale: 0.8,
      color: "var(--color-hover_background_color)",
      borderColor: "var(--color-hover_background_color)",
    }
  };

  return (
    <div className="flex items-center gap-4">
      <motion.button
        variants={variants}
        initial="initial"
        whileTap="tap"
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        onClick={onPrev}
        className="carousel-button"
      >
        ‹
      </motion.button>

      <motion.button
        variants={variants}
        initial="initial"
        whileTap="tap"
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        onClick={onNext}
        className="carousel-button"
      >
        ›
      </motion.button>
    </div>
  );
}
