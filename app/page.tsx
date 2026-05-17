"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeBackground from "@/components/HomeBackground";
import EngineeringHeroVisual from "@/components/EngineeringHeroVisual";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedDivider from "@/components/AnimatedDivider";
import PremiumButton from "@/components/PremiumButton";
import GlassCard from "@/components/GlassCard";
import TimelineItem from "@/components/TimelineItem";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { appsData } from "@/data/apps";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      {/* Home background - cinematic */}
      <HomeBackground />

      {/* Content */}
      <div className="relative z-20">
        <Header />

        <main className="relative z-10">
          {/* HERO SECTION */}
          <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">

            {/* Engineering visual - BACKGROUND ONLY - Far background, non-interfering */}
            <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block z-0 flex items-center justify-center">
              <div style={{ transform: 'scale(1.5)' }}>
                <EngineeringHeroVisual />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-50 max-w-6xl mx-auto text-center"
            >
              {/* Status badge - refined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-block mb-8"
              >
                <div className="px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-accent-400"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-400"></span>
                  </span>
                  Available for Opportunities
                </div>
              </motion.div>

              {/* Main heading - premium typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-2 tracking-tight">
                  <span className="text-[#111827]">Saran </span>
                  <span className="text-accent-400">S P</span>
                </h1>
                <p className="text-2xl sm:text-3xl font-light text-[#475569] mt-6 tracking-wide">
                  Mechanical CAD Engineer & Maker
                </p>
              </motion.div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="text-[#475569] max-w-3xl mx-auto leading-relaxed mb-12 mt-8 text-lg"
              >
                I develop interior ceiling systems and modular CAD architectures for metro, commuter, and regional train platforms. 5+ years of mechanical design expertise at Alstom, specialized in 3D integration, parametric design, and manufacturing-focused engineering.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <PremiumButton
                  label="View My Work"
                  href="/projects"
                  variant="primary"
                  size="lg"
                />
                <PremiumButton
                  label="Get in Touch"
                  href="/contact"
                  variant="secondary"
                  size="lg"
                />
              </motion.div>

              {/* Stats - refined */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-[rgba(15,23,42,0.08)]"
              >
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "36+", label: "Design Configs" },
                  { value: "3", label: "Featured Apps" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <p className="text-4xl font-bold text-accent-400 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#475569] uppercase tracking-wider font-medium">{stat.label}</p>
                  </motion.div>
                ))}
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

          {/* FEATURED PROJECTS SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.12)] to-transparent" />
                </div>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  Selected Projects
                </h2>
                <p className="text-[#475569] text-lg max-w-3xl">
                  Mechanical design case studies showcasing problem-solving, technical depth, and engineering excellence.
                </p>
              </motion.div>

              <div className="space-y-8">
                {projectsData.slice(0, 2).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <a href={`/projects/${project.slug}`} className="group block">
                      <div className="relative rounded-lg overflow-hidden border border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.2)] transition-colors duration-300 bg-white shadow-sm">
                        <div className="relative p-8 sm:p-12">
                          <div className="flex items-start justify-between mb-8">
                            <div>
                              <p className="text-accent-400 text-sm font-medium uppercase tracking-wider mb-3">
                                {project.year}
                              </p>
                              <h3 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4 group-hover:text-accent-400 transition-colors">
                                {project.title}
                              </h3>
                            </div>
                            <motion.div
                              className="flex-shrink-0 w-12 h-12 rounded-lg border border-[rgba(15,23,42,0.08)] flex items-center justify-center group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              <svg
                                className="w-5 h-5 text-[#475569] group-hover:text-accent-400 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </motion.div>
                          </div>
                          <p className="text-[#475569] mb-8 leading-relaxed text-lg">
                            {project.shortDescription}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.slice(0, 4).map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 rounded-full bg-[rgba(15,23,42,0.06)] text-[#475569] text-xs font-medium border border-[rgba(15,23,42,0.08)]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <PremiumButton
                  label="View All Projects"
                  href="/projects"
                  variant="secondary"
                  size="lg"
                />
              </motion.div>
            </div>
          </SectionWrapper>

          {/* EXPERIENCE PREVIEW SECTION */}
          <SectionWrapper>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.12)] to-transparent" />
                </div>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  Professional Experience
                </h2>
                <p className="text-[#475569] text-lg">
                  Career journey in mechanical engineering, design, and technical leadership.
                </p>
              </motion.div>

              <div className="space-y-8">
                {experienceData.slice(0, 1).map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    entry={exp}
                    isLast={index === experienceData.slice(0, 1).length - 1}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <PremiumButton
                  label="Full Experience Timeline"
                  href="/experience"
                  variant="secondary"
                  size="lg"
                />
              </motion.div>
            </div>
          </SectionWrapper>

          {/* APPS PREVIEW SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.12)] to-transparent" />
                </div>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  Featured Applications
                </h2>
                <p className="text-[#475569] text-lg max-w-3xl">
                  Modern digital products combining engineering expertise with contemporary web technology.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appsData.map((app, index) => (
                  <GlassCard key={app.id} index={index} hover glow>
                    <div className="p-6 flex flex-col h-full">
                      <p className="text-accent-400 text-sm font-medium mb-2">
                        {app.year}
                      </p>
                      <h3 className="text-xl font-bold text-[#111827] mb-3 flex-1">
                        {app.title}
                      </h3>
                      <p className="text-[#475569] text-sm mb-4 flex-1">
                        {app.shortDescription}
                      </p>
                      <div className="flex gap-2">
                        {app.liveUrl && (
                          <PremiumButton
                            label="Live"
                            href={app.liveUrl}
                            variant="secondary"
                            size="sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        )}
                        {app.githubUrl && (
                          <PremiumButton
                            label="Code"
                            href={app.githubUrl}
                            variant="tertiary"
                            size="sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <PremiumButton
                  label="Explore All Apps"
                  href="/apps"
                  variant="secondary"
                  size="lg"
                />
              </motion.div>
            </div>
          </SectionWrapper>

          {/* CTA SECTION */}
          <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-12">
                  <div className="h-px bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.12)] to-transparent" />
                </div>
                <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                  Let's Build Something Exceptional
                </h2>
                <p className="text-[#475569] text-lg mb-12 leading-relaxed">
                  Interested in mechanical engineering roles, CAD projects, and digital product opportunities. Let's collaborate and create something remarkable.
                </p>
                <PremiumButton
                  label="Start a Conversation"
                  href="/contact"
                  variant="primary"
                  size="lg"
                />
              </motion.div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
