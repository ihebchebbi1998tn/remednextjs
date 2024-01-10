import type { Meta, StoryObj } from '@storybook/react'

import { NextBreadcrumb } from './NextBreadcrumb'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/demo/NextBreadcrumb',
  component: NextBreadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof NextBreadcrumb>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    homeElement: 'Home',
    separator: '/',
    containerClasses: 'flex items-center gap-x-2 text-sm text-gray-500',
    listClasses: 'flex items-center gap-x-2',
    activeClasses: 'font-bold',
    capitalizeLinks: true,
  },
}
