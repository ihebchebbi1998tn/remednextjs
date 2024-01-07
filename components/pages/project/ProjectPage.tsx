import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { Breadcrumb } from '@/components/demos/Breadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import author from '@/sanity/schemas/documents/author'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <div className="mx-auto md:px-6 max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <div className="container">
            <Breadcrumb />
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
                    className="inline-flex items-center justify-center px-4 py-1 mb-2 mr-2 text-gray-200 bg-green-500 rounded-full dark:bg-green-500 dark:text-gray-200"
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              <h1 className="text-2xl font-semibold leading-tight text-gray-100 md:text-4xl">
                {title}
              </h1>
              <div className="flex mt-3">
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    {author?.name}
                  </p>
                  {duration && (
                    <p className="text-sm font-semibold text-gray-200">
                      {format(parseISO(duration.start || ''), 'MMMM yyyy')} -{' '}
                      {format(parseISO(duration.end || ''), 'MMMM yyyy')}
                    </p>
                  )}
                  {site && (
                    <p className="text-sm font-semibold text-gray-200">
                      {site}
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
            {duration && (
              <div className="pb-6 mt-4 dark:text-gray-400">
                <p className="text-sm font-semibold text-gray-400">
                  {format(parseISO(duration.start || ''), 'MMMM yyyy')} -{' '}
                  {format(parseISO(duration.end || ''), 'MMMM yyyy')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
