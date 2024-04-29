/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface FrCounterProps {
  start?: number
  max?: number
  className?: string
}

export function FrCounter({ start = 0, className, max = 50 }: FrCounterProps) {
  const count = useMotionValue(start)
  const rounded = useTransform(count, Math.round)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(() => {
    if (!isInView) return
    const animation = animate(count, max, { duration: 2 })

    return animation.stop
  }, [isInView, count, max])

  return (
    <motion.span
      className={`${className} px-2`}
      ref={ref}
    >
      {rounded}
    </motion.span>
  )
}
