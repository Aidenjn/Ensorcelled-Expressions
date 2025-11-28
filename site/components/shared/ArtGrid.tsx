import { Artwork } from '@/lib/types/SanityTypes';
import ArtworkCard from './ArtworkCard';

export default function ArtGrid({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork._id} artwork={artwork} />
      ))}
    </div>
  )
}