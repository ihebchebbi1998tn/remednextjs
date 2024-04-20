'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { innovationsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { InnovationsPayload } from '@/types'

import InnovationListPage from './InnovationListPage'

type Props = {
  initial: QueryResponseInitial<InnovationsPayload>
}

export default function InnovationPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<InnovationsPayload>(
    innovationsQuery,
    {},
    { initial },
  )

  return (
    <InnovationListPage data={data} encodeDataAttribute={encodeDataAttribute} />
  )
}
