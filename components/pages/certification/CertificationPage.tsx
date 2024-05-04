import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { AppBreadcrumb } from '@/components/shared/NextBreadcrumb'
import type { CertificationPayload } from '@/types'

import WebAnalytics from '../../global/WebAnalytics'

export interface CertificationPageProps {
  data: CertificationPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function CertificationPage({
  data,
  encodeDataAttribute,
}: CertificationPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { url, overview, title } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <WebAnalytics value="/certification" event="Pageview" />

      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <div
            className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0"
            style={{ height: '24em' }}
          >
            <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent" />
            <Image
              src={url ?? ''}
              alt={title ?? ''}
              className="absolute inset-0 object-cover w-full h-full"
              layout="fill"
            />
          </div>
          <div className="container">
            <div className="pb-6 mt-4 font-semibold text-gray-400 border-b-2 border-gray-200">
              {overview && <CustomPortableText value={overview} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationPage
