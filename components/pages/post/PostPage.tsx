'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Download } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

import { AppBreadcrumb } from '@/components/shared/NextBreadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { VideoInView } from '@/components/shared/VideoInView'
import { urlForImage } from '@/sanity/lib/utils'
import type { PostPayload } from '@/types'

import GalleryImage from '../../shared/GalleryImage'

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
    title,
    author,
    date,
    images,
    videos,
    certifications,
    files,
  } = data ?? {}

  useEffect(() => {
    sendGTMEvent({ event: 'Pageview', value: 'post' })
  }, [])

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <div
            className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0"
            style={{ height: '24em' }}
          >
            <Image
              src={urlForImage(coverImage)?.url() || ''}
              alt={title ?? ''}
              className="absolute inset-0 object-cover w-full h-full"
              layout="fill"
            />
          </div>
          <div className="container">
            <div className="mt-4">
              <h1 className="text-2xl font-semibold leading-tight dark:text-gray-200 md:text-4xl">
                {title}
              </h1>
              <div className="flex mt-3">
                <Image
                  src={urlForImage(author?.picture)?.url() || ''}
                  className="object-cover w-10 h-10 mr-2 rounded-full"
                  alt={author?.name ?? ''}
                  width="40"
                  height="40"
                />
                <div>
                  <p className="text-sm font-semibold dark:text-gray-200">
                    {author?.name}
                  </p>
                  {date && (
                    <p className="text-xs font-semibold text-gray-400">
                      {' '}
                      {format(parseISO(date), 'dd/LL/yyyy', {
                        locale: fr,
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-6 mt-4 font-semibold text-gray-400 border-b-2 border-gray-200">
              <p>{overview && <CustomPortableText value={overview} />}</p>
              {/* {tags &&
                tags.map((tag) => (
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-1 m-1 text-gray-200 bg-green-500 rounded-full dark:bg-green-500 dark:text-gray-200"
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))} */}
            </div>
            <div className="pb-6 mt-4 border-b-2 border-gray-200 dark:text-gray-200">
              {description && <CustomPortableText value={description} />}
            </div>
          </div>
          {images && (
            <GalleryImage
              images={
                images?.map((image) => ({
                  src: image.url ?? '',
                  alt: image.alt ?? '',
                })) as any
              }
              title="Images"
            />
          )}
          {videos && (
            <div className="container mt-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
                Videos
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {videos?.map((video) => (
                  <div
                    key={video.url as string}
                    className="relative w-full h-96"
                  >
                    <VideoInView
                      video={video.url as string}
                      className="absolute inset-0 w-full h-full"
                      controls
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {certifications && (
            <GalleryImage
              images={
                certifications?.map((certification) => ({
                  src: certification.url ?? '',
                  alt: certification.title,
                })) as any
              }
              title="Certifications"
            />
          )}
          {files?.length && (
            <h3 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
              Attachments
            </h3>
          )}
          {files?.map((file, index) => {
            return (
              <div key={index}>
                <a
                  href={file.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  <Download size={16} className="mr-1" />
                  file
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PostPage
