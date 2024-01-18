import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
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
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data &&
              data.map((certification) => (
                <article
                  key={certification.slug}
                  className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80"
                >
                  <Image
                    src={urlForImage(certification.coverImage)?.url() ?? ''}
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                    width={384}
                    height={384}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={`certifications/${certification.slug}`}>
                      <span className="absolute inset-0" />
                      {certification.title}
                    </a>
                  </h3>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationListPage
