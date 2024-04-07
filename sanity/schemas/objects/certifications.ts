import { defineArrayMember, defineType } from 'sanity'

export const certifications = defineType({
  name: 'certifications',
  title: 'Certifications',
  description:
    'This field is used to display the certification for the project.',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'reference',
      to: [{ type: 'certification' }],
    }),
  ],
})
