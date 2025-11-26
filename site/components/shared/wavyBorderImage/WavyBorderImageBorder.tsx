import { WavyShape } from "@/lib/types/WavyShapes";
import { getWavyShapeData } from "./utils/wavyShapes";

interface WavyBorderImageBorderProps {
  shape?: WavyShape;
}

export default function WavyBorderImageBorder({
  shape = WavyShape.Square,
}: WavyBorderImageBorderProps) {
  const { d, viewBox, pathClass } = getWavyShapeData(shape);

  return (
    <svg
      className="splat pointer-events-none"
      viewBox={viewBox}
      preserveAspectRatio="none"
    >
      <path d={d} fill="none" className={`splat-path ${pathClass}`} />
    </svg>
  );
}