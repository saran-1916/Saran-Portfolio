"use client";

import { motion } from "framer-motion";

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Cinematic spotlight gradients - left side */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/20 via-accent-500/5 to-transparent rounded-full blur-3xl"
        animate={{
          x: [-100, 50, -100],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cinematic spotlight gradients - right side */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-accent-400/15 via-accent-500/5 to-transparent rounded-full blur-3xl"
        animate={{
          x: [100, -50, 100],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent spotlight bottom - subtle */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-t from-accent-500/10 via-transparent to-transparent rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle moving light beams effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/5 to-transparent" />
      </motion.div>

      {/* Grid texture overlay - very subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
    </div>
  );
}
