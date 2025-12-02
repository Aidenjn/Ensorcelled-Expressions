"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q: string = searchParams.get("q") ?? "";

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Load Google PSE */}
      <Script
        src={`https://cse.google.com/cse.js?cx=a647357a79dd24deb`}
        strategy="afterInteractive"
      />

      <h1 className="text-2xl font-semibold mb-6">Search results</h1>

      {/* Query */}
      {q && <p className="text-gray-600 mb-4">You searched for "<b>{q}</b>"</p>}

      {/* Results */}
      <div className="gcse-searchresults-only"></div>
    </div>
  );
}