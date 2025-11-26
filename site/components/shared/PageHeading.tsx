"use client";

import { CustomIcon } from "@/lib/types/CustomIcon";
import CustomIconSVG from "./CustomIconSVG";
import { motion } from "framer-motion";
import { Category } from "@/lib/types/Category";
import GeneratedArtPieceDescriptionBlock from "../views/singleArtPiece/GeneratedArtPieceDescriptionBlock";
import CategoryIconLinks from "../views/singleArtPiece/CategoryIconLinks";

export default function PageHeading({
  titleText,
  descriptionText,
  icon,
  categories,
}: {
  titleText: string;
  descriptionText?: string;
  icon?: CustomIcon;
  categories?: Category[];
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
        className="flex items-center justify-center gap-4 mb-0"
        variants={itemVariants}
      >
        {icon && (
          <CustomIconSVG
            icon={icon}
            className="w-10 h-10 sm:w-15 sm:h-15 stroke-foreground"
          />
        )}
        <h1 className="text-3xl font-semibold text-foreground">{titleText}</h1>
      </motion.div>

      {/* Show category icons underneath the title */}
      { categories && (
        <motion.div
          variants={itemVariants}
          className="mt-4 mb-2 text-foreground max-w-2xl mx-auto"
        >
          <CategoryIconLinks categories={ categories }/>
        </motion.div>
      )}

      {/* Create a description for the piece from the categories if there is no description */}
      { (categories && !descriptionText) && (
        <motion.p
          variants={itemVariants}
          className="mt-4 mb-2 text-foreground max-w-2xl mx-auto"
        >
          <GeneratedArtPieceDescriptionBlock pieceCategories={ categories }/>
        </motion.p>
      )}

      {/* Show the description if there is one */}
      { descriptionText && (
        <motion.p
          variants={itemVariants}
          className="mt-4 mb-2 text-foreground max-w-2xl mx-auto"
        >
          { descriptionText }
        </motion.p>
      )}
    </motion.div>
  );
}