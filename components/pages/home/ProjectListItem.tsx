import type { PortableTextBlock } from '@portabletext/types'

import type { ShowcaseProject } from '@/types'

import Image from 'next/image'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import { CardReadMore } from '@/components/shared/CardReadMore'
import { toPlainText } from '@portabletext/react'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
  width: number
  height: number
  readMoreLabel?: string
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd, width, height, readMoreLabel } = props
  const href = resolveHref(project._type, project.slug)

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
      readMoreLabel={readMoreLabel ?? 'Read more'}
      readMoreLink={href ?? `/posts/${project.slug}`}
      width={width}
      height={height}
    />
  )
}
