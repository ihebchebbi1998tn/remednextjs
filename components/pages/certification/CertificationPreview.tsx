'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { certificationBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { CertificationPayload } from '@/types'

import CertificationPage from './CertificationPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<CertificationPayload | null>
}

export default function CertificationPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<CertificationPayload | null>(
    certificationBySlugQuery,
    params,
    { initial },
  )

  return (
    <CertificationPage data={data!} encodeDataAttribute={encodeDataAttribute} />
  )
}
