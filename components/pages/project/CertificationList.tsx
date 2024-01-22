'use client'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Share from 'yet-another-react-lightbox/plugins/share'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import type { CertificationPayload } from '@/types'

export interface CertificationListProps {
  certifications: CertificationPayload[]
  title?: string
}

export function CertificationList({
  certifications = [],
  title,
}: CertificationListProps) {
  // Default to an empty object to allow previews on non-existent documents
  const [index, setIndex] = useState(-1)

  if (!certifications?.length) {
    return null
  }

  return (
    <div className="container mt-4">
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
        {title}
      </h3>
      <PhotoAlbum
        photos={certifications?.map((certification) => ({
          src: certification.url ?? '',
          share: {
            url: certification.url ?? '',
            title: certification.title,
            description: certification.overview,
          },
          title: certification.title,
          description: certification.overview,
          width: 1,
          height: 1,
        }))}
        layout="columns"
        targetRowHeight={10}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={certifications?.map((certification) => ({
          src: certification.url ?? '',
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
  )
}

export default CertificationList
