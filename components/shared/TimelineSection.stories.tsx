import type { Meta, StoryObj } from '@storybook/react'

import { TimelineSection } from './TimelineSection'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/TimelineSection',
  component: TimelineSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TimelineSection>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    timelines: [
      {
        title: 'Title',
        milestones: [
          {
            title: 'Title',
            description: 'Description',
            duration: {
              start: '2022/01/01',
              end: '2022/12/31',
            },
            tags: ['tag1', 'tag2'],
          },
          {
            title: 'Title',
            description: 'Description',
            duration: {
              start: '2022/01/01',
              end: '2022/12/31',
            },
            tags: ['tag1', 'tag2'],
          },
          {
            title: 'Title',
            description: 'Description',
            duration: {
              start: '2022/01/01',
              end: '2022/12/31',
            },
            tags: ['tag1', 'tag2'],
          },
        ],
      },
    ],
  },
}
