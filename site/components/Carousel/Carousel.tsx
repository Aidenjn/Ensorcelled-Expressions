'use client'

import { useState } from 'react'
import { urlFor } from '@/lib/image'
import { WavyShape } from '@/lib/types/WavyShapes'
import WavyBorderImage from '@/components/WavyBorderImage/WavyBorderImage'
import CarouselButtons from '@/components/Carousel/CarouselButtons'
import { motion, AnimatePresence } from 'framer-motion'

export default function Carousel({ images }: { images: any[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [hasInteracted, setHasInteracted] = useState(false)

  const SLIDE_DIST = 30

  if (!images || images.length === 0) return null

  const next = () => {
    setHasInteracted(true)
    setDirection(1)
    setIndex((i) => (i + 1) % images.length)
  }

  const prev = () => {
    setHasInteracted(true)
    setDirection(-1)
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  const imageUrl = urlFor(images[index]).width(800).height(600).url()

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? SLIDE_DIST : -SLIDE_DIST,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -SLIDE_DIST : SLIDE_DIST,
      opacity: 0
    })
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative w-full aspect-[4/3] rounded-lg mb-6 overflow-visible">

        {/** 🚫 Initial Load — No Animation */}
        {!hasInteracted && (
          <div className="absolute inset-0">
            <WavyBorderImage
              imageUrl={imageUrl}
              shape={WavyShape.Rectangle}
              minimumLoadingTimeMS={0}
            />
          </div>
        )}

        {/** 🎬 After Interaction — Animate Transitions */}
        {hasInteracted && (
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <WavyBorderImage
                imageUrl={imageUrl}
                shape={WavyShape.Rectangle}
                minimumLoadingTimeMS={0}
              />
            </motion.div>
          </AnimatePresence>
        )}

      </div>

      {images.length > 1 && (
        <CarouselButtons onPrev={prev} onNext={next} />
      )}
    </div>
  )
}