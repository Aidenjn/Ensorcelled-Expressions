'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { useState } from 'react';

function getCacheBusterString(): string {
  return `&t=${Date.now()}`;
}

export default function SearchResults({ query }: { query: string }) {
  const [scriptReady, setScriptReady] = useState(false);

  const GOOGLE_SEARCH_ENGINE_KEY = 'a647357a79dd24deb';
  const url = `https://cse.google.com/cse.js?cx=${GOOGLE_SEARCH_ENGINE_KEY}${getCacheBusterString()}`;

  return (
    <div className="relative">
      <Script src={url} strategy="afterInteractive" onLoad={() => setScriptReady(true)} />
      <h1 className="text-background_text_color text-2xl">{query}</h1>
      <div className="max-w-5xl -ml-[13px] -mr-[13px]">
        <div className="gcse-searchresults-only" />
      </div>

      {/** The below put a block element over the search results until they are loaded. */}
      {!scriptReady && (
        <div className="absolute inset-0 bg-background z-30 pointer-events-none w-full h-full" />
      )}
      {scriptReady && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-background z-30 pointer-events-none w-full h-full"
        />
      )}
    </div>
  );
}
