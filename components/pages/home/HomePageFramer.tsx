'use client'

import { motion } from 'framer-motion'

import { ShowcaseProject } from '@/types'

import { ProjectListItem } from './ProjectListItem'

interface HomePageFramerProps {
  showcaseProjects?: ShowcaseProject[]
  width: number
  height: number
}

export function HomePageFramer({
  showcaseProjects,
  width,
  height,
}: HomePageFramerProps) {
  return (
    <div className="container">
      {showcaseProjects?.map((project, i) => (
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
          key={i}
        >
          <ProjectListItem
            project={project}
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
