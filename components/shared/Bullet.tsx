import React from 'react'

interface BulletProps {
  title?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function Bullet(props: BulletProps) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11 ">
        {props.icon &&
          React.cloneElement(props.icon as React.ReactElement, {
            className: 'w-7 h-7 text-green-50',
          })}
      </div>
      <div>
        {props.title && (
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
        )}
        {props.title && (
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        )}
      </div>
    </div>
  )
}

export default Bullet
