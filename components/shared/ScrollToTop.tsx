'use client'
import {
  motion,
  useAnimationControls,
  useScroll,
  Variants,
} from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const ScrollToTopContainerVariants: Variants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  hide: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const ScrollToTop = () => {
  const { scrollYProgress } = useScroll()

  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.1) {
        controls.start('show')
      } else {
        controls.start('hide')
      }
    })
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.div
      className={cn(
        'fixed bottom-0 right-0 z-50 flex items-center justify-center mb-3 mr-3 rounded-full bg-green-500',
        'md:mr-4 md:mb-4',
        'lg:mr-8 lg:mb-8',
      )}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
    >
      <Button
        className="flex items-center justify-center p-2 bg-green-500 rounded-full shadow-sm focus:ring-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        onClick={scrollToTop}
      >
        <ChevronUp className="text-white " />
      </Button>
    </motion.div>
  )
}
