"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedDivider from "@/components/AnimatedDivider";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";

export default function Resume() {
  const resumeStats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "36+" },
    { label: "CAD Platforms", value: "6+" },
    { label: "Industries", value: "3+" },
  ];

  const quickLinks = [
    {
      title: "Explore My Story",
      description:
        "Dive into my engineering journey, philosophy, and approach to mechanical design",
      href: "/about",
      icon: "📖",
    },
    {
      title: "View Case Studies",
      description:
        "Explore detailed mechanical design projects with problem-solution-outcome narratives",
      href: "/projects",
      icon: "🎯",
    },
    {
      title: "Connect with Me",
      description:
        "Interested in collaboration or discussing engineering opportunities?",
      href: "/contact",
      icon: "💬",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-20">
        <Header />

        <main className="relative z-10">
          {/* HERO SECTION */}
          <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto w-full"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <p className="text-accent-400 text-sm font-bold mb-2">
                    PROFESSIONAL RESUME
                  </p>
                  <h1 className="text-6xl sm:text-7xl font-bold mb-4">
                    Saran S P
                  </h1>
                  <p className="text-2xl text-slate-300 font-semibold">
                    Mechanical Design Engineer
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <PremiumButton
                    label="Download Resume"
                    href="/documents/resume.pdf"
                    variant="primary"
                    size="lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* STATS SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <AnimatedDivider center />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {resumeStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-6 text-center">
                        <p className="text-4xl font-bold text-accent-400 mb-2">
                          {stat.value}
                        </p>
                        <p className="text-slate-400 text-sm font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* Resume Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard glow>
                  <div className="rounded-2xl overflow-hidden border border-slate-700/50">
                    <iframe
                      src="/documents/resume.pdf"
                      className="w-full h-96 md:h-screen"
                      title="Resume PDF"
                    />
                  </div>
                </GlassCard>
              </motion.div>

              {/* Fallback message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <div className="rounded-xl border border-amber-500/50 bg-amber-500/10 p-6">
                  <p className="text-amber-300">
                    📄 If the PDF viewer doesn't load above, you can{" "}
                    <a
                      href="/documents/resume.pdf"
                      download
                      className="font-semibold text-accent-400 hover:text-accent-300 transition-colors underline"
                    >
                      download the resume directly
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </SectionWrapper>

          {/* KEY HIGHLIGHTS SECTION */}
          <SectionWrapper>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <AnimatedDivider center />
                <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 mt-8">
                  Key Highlights
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Technical Leadership",
                    description:
                      "Led 3D integration projects, established modular design frameworks, and mentored design teams",
                    icon: "🎯",
                  },
                  {
                    title: "Expertise & Depth",
                    description:
                      "40+ technical skills across mechanical engineering, CAD, analysis, manufacturing, and digital tools",
                    icon: "⭐",
                  },
                  {
                    title: "Measurable Results",
                    description:
                      "35% design cycle reduction, 8% weight optimization, zero manufacturing issues, 60% component reuse",
                    icon: "📊",
                  },
                  {
                    title: "CAD Proficiency",
                    description:
                      "Expert in SolidWorks, CATIA, Teamcenter PLM. 6+ platforms across 3+ industries",
                    icon: "🖥️",
                  },
                  {
                    title: "Engineering Specialization",
                    description:
                      "Rolling stock design, modular architecture, 3D integration, GD&T, FEA, tolerance analysis",
                    icon: "🚄",
                  },
                  {
                    title: "Digital Innovation",
                    description:
                      "Built 3 engineering web apps. Exploring AI-assisted CAD workflows and automation",
                    icon: "🤖",
                  },
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <div className="text-3xl mb-4">{highlight.icon}</div>
                        <h3 className="text-xl font-bold text-slate-100 mb-3">
                          {highlight.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* QUICK LINKS SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <AnimatedDivider center />
                <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 mt-8">
                  Explore More
                </h2>
                <p className="text-center text-slate-400 max-w-2xl mx-auto">
                  Resume is just one part of your story. Learn more about my
                  journey, projects, and approach to engineering.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a href={link.href}>
                      <GlassCard hover glow className="h-full">
                        <div className="p-8 flex flex-col h-full">
                          <div className="text-4xl mb-4">{link.icon}</div>
                          <h3 className="text-2xl font-bold text-slate-100 mb-3">
                            {link.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed flex-1 mb-4">
                            {link.description}
                          </p>
                          <motion.div
                            className="text-accent-400 font-medium flex items-center gap-2"
                            whileHover={{ x: 4 }}
                          >
                            Explore
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
                          </motion.div>
                        </div>
                      </GlassCard>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
