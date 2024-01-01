'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export function FrCounter() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, 50, { duration: 2 })

    return animation.stop
  }, [])

  return <motion.h1>{rounded}</motion.h1>
}
