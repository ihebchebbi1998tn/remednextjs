'use client'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

/**
 *
 * @param root0
 * @param root0.value
 */
export function FramerCounter({
  value,
  direction = 'up',
}: {
  value: number
  direction?: 'up' | 'down'
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value)
    }
  }, [motionValue, isInView, direction, value])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            latest.toFixed(0),
          )
        }
      }),
    [springValue],
  )

  return <span ref={ref} />
}

export default FramerCounter