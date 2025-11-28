"use client";

import { motion } from "framer-motion";
import MagicText from "./MagicText";
import Slideshow from "./Slideshow";
import { CustomIcon } from "@/lib/types/CustomIcon";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pb-10 bg-background text-white">
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
      <div className="w-full max-w-3xl aspect-4/3 mb-6">
        <Slideshow
          images={[
            "/images/demon_stance.jpg",
            "/images/clay_tilly_vs_real_tilly.jpeg",
            "/images/goblin_mug_kiss.jpg",
            "/images/holler_mugs.jpeg",
            "/images/soap_dispenser_set.jpeg",
            "/images/dip_face_mug.jpeg",
            "/images/set_of_mugs.jpeg",
          ]}
          minimumLoadingTimeMS={ 1500 }
          loadingIcon={ CustomIcon.SpiralCutGaze }
        />
      </div>
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