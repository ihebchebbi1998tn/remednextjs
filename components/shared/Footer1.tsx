import { LinkItem, MenuItem, SocialProfile } from '@/types'

import { Copyright } from './Copyright'
import { FooterBrand } from './FooterBrand'
import { ListLineWithIcon } from './ListLineWithIcon'
import { SocialNetworksList } from './SocialNetworksList'

interface Footer1Props {
  socialNetworks?: SocialProfile[]
  socialNetworksTitle?: string
  usefulLinksTitle?: string
  usefulLinks?: MenuItem[]
  productsTitle?: string
  products?: MenuItem[]
  contactTitle?: string
  contact?: LinkItem[]
  className?: string
  logo?: string
  brand?: string
  slogan?: string
  copyright?: string
}

export function Footer1({
  socialNetworks = [],
  socialNetworksTitle,
  usefulLinksTitle,
  usefulLinks = [],
  contactTitle,
  contact = [],
  productsTitle,
  products = [],
  brand,
  logo,
  slogan,
  copyright,
  className,
}: Footer1Props) {
  return (
    <footer
      className={`text-center text-green-600 bg-green-100 dark:bg-green-600 dark:text-green-200 lg:text-left ${className}`}
    >
      {/** Social networks section */}
      <SocialNetworksList
        title={socialNetworksTitle}
        socialNetworks={socialNetworks}
        className="border-b-2 border-green-200 dark:border-green-500"
      />

      {/** Main container div: holds the entire content of the footer. */}
      <div className="py-10 mx-6 text-center md:text-left">
        <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
          {/** Brand section */}
          <FooterBrand brand={brand} slogan={slogan} logo={logo} />
          {/** Products section */}
          <ListLineWithIcon
            title={productsTitle}
            items={products.map((item) => ({
              label: item.title,
              value: item.slug,
            }))}
            className="mb-4"
          />
          {/** Useful links section */}
          <ListLineWithIcon
            title={usefulLinksTitle}
            items={usefulLinks.map((item) => ({
              label: item.title,
              value: item.slug,
            }))}
            className="mb-4"
          />
          {/** Contact section */}
          <ListLineWithIcon
            title={contactTitle}
            items={contact}
            className="mb-4"
          />
        </div>
      </div>

      {/**Copyright section*/}
      <Copyright brand={brand} copyright={copyright} />
    </footer>
  )
}
