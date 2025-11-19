export default function CarouselButtons({
  onPrev,
  onNext
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        className="pr-4 pl-4 pb-2 font-bold text-5xl rounded-full border-6 border-foreground bg-foreground hover:border-hover_background_color nav-link"
      >
        ‹
      </button>

      <button
        onClick={onNext}
        className="pr-4 pl-4 pb-2 font-bold text-5xl rounded-full border-6 border-foreground bg-foreground hover:border-hover_background_color nav-link"
      >
        ›
      </button>
    </div>
  );
}