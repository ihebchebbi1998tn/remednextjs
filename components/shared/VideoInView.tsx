/* eslint-disable @next/next/no-img-element */
'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatProps {
  video?: string
  className?: string
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  tabIndex?: number
  controls?: boolean
}

export function VideoInView({
  video,
  className,
  loop = true,
  muted = true,
  playsInline = true,
  tabIndex = -1,
  controls = false,
}: StatProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <video
      ref={ref}
      className={`${className}`}
      preload={isInView ? 'auto' : 'none'}
      autoPlay={isInView}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      tabIndex={tabIndex}
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}
