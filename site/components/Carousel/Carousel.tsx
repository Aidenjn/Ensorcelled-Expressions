'use client'

import { useState } from 'react'
import { urlFor } from '@/lib/image'
import { WavyShape } from '@/lib/types/WavyShapes'
import WavyBorderImage from '@/components/WavyBorderImage/WavyBorderImage';
import CarouselButtons from '@/components/Carousel/CarouselButtons';

export default function Carousel({ images }: { images: any[] }) {
  const [index, setIndex] = useState(0)
  const [imageHasChanged, setImageHasChanged] = useState(false)

  if (!images || images.length === 0) return null

  const next = () => {
    setIndex((i) => (i + 1) % images.length)
    setImageHasChanged(true)
  }

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length)
    setImageHasChanged(true)
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative w-full aspect-[4/3] rounded-lg mb-6">
        <WavyBorderImage
          imageUrl={urlFor(images[index]).width(800).height(600).url()}
          shape={WavyShape.Rectangle}
          disableLoadingEffect={imageHasChanged}
        />
      </div>

      {images.length > 1 && (
        <CarouselButtons onPrev={prev} onNext={next} />
      )}
    </div>
  )
}