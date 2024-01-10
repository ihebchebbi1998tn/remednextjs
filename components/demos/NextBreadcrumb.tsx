'use client'

import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

type NextBreadcrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

export const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: NextBreadcrumbProps) => {
  const paths = usePathname()
  const pathNames = paths?.split('/').filter((path) => path)

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames && pathNames.length > 0 && separator}
        {pathNames?.map((link, index) => {
          let href = `/${pathNames?.slice(0, index + 1).join('/')}`
          console.log('href: ', href);
              
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {index < pathNames.length - 1 ?  <Link href={href}>{itemLink}</Link> : itemLink}
              </li>
              {pathNames?.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export const AppBreadcrumb = () => {
  return (
    <NextBreadcrumb
      homeElement={
        <span className="text-gray-400 hover:text-gray-500">
          <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </span>
      }
      separator="/"
      containerClasses="flex items-center gap-x-2 text-sm text-gray-400"
      listClasses="flex items center gap-x-2 hover:text-gray-500"
      activeClasses="font-bold text-gray-900 dark:text-gray-300"
      capitalizeLinks={true}
    />
  )
}
