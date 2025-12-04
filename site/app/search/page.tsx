"use client";

import { useSearchParams } from "next/navigation";
import PageHeading from "@/components/shared/PageHeading";
import { CustomIcon } from "@/lib/types/CustomIcon";
import SearchBar from "@/components/shared/SearchBar";
import SearchResults from "@/components/views/searchPage/SearchResults";
import { useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q: string = searchParams.get("q") ?? "";

  return (
    <div className="p-6 max-w-full">
      <PageHeading titleText="Search" icon={CustomIcon.Cyclops} />

      <div className="pt-8 max-w-full w-full flex justify-center">
        <SearchBar currentQuery={q} />
      </div>

      <div className="pt-8 flex justify-center align-middle">
        <div className="max-w-5xl -ml-[13px] -mr-[13px]">
          {q && <SearchResults key={q}/>}
        </div>
      </div>
    </div>
  );
}