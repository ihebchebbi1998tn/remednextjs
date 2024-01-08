import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export default defineType({
  name: 'socialNetworks',
  title: 'Social Networks',
  type: 'object',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your social network.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineType({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'socialNetwork',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
