"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CALL_TO_ACTION } from "@/lib/constants";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700">
              🚀 Mechanical Design Engineer & Product Builder
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
          >
            <span className="block">Systems-focused engineer</span>
            <span className="block bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
              building with CAD & AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-xl text-slate-600 mb-8 leading-relaxed"
          >
            With 5+ years of mechanical design experience, I craft innovative
            solutions using CAD, engineering simulation, and AI-assisted
            workflows. I design with systems thinking and build things that
            matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-600 to-accent-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              {CALL_TO_ACTION}
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
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
            >
              Get in touch
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">5+</div>
              <div className="text-sm text-slate-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">10+</div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">∞</div>
              <div className="text-sm text-slate-600">Always Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
