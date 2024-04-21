import type { Meta, StoryObj } from '@storybook/react'

import { PopoverSettings } from './PopoverSettings'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/PopoverSettings',
  component: PopoverSettings,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PopoverSettings>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    socialNetworks: {
      fields: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com',
        },
        {
          title: 'Twitter',
          url: 'https://www.twitter.com',
        },
      ],
    },
  },
}
