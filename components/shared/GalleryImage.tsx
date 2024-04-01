'use client'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import { useCallback,useState } from 'react'
import PhotoAlbum, {PhotoAlbumProps} from 'react-photo-album'
import Lightbox, {LightboxProps} from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Download from 'yet-another-react-lightbox/plugins/download'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Share from 'yet-another-react-lightbox/plugins/share'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import type { GalleryImagePayload } from '@/types'

export interface GalleryImageProps {
  images: GalleryImagePayload[]
  title?: string
  photoAlbumProps?: Omit<PhotoAlbumProps, 'photos' | 'layout'>
  lightboxProps?: Omit<LightboxProps, 'slides' | 'open' | 'index' | 'close' | 'plugins'>
}

export function GalleryImage({
  images = [],
  title,
  photoAlbumProps,
  lightboxProps,
}: GalleryImageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const [index, setIndex] = useState(-1)

  const onImageClick = useCallback(
    (index: number, photo: any, event: any) => {
      setIndex(index)
      photoAlbumProps?.onClick?.({index, photo, event})
    }
  , [photoAlbumProps])

  if (!images?.length) {
    return null
  }

  return (
    <div className="container mt-4">
      {title && (
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
          {title}
        </h3>
      )}
      <PhotoAlbum
        photos={images?.map((image) => ({
          src: image.src ?? '',
          share: {
            url: image.src ?? '',
            title: image.title,
            description: image.alt,
          },
          title: image.title,
          description: image.alt,
          width: 1,
          height: 1,
        }))}
        layout="columns"
        targetRowHeight={10}
        {...photoAlbumProps}
        onClick={({ index, photo, event }) => onImageClick(index, photo, event)}
      />

      <Lightbox
        slides={images?.map((image) => ({
          src: image.src ?? '',
          title: image.title,
          description: image.alt,
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Download, Thumbnails, Zoom, Share]}
        {...lightboxProps}
      />
    </div>
  )
}

export default GalleryImage
