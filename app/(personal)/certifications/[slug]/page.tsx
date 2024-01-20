import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { CertificationPage } from '@/components/pages/certification/CertificationPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadCertification } from '@/sanity/loader/loadQuery'
const CertificationPreview = dynamic(
  () => import('@/components/pages/certification/CertificationPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: certification } = await loadCertification(params.slug)
  const ogImage = urlForOpenGraphImage(certification?.coverImage)

  return {
    title: certification?.title,
    description: certification?.overview
      ? toPlainText(certification.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('certification')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadCertification(params.slug)

  if (draftMode().isEnabled) {
    return <CertificationPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <CertificationPage data={initial.data} />
}
