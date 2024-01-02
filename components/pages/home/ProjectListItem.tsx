import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import { CardReadMore } from '@/components/shared/CardReadMore'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
  width: number
  height: number
  readMoreLabel?: string
  className?: string
}

export function ProjectListItem(props: ProjectProps) {
  const { project, odd, width, height, readMoreLabel, className } = props
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
      className={className}
    />
  )
}
