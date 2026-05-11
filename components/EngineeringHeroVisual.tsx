"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function EngineeringHeroVisual() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-80 h-80 md:w-96 md:h-96"
        style={{ filter: "drop-shadow(0 0 80px rgba(251, 191, 36, 0.08))" }}
      >
        <defs>
          {/* Brushed metal gradient - titanium aesthetic */}
          <linearGradient id="brushedMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.04" />
          </linearGradient>

          {/* Transmission synchronization gradient */}
          <radialGradient id="syncGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#94a3b8" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0.01" />
          </radialGradient>

          {/* Precision accent glow */}
          <radialGradient id="precisionGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity={isHovering ? "0.12" : "0.06"} />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>

          {/* Blueprint line gradient */}
          <linearGradient id="blueprintLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>

          {/* Chrome highlight */}
          <linearGradient id="chromeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background transmission sync glow */}
        <circle cx="200" cy="200" r="170" fill="url(#syncGradient)" />

        {/* Precision accent halo */}
        <circle cx="200" cy="200" r="165" fill="url(#precisionGlow)" />

        {/* Outer drivetrain ring - slowest rotation (system stability) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="0.8"
            opacity="0.25"
          />
          <circle
            cx="200"
            cy="200"
            r="145"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="0.4"
            opacity="0.15"
          />
        </motion.g>

        {/* Secondary transmission ring - counter rotation */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="110"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="0.8"
            opacity="0.35"
          />
          <circle
            cx="200"
            cy="200"
            r="105"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="0.4"
            opacity="0.2"
          />
        </motion.g>

        {/* Precision shaft - innermost rotation (drive mechanism) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="65"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="60"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </motion.g>

        {/* Precision measurement axes - engineering blueprint style */}
        {/* Horizontal axis */}
        <motion.line
          x1="85"
          y1="200"
          x2="315"
          y2="200"
          stroke="url(#blueprintLine)"
          strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical axis */}
        <motion.line
          x1="200"
          y1="85"
          x2="200"
          y2="315"
          stroke="url(#blueprintLine)"
          strokeWidth="0.8"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Diagonal axes - drivetrain alignment geometry */}
        <motion.line
          x1="120"
          y1="120"
          x2="280"
          y2="280"
          stroke="#cbd5e1"
          strokeWidth="0.5"
          opacity="0.2"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />

        <motion.line
          x1="280"
          y1="120"
          x2="120"
          y2="280"
          stroke="#cbd5e1"
          strokeWidth="0.5"
          opacity="0.2"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Transmission synchronization markers */}
        <motion.circle
          cx="200"
          cy="75"
          r="1.5"
          fill="#fbbf24"
          animate={{ opacity: isHovering ? [0.4, 0.8, 0.4] : [0.15, 0.3, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="325"
          cy="200"
          r="1.5"
          fill="#fbbf24"
          animate={{ opacity: isHovering ? [0.4, 0.8, 0.4] : [0.15, 0.3, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />
        <motion.circle
          cx="200"
          cy="325"
          r="1.5"
          fill="#fbbf24"
          animate={{ opacity: isHovering ? [0.4, 0.8, 0.4] : [0.15, 0.3, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.circle
          cx="75"
          cy="200"
          r="1.5"
          fill="#fbbf24"
          animate={{ opacity: isHovering ? [0.4, 0.8, 0.4] : [0.15, 0.3, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.05 }}
        />

        {/* Center precision reference point */}
        <motion.circle
          cx="200"
          cy="200"
          r="2.5"
          fill="#e2e8f0"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Chrome highlight edge */}
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="url(#chromeHighlight)"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>

      {/* Advanced parallax depth effect - mechanical responsive */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 180, damping: 28 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(251, 191, 36, 0.05), transparent 65%)",
            borderRadius: "50%",
          }}
        />
      )}
    </div>
  );
}
