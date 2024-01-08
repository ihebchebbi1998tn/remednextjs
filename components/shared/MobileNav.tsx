'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
import { cn } from '@/lib/utils'
import type { SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function MobileNav(props: NavbarProps) {
  const { data } = props
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const menuItems = data?.menuItems || []
  const internalLinks = data?.internalLinks || []
  const socialNetworks = data?.socialNetworks?.fields || []

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <Button
          className="p-2 rounded-full sm:hidden"
          aria-label="Open menu"
          variant="ghost"
          onClick={() => setIsDrawerOpen(true)}
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
                className={cn(
                  'py-2 text-lg font-bold text-center transition-colors hover:text-foreground',
                  pathname === href ? 'text-foreground' : 'text-foreground/60',
                )}
                onClick={() => setIsDrawerOpen(false)}
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
  )
}
