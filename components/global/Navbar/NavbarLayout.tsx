import Image from 'next/image'
import Link from 'next/link'

import MobileNav from '@/components/shared/MobileNav'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { SocialNetworksList } from '@/components/shared/SocialNetworksList'
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
            className="w-10 h-10 bg-green-500 rounded-full"
            src="/images/logo.svg"
            alt={`Logo for ${homeItem?.title}`}
            width="40"
            height="40"
          />
          <span className="inline-block font-bold min-w-fit">
            {homeItem?.title}
          </span>
        </Link>
        <MainNav menuItems={menuItems} />
        <MobileNav data={data} />
        <div className="items-center justify-between flex-1 hidden none sm:flex gap-x-2 md:justify-end">
          <nav className="flex items-center w-auto gap-2 md:gap-8">
            <SocialNetworksList socialNetworks={socialNetworks?.fields} />
            <ModeToggle className="w-8 h-8" />
          </nav>
        </div>
      </div>
    </header>
  )
}
