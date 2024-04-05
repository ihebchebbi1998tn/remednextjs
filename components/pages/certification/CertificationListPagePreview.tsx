'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { certificationsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { CertificationPayload } from '@/types'

import Certification from './CertificationListPage'

type Props = {
  initial: QueryResponseInitial<CertificationPayload[]>
}

export default function CertificationPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<CertificationPayload[]>(
    certificationsQuery,
    { initial },
  )

  return <Certification data={data!} encodeDataAttribute={encodeDataAttribute} />
}
