'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeading from '@/components/shared/PageHeading';
import { CustomIcon } from '@/lib/types/CustomIcon';
import SearchBar from '@/components/shared/SearchBar';
import SearchResults from '@/components/views/searchView/SearchResults';

function SearchPageLoaded() {
  const searchParams = useSearchParams();
  const q: string = searchParams.get('q') ?? '';

  return (
    <div className="p-6 max-w-full">
      <PageHeading titleText="Search" icon={CustomIcon.Cyclops} />

      <div className="pt-8 max-w-full w-full flex justify-center">
        <SearchBar currentQuery={q} />
      </div>

      <div className="pt-8 flex justify-center align-middle">
        {q && (
          <Suspense fallback={<div>Loading results...</div>}>
            <SearchResults key={q} query={q} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageLoaded />
    </Suspense>
  );
}
