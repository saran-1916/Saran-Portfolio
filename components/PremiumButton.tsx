"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PremiumButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
}

export default function PremiumButton({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
}: PremiumButtonProps) {
  const baseClasses =
    "relative font-semibold rounded-xl overflow-hidden group transition-all duration-300 flex items-center justify-center gap-2";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:shadow-lg hover:shadow-accent-500/50",
    secondary:
      "border border-accent-500/50 text-accent-400 hover:border-accent-400 hover:shadow-lg hover:shadow-accent-500/20",
    tertiary:
      "text-accent-400 hover:text-accent-300 border-b border-accent-500/30 hover:border-accent-400",
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <>
      <span>{label}</span>
      <motion.svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </motion.svg>

      {/* Glow effect for primary */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-600/0 via-accent-400/0 to-accent-600/0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          href={href}
          target={target}
          rel={rel}
          className={buttonClasses}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </motion.button>
  );
}
