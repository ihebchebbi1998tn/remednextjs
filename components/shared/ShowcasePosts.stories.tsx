import type { Meta, StoryObj } from '@storybook/react'

import { ShowcasePosts } from './ShowcasePosts'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ShowcasePosts',
  component: ShowcasePosts,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ShowcasePosts>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'ShowcasePosts',
    description: 'This is a description',
    blocks: [
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
      {
        title: 'Title',
        description: 'Description',
        coverImage: 'https://source.unsplash.com/random/800x600',
        slug: '#',
      },
    ],
  },
}
