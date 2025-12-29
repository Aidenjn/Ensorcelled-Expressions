'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type CategoryIconTooltipProps = {
  children: React.ReactNode;
  tip: string;
  side?: 'left' | 'right';
};

function useIsTouchDevice(): boolean {
  // Return true only if we are in the browser and it's a touch device
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

export default function CategoryIconTooltip({
  children,
  tip,
  side = 'left',
}: CategoryIconTooltipProps) {
  const [open, setOpen] = useState(false);
  const isTouch = useIsTouchDevice();

  // Do not display a tooltip if we are on a touchscreen
  if (isTouch) {
    return <>{children}</>;
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={open} onOpenChange={setOpen} delayDuration={500}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        <Tooltip.Portal>
          <AnimatePresence>
            {open && (
              <Tooltip.Content sideOffset={6} side={side} align="center" asChild>
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded bg-hover_background_color px-2 py-1 text-sm text-foreground capitalize"
                >
                  {tip}
                  <Tooltip.Arrow width={8} height={6} className="fill-hover_background_color" />
                </motion.div>
              </Tooltip.Content>
            )}
          </AnimatePresence>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
