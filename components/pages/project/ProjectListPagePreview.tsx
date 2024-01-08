'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ProjectPayload } from '@/types'

import Project from './ProjectListPage'

type Props = {
  initial: QueryResponseInitial<ProjectPayload[]>
}

export default function ProjectPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ProjectPayload[]>(
    projectsQuery,
    { initial },
  )

  return <Project data={data!} encodeDataAttribute={encodeDataAttribute} />
}