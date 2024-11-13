import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { useTranslation } from 'next-i18next'; 
import GalleryImage from '@/components/shared/GalleryImage'
import { AppBreadcrumb } from '@/components/shared/NextBreadcrumb'
import { urlForImage } from '@/sanity/lib/utils'
import type { CertificationPayload } from '@/types'

export interface CertificationListPageProps {
  data: CertificationPayload[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function CertificationListPage({
  data,
  encodeDataAttribute,
}: CertificationListPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { t } = useTranslation(); 

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            Certifications
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
           Learn more about our certifications and collaborations.
          </p>
          <div className="mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
            <GalleryImage
              images={data.map((certification) => ({
                src: urlForImage(certification.coverImage)?.url() ?? '',
                alt: certification.title,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationListPage
