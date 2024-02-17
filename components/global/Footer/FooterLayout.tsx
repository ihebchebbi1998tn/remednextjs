import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Footer1 } from '@/components/shared/Footer1'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || []
  const legal = data?.legal || []

  return (
    <Footer1
      brand={data?.brand}
      slogan={data?.slogan}
      socialNetworks={data?.socialNetworks?.fields}
      socialNetworksTitle={data?.socialNetworks?.title}
      legal={legal.filter((item) => item?._type !== 'home')}
      legalTitle="Legal"
      products={menuItems.filter((item) => item?._type !== 'home')}
      productsTitle="Menu"
      contact={data?.contacts?.fields}
      contactTitle={data?.contacts?.title}
      copyright={<CustomPortableText value={footer} />}
    />
  )
}
