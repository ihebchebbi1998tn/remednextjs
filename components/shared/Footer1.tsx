import { LinkItem, LinkType, MenuItem } from '@/types'

import { Copyright } from './Copyright'
import { FooterBrand } from './FooterBrand'
import { ListLineWithIcon } from './ListLineWithIcon'
import { SocialNetworksList } from './SocialNetworksList'

interface Footer1Props {
  socialNetworks?: LinkType[]
  socialNetworksTitle?: string
  legalTitle?: string
  legal?: MenuItem[]
  productsTitle?: string
  products?: MenuItem[]
  contactTitle?: string
  contact?: LinkItem[]
  className?: string
  logo?: string
  brand?: string
  slogan?: string
  copyright?: React.ReactNode
}

export function Footer1({
  socialNetworks = [],
  socialNetworksTitle,
  legalTitle,
  legal = [],
  contactTitle,
  contact = [],
  productsTitle,
  products = [],
  brand,
  logo,
  slogan,
  copyright,
  className = '',
}: Footer1Props) {
  return (
    <footer
      className={`text-center text-green-600 bg-green-100 dark:bg-green-600 dark:text-green-200 lg:text-left text-sm ${className}`}
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
          />
          {/** Legal section */}
          <ListLineWithIcon
            title={legalTitle}
            items={legal.map((item) => ({
              label: item.title,
              value: item.slug,
            }))}
          />
          {/** Contact section */}
          <ListLineWithIcon title={contactTitle} items={contact} />
        </div>
      </div>

      {/**Copyright section*/}
      <Copyright brand={brand} copyright={copyright} />
    </footer>
  )
}
