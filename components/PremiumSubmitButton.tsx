"use client";

import { motion } from "framer-motion";

interface PremiumSubmitButtonProps {
  isLoading: boolean;
  isSuccess: boolean;
  disabled?: boolean;
}

export default function PremiumSubmitButton({
  isLoading,
  isSuccess,
  disabled,
}: PremiumSubmitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.button
        type="submit"
        disabled={disabled || isLoading}
        className="relative w-full px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!isLoading && !disabled ? { scale: 1.02 } : {}}
        whileTap={!isLoading && !disabled ? { scale: 0.98 } : {}}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500" />

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-400 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={!isLoading && !disabled ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-accent-400 opacity-0 group-hover:opacity-50"
          animate={{
            boxShadow: [
              "0 0 20px rgba(15, 118, 110, 0)",
              "0 0 40px rgba(15, 118, 110, 0.3)",
              "0 0 20px rgba(15, 118, 110, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Content */}
        <motion.div
          className="relative flex items-center justify-center gap-2 h-6"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLoading || isSuccess ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <span>Send Message</span>
        </motion.div>

        {/* Loading state */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-6 h-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {/* Success state */}
        {isSuccess && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>
        )}
      </motion.button>

      {/* Status messages */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center text-sm font-medium"
        >
          ✓ Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}
    </motion.div>
  );
}
