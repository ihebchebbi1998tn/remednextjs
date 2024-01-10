import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { PostPayload } from '@/types'

export interface PostPageProps {
  data: PostPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function PostPage({ data, encodeDataAttribute }: PostPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    coverImage,
    description,
    overview,
    tags,
    title,
    slug,
    author,
    date,
    _updatedAt,
  } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <div className="mx-auto md:px-6 max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <div className="container">
            <AppBreadcrumb />
          </div>
          <div
            className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0"
            style={{ height: '24em' }}
          >
            <div
              className="absolute bottom-0 left-0 z-10 w-full h-full"
              style={{
                backgroundImage:
                  'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
              }}
            />
            <Image
              src={urlForImage(coverImage)?.url() || ''}
              alt=""
              className="absolute inset-0 object-cover w-full h-full"
              layout="fill"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4 ">
              {tags &&
                tags.map((tag) => (
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-1 mb-2 text-gray-200 bg-green-500 rounded-full dark:bg-green-500 dark:text-gray-200"
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              <h1 className="text-2xl font-semibold leading-tight text-gray-100 md:text-4xl">
                {title}
              </h1>
              <div className="flex mt-3">
                <Image
                  src={urlForImage(author?.picture)?.url() || ''}
                  className="object-cover w-10 h-10 mr-2 rounded-full"
                  alt=""
                  width="40"
                  height="40"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    {author?.name}
                  </p>
                  {date && (
                    <p className="text-xs font-semibold text-gray-400">
                      {' '}
                      {format(parseISO(date), 'LLLL d, yyyy')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="pb-6 mt-4 font-semibold text-gray-400 border-b-2 border-gray-200">
              {overview && <CustomPortableText value={overview} />}
            </div>
            <div className="pb-6 mt-4 border-b-2 border-gray-200 dark:text-gray-400">
              {description && <CustomPortableText value={description} />}
            </div>
            {/* updated at */}
            {date && (
              <div className="pb-6 mt-4 dark:text-gray-400">
                <p className="text-sm font-semibold text-gray-400">
                  Last updated: {format(parseISO(date), 'LLLL d, yyyy')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
