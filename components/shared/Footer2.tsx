import { LinkItem } from '@/types'

import { Icons } from './icons'

interface Footer2Props {
  className?: string
  main?: LinkItem[]
  social?: LinkItem[]
  copyright?: string
}

export function Footer2({
  className = '',
  main = [],
  social = [],
  copyright = '',
}: Footer2Props) {
  return (
    <footer className={`bg-green-500 ${className}`}>
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm: lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {main.map((item) => (
            <div key={item.label} className="pb-6">
              <a
                href={item.value}
                className="text-sm leading-6 text-gray-200 hover:text-gray-900"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-10 space-x-10">
          {social &&
            social.map((item) => {
              const Icon = item.icon ? Icons[item.icon] : null

              return (
                <a
                  key={item.label}
                  href={item.value}
                  className="text-gray-200 hover:text-gray-300"
                >
                  <span className="sr-only">{item.label}</span>
                  {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                </a>
              )
            })}
        </div>
        <p className="mt-10 text-xs leading-5 text-center text-gray-300">
          {copyright}
        </p>
      </div>
    </footer>
  )
}
