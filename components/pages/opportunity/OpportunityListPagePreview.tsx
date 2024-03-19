'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { opportunitiesPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { OpportunitiesPayload } from '@/types'

import Opportunity from './OpportunityListPage'

type Props = {
  initial: QueryResponseInitial<OpportunitiesPayload>
}

export default function OpportunityPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<OpportunitiesPayload>(
    opportunitiesPageQuery,
    {},
    { initial },
  )

  return <Opportunity data={data!} encodeDataAttribute={encodeDataAttribute} />
}
