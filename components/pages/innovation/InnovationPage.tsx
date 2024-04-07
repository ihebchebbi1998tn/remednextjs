import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

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
  const { title, certifications, description } = data ?? {}

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationPage
