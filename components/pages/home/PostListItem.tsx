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

interface PostProps {
  post: ShowcasePost
  odd: number
}

export function PostListItem(props: PostProps) {
  const { post, odd } = props

  return (
    <Card
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.slug}</CardDescription>
        <Image
          src={
            urlForImage(post.coverImage)
              ?.height(350)
              .width(350)
              .fit('crop')
              .url() as string
          }
          width={350}
          height={350}
          alt={post.title ?? 'Cover image'}
        />
      </CardHeader>
      <CardContent>
        <CardDescription>
          <CustomPortableText value={post.excerpt as PortableTextBlock[]} />
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-2">
        {post.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}
