import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'

import { dummyContent } from '@/lib/data'

import { TracingBeam } from './TracingBeam'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/framer/TracingBeam',
  component: TracingBeam,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TracingBeam>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: 'w-screen h-screen',
    children: (
      <div className="relative max-w-2xl pt-4 mx-auto antialiased">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="px-4 py-1 mb-4 text-sm text-white bg-black rounded-full w-fit">
              {item.badge}
            </h2>

            <p className={'text-xl mb-4'}>{item.title}</p>

            <div className="text-sm prose-sm prose dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="object-cover mb-10 rounded-lg"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    ),
  },
}
