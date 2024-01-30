'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { innovationQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { InnovationPayload } from '@/types'

import InnovationListPage from './InnovationListPage'


type Props = {
  initial: QueryResponseInitial<InnovationPayload[]>
}

export default function InnovationPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<InnovationPayload[]>(
    innovationQuery,
    { initial },
  )

  return (
    <InnovationListPage
      data={data!}
      encodeDataAttribute={encodeDataAttribute}
    />
  )
}
