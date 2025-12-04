'use client';

import { motion } from 'framer-motion';

type buttonType = 'button' | 'submit' | 'reset' | undefined;

export default function FancyButton({
  onClick = () => {},
  type = 'button',
  className = 'bg-foreground border-2 border-foreground rounded-full px-3',
  children,
}: {
  onClick?: () => void;
  type?: buttonType;
  className?: string;
  children: React.ReactNode;
}) {
  if (type === undefined) type = 'button';
  const variants = {
    initial: {
      color: 'var(--color-background)',
      borderColor: 'var(--color-foreground)',
    },
    tap: {
      scale: 0.8,
      color: 'var(--color-hover_background_color)',
      borderColor: 'var(--color-hover_background_color)',
    },
  };

  return (
    <motion.button
      type={type}
      variants={variants}
      initial="initial"
      whileTap="tap"
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}
