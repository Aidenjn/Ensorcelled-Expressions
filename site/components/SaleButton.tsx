import { Artwork } from '@/lib/types/SanityObjectTypes';

export default function SaleButton(artwork: Artwork) {
  switch (artwork.saleStatus) {
    case 'forSale':
      return (
        <a
          href={artwork.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Buy on Etsy
        </a>
      );
    case 'sold':
      return (
        <span className="px-4 py-2 bg-gray-400 text-white rounded">
          Sold
        </span>
      );
    default:
      return (
        <span className="px-4 py-2 bg-yellow-300 text-black rounded">
          Not for Sale
        </span>
      );
  }
}
