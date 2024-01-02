'use client'

import { motion } from 'framer-motion'

export function FrButton() {
  return (
    <motion.button
      className="px-4 py-2 font-bold text-white bg-red-800 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
      whileTap={{ scale: 0.85 }}
    >
      Click me!
    </motion.button>
  )
}
