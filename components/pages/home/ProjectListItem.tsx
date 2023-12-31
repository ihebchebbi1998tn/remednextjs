import type { PortableTextBlock } from '@portabletext/types'

import type { ShowcaseProject } from '@/types'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'
import { CardReadMore } from '@/components/shared/CardReadMore'
import { toPlainText } from '@portabletext/react'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
  width: number
  height: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd, width, height } = props

  return (
    <CardReadMore
      image={
        urlForImage(project.coverImage)
          ?.height(height)
          .width(width)
          .fit('crop')
          .url() as string
      }
      title={project.title}
      description={
        project?.overview
          ? toPlainText(project.overview as PortableTextBlock[])
          : ''
      }
      tags={project.tags}
      readMoreLabel="Read more"
      readMoreLink={`/projects/${project.slug}`}
      width={width}
      height={height}
    />
  )
}
