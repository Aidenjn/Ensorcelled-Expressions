import { WavyShape } from "@/lib/types/WavyShapes";
import React from "react";
import { getWavyShapeData } from "./utils/wavyShapes";

interface WavyBorderImageBorderProps {
  shape?: WavyShape;
}

const WavyBorderImageBorder = React.memo(
  ({ shape = WavyShape.Square }: WavyBorderImageBorderProps) => {
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
);

export default WavyBorderImageBorder;