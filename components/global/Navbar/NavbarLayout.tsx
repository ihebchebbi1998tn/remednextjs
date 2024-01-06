import Link from 'next/link'

import { FrButton } from '@/components/shared/FrButton'
/* import { CommandMenu } from '@/components/command-menu' */
import { Icons } from '@/components/shared/icons'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import type { MenuItem, SettingsPayload } from '@/types'

import { MainNav } from './main-nav'
import { SocialNetworksList } from '@/components/shared/SocialNetworksList'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || [];
  const internalLinks = data?.internalLinks || [];
  const socialNetworks = data?.socialNetworks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16 max-w-screen-2xl">
        <MainNav menuItems={menuItems} withLogo />
        <MainNav menuItems={internalLinks} />
        {/* <MobileNav /> */}
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          {/* <div className="flex-1 w-full md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center gap-2">
            <FrButton />
            <SocialNetworksList socialNetworks={socialNetworks} />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
