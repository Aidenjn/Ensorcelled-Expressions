'use client';

import { motion } from 'motion/react';
import Script from 'next/script';

export default function SearchResults({
  query
}: {
  query:string
}) {
  const GOOGLE_SEARCH_ENGINE_KEY = 'a647357a79dd24deb'
  const url = (() => {
    const base = "https://cse.google.com/cse.js";
    const params = `?cx=${GOOGLE_SEARCH_ENGINE_KEY}&t=${Date.now()}`;
    return base + params;
  })();
  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: "black" }}
      animate={{ opacity: 1, backgroundColor: "transparent" }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: "easeOut",
      }}
      className="min-h-screen"
    >
      <Script
        src={url}
        strategy="afterInteractive"
      />
      <h1 className='text-background_text_color text-2xl'>{query}</h1>
      <div className="max-w-5xl -ml-[13px] -mr-[13px]">
        <div className="gcse-searchresults-only" />
      </div>
    </motion.div>
  );
}