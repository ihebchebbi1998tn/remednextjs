import { getExtension } from '@sanity/asset-utils'
import { LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import authorType from '../documents/author'

export default defineType({
  name: 'customBlock',
  title: 'Custom Block',
  icon: LinkIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
    defineField({
      name: 'description',
      description: 'Block content',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'internalLink' }, { type: 'page' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description:
        'Tags to help categorize and filter content. Tags are not displayed on the site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'images',
      name: 'images',
      title: 'Images',
    }),
    defineField({
      type: 'videos',
      name: 'videos',
      title: 'Videos',
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
    defineField({
      name: 'showcasePosts',
      title: 'Showcase posts',
      description:
        'These are the posts that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseCertifications',
      title: 'Showcase certifications',
      description:
        'These are the certifications that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'certification' }],
        }),
      ],
    }),
    // application
    defineField({
      name: 'showcaseApplications',
      title: 'Showcase applications',
      description:
        'These are the applications that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'application' }],
        }),
      ],
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'customBlock',
        }),
      ],
    }),
  ],
})
