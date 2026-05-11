"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PremiumSocialCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
  index: number;
}

export default function PremiumSocialCard({
  title,
  icon,
  href,
  description,
  index,
}: PremiumSocialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        rotateX: isHovered ? mousePosition.y : 0,
        rotateY: isHovered ? -mousePosition.x : 0,
        transformPerspective: "1000px",
      }}
      className="relative group block"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 min-h-64 flex flex-col justify-between transition-all duration-300"
        animate={{
          borderColor: isHovered ? "#0ea5e9" : "#334155",
          boxShadow: isHovered
            ? "0 20px 60px rgba(14, 165, 233, 0.3), 0 0 60px rgba(14, 165, 233, 0.1)"
            : "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Background glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-transparent opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Icon container */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-500/10 flex items-center justify-center text-accent-400 mb-4 border border-accent-500/30 group-hover:border-accent-500/60 transition-colors duration-300"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <motion.h3
            animate={{
              color: isHovered ? "#0ea5e9" : "#e2e8f0",
            }}
            className="text-lg font-semibold mb-2 transition-colors duration-300"
          >
            {title}
          </motion.h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>

        {/* Arrow icon */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0.5,
            x: isHovered ? 4 : 0,
          }}
          className="relative z-10 mt-4 text-accent-400"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
