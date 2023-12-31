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
}

export function PostListItem(props: PostProps) {
  const { post, odd, width, height, readMoreLabel } = props

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
        post?.excerpt ? toPlainText(post.excerpt as PortableTextBlock[]) : ''
      }
      tags={post.tags}
      readMoreLabel={readMoreLabel ?? 'Read more'}
      readMoreLink={href ?? `/posts/${post.slug}`}
      width={width}
      height={height}
    />
  )
}
