'use client'
import { motion } from 'framer-motion'

interface FrTextStaggerProps {
  text?: string
}
export function FrTextStagger(props: FrTextStaggerProps) {
  const { text = '' } = props
  if (!text) {
    return null
  }
  return [...text].map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.25,
        delay: i / 10,
      }}
      key={i}
    >
      {el}{' '}
    </motion.span>
  ))
}
