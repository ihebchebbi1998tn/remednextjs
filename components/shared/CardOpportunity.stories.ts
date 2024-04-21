import type { Meta, StoryObj } from '@storybook/react'

import { CardOpportunity } from './CardOpportunity'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/CardOpportunity',
  component: CardOpportunity,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardOpportunity>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Title',
    endDate: '2022/12/31',
    overview: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    readMoreLink: '#',
    readMoreLabel: 'Read more',
    startDate: '2022/01/01',
  },
}
