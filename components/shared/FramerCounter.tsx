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
  toFixed = 0,
  damping = 100,
  stiffness = 100,
  pxPerDigit = 25,
  suffix,
}: {
  value: number
  direction?: 'up' | 'down'
  toFixed?: number
  damping?: number
  stiffness?: number
  pxPerDigit?: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  })
  const isInView = useInView(ref, { once: true })

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
            latest.toFixed(toFixed),
          )
        }
      }),
    [springValue, toFixed],
  )

  return (
    <div className={`flex gap-x-2`}>
      <span ref={ref} className={` inline-block`} 
      style={{width: `${value.toString().length * pxPerDigit}px`}}
      />
      {suffix && <span>{suffix}</span>}
    </div>
  )
}

export default FramerCounter
