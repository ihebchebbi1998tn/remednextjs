import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { Footer1 } from '@/components/shared/Footer1'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  console.log('data: ', data.contacts)
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || []

  return (
    <Footer1
      brand={data?.brand}
      slogan={data?.slogan}
      socialNetworks={data?.socialNetworks?.fields}
      socialNetworksTitle={data?.socialNetworks?.title}
      usefulLinks={menuItems.filter((item) => item?._type !== 'home')}
      usefulLinksTitle="Useful links"
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
      productsTitle="Products"
      contact={data?.contacts?.fields}
      contactTitle={data?.contacts?.title}
      copyright={toPlainText(footer)}
    />
  )
}
