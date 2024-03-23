import { UserIcon } from '@sanity/icons'
import { ImageIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      icon: ImageIcon,
      name: 'logo',
      title: 'Logo',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screen readers. Falls back on caption if not set',
        }),
      ],
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    }),
  ],
})
