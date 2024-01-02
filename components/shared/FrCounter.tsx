/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function FrCounter() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, 50, { duration: 2 })

    return animation.stop
  }, [])

  return (
    <motion.h1 className="px-4 py-2 font-bold text-green-500 rounded w-18">
      {rounded}
    </motion.h1>
  )
}
