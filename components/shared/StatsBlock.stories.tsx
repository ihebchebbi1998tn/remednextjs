import type { Meta, StoryObj } from '@storybook/react'

import { StatsBlock } from './StatsBlock'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/StatsBlock',
  component: StatsBlock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof StatsBlock>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'StatsBlock',
    subtitle: 'Subtitle',
    description: 'Description',
    stats: [
      { name: 'Creators on the platform', value: '8,000+' },
      { name: 'Flat platform fee', value: '3%' },
      { name: 'Uptime guarantee', value: '99.9%' },
      { name: 'Paid out to creators', value: '$70M' },
    ],
  },
}
