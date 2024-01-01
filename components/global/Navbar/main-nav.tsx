'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* import { siteConfig } from '@/config/site' */
import { cn } from '@/lib/utils'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem } from '@/types'
import { Icons } from '@/components/shared/icons'
import Image from 'next/image'

interface Props {
  className?: string
  menuItems: MenuItem[]
}

export function MainNav(props: Props) {
  const pathname = usePathname()

  const { menuItems } = props

  const homeItem = menuItems.find((item) => item?._type === 'home')
  
  const restItems = menuItems.filter((item) => item?._type !== 'home')

  return (
    <div className="hidden mr-4 md:flex">
      <Link href="/" className="flex items-center mr-6 space-x-2">
        <Image
          className="w-10 h-10"
          src="/images/logo.PNG"
          alt={`Logo for ${homeItem?.title}`}
          width="40"
          height="40"
        />
        <span className="hidden font-bold sm:inline-block">
          {homeItem?.title ?? 'New York'}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {restItems.map((item, key) => {
          const href = resolveHref(item?._type, item?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              href={href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === href ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
