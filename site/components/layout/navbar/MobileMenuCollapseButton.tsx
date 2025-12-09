'use client';

import { motion } from 'framer-motion';

export default function MobileMenuCollapseButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="hover:text-hover_text_color focus:outline-none mr-2"
    >
      <svg width="24" height="24" viewBox="0 0 20 20" className="stroke-black">
        {/* Top line */}
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="black"
          animate={open ? { y1: 12, y2: 12, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: '50%', originY: '50%' }}
        />

        {/* Middle line */}
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="black"
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.25 }}
          style={{ originX: 0.5 }}
        />

        {/* Bottom line */}
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="black"
          animate={open ? { y1: 12, y2: 12, rotate: -45 } : { y1: 18, y2: 18, rotate: 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: '50%', originY: '50%' }}
        />
      </svg>
    </button>
  );
}
