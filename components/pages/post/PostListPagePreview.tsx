'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { postsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PostsPayload } from '@/types'

import PostListPage from './PostListPage'

type Props = {
  initial: QueryResponseInitial<PostsPayload>
}

export default function PostListPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<PostsPayload>(
    postsQuery,
    {},
    {
      initial,
    },
  )

  return <PostListPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
