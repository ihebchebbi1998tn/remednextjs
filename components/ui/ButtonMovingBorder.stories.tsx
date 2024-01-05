import type { Meta, StoryObj } from '@storybook/react'

import { ButtonMovingBorder } from './ButtonMovingBorder'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/framer/ButtonMovingBorder',
  component: ButtonMovingBorder,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ButtonMovingBorder>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (props) => {
    return (
      <div className="">
        <ButtonMovingBorder
          borderRadius="1.75rem"
          className="text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
          {...props}
        >
          Borders are cool
        </ButtonMovingBorder>
      </div>
    )
  },
}
