"use client"

import { motion } from 'framer-motion';

interface HoverOverlayProps {
  title: string;
}

const HoverOverlay = ({ title }: HoverOverlayProps) => (
  <motion.div
    variants={{
    rest: { opacity: 0, scale: 0.95, filter: 'blur(2px)' },
    hover: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    }}
    transition={{ duration: 0.2 }}
    className="absolute inset-0 bg-background/85 flex items-center justify-center p-4 text-center"
  >
    <h3 className="text-lg font-bold text-background_text_color px-4">{ title }</h3>
  </motion.div>
)

export default HoverOverlay;