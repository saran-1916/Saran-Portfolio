"use client";

import { motion } from "framer-motion";

interface AnimatedDividerProps {
  width?: string;
  center?: boolean;
  animated?: boolean;
}

export default function AnimatedDivider({
  width = "w-20",
  center = false,
  animated = true,
}: AnimatedDividerProps) {
  return (
    <motion.div
      className={`h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full ${width} ${center ? "mx-auto" : ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      animate={animated ? { opacity: [1, 0.5, 1] } : undefined}
      transition={
        animated
          ? { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
          : { duration: 0.8, delay: 0.2 }
      }
    />
  );
}
