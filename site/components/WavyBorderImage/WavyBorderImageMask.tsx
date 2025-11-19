import SpiralCutGazeIcon from "@/public/custom_graphics/spiral_cut_gaze.svg";
import SleepyIcon from "@/public/custom_graphics/sleep.svg";
import StarryEyesIcon from "@/public/custom_graphics/starry_eyes.svg";
import ExcitedGlaceIcon from "@/public/custom_graphics/excited_gaze_down.svg";
import JoySquintIcon from "@/public/custom_graphics/joy_squint.svg";

import React, { useState, useEffect, useId } from "react";
import { getWavyShapeData } from "./utils/wavyShapes";
import { WavyShape } from "@/lib/types/WavyShapes";

const ICONS = [
  SpiralCutGazeIcon,
  SleepyIcon,
  StarryEyesIcon,
  ExcitedGlaceIcon,
  JoySquintIcon,
];

const pickIconForUrl = (url: string) => {
  const hash = [...url].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return ICONS[hash % ICONS.length];
};

interface Props {
  imageUrl: string | null;
  shape?: WavyShape;
  disableLoadingEffect?: boolean;
  minimumLoadingTimeMS?: number;
  alt?: string;
}

const WavySquareImageMask = React.memo(({
  imageUrl,
  shape = WavyShape.Square,
  disableLoadingEffect = false,
  minimumLoadingTimeMS = 400,
  alt = "",
}: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [minDone, setMinDone] = useState(false);

    const { d, viewBox, pathClass } = getWavyShapeData(shape);
    const clipId = useId();

    const Icon = imageUrl ? pickIconForUrl(imageUrl) : SpiralCutGazeIcon;

    // Load image and enforce minimum display time for Icon
    useEffect(() => {
      if (!imageUrl || disableLoadingEffect) {
        setLoaded(true);
        setMinDone(true);
        return;
      }

      setLoaded(false);
      setMinDone(false);

      const timer = setTimeout(() => setMinDone(true), minimumLoadingTimeMS);

      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setLoaded(true);

      return () => clearTimeout(timer);
    }, [imageUrl, disableLoadingEffect]);

    const showImage = loaded && minDone;

    return (
      <svg className="splat" viewBox={viewBox} preserveAspectRatio="none">
        {alt && <title>{alt}</title>}

        <defs>
          <clipPath id={clipId}>
            <path d={d} className={`splat-path ${pathClass}`} />
          </clipPath>
        </defs>

        <rect
          width="100%"
          height="100%"
          clipPath={`url(#${clipId})`}
          className="fill-foreground"
        />

        {!disableLoadingEffect && (
          <g
            transform={ shape === WavyShape.Square ? "translate(10, 10) scale(0.8)" : "" }
            style={{
              opacity: showImage ? 0 : 1,
              transition: "opacity 0.6s ease",
              pointerEvents: "none",
              shapeRendering: "geometricPrecision",
            }}
          >
            <Icon
              className="svg-loading-icon"
            />
          </g>
        )}

        {imageUrl && (
          <image
            href={imageUrl}
            width="100%"
            height="100%"
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
            style={{
              opacity: showImage ? 1 : 0,
              filter: disableLoadingEffect ? "none" : showImage ? "none" : "blur(15px)",
              transition: disableLoadingEffect
                ? "none"
                : "opacity 0.8s ease, filter 0.6s ease",
            }}
          />
        )}
      </svg>
    );
  }
);

export default WavySquareImageMask;