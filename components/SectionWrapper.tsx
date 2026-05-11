"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  withGradient?: boolean;
  withParticles?: boolean;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  withGradient = false,
  withParticles = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden ${className}`}
    >
      {/* Ambient gradient background */}
      {withGradient && (
        <>
          <motion.div
            className="absolute top-0 -right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 -left-1/3 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
