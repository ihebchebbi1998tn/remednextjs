'use client'

import 'yet-another-react-lightbox/styles.css'
import "yet-another-react-lightbox/plugins/thumbnails.css";

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from 'yet-another-react-lightbox/plugins/share'
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { urlForImage } from '@/sanity/lib/utils';
import type { CertificationPayload } from '@/types'

export interface CertificationListPageProps {
  data: CertificationPayload[]
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function CertificationListPage({
  data,
  encodeDataAttribute,
}: CertificationListPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const [index, setIndex] = useState(-1)

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            Certifications
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about our certifications and collaborations.
          </p>
          <div className="mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
            
              <PhotoAlbum
                photos={data.map((certification) => ({
                  src: urlForImage(certification.coverImage)?.url() ?? '',
                  share: {
                    url: urlForImage(certification.coverImage)?.url() ?? '',
                    title: certification.title,
                    description: certification.overview,
                  },
                  title: certification.title,
                  description: certification.overview,
                  width: 5,
                  height: 5,
                }))}
                layout="rows"
                targetRowHeight={250}
                onClick={({ index }) => setIndex(index)}
              />

              <Lightbox
                slides={data.map((certification) => ({
                  src: urlForImage(certification.coverImage)?.url() ?? '',
                  title: certification.title,
                  description: certification.overview,
                }))}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Download, Thumbnails, Zoom, Share]}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationListPage
