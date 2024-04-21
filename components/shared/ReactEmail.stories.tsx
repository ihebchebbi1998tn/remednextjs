import type { Meta, StoryObj } from '@storybook/react'

import { ReactEmail } from './ReactEmail'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ReactEmail',
  component: ReactEmail,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ReactEmail>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    email: 'exemple@domain.com',
    fullName: 'John Doe',
    message: 'Hello, this is a message',
    logoUrl: 'https://via.placeholder.com/70',
  },
}
