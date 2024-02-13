import { CardReadMore } from '@/components/shared/CardReadMore'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { ShowcasePost } from '@/types'

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
      description={<CustomPortableText value={post?.overview ?? []} />}
      tags={post.tags}
      readMoreLabel={readMoreLabel ?? 'Voir détails'}
      readMoreLink={href ?? `/posts/${post.slug}`}
      width={width}
      height={height}
      className={`${odd ? 'text-white' : 'text-black'} ${className ?? ''}`}
    />
  )
}
