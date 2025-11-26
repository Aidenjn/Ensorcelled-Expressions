"use client";

import { motion } from "framer-motion";
import { CustomIcon } from "@/lib/types/CustomIcon";
import CustomIconSVG from "@/components/shared/CustomIconSVG";

export default function ClosingStorySection() {
  return (
    <section className="text-center py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        <CustomIconSVG icon={ CustomIcon.SpiralCutGaze } className="w-10 h-10 sm:w-15 sm:h-15 mr-1 sm:mr-5 stroke-white inline-block" /> Further Ensorcellment
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg"
      >
        Interested in my work? Feel free to explore my <a href="/gallery" className="nav-link-in-content">portfolio</a>. You can also see what I've been up to recently on my Instagram page <a href="https://www.instagram.com/ensorcelledexpressions?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" className="nav-link-in-content">@EnsorcelledExpressions</a>.
      </motion.p>
    </section>
  );
}