import FancyButton from '@/components/shared/FancyButton';

export default function CarouselButtons({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <FancyButton
        onClick={onPrev}
        className='carousel-button'
      >
        ‹
      </FancyButton>
      <FancyButton
        onClick={onNext}
        className="carousel-button"
      >
        ›
      </FancyButton>
    </div>
  );
}
