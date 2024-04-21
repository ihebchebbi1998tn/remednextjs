import type { Meta, StoryObj } from '@storybook/react'

import { Icons } from './icons'
import { ListLineWithIcon } from './ListLineWithIcon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ListLineWithIcon',
  component: ListLineWithIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ListLineWithIcon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Hello World',
    className: '',
    items: [
      {
        label: 'Home',
        icon: 'home',
        value: 'https://google.com',
      },
      {
        label: 'Services',
        icon: 'mail',
        value: 'https://google.com',
      },
      {
        label: 'Contact',
        icon: 'mail',
        value: 'https://google.com',
      },
    ],
  },
}
