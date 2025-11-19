import { defineType } from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'plural_title', type: 'string', title: 'Plural Title' },
    { name: 'slug', type: 'slug', options: { source: 'plural_title' } },
  ]
})
