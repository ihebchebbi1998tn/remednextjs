import type { Meta, StoryObj } from '@storybook/react'
import { Home, MessageCircle, User } from 'lucide-react'

import { FloatingNav } from './FloatingNav'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/framer/FloatingNav',
  component: FloatingNav,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FloatingNav>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    navItems: [
      {
        name: 'Home',
        link: '/',
        icon: <Home className="w-4 h-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: 'About',
        link: '/about',
        icon: <User className="w-4 h-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: 'Contact',
        link: '/contact',
        icon: (
          <MessageCircle className="w-4 h-4 text-neutral-500 dark:text-white" />
        ),
      },
    ],
  },
  render: (props) => {
    return (
      <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
        <FloatingNav {...props} />
        <p className="mt-40 text-4xl font-bold text-center dark:text-white text-neutral-600">
          Scroll back up to reveal Navbar
        </p>
      </div>
    )
  },
}
