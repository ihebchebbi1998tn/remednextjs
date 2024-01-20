'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { opportunitiesQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { OpportunityPayload } from '@/types'

import Opportunity from './OpportunityListPage'

type Props = {
  initial: QueryResponseInitial<OpportunityPayload[]>
}

export default function OpportunityPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<OpportunityPayload[]>(
    opportunitiesQuery,
    { initial },
  )

  console.log('data: ', data);
  return <Opportunity data={data!} encodeDataAttribute={encodeDataAttribute} />
}
