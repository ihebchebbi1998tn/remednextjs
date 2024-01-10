import type { Meta, StoryObj } from '@storybook/react'

import { SectionHero } from './SectionHero'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/SectionHero',
  component: SectionHero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SectionHero>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Respect Environment Group',
    description: 'We are a group of people who care about the environment and want to make a difference.',
    video: '/videos/hero.mp4',
    blocks: [
      {
        icon: 'home',
        title: 'We care',
        description: 'We care about the environment and want to make a difference.',
      },
      {
        icon: 'mail',
        title: 'We are passionate',
        description: 'We are passionate about the environment and want to make a difference.',
      },
      {
        icon: 'phoneCall',
        title: 'We are worldwide',
        description: 'We are worldwide about the environment and want to make a difference.',
      },
      {
        icon: 'printer',
        title: 'We are identity',
        description: 'We are identity about the environment and want to make a difference.',
      },
    ],
  },
}
