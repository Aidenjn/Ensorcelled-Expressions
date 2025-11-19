'use client';

import WavyBorderImage from "@/components/WavyBorderImage/WavyBorderImage";
import { WavyShape } from "@/lib/types/WavyShapes";
import { motion } from "framer-motion";
import MagicText from "./MagicText";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pb-10 px-6 bg-background text-white">
      {/* Intro Text Above */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center leading-18"
      >
        Just your everyday objects,
        <br/>
        but <MagicText>ensorcelled</MagicText>
        
      </motion.h1>

      {/* Wavy Border Hero Image */}
      <div className="w-full max-w-3xl aspect-[4/3] mb-6">
        <WavyBorderImage
          imageUrl="/images/demon_stance.jpg"
          shape={WavyShape.Rectangle}
          disableLoadingEffect={false}
          minimumLoadingTimeMS={1500}
        />
      </div>

      {/* Text Below */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-lg md:text-xl text-center text-white/90"
      >
        My name is Aiden Nelson, and I create unique and functional ceramic oddities.
      </motion.p>
    </section>
  );
}