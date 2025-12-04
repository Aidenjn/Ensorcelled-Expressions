'use client';

import Script from 'next/script';

export default function SearchResults() {
  return (
    <div>
      <Script
        src={`https://cse.google.com/cse.js?cx=a647357a79dd24deb&t=${Date.now()}`}
        strategy="afterInteractive"
      />
      <div className="gcse-searchresults-only" />
    </div>
  );
}