'use client'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CardOpportunity } from '@/components/shared/CardOpportunity'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { OpportunityPayload } from '@/types'

export interface OpportunityListPageProps {
  data: OpportunityPayload[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function OpportunityListPage({
  data,
  encodeDataAttribute,
}: OpportunityListPageProps) {
  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            opportunities
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about our opportunities.
          </p>
          <div className="mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
            {data.map((opportunity, i) => (
              <CardOpportunity
                key={i}
                title={opportunity.title}
                overview={
                  <CustomPortableText value={opportunity?.overview ?? []} />
                }
                startDate={
                  opportunity?.duration?.start
                    ? format(
                        parseISO(opportunity?.duration?.start),
                        'dd/LL/yyyy',
                        {
                          locale: fr,
                        },
                      )
                    : ''
                }
                endDate={
                  opportunity?.duration?.end
                    ? format(
                        parseISO(opportunity?.duration?.end),
                        'dd/LL/yyyy',
                        {
                          locale: fr,
                        },
                      )
                    : ''
                }
                image={urlForImage(opportunity.image)?.url() ?? ''}
                link={`/opportunities/${opportunity.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunityListPage
