import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import FancyButton from './FancyButton';

export default function SearchBar({ currentQuery }: { currentQuery: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(currentQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevents full page reload
    if (!query.trim()) return; // Don't search if just whitespace or punctuation
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-lg">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
        className="text-background_text_color border-2 border-foreground rounded-lg p-2 w-full"
      />
      <FancyButton type="submit">
        <FaSearch />
      </FancyButton>
    </form>
  );
}
