import type { Meta, StoryObj } from '@storybook/react'

import { Icons } from './icons'
import { LineWithIcon } from './LineWithIcon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/LineWithIcon',
  component: LineWithIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof LineWithIcon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Hello World',
    link: '',
    iconClassName: 'text-green-50',
    className: '',
  },
  render: (args) => {
    const { label, link, iconClassName, className } = args
    const Icon = Icons['mail']
    return (
      <LineWithIcon
        label={label}
        link={link}
        iconClassName={iconClassName}
        className={className}
        icon={<Icon />}
      />
    )
  },
}
