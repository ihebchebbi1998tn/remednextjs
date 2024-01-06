'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { HomePagePayload } from '@/types'

import Project from './ProjectListPage'

type Props = {
  initial: QueryResponseInitial<HomePagePayload | null>
}

export default function ProjectPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<HomePagePayload | null>(
    projectBySlugQuery,
    { initial },
  )

  return <Project data={data!} encodeDataAttribute={encodeDataAttribute} />
}
