import Link from 'next/link'
import React from 'react'

interface LineWithIconProps {
  icon?: React.ReactNode
  label?: string
  link?: string
  iconClassName?: string
  className?: string
}

export function LineWithIcon({
  icon = null,
  label = '',
  link = '',
  iconClassName = 'text-green-50',
  className = '',
}: LineWithIconProps) {
  const externalLink = link?.startsWith('http')

  return (
    <p
      className={`${className} flex items-center justify-center md:justify-start flex-wrap`}
    >
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: `w-4 h-4 ${iconClassName} mr-3 text-green-600 dark:text-green-200`,
        })}
      {link ? (
        <Link
          href={link}
          target={externalLink ? '_blank' : '_self'}
          rel={externalLink ? 'noopener noreferrer' : ''}
          className="text-green-600 dark:text-green-200 hover:underline"
        >
          <span className="text-green-600 dark:text-green-200">{label}</span>
        </Link>
      ) : (
        <span className="text-green-600 dark:text-green-200 ">{label}</span>
      )}
    </p>
  )
}
