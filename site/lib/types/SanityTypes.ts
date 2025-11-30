export interface Artwork {
  _id: string;
  slug: SanitySlug;
  title: string;
  description?: string;
  images: SanityImage[];
  saleStatus?: SaleStatus;
  etsyUrl?: string;
  tags: ArtworkTag[];
}

export interface SanityImage {
  _type: 'image';
  _key?: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
  crop?: {
    _type: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface ArtworkTag {
  _id: string;
  slug: SanitySlug;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export enum SaleStatus {
  ForSale = 'forSale',
  Sold = 'sold',
  NotForSale = 'notForSale',
}
