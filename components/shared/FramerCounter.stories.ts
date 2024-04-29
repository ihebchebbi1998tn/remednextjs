import type { Meta, StoryObj } from '@storybook/react'

import { FramerCounter } from './FramerCounter'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/framer/FramerCounter',
  component: FramerCounter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FramerCounter>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Up: Story = {
  args: {
    value: 100,
  },
}

export const Down: Story = {
  args: {
    value: 100,
    direction: 'down',
  },
}
