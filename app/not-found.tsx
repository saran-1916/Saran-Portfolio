"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeBackground from "@/components/HomeBackground";
import PremiumButton from "@/components/PremiumButton";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      <HomeBackground />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-accent-400 text-sm font-bold uppercase tracking-widest mb-6"
            >
              404 — Page Not Found
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
            >
              Lost in
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                the Blueprint
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-[#475569] max-w-md mx-auto mb-12 leading-relaxed"
            >
              This page doesn't exist — or was moved. Let's get you back to something real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <PremiumButton label="Back to Home" href="/" variant="primary" size="lg" />
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
