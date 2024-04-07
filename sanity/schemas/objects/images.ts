import { defineArrayMember, defineField, defineType } from 'sanity'

export const images = defineType({
  name: 'images',
  title: 'Images',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
      fields: [
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screen readers. Falls back on caption if not set',
        }),
      ],
    }),
  ],
  options: {
    layout: 'grid',
  },
})
