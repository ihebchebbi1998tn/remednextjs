import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { urlForImage } from '@/sanity/lib/utils'
import type { PostPayload } from '@/types'

export interface PostListPageProps {
  data: PostPayload[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function PostListPage({ data, encodeDataAttribute }: PostListPageProps) {
  // Default to an empty object to allow previews on non-existent documents

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Apprenez-en davantage sur nos activités et nos dernières actualités.
          </p>
          <div className="mt-8 space-y-20 lg:space-y-20">
            {data.map((post) => {
              const coverImage = urlForImage(post.coverImage)?.url()
              return (
                <article
                  key={post._id}
                  className="relative flex flex-col gap-8 isolate lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={coverImage || ''}
                      alt=""
                      className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50"
                      width={384}
                      height={384}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs gap-x-4">
                      {post.date && (
                        <time dateTime={post.date} className="text-gray-500">
                          {format(parseISO(post.date), 'dd/LL/yyyy', {
                            locale: fr,
                          })}
                        </time>
                      )}
                      {post.tags?.map((tag) => (
                        <Link
                          key={tag}
                          href={post.slug}
                          className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <div className="relative max-w-xl group">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-300 group-hover:text-gray-600">
                        <Link href={`posts/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {post?.overview ? toPlainText(post?.overview) : ''}
                      </p>
                    </div>
                    <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                      <div className="relative flex items-center gap-x-4">
                        <Image
                          src={urlForImage(post?.author?.picture)?.url() || ''}
                          alt={post?.author?.name || ''}
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900 dark:text-gray-500">
                            <Link href="#">
                              <span className="absolute inset-0" />
                              {post?.author?.name}
                            </Link>
                          </p>
                          <p className="text-gray-600">{post?.author?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostListPage
