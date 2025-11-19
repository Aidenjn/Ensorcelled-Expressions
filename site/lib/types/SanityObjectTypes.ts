export interface Artwork {
  title: string,
  slug: { current: string },
  images?: { asset: any }[],
  saleStatus?: string,
  etsyUrl?: string,
}