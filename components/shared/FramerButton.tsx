'use client'

import { motion } from "framer-motion";

function FramerButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
    >
      Click me!
    </motion.button>
  );
}

export default FramerButton;
