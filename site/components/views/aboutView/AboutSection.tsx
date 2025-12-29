'use client';

import { motion } from 'framer-motion';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import { WavyShape } from '@/lib/types/WavyShapes';
import { CustomIcon } from '@/lib/types/CustomIcon';

export default function AboutSection() {
  return (
    <section className={`flex flex-col md:flex-col items-center`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-8 md:mb-0 w-full flex justify-center"
      >
        <div className="relative w-full aspect-square sm:max-w-5/6 lg:max-w-3/5">
          <WavyBorderImage
            imageUrl={'/images/me.jpg'}
            shape={WavyShape.Square}
            disableLoadingEffect={false}
            minimumLoadingTimeMS={1000}
            loadingIcon={CustomIcon.JoySquint}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-4/5 lg:w-1/2 md:pl-12 md:pr-12 mb-10"
      >
        <h2 className="text-3xl font-semibold pt-20 text-white text-center">{'Aiden Nelson'}</h2>
        <br />
        <div>
          <p className="text-lg leading-relaxed">{`
            I like art that is weird and whimsical, so that is what I try to make. This is my favorite hobby, although playing board games is a close second. I grew up in Portland Oregon, and I first got the chance to seriously engage with ceramics in a class I took my senior year of high school way back in 2016. I fell in love with the shapeable mud, and have been in the mess ever since.
          `}</p>
          <br />
          <p className="text-lg leading-relaxed">{`
            I studied Computer Science at Oregon State University, where I obtained both my Bachelors and Masters. Throughout my college years I only engaged with hand-building because I felt the wheel couldn’t produce work with as much character. After college I moved out of Oregon, which was enough of a life shakeup for me to consider incorporating the wheel into my craft. Now I use it for almost every piece I make. I spent a few years in Colorado, and during the time I lived there I met the love of my life, but the climate of the state was very dry and sunny, so I came back to Oregon to hydrate. Now Eugene is where I produce my work! One of my favorite aspects of Eugene is the large groups of feral turkeys that roam around town.
          `}</p>
          <br />
          <p className="text-lg leading-relaxed">{`
            I like to give the art I make two things: practical functionality and emotional expression. It’s important to me that my art can serve a purpose other than simply looking pretty on the shelf. Art that can be engaged with as a tool feels special to me. I also want my work to evoke odd emotions in others. I try to accomplish this by imbuing facial expressions into the pieces I create. These expressions are largely inspired by those I’ve seen on humans and animals out in the wild.
          `}</p>
        </div>
      </motion.div>
    </section>
  );
}
