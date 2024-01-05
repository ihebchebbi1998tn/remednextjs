import Link from 'next/link'

import { FrButton } from '@/components/shared/FrButton'
/* import { CommandMenu } from '@/components/command-menu' */
import { Icons } from '@/components/shared/icons'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import type { MenuItem, SettingsPayload } from '@/types'

import { MainNav } from './main-nav'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const internalLinks = data?.internalLinks || ([] as MenuItem[])
  const socialNetworks = data?.socialNetworks || ([] as MenuItem[])

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
            {socialNetworks.map((item) => {
              const Icon = Icons[item.name]
              return (
                <Button
                  key={item.name}
                  variant="link"
                  className="items-center justify-center hidden w-6 h-6 border rounded-md group text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:flex"
                >
                  <Link
                    href={item.link.current}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-4 w-4 duration-300 group-hover:rotate-[360deg]" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </Button>
              )
            })}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
