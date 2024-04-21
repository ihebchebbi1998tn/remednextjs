import type { Meta, StoryObj } from '@storybook/react'
import { Instagram } from 'lucide-react'

import { Bullet } from './Bullet'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Bullet',
  component: Bullet,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Bullet>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Title',
    icon: <Instagram />,
  },

  render: (args) => (
    <Bullet {...args} title="Title" icon={<Instagram />}>
      Description of the item
    </Bullet>
  ),
}
