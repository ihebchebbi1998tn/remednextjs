import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { InnovationPage } from '@/components/pages/innovation/InnovationPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadInnovation } from '@/sanity/loader/loadQuery'
const InnovationPreview = dynamic(
  () => import('@/components/pages/innovation/InnovationPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: innovation } = await loadInnovation(params.slug)
  const ogImage = urlForOpenGraphImage(innovation?.images?.[0])

  return {
    title: innovation?.title,
    description: innovation?.overview
      ? toPlainText(innovation.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('innovation')
}

export default async function InnovationSlugRoute({ params }: Props) {
  const initial = await loadInnovation(params.slug)

  if (draftMode().isEnabled) {
    return <InnovationPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <InnovationPage data={initial.data} />
}
