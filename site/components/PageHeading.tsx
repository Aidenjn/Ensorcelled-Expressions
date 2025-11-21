"use client";

import { CustomIcon } from "@/lib/types/CustomIcon";
import CustomIconSVG from "./CustomIconSVG";
import { motion } from "framer-motion";

export default function PageHeading({
  titleText,
  descriptionText,
  icon,
}: {
  titleText: string;
  descriptionText?: string;
  icon?: CustomIcon;
}) {
  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center justify-center gap-4 mb-3 inline-flex"
        variants={itemVariants}
      >
        {icon && (
          <CustomIconSVG
            icon={icon}
            className="w-10 h-10 sm:w-15 sm:h-15 stroke-white"
          />
        )}
        <h1 className="text-3xl font-semibold text-foreground">{titleText}</h1>
      </motion.div>

      {descriptionText && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-foreground max-w-2xl mx-auto"
        >
          {descriptionText}
        </motion.p>
      )}
    </motion.div>
  );
}