import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CardOpportunity } from '@/components/shared/CardOpportunity'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { InnovationsPayload } from '@/types'

export interface InnovationListPageProps {
  data: InnovationsPayload
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function InnovationListPage({
  data,
  encodeDataAttribute,
}: InnovationListPageProps) {

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            {data.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {data.overview && <CustomPortableText value={data.overview} />}
          </p>
          <div className="mt-8 lg:mx-0 lg:max-w-none">
            {data.items?.map((innovation, i) => {
              const href = resolveHref(innovation._type, innovation.slug)
              return (
                <CardOpportunity
                  key={i}
                  title={innovation.title}
                  overview={
                    <CustomPortableText value={innovation?.overview ?? []} />
                  }
                  image={urlForImage(innovation.images?.[0])?.url() ?? ''}
                  readMoreLink={href}
                  readMoreLabel='Read more'
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationListPage
