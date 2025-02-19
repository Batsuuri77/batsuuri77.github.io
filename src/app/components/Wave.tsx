"use client";

import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      className="inline-block"
      role="img"
      aria-labelledby="wave"
      animate={{
        rotate: [0, 20, -10, 20, -5, 10, 0], // Creates a natural waving effect
      }}
      transition={{
        duration: 1.5, // Adjust duration for a smoother wave
        repeat: Infinity, // Loops indefinitely
        repeatType: "mirror", // Ensures a back-and-forth motion
        ease: "easeInOut",
      }}
    >
      👋
    </motion.span>
  );
};

export default WavingHand;
