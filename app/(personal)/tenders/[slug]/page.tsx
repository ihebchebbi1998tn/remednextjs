import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { OpportunityPage } from '@/components/pages/opportunity/OpportunityPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadOpportunity } from '@/sanity/loader/loadQuery'
const OpportunityPreview = dynamic(
  () => import('@/components/pages/opportunity/OpportunityPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: opportunity } = await loadOpportunity(params.slug)
  const ogImage = urlForOpenGraphImage(opportunity?.image)

  return {
    title: opportunity?.title,
    description: opportunity?.overview
      ? toPlainText(opportunity.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('opportunity')
}

export default async function OpportunitySlugRoute({ params }: Props) {
  const initial = await loadOpportunity(params.slug)

  if (draftMode().isEnabled) {
    return <OpportunityPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <OpportunityPage data={initial.data} />
}
