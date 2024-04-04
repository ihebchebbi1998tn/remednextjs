import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import PostListPage from '@/components/pages/post/PostListPage'
import { studioUrl } from '@/sanity/lib/api'
import { loadPosts } from '@/sanity/loader/loadQuery'

const PostListPagePreview = dynamic(
  () => import('@/components/pages/post/PostListPagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadPosts()

  if (draftMode().isEnabled) {
    return <PostListPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have posts yet,{' '}
        <Link href={`${studioUrl}/desk/post`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }

  return <PostListPage data={initial.data} />
}
