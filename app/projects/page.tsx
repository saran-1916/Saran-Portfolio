"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedBackground from "@/components/AnimatedBackground";
import PremiumButton from "@/components/PremiumButton";
import GlassCard from "@/components/GlassCard";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const other = projectsData.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

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
                Mechanical Design
                <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Detailed projects showcasing engineering excellence, systems thinking, parametric design, and manufacturing-focused problem-solving.
              </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 text-slate-500"
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

          {/* FEATURED PROJECTS */}
          <SectionWrapper withGradient>
            <div className="max-w-6xl mx-auto">
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Featured Projects</h2>
                <p className="text-slate-400 text-lg max-w-2xl">
                  Flagship projects showcasing system architecture, parametric design, and engineering excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-12">
                {featured.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                        {/* Content */}
                        <motion.div className="flex flex-col justify-between">
                          <div>
                            <p className="text-accent-400 text-sm font-bold mb-3">
                              PROJECT {index + 1}
                            </p>
                            <h3 className="text-3xl font-bold text-slate-100 mb-4">
                              {project.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                              {project.shortDescription}
                            </p>
                          </div>

                          <div>
                            <div className="mb-6">
                              <p className="text-sm text-slate-400 font-medium mb-2">
                                TECHNOLOGIES
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tools.slice(0, 4).map((tool) => (
                                  <span
                                    key={tool}
                                    className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <motion.a
                              href={`/projects/${project.slug}`}
                              className="inline-flex items-center gap-2 text-accent-400 font-medium hover:text-accent-300 transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              Read Case Study
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
                            </motion.a>
                          </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              label: "Design Configs",
                              value: "36+",
                            },
                            {
                              label: "Design Time Reduction",
                              value: "35%",
                            },
                            {
                              label: "Weight Optimization",
                              value: "8%",
                            },
                            {
                              label: "Component Reuse",
                              value: "60%",
                            },
                          ].map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-lg bg-slate-800/50 p-4 border border-slate-700/50"
                            >
                              <p className="text-2xl font-bold text-accent-400 mb-1">
                                {stat.value}
                              </p>
                              <p className="text-xs text-slate-400">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* ADDITIONAL PROJECTS */}
          {other.length > 0 && (
            <SectionWrapper>
              <div className="max-w-6xl mx-auto">
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
                  <h2 className="text-5xl sm:text-6xl font-bold mb-6">Additional Projects</h2>
                  <p className="text-slate-400 text-lg">
                    Other notable mechanical design work and engineering contributions.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {other.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: (index + featured.length) * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <GlassCard hover glow>
                        <div className="p-6 flex flex-col h-full">
                          <p className="text-accent-400 text-xs font-bold mb-2">
                            CASE STUDY
                          </p>
                          <h3 className="text-xl font-bold text-slate-100 mb-3 flex-1">
                            {project.title}
                          </h3>
                          <p className="text-slate-300 text-sm mb-4 flex-1">
                            {project.shortDescription}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tools.slice(0, 2).map((tool) => (
                              <span
                                key={tool}
                                className="px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                          <motion.a
                            href={`/projects/${project.slug}`}
                            className="text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors"
                            whileHover={{ x: 2 }}
                          >
                            View Details →
                          </motion.a>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

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
                  Interested in
                  <br />
                  <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                    Working Together?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                  Let's discuss how my engineering expertise, problem-solving approach, and systems thinking can contribute to your mechanical design challenges.
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
                    label="View About"
                    href="/about"
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
