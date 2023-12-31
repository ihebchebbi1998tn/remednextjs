import Image from 'next/image'
import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center px-4 py-4 gap-x-5 bg-white/80 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {menuItems &&
        menuItems.map((menuItem, key) => {
          console.log('menuItem: ', menuItem)
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          if (menuItem?._type === 'home') {
            return (
              <Link href="/" className="flex items-center gap-x-2" key={key}>
                <Image
                  className="w-10 h-10"
                  src="/images/logo.PNG"
                  alt={`Logo for ${menuItem.title}`}
                  width="40"
                  height="40"
                />
                <span className="text-xl font-extrabold text-black">
                  {menuItem.title}
                </span>
              </Link>
            )
          } else {
            return (
              <Link
                key={key}
                className={`text-lg hover:text-black md:text-xl ${
                  menuItem?._type === 'home'
                    ? 'font-extrabold text-black'
                    : 'text-gray-600'
                }`}
                href={href}
              >
                {menuItem.title}
              </Link>
            )
          }
        })}
    </div>
  )
}
