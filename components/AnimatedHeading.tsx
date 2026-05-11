"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  children: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  level?: "h1" | "h2" | "h3";
}

export default function AnimatedHeading({
  children,
  highlight,
  subtitle,
  center = false,
  level = "h2",
}: AnimatedHeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const words = children.split(" ");
  const HeadingTag = level;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${center ? "text-center" : ""}`}
    >
      <HeadingTag
        className={`
          ${level === "h1" ? "text-5xl sm:text-6xl lg:text-7xl" : ""}
          ${level === "h2" ? "text-4xl sm:text-5xl lg:text-6xl" : ""}
          ${level === "h3" ? "text-2xl sm:text-3xl lg:text-4xl" : ""}
          font-bold leading-tight mb-4 text-slate-100
        `}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={
              highlight && word.toLowerCase() === highlight.toLowerCase()
                ? "bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent"
                : ""
            }
          >
            {word}{" "}
          </motion.span>
        ))}
      </HeadingTag>

      {subtitle && (
        <motion.p
          variants={wordVariants}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mt-6"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
