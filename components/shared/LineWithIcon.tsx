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
  
  return (
    <p
      className={`${className} flex items-center justify-center md:justify-start`}
    >
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: `w-5 h-5 ${iconClassName} mr-3 text-green-600 dark:text-green-200`,
        })}
      {link ? (
        <Link href={link}>
          <a className="text-green-600 dark:text-green-200">{label}</a>
        </Link>
      ) : (
        <span className="text-green-600 dark:text-green-200">{label}</span>
      )}
    </p>
  )
}