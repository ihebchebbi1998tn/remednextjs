import type { PortableTextBlock } from '@portabletext/types'

import { FooterDemo } from '@/components/demos/FooterDemo'
import type { MenuItem, SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return <FooterDemo />
}
