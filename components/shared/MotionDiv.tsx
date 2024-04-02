'use client'

import { motion } from 'framer-motion'

export function MotionDiv({ children, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
