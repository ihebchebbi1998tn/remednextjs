'use client'

import { motion } from 'framer-motion'
import { PostListItem } from './PostListItem'
import { PostPayload } from '@/types'

interface HomePageFramerProps {
  showcasePosts?: PostPayload[]
  width: number
  height: number
}

export function HomePageFramer({
  showcasePosts,
  width,
  height,
}: HomePageFramerProps) {

  return (
    <div className="container">
      {showcasePosts?.map((post, i) => (
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: i % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <PostListItem
            post={post}
            odd={i % 2}
            width={width}
            height={height}
            key={i}
          />
        </motion.div>
      ))}
    </div>
  )
}
