import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { Footer1 } from '@/components/shared/Footer1'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || []
  const internalLinks = data?.internalLinks || []

  return (
    <Footer1
      socialNetworks={data?.socialNetworks}
      socialNetworksTitle="Get connected with us on social networks:"
      usefulLinks={[...menuItems, ...internalLinks]}
      products={[
        {
          _type: 'menuItem',
          title: 'Product 1',
          slug: '/product-1',
        },
        {
          _type: 'menuItem',
          title: 'Product 2',
          slug: '/product-2',
        },
        {
          _type: 'menuItem',
          title: 'Product 3',
          slug: '/product-3',
        },
      ]}
      brand={toPlainText(footer)}
    />
  )
}
