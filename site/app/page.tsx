'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero"
import WavyBorderImage from "@/components/WavyBorderImage/WavyBorderImage";
import { WavyShape } from "@/lib/types/WavyShapes";
import LogoIcon from '@/public/custom_graphics/spiral_cut_gaze.svg';


type StorySection = {
  image_url: string,
  heading: string,
  text: string,
};

const storySections = [
  {
    image_url: "images/clay_tilly_vs_real_tilly.jpg",
    heading: "Emotionally Expressive",
    text: `
      I strive to make my art emotionally expressive.
      I do this by twisting (often inhuman) faces into my work.
      Through form, I endeavor to create expressions that invite answers to the question: "What could one witness to make a face like that?"
    `,
  },
  {
    image_url: "images/goblin_mug_kiss.jpg",
    heading: "Functional and with Purpose",
    text: `
      It is important to me that every piece I make serves at least one use in addition to being decorative.
      I find joy in seeing my work engaged with, so whether it be as versatile as a mug, or as specific as a sculpture designed to keep a pole upright, I ensure the art I make holds practical function.
    `,
  },
  {
    image_url: "images/painting_the_alien.jpg",
    heading: "Impishly Irregular",
    text: `
      My work is never duplicative.
      I make my pieces by wheel and hand, giving each a unique combination of expression, size, and color.
      The expressions I give my pieces can be subtley to outlandishly distinct, and many follow motifs you may recognize if you've seen enough of my work.
    `,
  },
]

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]); // Parallax effect for hero background

  return (
    <div className="bg-background text-foreground">

      <Hero/>

      {/* Story Sections */}
      {storySections.map((storySection, idx) => (
        <section
          key={idx}
          className={`flex flex-col md:flex-row items-center my-20 px-6 md:px-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
        >
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0 w-full flex justify-center"
          >
            <div className="relative w-full aspect-square lg:max-w-3/4">
              <WavyBorderImage imageUrl={ storySection.image_url } shape={ WavyShape.Square }/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pl-12 md:pr-12"
          >
            {/* <h2 className="text-3xl font-semibold mb-4"><LogoIcon className="w-10 h-10 mr-5 stroke-white inline-block mr-5" />{ storySection.heading }</h2> */}

            <h2 className="text-3xl font-semibold mb-4">{ storySection.heading }</h2>
            <p className="text-lg leading-relaxed">{ storySection.text }</p>
          </motion.div>
        </section>
      ))}

      {/* Closing Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Further Ensorcellment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg"
        >
          Interested in my work? Feel free to explore my portfolio <a href="/gallery">here</a>. You can also see what I've been up to recently on my Instagram page <a href="https://www.instagram.com/ensorcelledexpressions?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">@EnsorcelledExpressions</a>.
        </motion.p>
      </section>
    </div>
  );
}

