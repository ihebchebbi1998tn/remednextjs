import { LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'application',
  title: 'Application',
  icon: LinkIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'site',
      title: 'Site',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'android',
      title: 'Android',
      type: 'url',
    }),
    defineField({
      name: 'ios',
      title: 'iOS',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
    }),
    defineField({
      name: 'playstore',
      title: 'Play Store',
      type: 'url',
    }),
    defineField({
      name: 'appstore',
      title: 'App Store',
      type: 'url',
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'certification',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and project subheader.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          lists: [],
          styles: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})