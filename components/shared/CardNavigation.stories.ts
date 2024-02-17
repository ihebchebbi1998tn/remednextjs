import type { Meta, StoryObj } from '@storybook/react'
import { Instagram } from 'lucide-react'

import { CardNavigation } from './CardNavigation'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/CardNavigation',
  component: CardNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardNavigation>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithIcon: Story = {
  args: {
    title: 'Products',
    description:
      'Iterative approaches to corporate strategy foster collaborative thinking to further the overall.',
    buttonText: 'Read more',
    buttonLink: 'https://www.google.com',
    icon: Instagram,
  },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Harnessing Power of the Elements',
    description:
      'Mauris pellentesque viverra ipsum id bibendum. Nullam id tincidunt ipsum. Integer venenatis auctor nibh id sagittis. Phasellus et tincidunt leo, eu rutrum ante iaculis porttitor bibendum.',
    subtitle: 'Take the most of what nature offers',
    buttonText: 'Read more',
    buttonLink: 'https://www.google.com',
  },
}
