'use client'

import { motion } from 'framer-motion'

export function FrButton() {
  return (
    <motion.button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      whileTap={{ scale: 0.85 }}
    >
      Click me!
    </motion.button>
  )
}
