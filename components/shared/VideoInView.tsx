/* eslint-disable @next/next/no-img-element */
'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatProps {
  video?: string
}

export function VideoInView({ video }: StatProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <div className="relative">
      <video
        ref={ref}
        className="object-cover w-full h-full bg-gray-50 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"
        preload={isInView ? 'auto' : 'none'}
        autoPlay={isInView}
        loop
        muted
        playsInline
        tabIndex={-1}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}
