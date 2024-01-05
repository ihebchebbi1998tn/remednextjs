import type { Meta, StoryObj } from '@storybook/react'

import { CARDS } from '@/lib/data'

import { CardStack } from './CardStack'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/framer/CardStack',
  component: CardStack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardStack>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    items: CARDS,
  },
  render: (props) => {
    return (
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack {...props} />
      </div>
    )
  },
}
