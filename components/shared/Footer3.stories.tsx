import type { Meta, StoryObj } from '@storybook/react'

import { Footer3 } from './Footer3'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Footer3',
  component: Footer3,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer3>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    copyright: '© 2021 Respect Environment Group. All rights reserved.',
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
    legal: [
      { label: 'Privacy', value: '#' },
      { label: 'Terms', value: '#' },
      { label: 'Sitemap', value: '#' },
    ],
    company: [
      { label: 'About', value: '#' },
      { label: 'Blog', value: '#' },
      { label: 'Jobs', value: '#' },
      { label: 'Press', value: '#' },
      { label: 'Accessibility', value: '#' },
      { label: 'Partners', value: '#' },
    ],
    projects: [
      { label: 'About', value: '#' },
      { label: 'Blog', value: '#' },
      { label: 'Jobs', value: '#' },
      { label: 'Press', value: '#' },
      { label: 'Accessibility', value: '#' },
      { label: 'Partners', value: '#' },
    ],
  },
}
