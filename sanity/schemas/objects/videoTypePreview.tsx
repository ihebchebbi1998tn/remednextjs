import { Flex, Text } from '@sanity/ui'
import VideoPlayer from 'react-player'
import type { PreviewProps } from 'sanity'

export function videoTypePreview(props: PreviewProps) {
  const { title: url } = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? (
        <VideoPlayer url={url} />
      ) : (
        <Text>Add a Video URL</Text>
      )}
    </Flex>
  )
}
