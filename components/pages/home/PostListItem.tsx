import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ShowcasePost } from '@/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import { CardReadMore } from '@/components/shared/CardReadMore'
import { toPlainText } from '@portabletext/react'

interface PostProps {
  post: ShowcasePost
  odd: number
  width: number
  height: number
}

export function PostListItem(props: PostProps) {
  const { post, odd, width, height } = props

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
      readMoreLabel="Read more"
      readMoreLink={`/posts/${post.slug}`}
      width={width}
      height={height}
    />
  )
}
