import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Download } from 'lucide-react'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { InnovationPayload } from '@/types'

import GalleryImage from '../../shared/GalleryImage'

export interface InnovationPageProps {
  data: InnovationPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function InnovationPage({
  data,
  encodeDataAttribute,
}: InnovationPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, certifications, description, files } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <div className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0">
            <div className="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
              <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                {title}
              </h2>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <CustomPortableText value={description ?? []} />
              </p>
            </div>
            <hr className="mb-6 border-gray-200 dark:border-gray-700" />
            <GalleryImage
              images={
                certifications?.map((certification) => ({
                  src: certification?.url,
                  alt: certification?.title,
                })) as any
              }
              title="Certifications"
            />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationPage
