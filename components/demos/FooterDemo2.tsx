import Image from 'next/image'
import Link from 'next/link'

import { LinkItem, MenuItem, SocialProfile } from '@/types'

import { Icons } from '../shared/icons'
import { Button } from '../ui/button'

interface FooterDemo2Props {
  socialNetworks?: SocialProfile[]
  socialNetworksTitle?: string
  usefulLinksTitle?: string
  usefulLinks?: MenuItem[]
  productsTitle?: string
  products?: MenuItem[]
  contactTitle?: string
  contact?: LinkItem[]
  className?: string
  brand?: string
  slogan?: string
}

export function FooterDemo2({
  socialNetworks = [
    {
      name: 'twitter',
      link: 'https://twitter.com',
    },
    {
      name: 'facebook',
      link: 'https://facebook.com',
    },
    {
      name: 'instagram',
      link: 'https://instagram.com',
    },
    {
      name: 'youtube',
      link: 'https://youtube.com',
    },
  ],
  socialNetworksTitle = 'Get connected with us on social networks:',
  usefulLinksTitle = 'Useful links',
  usefulLinks = [
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
  contactTitle = 'Contact',
  contact = [
    {
      _type: 'linkItem',
      label: 'New York, NY 10012, US',
      value: 'https://google.com',
      icon: 'home',
    },
    {
      _type: 'linkItem',
      label: 'info@example.com',
      value: 'https://google.com',
      icon: 'mail',
    },
    {
      _type: 'linkItem',
      label: '+ 01 234 567 88',
      value: 'https://google.com',
      icon: 'phoneCall',
    },
    {
      _type: 'linkItem',
      label: '+ 01 234 567 89',
      value: 'https://google.com',
      icon: 'printer',
    },
  ],
  productsTitle = 'Products',
  products = [
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
  brand = 'Respect Environment Group',
  slogan = 'Making the world a better place through constructing elegant hierarchies.',
  className = '',
}: FooterDemo2Props) {
  console.log('socialNetworks: ', socialNetworks)
  console.log('socialNetworksTitle: ', socialNetworksTitle)
  return (
    <footer className="text-center text-green-600 bg-green-100 dark:bg-green-600 dark:text-green-200 lg:text-left">
      <div className="flex items-center justify-center p-6 border-b-2 border-green-200 dark:border-green-500 lg:justify-between">
        <div className="hidden mr-12 lg:block">
          <span>{socialNetworksTitle}</span>
        </div>
        {/** Social network icons container */}
        <div className="flex justify-center">
          {socialNetworks?.map((item) => {
            const Icon = Icons[item.name]
            return (
              <Button
                key={item.name}
                variant="link"
                className="items-center justify-center hidden w-6 h-6 border rounded-md group text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:flex"
              >
                <Link href={item.link} target="_blank">
                  <Icon className="h-4 w-4 duration-300 group-hover:rotate-[360deg]" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              </Button>
            )
          })}
        </div>
      </div>

      {/** Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contactwith responsive styling and appropriate padding/margins. */}
      <div className="py-10 mx-6 text-center md:text-left">
        <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
          {/** TW elements section */}
          <div className="">
            <h6 className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
              <Image src="/images/logo.PNG" alt="logo" width={50} height={50} />
              {brand}
            </h6>
            <p>{slogan}</p>
          </div>
          {/** Products section */}
          <div className="">
            <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
              {productsTitle}
            </h6>
            {products.map((item, index) => (
              <p className="mb-4" key={index}>
                <a
                  href={item.slug}
                  className="text-green-600 dark:text-green-200"
                >
                  {item.title}
                </a>
              </p>
            ))}
          </div>
          {/** Useful links section */}
          <div className="">
            <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
              {usefulLinksTitle}
            </h6>
            {usefulLinks.map((item, index) => (
              <p className="mb-4" key={index}>
                <a
                  href={item.slug}
                  className="text-green-600 dark:text-green-200"
                >
                  {item.title}
                </a>
              </p>
            ))}
          </div>
          {/** Contact section */}
          <div>
            <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
              {contactTitle}
            </h6>
            {contact.map((item, index) => {
              const Icon = Icons[item.icon]
              return (
                <p
                  className="flex items-center justify-center mb-4 md:justify-start"
                  key={index}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </p>
              )
            })}
          </div>
        </div>
      </div>

      {/**Copyright section*/}
      <div className="p-6 text-center bg-green-200 dark:bg-green-700">
        <p className="text-sm text-green-600 dark:text-green-200">
          {`© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
        </p>
        <a
          className="font-semibold text-green-600 dark:text-green-400 hover:text-green-500"
          href="/"
        >
          {brand}
        </a>
      </div>
    </footer>
  )
}
