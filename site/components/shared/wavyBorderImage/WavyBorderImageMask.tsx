import { useState, useEffect, useMemo } from 'react';
import { getWavyShapeData } from './utils/wavyShapes';
import { WavyShape } from '@/lib/types/WavyShapes';
import Icon from '@/components/shared/CustomIconSVG';
import { CustomIcon } from '@/lib/types/CustomIcon';

interface Props {
  imageUrl: string | undefined;
  shape?: WavyShape;
  disableLoadingEffect?: boolean;
  minimumLoadingTimeMS?: number;
  alt?: string;
  loadingIcon?: CustomIcon;
}

export default function WavyBorderImageMask({
  imageUrl,
  shape = WavyShape.Square,
  disableLoadingEffect = false,
  minimumLoadingTimeMS = 400,
  alt = '',
  loadingIcon,
}: Props) {
  const [status, setStatus] = useState({ loaded: false, minDone: false });
  const { loaded, minDone } = status;

  const { d, viewBox, pathClass } = getWavyShapeData(shape);

  // --- Stable clip ID to avoid SVG mismatches on client navigation ---
  const clipId = useMemo(() => {
    if (!imageUrl) return 'clip-none';
    return 'clip-' + imageUrl.replace(/[^a-zA-Z0-9]/g, '');
  }, [imageUrl]);

  // --- Reset loading state every time imageUrl changes ---
  useEffect(() => {
    if (!imageUrl || disableLoadingEffect) {
      setTimeout(() => {
        setStatus({ loaded: true, minDone: true });
      }, 0);
      return;
    }

    // Reset state on new image (async to satisfy linter)
    queueMicrotask(() => {
      setStatus({ loaded: false, minDone: false });
    });

    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, minDone: true }));
    }, minimumLoadingTimeMS);

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setStatus((prev) => ({ ...prev, loaded: true }));

    return () => clearTimeout(timer);
  }, [imageUrl, disableLoadingEffect, minimumLoadingTimeMS]);

  const showImage = loaded && minDone;

  // --- Determine which icon to show ---
  const iconSeed = imageUrl || undefined;

  return (
    <svg className="splat" viewBox={viewBox} preserveAspectRatio="none">
      {alt && <title>{alt}</title>}

      <defs>
        <clipPath id={clipId}>
          <path d={d} className={`splat-path ${pathClass}`} />
        </clipPath>
      </defs>

      {/* Background fill */}
      <rect width="100%" height="100%" clipPath={`url(#${clipId})`} className="fill-foreground" />

      {/* Loading icon */}
      {!disableLoadingEffect && (
        <g
          transform={shape === WavyShape.Square ? 'translate(10, 10) scale(0.8)' : ''}
          style={{
            opacity: showImage ? 0 : 1,
            transition: 'opacity 0.6s ease',
            pointerEvents: 'none',
            shapeRendering: 'geometricPrecision',
          }}
        >
          <Icon
            icon={loadingIcon}
            seed={loadingIcon ? undefined : iconSeed}
            className="svg-loading-icon"
          />
        </g>
      )}

      {/* Actual image */}
      {imageUrl && (
        <image
          href={imageUrl}
          width="100%"
          height="100%"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
          style={{
            opacity: showImage ? 1 : 0,
            filter: disableLoadingEffect || showImage ? 'none' : 'blur(15px)',
            transition: disableLoadingEffect ? 'none' : 'opacity 0.8s ease, filter 0.6s ease',
          }}
        />
      )}
    </svg>
  );
}
