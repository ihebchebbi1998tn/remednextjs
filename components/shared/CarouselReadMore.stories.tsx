import type { Meta, StoryObj } from '@storybook/react'

import { CarouselReadMore } from './CarouselReadMore'
import { Card } from '../ui/card'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/CarouselReadMore',
  component: CarouselReadMore,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CarouselReadMore>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => (
    <CarouselReadMore {...args} className="w-full h-full">
      {Array.from({ length: 10 }).map((_, i) => (
        <Card
          key={i}
          className="flex items-center justify-center bg-gray-200 rounded-lg h-44 w-44"
        >
          {`Card ${i}`}
        </Card>
      ))}
    </CarouselReadMore>
  ),
}
