import type { Meta, StoryObj } from '@storybook/react'

import { Footer1 } from './Footer1'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Footer1',
  component: Footer1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer1>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    socialNetworks: [
      {
        title: 'twitter',
        url: 'https://twitter.com',
      },
      {
        title: 'facebook',
        url: 'https://facebook.com',
      },
      {
        title: 'instagram',
        url: 'https://instagram.com',
      },
      {
        title: 'youtube',
        url: 'https://youtube.com',
      },
    ],
    socialNetworksTitle: 'Get connected with us on social networks:',
    legalTitle: 'Legal',
    legal: [
      {
        _type: 'menuItem',
        title: 'About',
        slug: '#',
      },
      {
        _type: 'menuItem',
        title: 'Services',
        slug: '#',
      },
      {
        _type: 'menuItem',
        title: 'Contact',
        slug: '#',
      },
    ],
    contactTitle: 'Contact',
    contact: [
      {
        label: 'New York, NY 10012, US',
        value: 'https://google.com',
        icon: 'home',
      },
      {
        label: 'info@example.com',
        value: 'https://google.com',
        icon: 'mail',
      },
      {
        label: '+ 01 234 567 88',
        value: 'https://google.com',
        icon: 'phoneCall',
      },
      {
        label: '+ 01 234 567 89',
        value: 'https://google.com',
        icon: 'printer',
      },
    ],
    productsTitle: 'Products',
    products: [
      {
        _type: 'menuItem',
        title: 'Product 1',
        slug: '#',
      },
      {
        _type: 'menuItem',
        title: 'Product 2',
        slug: '#',
      },
    ],
    logo: 'https://unsplash.it/200/200',
    brand: 'Respect Environment Group',
    slogan:
      'Making the world a better place through constructing elegant hierarchies.',
  },
}
