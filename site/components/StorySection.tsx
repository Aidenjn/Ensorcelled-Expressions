'use client';
import { motion } from "framer-motion";
import WavyBorderImage from "@/components/WavyBorderImage/WavyBorderImage";
import { WavyShape } from "@/lib/types/WavyShapes";

interface StorySectionProps {
  heading: string;
  image_url: string;
  children: React.ReactNode;
  flow_left: boolean;
}

export default function StoryText({
  heading,
  image_url,
  children,
  flow_left = false,
}: StorySectionProps) {
  
  return (
    <section
      className={`flex flex-col md:flex-row items-center my-20 px-6 md:px-16 ${flow_left ? '' : 'md:flex-row-reverse'}`}
    >
      <motion.div
        initial={{ opacity: 0, x: flow_left ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-8 md:mb-0 w-full flex justify-center"
      >
        <div className="relative w-full aspect-square lg:max-w-3/4">
          <WavyBorderImage imageUrl={ image_url } shape={ WavyShape.Square }/>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: flow_left ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 md:pl-12 md:pr-12"
      >
        {/* <h2 className="text-3xl font-semibold mb-4"><LogoIcon className="w-10 h-10 mr-5 stroke-white inline-block mr-5" />{ storySection.heading }</h2> */}

        <h2 className="text-3xl font-semibold mb-4">{ heading }</h2>
        <p className="text-lg leading-relaxed">{ children} </p>
      </motion.div>
    </section>
  );
}