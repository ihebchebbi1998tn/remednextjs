'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { opportunityBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { OpportunityPayload } from '@/types'

import ProjectPage from './OpportunityPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<OpportunityPayload | null>
}

export default function ProjectPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<OpportunityPayload | null>(
    opportunityBySlugQuery,
    params,
    { initial },
  )

  return <ProjectPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
