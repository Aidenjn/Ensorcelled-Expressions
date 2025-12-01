import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from './types/SanityTypes';

export const client = createClient({
  projectId: 'cfvjakic', // from sanity.json
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImage) => builder.image(source);