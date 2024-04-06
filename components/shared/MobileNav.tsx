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

import { FontResizer } from './FontResizer'

interface NavbarProps {
  data: SettingsPayload
}
export function MobileNav(props: NavbarProps) {
  const { data } = props
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const menuItems = data?.menuItems || []
  const socialNetworks = data?.socialNetworks?.fields || []

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>
        <Button
          className="p-2 rounded-full md:hidden"
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
          {menuItems
            .filter((item) => item?._type !== 'home')
            .map((item, key) => {
              const href = item?._type === 'home' ? '/' : `/${item?.slug}`
              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    'py-2 text-lg font-bold text-center transition-colors hover:text-foreground',
                    pathname === href
                      ? 'text-foreground'
                      : 'text-foreground/60',
                  )}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.title}
                </Link>
              )
            })}
          <Link href="/tenders" className="inline-block text-center">
            <Button
              onClick={() => setIsDrawerOpen(false)}
              className="px-8 font-bold bg-green-500 border-2 border-transparent hover:bg-transparent hover:text-green-500 hover:border-green-500"
            >
              {`Opportunities`}
            </Button>
          </Link>
        </DrawerDescription>
        <DrawerFooter>
          <div className="flex flex-col gap-y-4">
            <SocialNetworksList socialNetworks={socialNetworks} />
            <div className="flex justify-between shrink">
              <FontResizer />
              <ModeToggle />
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
