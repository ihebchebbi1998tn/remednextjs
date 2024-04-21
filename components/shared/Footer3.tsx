import Image from 'next/image'

import { LinkItem } from '@/types'

import { Icons } from './icons'

interface Footer3Props {
  className?: string
  main?: LinkItem[]
  social?: LinkItem[]
  company?: LinkItem[]
  legal?: LinkItem[]
  solutions?: LinkItem[]
  projects?: LinkItem[]
  copyright?: string
}

export function Footer3({
  className = '',
  main = [],
  social = [],
  company = [],
  legal = [],
  projects = [],
  copyright = '',
}: Footer3Props) {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
              width={50}
              height={50}
            />
            <p className="text-sm leading-6 text-gray-600">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => {
                const Icon = item.icon ? Icons[item.icon] : null
                return (
                  <a
                    key={item.label}
                    href={item.value}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.label}</span>
                    {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Navigation
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {main.map((item) => {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.value}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Projects
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {projects.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.value}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {company.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.value}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {legal.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.value}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-gray-900/10 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
