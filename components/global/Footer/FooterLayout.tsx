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

  return (
    <Footer1
      brand={data?.brand}
      slogan={data?.slogan}
      socialNetworks={data?.socialNetworks?.fields}
      socialNetworksTitle={data?.socialNetworks?.title}
      usefulLinks={menuItems.filter((item) => item?._type !== 'home')}
      usefulLinksTitle="Liens utiles"
      products={[
        {
          _type: 'menuItem',
          title: 'Product 1',
          slug: 'project-1',
        },
        {
          _type: 'menuItem',
          title: 'Product 2',
          slug: 'project-2',
        },
        {
          _type: 'menuItem',
          title: 'Product 3',
          slug: 'project-3',
        },
      ]}
      productsTitle="Products"
      contact={data?.contacts?.fields}
      contactTitle={data?.contacts?.title}
      copyright={toPlainText(footer)}
    />
  )
}
