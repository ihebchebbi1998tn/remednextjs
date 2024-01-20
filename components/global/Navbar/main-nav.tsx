'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { Icons } from '@/components/shared/icons'
/* import { siteConfig } from '@/config/site' */
import { cn } from '@/lib/utils'
import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem } from '@/types'

interface Props {
  className?: string
  menuItems: MenuItem[]
}

export function MainNav(props: Props) {
  const pathname = usePathname()

  const { menuItems, className } = props

  const restItems = menuItems.filter((item) => item?._type !== 'home')

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-8 text-sm">
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
