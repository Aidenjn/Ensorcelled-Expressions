import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1).error('At least one image is required'),
    }),

    defineField({
      name: 'saleStatus',
      title: 'Sale Status',
      type: 'string',
      options: {
        list: [
          { title: 'Not for Sale', value: 'notForSale' },
          { title: 'For Sale', value: 'forSale' },
          { title: 'Sold', value: 'sold' },
        ],
        layout: 'radio',
      },
      initialValue: 'notForSale',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'etsyUrl',
      title: 'Etsy URL',
      type: 'url',
      hidden: ({ parent }) => parent?.saleStatus !== 'forSale',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),

    defineField({
      name: 'dateCreated',
      title: 'Date Created',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'saleStatus',
    },
    prepare({ title, media, subtitle }) {
      const statusLabel =
        subtitle === 'forSale'
          ? 'For Sale'
          : subtitle === 'sold'
          ? 'Sold'
          : 'Not for Sale'
      return {
        title,
        subtitle: statusLabel,
        media,
      }
    },
  },
})
