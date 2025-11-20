'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero"
import StorySection from "@/components/StorySection";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]); // Parallax effect for hero background

  return (
    <div className="bg-background text-foreground">

      <Hero/>

      {/* Story Sections */}
      <StorySection
          image_url = "images/clay_tilly_vs_real_tilly.jpg"
          heading="Emotionally Expressive"
          flow_left={false}
      >
        I strive to make my art emotionally expressive.
        I do this by twisting (often inhuman) faces into my work.
        Through form, I endeavor to create expressions that invite answers to the question: <i>"What could one witness to make a face like that?"</i>
      </StorySection>
      <StorySection
          image_url = "images/goblin_mug_kiss.jpg"
          heading="Functional and with Purpose"
          flow_left={true}
      >
        It is important to me that every piece I make serves at least one use in addition to being decorative.
        I find joy in seeing my work engaged with, so whether it be as versatile as a mug, or as specific as a sculpture designed to keep a pole upright, I ensure the art I make holds practical function.
      </StorySection>
      <StorySection
          image_url = "images/painting_the_alien.jpg"
          heading="Impishly Irregular"
          flow_left={false}
      >
        My work is never duplicative.
        I make my pieces by wheel and hand, giving each a unique combination of expression, size, and color.
        The expressions I give my pieces can be subtley to outlandishly distinct, and many follow motifs you may recognize if you've seen enough of my work.
      </StorySection>

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