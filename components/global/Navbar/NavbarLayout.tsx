import Image from 'next/image'
import Link from 'next/link'

import type { MenuItem, SettingsPayload } from '@/types'
import { ModeToggle } from '@/components/shared/mode-toggle'

import { cn } from '@/lib/utils'
/* import { CommandMenu } from '@/components/command-menu' */
import { Icons } from '@/components/shared/icons'
import { MainNav } from './main-nav'
import { buttonVariants } from '@/components/ui/button'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16 max-w-screen-2xl">
        <MainNav menuItems={menuItems} withLogo />
        {/* <MobileNav /> */}
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          {/* <div className="flex-1 w-full md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center">
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.google className="w-4 h-4" />
                <span className="sr-only">Google</span>
              </div>
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitter className="w-3 h-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
