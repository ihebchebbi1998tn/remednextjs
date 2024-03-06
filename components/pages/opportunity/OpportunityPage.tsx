import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
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
                      format(parseISO(date as string), 'dd/LL/yyyy', {
                        locale: fr,
                      }),
                    )
                    .join(' - ')}
                </span>
              </div>
              <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                {title}
              </h2>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <CustomPortableText value={description ?? []} />
              </p>
            </div>
            <hr className="mb-6 border-gray-200 dark:border-gray-700" />
            {files?.length && (
              <h3 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                Attachments
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
