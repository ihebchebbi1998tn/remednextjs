import Image from 'next/image'
import Link from 'next/link'

import { MobileNav } from '@/components/shared/MobileNav'
import { PopoverSettings } from '@/components/shared/PopoverSettings'
import type { SettingsPayload } from '@/types'

import { MainNav } from './main-nav'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || []
  const socialNetworks = data?.socialNetworks
  const homeItem = menuItems.find((item) => item?._type === 'home')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 gap-x-8 max-w-screen-2xl">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            className="w-14"
            src="/images/logo.svg"
            alt={`Logo for ${homeItem?.title}`}
            width={48}
            height={48}
          />
          <span className="inline-block mr-8 text-sm font-bold md:hidden lg:inline-block md:text-md min-w-fit">
            {homeItem?.title}
          </span>
        </Link>
        <MainNav menuItems={menuItems} className="hidden md:flex" />

        <MobileNav data={data} />
        <div className="items-center justify-between flex-1 hidden md:flex gap-x-2 md:justify-end">
          <Link href="/tenders" className="hidden md:block">
            <button className="px-2 py-2 font-bold text-white transition duration-200 bg-green-500 border-2 border-transparent rounded-md lg:px-8 hover:bg-transparent hover:text-green-500 hover:border-green-500 whitespace-nowrap">
              {`Opportunities`}
            </button>
          </Link>
          <nav className="flex items-center w-auto gap-1 md:gap-2">
            <PopoverSettings socialNetworks={socialNetworks} />
          </nav>
        </div>
      </div>
    </header>
  )
}
