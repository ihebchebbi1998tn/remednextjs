import type { Meta, StoryObj } from '@storybook/react'

import { Footer2 } from './Footer2'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Footer2',
  component: Footer2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer2>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    main: [
      { label: 'About', value: '#' },
      { label: 'Blog', value: '#' },
      { label: 'Jobs', value: '#' },
      { label: 'Press', value: '#' },
      { label: 'Accessibility', value: '#' },
      { label: 'Partners', value: '#' },
    ],
    social: [
      {
        label: 'Facebook',
        value: '#',
        icon: 'facebook',
      },
      {
        label: 'Instagram',
        value: '#',
        icon: 'twitter',
      },
      {
        label: 'Twitter',
        value: '#',
        icon: 'youtube',
      },
      {
        label: 'Instagram',
        value: '#',
        icon: 'instagram',
      },
    ],
  },
}
