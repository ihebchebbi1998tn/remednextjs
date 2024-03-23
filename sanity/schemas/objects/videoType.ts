// ./schemaTypes/youTubeType/index.ts

import { PlayIcon } from '@sanity/icons'
import { defineField,defineType } from 'sanity'

import { videoTypePreview } from './videoTypePreview'

export const videoType = defineType({
  name: 'videoType',
  type: 'object',
  title: 'videoType Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'videoType video URL',
    }),
  ],
  preview: {
    select: { title: 'url' },
  },
  components: {
    preview: videoTypePreview,
  },
})
