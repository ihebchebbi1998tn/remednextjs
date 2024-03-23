import { ImageIcon } from 'lucide-react'
import { defineArrayMember,defineField,defineType } from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  type: 'array',
  title: 'Body',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'videoType',
    }),
    defineArrayMember({
      name: 'timeline',
      type: 'timeline',
    }),
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      name: 'image',
      title: 'Image',
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
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
      ],
    }),
  ],
})
