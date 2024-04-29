import React from 'react'

import { LinkItem } from '@/types'

import { Icons } from './icons'
import { LineWithIcon } from './LineWithIcon'

interface ListLineWithIconProps {
  title?: string
  items?: LinkItem[]
  className?: string
}

export function ListLineWithIcon({
  title = '',
  items = [],
  className = '',
}: ListLineWithIconProps) {
  return (
    <div className={`${className}`}>
      {title && (
        <h2 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
          {title}
        </h2>
      )}
      {items &&
        items.map((item, index) => {
          const Icon = item.icon ? Icons[item.icon] : null
          return (
            <LineWithIcon
              className="mb-2"
              label={item.label}
              link={item.value}
              icon={Icon ? <Icon /> : null}
              key={index}
            />
          )
        })}
    </div>
  )
}
