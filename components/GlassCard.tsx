"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  index?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = true,
  index = 0,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.1 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`relative rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white shadow-sm overflow-hidden transition-all duration-300 ${className}`}
      {...motionProps}
    >
      {/* Background glow */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Border glow on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-2xl border border-accent-500/0 pointer-events-none"
          whileHover={{
            borderColor: "rgba(15,118,110,0.4)",
            boxShadow: "0 0 30px rgba(15,118,110,0.12)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
