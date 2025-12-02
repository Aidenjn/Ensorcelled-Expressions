'use client';

import Script from 'next/script';
// import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  // useSearchParams is safe here because this is fully client-rendered
  // const searchParams = useSearchParams();
  // const q: string = searchParams.get('q') ?? '';
  const q: string = 'snotty joe';
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Load Google PSE */}
      <Script
        src="https://cse.google.com/cse.js?cx=a647357a79dd24deb"
        strategy="afterInteractive"
      />

      <h1 className="text-2xl font-semibold mb-6">Search results</h1>

      {/* Show query if it exists */}
      {q && (
        <p className="text-gray-600 mb-4">
          You searched for <b>{q}</b>
        </p>
      )}

      {/* Google Custom Search results container */}
      <div className="gcse-searchresults-only"></div>
    </div>
  );
}
