import Image from 'next/image'
import Link from 'next/link'

import { FrButton } from '@/components/shared/FrButton'
/* import { CommandMenu } from '@/components/command-menu' */
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
  const internalLinks = data?.internalLinks || []
  const socialNetworks = data?.socialNetworks
  const homeItem = menuItems.find((item) => item?._type === 'home')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16 gap-x-8 max-w-screen-2xl">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            className="w-10 h-10"
            src="/images/logo.PNG"
            alt={`Logo for ${homeItem?.title}`}
            width="40"
            height="40"
          />
          <span className="hidden font-bold sm:inline-block">
            {homeItem?.title}
          </span>
        </Link>
        <MainNav menuItems={menuItems} />
        <MainNav menuItems={internalLinks} />
        {/* <MobileNav /> */}
        <div className="flex items-center justify-between flex-1 gap-x-2 md:justify-end">
          {/* <div className="flex-1 w-full md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <FrButton />
          <nav className="flex items-center gap-2">
            <SocialNetworksList socialNetworks={socialNetworks} />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
