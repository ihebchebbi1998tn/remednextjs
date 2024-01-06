import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { Footer2 } from '@/components/shared/Footer2'
import type { MenuItem, SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const main = menuItems.map((item) => ({
    label: item.title,
    value: item.slug,
  }))
  const social = data?.socialNetworks?.map((item) => ({
    label: item.name,
    value: item.link,
  })) || []

  return <Footer2 social={social} main={main} copyright={toPlainText(footer)} />
}
