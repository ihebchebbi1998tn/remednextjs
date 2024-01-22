import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import { Download } from 'lucide-react'
import Image from 'next/image'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { OpportunityPayload } from '@/types'

export interface OpportunityPageProps {
  data: OpportunityPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function OpportunityPage({
  data,
  encodeDataAttribute,
}: OpportunityPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { image, title, duration, links, files, description } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <div className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0">
            <div className="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                {image && (
                  <Image
                    src={urlForImage(image)?.url() ?? ''}
                    alt=""
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                )}
                <span className="mb-2 ml-auto text-xs text-gray-500 dark:text-gray-400">
                  {[duration?.start, duration?.end]
                    .filter(Boolean)
                    .map((date) =>
                      format(parseISO(date as string), 'MMMM yyyy'),
                    )
                    .join(' - ')}
                </span>
              </div>
              <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                {title}
              </h2>
              <div className="flex flex-wrap items-center mb-4 ">
                <a
                  href="#"
                  className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 bi bi-folder"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                  $10,000 /year
                </a>
                <a
                  href="#"
                  className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                  Part time
                </a>
                <a
                  href="#"
                  className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Tunis
                </a>
              </div>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <CustomPortableText value={description ?? []} />
              </p>
            </div>
            <hr className="mb-6 border-gray-200 dark:border-gray-700" />
            {files?.length && (
              <h3 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                Pièces jointes
              </h3>
            )}
            {files?.map((file, index) => {
              return (
                <div key={index}>
                  <a
                    href={file.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <Download size={16} className="mr-1" />
                    file
                  </a>
                </div>
              )
            })}
            {links?.length && (
              <h3 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                Liens
              </h3>
            )}
            {links?.map((link, index) => {
              return (
                <div key={index}>
                  <a
                    href={link.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <Download size={16} className="mr-1" />
                    {link.title}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunityPage
