'use client'

import { motion } from 'framer-motion'

export function FrButton() {
  return (
    <motion.button
      className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
      whileTap={{ scale: 0.85 }}
    >
      Contactez nous !
    </motion.button>
  )
}
