import { Download } from 'lucide-react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import GalleryImage from '@/components/shared/GalleryImage'
import { AppBreadcrumb } from '@/components/shared/NextBreadcrumb'
import { VideoInView } from '@/components/shared/VideoInView'
import type { PagePayload } from '@/types'

import WebAnalytics from '../../global/WebAnalytics'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, images, videos, certifications, files } =
    data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <WebAnalytics value="/page" event="Pageview" />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            {title}
          </h2>
          <CustomPortableText
            paragraphClasses="mt-2 text-lg leading-8 text-gray-600"
            value={overview ?? []}
          />
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {body && (
              <CustomPortableText
                paragraphClasses="dark:text-gray-400 text-xl text-gray-600"
                value={body}
              />
            )}
          </div>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
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
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
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
    </div>
  )
}

export default Page
