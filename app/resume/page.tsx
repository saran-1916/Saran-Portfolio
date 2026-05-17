"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeBackground from "@/components/backgrounds/ResumeBackground";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedDivider from "@/components/AnimatedDivider";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";

export default function Resume() {
  const resumeStats = [
    { label: "Years Experience", value: "5+" },
    { label: "Design Configs", value: "36+" },
    { label: "CAD Platforms", value: "6+" },
    { label: "Industries", value: "3+" },
  ];

  const highlights = [
    {
      title: "Technical Leadership",
      description: "Led 3D ceiling design across EU/UK and North American rail platforms — delivering 36 configurations at Alstom.",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Deep Technical Expertise",
      description: "40+ technical skills across mechanical engineering, CAD, gear analysis, manufacturing, and digital tools.",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Measurable Impact",
      description: "36 ceiling configurations, patent holder (2020-41042046), international research publication at ICCMES 2021.",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Primary CAD: CATIA V5/V6",
      description: "Expert in CATIA V5/V6 with Enovia PLM4A, Teamcenter PLM, KissSoft/KissSys, and WERS. 6+ platforms across 3 industries.",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Multi-Domain Engineering",
      description: "Rolling stock interiors (Alstom), transmission & driveline (Ford), industrial gearbox R&D (Shanthi Gears).",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Digital Innovation",
      description: "Building engineering web apps and exploring AI-assisted CAD workflows alongside mechanical design career.",
      icon: (
        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    {
      title: "Explore My Story",
      description: "Engineering journey, philosophy, and approach to mechanical design.",
      href: "/about",
      icon: (
        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "View Case Studies",
      description: "Detailed mechanical design projects with problem-solution-outcome narratives.",
      href: "/projects",
      icon: (
        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Connect with Me",
      description: "Interested in collaboration or discussing engineering opportunities?",
      href: "/contact",
      icon: (
        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      <ResumeBackground />

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
                  <p className="text-accent-400 text-sm font-bold mb-2 uppercase tracking-wider">
                    Professional Resume
                  </p>
                  <h1 className="text-6xl sm:text-7xl font-bold mb-4">Saran S P</h1>
                  <p className="text-2xl text-[#475569] font-light">
                    Mechanical Design Engineer
                  </p>
                  <p className="text-[#475569] mt-2">Bangalore, Karnataka, India</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex-shrink-0 flex flex-col gap-3"
                >
                  <PremiumButton
                    label="Download Resume"
                    href="/documents/resume.pdf"
                    variant="primary"
                    size="lg"
                  />
                  <p className="text-xs text-[#475569] text-center">PDF format</p>
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
                        <p className="text-4xl font-bold text-accent-400 mb-2">{stat.value}</p>
                        <p className="text-[#475569] text-sm font-medium">{stat.label}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* Download CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard glow>
                  <div className="p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-lg bg-accent-400/10 border border-accent-400/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#111827]">Saran_SP_Resume.pdf</h3>
                        <p className="text-[#475569] text-sm mt-1">Full resume — experience, skills, projects, certifications</p>
                      </div>
                    </div>
                    <PremiumButton
                      label="Download PDF"
                      href="/documents/resume.pdf"
                      variant="primary"
                      size="md"
                    />
                  </div>
                </GlassCard>
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
                <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 mt-8">Key Highlights</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <div className="w-10 h-10 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center mb-4">
                          {highlight.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#111827] mb-3">{highlight.title}</h3>
                        <p className="text-[#475569] text-sm leading-relaxed">{highlight.description}</p>
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
                <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 mt-8">Explore More</h2>
                <p className="text-center text-[#475569] max-w-2xl mx-auto">
                  Resume is one part of the story. Explore the full journey, projects, and approach.
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
                          <div className="w-12 h-12 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center mb-4">
                            {link.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#111827] mb-3">{link.title}</h3>
                          <p className="text-[#475569] leading-relaxed flex-1 mb-4">{link.description}</p>
                          <motion.div
                            className="text-accent-400 font-medium flex items-center gap-2"
                            whileHover={{ x: 4 }}
                          >
                            Explore
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
