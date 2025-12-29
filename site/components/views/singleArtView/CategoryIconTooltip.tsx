'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import { useEffect, useState } from 'react';

type CategoryIconTooltipProps = {
  children: React.ReactNode;
  tip: string;
  side?: 'left' | 'right';
};

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: none) and (pointer: coarse)');

    setIsTouch(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, []);

  return isTouch;
}

export default function CategoryIconTooltip({
  children,
  tip,
  side = 'left',
}: CategoryIconTooltipProps) {
  const isTouch = useIsTouchDevice();

  // Do not display a tooltip if we are on a touchscreen
  if (isTouch) {
    return <>{children}</>;
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={500}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={6}
            className="rounded bg-hover_background_color px-2 py-1 text-sm text-foreground capitalize"
            side={side}
            align="center"
          >
            {tip}
            <Tooltip.Arrow width={8} height={6} className="fill-hover_background_color" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
