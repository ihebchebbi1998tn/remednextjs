import { getExtension } from '@sanity/asset-utils'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const videos = defineType({
  name: 'videos',
  title: 'Videos',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'file',
      validation: (Rule) => {
        return Rule.custom((video) => {
          if (!video) {
            return true
          }

          if (video && getExtension(video as any) !== 'mp4') {
            return 'Please upload a valid mp4 file'
          }
          return true
        })
      },
      preview: {
        select: {
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
})
