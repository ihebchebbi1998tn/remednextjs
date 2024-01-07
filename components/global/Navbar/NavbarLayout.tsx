import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/* import { CommandMenu } from '@/components/command-menu' */
import { ModeToggle } from '@/components/shared/mode-toggle'
import { SocialNetworksList } from '@/components/shared/SocialNetworksList'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
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
        <MainNav menuItems={[...internalLinks, ...menuItems]} />
        {/* <MobileNav /> */}
        <Drawer>
          <DrawerTrigger>
            <Button
              className="p-2 rounded-full sm:hidden"
              aria-label="Open menu"
              variant="ghost"
            >
              <Menu className="text-foreground" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerClose aria-label="Close menu" />
            </DrawerHeader>
            <DrawerDescription className="container flex flex-col justify-center">
              {[
                ...internalLinks,
                ...menuItems.filter((item) => item?._type !== 'home'),
              ].map((item, key) => {
                const href = item?._type === 'home' ? '/' : `/${item?.slug}`
                return (
                  <Link
                    key={key}
                    href={href}
                    className="py-2 text-lg font-bold text-center transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                )
              })}
            </DrawerDescription>
            <DrawerFooter>
              <div className="flex flex-col gap-y-2">
                <SocialNetworksList socialNetworks={socialNetworks} />
                <ModeToggle className="self-start" />
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div className="items-center justify-between flex-1 hidden none sm:flex gap-x-2 md:justify-end">
          <nav className="items-center gap-2 md:gap-8">
            <SocialNetworksList socialNetworks={socialNetworks} />
            <ModeToggle className="w-8 h-8" />
          </nav>
        </div>
      </div>
    </header>
  )
}
