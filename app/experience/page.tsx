"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceBackground from "@/components/backgrounds/ExperienceBackground";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedDivider from "@/components/AnimatedDivider";
import TimelineItem from "@/components/TimelineItem";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      {/* Animated background */}
      <ExperienceBackground />

      {/* Content */}
      <div className="relative z-20">
        <Header />

        <main className="relative z-10">
          {/* CINEMATIC HERO SECTION */}
          <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-5xl mx-auto text-center"
            >
              {/* Accent line reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent mb-12 origin-center"
              />

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight"
              >
                Career Timeline
                <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                  Professional Journey
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl font-light text-[#475569] max-w-3xl mx-auto leading-relaxed mb-12"
              >
                5+ years of progressive mechanical engineering experience, from design excellence to technical leadership, with expertise in CAD architecture and systems thinking.
              </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 text-[#475569]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </section>

          {/* TIMELINE SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-accent-400 via-accent-400 to-transparent mb-8 origin-left"
                  viewport={{ once: true }}
                />
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Career Evolution</h2>
                <p className="text-[#475569] text-lg">
                  Progression through roles and responsibilities.
                </p>
              </motion.div>

              {/* Experience items */}
              <div className="space-y-16">
                {experienceData.map((entry, idx) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TimelineItem
                      entry={entry}
                      isLast={idx === experienceData.length - 1}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* STATS SECTION */}
          <SectionWrapper>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-accent-400 via-accent-400 to-transparent mb-8 origin-left"
                  viewport={{ once: true }}
                />
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">By The Numbers</h2>
                <p className="text-[#475569] text-lg">
                  Key metrics and accomplishments.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "CAD Platforms", value: "6+" },
                  { label: "Industries", value: "3+" },
                  { label: "Design Configs", value: "36+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8 text-center">
                        <p className="text-5xl font-bold text-accent-400 mb-2">
                          {stat.value}
                        </p>
                        <p className="text-[#475569] text-sm font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* PREMIUM CTA SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent mb-12 origin-center"
                  viewport={{ once: true }}
                />

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
                >
                  Ready to Discuss
                  <br />
                  <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                    Opportunities?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-[#475569] max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                  Interested in mechanical engineering roles, technical leadership, product design, and complex system integration challenges. Let's collaborate.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <PremiumButton
                    label="Start a Conversation"
                    href="/contact"
                    variant="primary"
                    size="lg"
                  />
                  <PremiumButton
                    label="View Projects"
                    href="/projects"
                    variant="secondary"
                    size="lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
