import { HTMLAttributes } from "react";
import WavyBorderImageMask from "./WavyBorderImageMask";
import WavyBorderImageBorder from "./WavyBorderImageBorder";
import { WavyShape } from "@/lib/types/WavyShapes";

interface WavyBorderImageProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string | null;
  shape?: WavyShape;
  disableLoadingEffect?: boolean;
  minimumLoadingTimeMS?: number;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

const WavyBorderImage =
({
  imageUrl,
  shape = WavyShape.Square,
  disableLoadingEffect = false,
  minimumLoadingTimeMS = 400,
  alt = "",
  width = "100%",
  height = "100%",
  className = "",
  style,
  ...rest
}: WavyBorderImageProps) => {

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height, ...style }}
      {...rest}
    >
      <WavyBorderImageMask
        imageUrl={imageUrl}
        shape={shape}
        alt={alt}
        disableLoadingEffect={disableLoadingEffect}
        minimumLoadingTimeMS={minimumLoadingTimeMS}
      />

      <WavyBorderImageBorder shape={shape} />
    </div>
  );
};

export default WavyBorderImage;