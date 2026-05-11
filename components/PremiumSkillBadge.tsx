"use client";

import { motion } from "framer-motion";

interface PremiumSkillBadgeProps {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon?: React.ReactNode;
  index?: number;
}

const levelColors = {
  Expert: "from-accent-500 to-accent-600",
  Advanced: "from-accent-400 to-accent-500",
  Intermediate: "from-accent-300 to-accent-400",
};

export default function PremiumSkillBadge({
  name,
  level,
  icon,
  index = 0,
}: PremiumSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -4 }}
      className="relative group cursor-pointer"
    >
      <div className="relative rounded-xl p-4 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${levelColors[level]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          {icon && (
            <motion.div
              className="text-accent-400"
              whileHover={{ rotate: 10, scale: 1.2 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1">
            <p className="font-semibold text-slate-100 text-sm">{name}</p>
            <p className="text-xs text-accent-400 font-medium">{level}</p>
          </div>
        </div>

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-accent-500/0 pointer-events-none"
          whileHover={{
            borderColor: "rgba(14, 165, 233, 0.5)",
            boxShadow: "0 0 20px rgba(14, 165, 233, 0.2)",
          }}
        />
      </div>
    </motion.div>
  );
}
