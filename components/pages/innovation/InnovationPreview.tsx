'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { innovationBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { InnovationPayload } from '@/types'

import InnovationPage from './InnovationPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<InnovationPayload | null>
}

export default function ProjectPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<InnovationPayload | null>(
    innovationBySlugQuery,
    params,
    { initial },
  )

  return <InnovationPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
