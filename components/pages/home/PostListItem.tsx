import type { PortableTextBlock } from '@portabletext/types'

import type { ShowcasePost } from '@/types'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import { CardReadMore } from '@/components/shared/CardReadMore'
import { toPlainText } from '@portabletext/react'

interface PostProps {
  post: ShowcasePost
  odd: number
  width: number
  height: number
  readMoreLabel?: string
  className?: string
}

export function PostListItem(props: PostProps) {
  const { className, post, odd, width, height, readMoreLabel } = props

  const href = resolveHref(post._type, post.slug)

  return (
    <CardReadMore
      image={
        urlForImage(post.coverImage)
          ?.height(height)
          .width(width)
          .fit('crop')
          .url() as string
      }
      title={post.title}
      description={
        post?.overview ? toPlainText(post.overview as PortableTextBlock[]) : ''
      }
      tags={post.tags}
      readMoreLabel={readMoreLabel ?? 'Voir détails'}
      readMoreLink={href ?? `/posts/${post.slug}`}
      width={width}
      height={height}
      className={`${odd ? 'text-white' : 'text-black'} ${className ?? ''}`}
    />
  )
}
