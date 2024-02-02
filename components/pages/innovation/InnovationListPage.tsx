'use client'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useState } from 'react'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CardOpportunity } from '@/components/shared/CardOpportunity'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { InnovationPayload } from '@/types'

export interface InnovationListPageProps {
  data: InnovationPayload[]
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
            Recherche et innovations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Apprenez-en davantage sur nos innovations.
          </p>
          <div className="mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
            {data.map((innovation, i) => (
              <CardOpportunity
                key={i}
                title={innovation.title}
                overview={
                  <CustomPortableText value={innovation?.overview ?? []} />
                }
                image={urlForImage(innovation.images?.[0])?.url() ?? ''}
                link={`/innovation/${innovation.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationListPage
