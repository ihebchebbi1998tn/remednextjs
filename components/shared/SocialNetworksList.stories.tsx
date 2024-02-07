import type { Meta, StoryObj } from '@storybook/react'

import { SocialNetworksList } from './SocialNetworksList'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/SocialNetworksList',
  component: SocialNetworksList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SocialNetworksList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title : 'Get connected with us on social networks:',
    socialNetworks : [
      {
        title: 'twitter',
        url: 'https://twitter.com',
      },
      {
        title: 'facebook',
        url: 'https://facebook.com',
      },
      {
        title: 'instagram',
        url: 'https://instagram.com',
      },
      {
        title: 'youtube',
        url: 'https://youtube.com',
      },
    ],
  },
}
