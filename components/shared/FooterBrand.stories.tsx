import type { Meta, StoryObj } from '@storybook/react'

import { FooterBrand } from './FooterBrand'
import { Icons } from './icons'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/FooterBrand',
  component: FooterBrand,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FooterBrand>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    brand: 'Respect Environment Group',
    slogan:
      'Making the world a better place through constructing elegant hierarchies.',
    logo: 'https://via.placeholder.com/150',
  },
}
