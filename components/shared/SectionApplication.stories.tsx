import type { Meta, StoryObj } from '@storybook/react'

import { SectionApplication } from './SectionApplication'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/SectionApplication',
  component: SectionApplication,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SectionApplication>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'SectionApplication',
    application: {
      description: undefined,
      coverImage: 'https://source.unsplash.com/random/800x400',
      ios: 'https://apps.apple.com/us/app/instagram/id389801252',
      android:
        'https://play.google.com/store/apps/details?id=com.instagram.android',
      site: 'https://www.instagram.com/',
      slug: '#',
    },
  },
}
