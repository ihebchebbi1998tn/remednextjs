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
      contact={[
        {
          label: 'Ezzahra Plage Lotisement Afh a Ben Arous Ezzahra',
          value: 'https://google.com',
          icon: 'home',
        },
        {
          label: '+216 55 123 657 / +216 51 440 222',
          value: 'https://google.com',
          icon: 'phoneCall',
        },
        {
          label: 'respectenvironnementg@gmail.com',
          value: 'respectenvironnementg@gmail.com',
          icon: 'mail',
        },
      ]}
      contactTitle="Contact"
      brand={'Respect Environnement Group'}
      copyright={toPlainText(footer)}
    />
  )
}
