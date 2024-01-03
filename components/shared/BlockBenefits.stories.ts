import type { Meta, StoryObj } from '@storybook/react'

import { BlockBenefits } from './BlockBenefits'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/BlockBenefits',
  component: BlockBenefits,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BlockBenefits>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Products',
    desc: 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall.',
    bullets: [
      {
        icon: null,
        title: 'Bullets',
        desc: 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall.',
      },
      {
        icon: null,
        title: 'Bullets',
        desc: 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall.',
      },
      {
        icon: null,
        title: 'Bullets',
        desc: 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall.',
      },
    ],
    image: {
      src: 'https://via.placeholder.com/600x600',
      alt: 'Placeholder image',
    },
    imgPos: 'right',
  },
}
