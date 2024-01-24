import { ActivityIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialNetwork',
  title: 'Social Network',
  icon: ActivityIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'LinkedIn', value: 'linkedipn' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'Snapchat', value: 'snapchat' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'Twitch', value: 'twitch' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
