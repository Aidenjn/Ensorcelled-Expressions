import Link from 'next/link'

export default function SaleStatus({
  status,
  etsyUrl,
}: {
  status: string
  etsyUrl?: string
}) {
  if (status === 'not_for_sale') {
    return (
      <div className="text-gray-600 font-medium mt-2">Not for sale</div>
    )
  }
  if (status === 'sold') {
    return <div className="text-red-600 font-semibold mt-2">Sold</div>
  }
  if (status === 'for_sale' && etsyUrl) {
    return (
      <Link
        href={etsyUrl}
        target="_blank"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg mt-2"
      >
        Buy on Etsy
      </Link>
    )
  }
  return null
}