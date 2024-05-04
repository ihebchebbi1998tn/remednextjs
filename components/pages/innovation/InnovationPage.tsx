import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Download } from 'lucide-react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { AppBreadcrumb } from '@/components/shared/NextBreadcrumb'
import { VideoInView } from '@/components/shared/VideoInView'
import type { InnovationPayload } from '@/types'

import WebAnalytics from '../../global/WebAnalytics'
import GalleryImage from '../../shared/GalleryImage'

export interface InnovationPageProps {
  data: InnovationPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function InnovationPage({
  data,
  encodeDataAttribute,
}: InnovationPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
    description,
    certifications = [],
    images = [],
    videos = [],
    files = [],
  } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <WebAnalytics value="/innovations" event="Pageview" />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <div className="relative w-full mx-auto mt-8 mb-4 max-w-screen md:mb-0">
            <div className="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
              <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                {title}
              </h2>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <CustomPortableText value={description ?? []} />
              </p>
            </div>
            <hr className="mb-6 border-gray-200 dark:border-gray-700" />
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

export default InnovationPage
