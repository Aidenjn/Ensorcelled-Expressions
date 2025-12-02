"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
        className="border border-gray-400 rounded-lg p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-lg"
      >
        Go
      </button>
    </form>
  );
}