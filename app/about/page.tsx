"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import AboutBackground from "@/components/backgrounds/AboutBackground";
import PremiumButton from "@/components/PremiumButton";
import GlassCard from "@/components/GlassCard";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      <AboutBackground />
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

              {/* Main heading with gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight"
              >
                Engineer, Builder,
                <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                  Systems Thinker
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl font-light text-[#475569] max-w-3xl mx-auto leading-relaxed mb-12"
              >
                5+ years designing precision mechanical systems for rolling stock platforms. Now building digital products that marry engineering rigor with elegant user experiences.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <PremiumButton
                  label="Let's Work Together"
                  href="#vision"
                  variant="primary"
                  size="lg"
                />
              </motion.div>
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

          {/* JOURNEY SECTION - Premium Timeline Story */}
          <SectionWrapper>
            <div className="max-w-5xl mx-auto">
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">The Journey</h2>
                <p className="text-[#475569] text-lg max-w-2xl">
                  From precision engineering to digital product thinking — a story of systems, problem-solving, and continuous evolution.
                </p>
              </motion.div>

              <div className="space-y-12">
                {[
                  {
                    year: "2021",
                    title: "First Role — Shanthi Gears (Murugappa Group)",
                    description:
                      "Started my engineering career in R&D at Shanthi Gears, Coimbatore. Designed a marine gearbox with integrated clutch from the ground up — performing gear calculations with KissSoft/KissSys and creating casting designs for prototype fabrication.",
                    highlight: "First exposure to full product design cycle: R&D → calculations → casting → BOM"
                  },
                  {
                    year: "2022",
                    title: "Automotive Engineering — Ford Motor Company",
                    description:
                      "Deputed to Ford Motor Company (Chennai) to work on transmission and driveline systems. Performed fault diagnosis, stackup and oil volume analysis, and managed full BOM lifecycle in Teamcenter and WERS.",
                    highlight: "Bridged design intent with manufacturing reality in high-tolerance automotive assemblies"
                  },
                  {
                    year: "2025",
                    title: "Rolling Stock Interiors — Alstom",
                    description:
                      "Joined Alstom to lead ceiling design for AX rolling stock products. Delivering 36 configurations across EU/UK and North American platforms using CATIA V5/V6 with Enovia PLM4A — from master sections through CDSI-compliant manufacturing drawings.",
                    highlight: "36+ ceiling configurations across Adesia, Coradia Multilevel, LRV, and TTC platforms"
                  },
                  {
                    year: "2024",
                    title: "Builder Mode",
                    description:
                      "Started building digital products. Realized engineering principles apply everywhere — architecture, systems thinking, precision, constraint optimization. Now merging mechanical and digital product thinking.",
                    highlight: "Creating products that feel engineered, not just designed"
                  },
                ].map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex gap-8">
                      {/* Timeline marker */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                          className="w-4 h-4 rounded-full bg-accent-400 mb-4"
                        />
                        {idx < 3 && <div className="w-0.5 h-20 bg-gradient-to-b from-accent-400/50 to-transparent" />}
                      </div>

                      {/* Content */}
                      <div className="pb-8">
                        <p className="text-accent-400 text-sm font-bold uppercase tracking-wider mb-2">{milestone.year}</p>
                        <h3 className="text-2xl font-bold text-[#111827] mb-3">{milestone.title}</h3>
                        <p className="text-[#475569] leading-relaxed mb-4">{milestone.description}</p>
                        <div className="inline-block px-3 py-1.5 rounded-full bg-accent-400/10 border border-accent-400/30">
                          <p className="text-accent-300 text-sm font-medium">{milestone.highlight}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* DESIGN PHILOSOPHY SECTION */}
          <SectionWrapper withGradient>
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Design Philosophy</h2>
                <p className="text-[#475569] text-lg">
                  Core principles that guide how I approach problems, design systems, and build products.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "⚙️",
                    title: "Precision First",
                    description:
                      "Tolerance, accuracy, and measurable performance are non-negotiable. Vague design leads to failure. Every specification serves a purpose.",
                  },
                  {
                    icon: "🔗",
                    title: "Systems Thinking",
                    description:
                      "No component exists in isolation. Integration between all systems — mechanical, electrical, structural, digital — requires holistic thinking.",
                  },
                  {
                    icon: "🏭",
                    title: "Manufacturing Reality",
                    description:
                      "Design exists on screen until it's built. I design with constraints, tooling, assembly, and cost realities in mind from day one.",
                  },
                  {
                    icon: "📊",
                    title: "Performance-Driven",
                    description:
                      "Form follows function, but function follows performance. Every element should contribute to measurable outcomes. Design without purpose is ornamentation.",
                  },
                ].map((principle, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "40px" }}
                          transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                          className="h-0.5 bg-accent-400 mb-6"
                        />
                        <div className="text-4xl mb-4">{principle.icon}</div>
                        <h3 className="text-xl font-bold text-[#111827] mb-3">{principle.title}</h3>
                        <p className="text-[#475569] leading-relaxed">{principle.description}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* HOW I WORK SECTION */}
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">How I Work</h2>
                <p className="text-[#475569] text-lg">
                  My approach to solving problems and delivering results.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Understand the Problem",
                    description: "Deep dive into constraints, requirements, and goals. Ask hard questions. Understand not just what to build, but why it matters."
                  },
                  {
                    step: "02",
                    title: "Design with Constraints",
                    description: "Constraints aren't limitations — they're design guides. Manufacturing, performance, cost, assembly — all become part of the solution."
                  },
                  {
                    step: "03",
                    title: "Build Systematically",
                    description: "Create modular, scalable solutions that can evolve. Parametric thinking allows small changes to generate powerful variations."
                  },
                  {
                    step: "04",
                    title: "Validate & Iterate",
                    description: "Measure outcomes. Iterate based on real feedback, not assumptions. Precision means knowing exactly what works and why."
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="flex gap-8 items-start">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-accent-400/20 to-accent-500/10 border border-accent-400/30 flex items-center justify-center"
                      >
                        <span className="text-2xl font-bold text-accent-400">{step.step}</span>
                      </motion.div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                        <p className="text-[#475569] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* CURRENTLY BUILDING SECTION */}
          <SectionWrapper withGradient>
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Currently Building</h2>
                <p className="text-[#475569] text-lg">
                  Active projects that merge mechanical thinking with digital product design.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: "This Portfolio Site",
                    description: "A premium digital presence that communicates engineering excellence through premium design, motion, and storytelling. Built with Next.js, Framer Motion, and a focus on precision typography and interaction design."
                  },
                  {
                    title: "Engineering-Focused Digital Products",
                    description: "Building tools that bring engineering rigor to everyday problems. Projects that leverage CAD thinking, constraint optimization, and parametric logic in digital experiences."
                  },
                  {
                    title: "Content on Systems Design",
                    description: "Creating resources on how engineering principles apply beyond mechanical design — system thinking, constraint-driven design, and parametric architecture for digital products."
                  },
                ].map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-400/10 border border-accent-400/30 flex items-center justify-center"
                          >
                            <span className="text-xl">⚡</span>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#111827] mb-2">{project.title}</h3>
                            <p className="text-[#475569] leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* FUTURE VISION SECTION */}
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
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Where I'm Headed</h2>
                <p className="text-[#475569] text-lg">
                  The future direction of my career and impact.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Engineering Innovation",
                    description: "Lead projects that bring precision engineering thinking to unsolved mechanical and digital problems."
                  },
                  {
                    icon: "🏗️",
                    title: "Systems Architecture",
                    description: "Design large-scale systems where integration, constraints, and performance require holistic thinking."
                  },
                  {
                    icon: "📚",
                    title: "Mentor & Teach",
                    description: "Share knowledge about engineering excellence, systems thinking, and product design with the next generation."
                  },
                ].map((vision, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover>
                      <div className="p-8 text-center">
                        <div className="text-5xl mb-4">{vision.icon}</div>
                        <h3 className="text-xl font-bold text-[#111827] mb-3">{vision.title}</h3>
                        <p className="text-[#475569] leading-relaxed text-sm">{vision.description}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-20 pt-16 border-t border-[rgba(15,23,42,0.08)]"
              >
                <h3 className="text-3xl font-bold mb-12 text-center">By The Numbers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "5+", label: "Years Experience" },
                    { value: "36+", label: "Design Configs" },
                    { value: "3", label: "Featured Apps" },
                    { value: "∞", label: "Growth Mindset" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <GlassCard hover>
                        <div className="p-6 text-center">
                          <motion.p
                            whileHover={{ scale: 1.1 }}
                            className="text-4xl font-bold text-accent-400 mb-2"
                          >
                            {stat.value}
                          </motion.p>
                          <p className="text-[#475569] text-sm font-medium">{stat.label}</p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                  Ready to Build Something
                  <br />
                  <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                    Exceptional
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-[#475569] max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                  I'm looking for roles in mechanical engineering, CAD product design, digital product opportunities, and technical challenges that require precision thinking, systems expertise, and manufacturing rigor.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <PremiumButton label="Start a Conversation" href="/contact" variant="primary" size="lg" />
                  <PremiumButton label="View My Work" href="/projects" variant="secondary" size="lg" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#475569] mt-12 font-medium tracking-wide"
                >
                  saransp6@gmail.com • Based in India • Available for opportunities
                </motion.p>
              </motion.div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
