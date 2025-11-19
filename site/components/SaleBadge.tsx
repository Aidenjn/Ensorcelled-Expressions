// components/SaleBadge.tsx
'use client'

interface SaleBadgeProps {
  saleStatus: string
}

export default function SaleBadge({ saleStatus }: SaleBadgeProps) {
  const base =
    'text-xs font-semibold px-2 py-1 rounded absolute top-2 right-2 backdrop-blur-sm'

  switch (saleStatus) {
    case 'forSale':
      return <span className={`${base} bg-green-500/80 text-white`}>For Sale</span>
    case 'sold':
      return <span className={`${base} bg-gray-400/80 text-white`}>Sold</span>
    default:
      return (
        <span className={`${base} bg-yellow-300/80 text-black`}>
          Not for Sale
        </span>
      )
  }
}


// Updated ArtworkCard.tsx usage example:
// import SaleBadge from '@/components/SaleBadge'
// ...
// <SaleBadge saleStatus={artwork.saleStatus} />