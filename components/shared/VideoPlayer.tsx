'use client'
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  url: string
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  return <ReactPlayer url={url} />
}
