"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PremiumTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export default function PremiumTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 5,
  error,
}: PremiumTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      <div
        className={`relative rounded-xl border-2 transition-all duration-300 ${
          isFocused
            ? "border-accent-500 shadow-lg shadow-accent-500/20"
            : "border-slate-700 hover:border-slate-600"
        } ${error ? "border-red-500" : ""}`}
      >
        {/* Animated background glow */}
        {isFocused && (
          <motion.div
            layoutId={`glow-${name}`}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/10 via-transparent to-accent-500/10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? placeholder : ""}
          required={required}
          rows={rows}
          className="relative z-10 w-full px-4 pt-6 pb-3 bg-slate-800/50 text-white placeholder-slate-500 rounded-xl outline-none transition-colors duration-300 text-base resize-none"
        />

        {/* Floating label */}
        <motion.label
          htmlFor={name}
          animate={{
            y: isFocused || hasValue ? -24 : 0,
            scale: isFocused || hasValue ? 0.85 : 1,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="absolute left-4 top-4 text-sm font-medium pointer-events-none z-20 origin-left"
          style={{
            color: isFocused ? "#0ea5e9" : "#cbd5e1",
          }}
        >
          {label}
          {required && <span className="text-accent-400 ml-1">*</span>}
        </motion.label>
      </div>

      {/* Error message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
