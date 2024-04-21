/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

interface FrCounterProps {
  start?: number
  max?: number
  className?: string
}

export function FrCounter({ start = 0, className, max = 50 }: FrCounterProps) {
  const count = useMotionValue(start)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, max, { duration: 2 })

    return animation.stop
  }, [])

  return (
    <motion.h1
      className={`${className} px-4 py-2 font-bold text-green-500 rounded w-18`}
    >
      {rounded}
    </motion.h1>
  )
}
