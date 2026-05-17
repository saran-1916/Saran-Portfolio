"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsBackground from "@/components/backgrounds/SkillsBackground";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedDivider from "@/components/AnimatedDivider";
import PremiumSkillBadge from "@/components/PremiumSkillBadge";
import GlassCard from "@/components/GlassCard";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      <SkillsBackground />

      <div className="relative z-20">
        <Header />

        <main className="relative z-10">
          {/* HERO SECTION */}
          <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-medium">
                  40+ Technical Skills
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
              >
                Technical Expertise Across Disciplines
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
              >
                Deep expertise in mechanical engineering, CAD design, advanced
                analysis, manufacturing optimization, and modern web technology
              </motion.p>
            </motion.div>
          </section>

          {/* SKILLS BY CATEGORY */}
          <SectionWrapper withGradient>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <AnimatedDivider center />
              </motion.div>

              <div className="space-y-16">
                {skillsData.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Category header */}
                    <motion.div
                      className="flex items-center gap-4 mb-8"
                      whileHover={{ x: 8 }}
                    >
                      <div className="w-1 h-8 bg-accent-400 rounded-full flex-shrink-0" />
                      <div>
                        <h2 className="text-3xl font-bold text-[#111827]">
                          {category.category}
                        </h2>
                        <div className="h-px w-20 bg-gradient-to-r from-accent-500 to-transparent mt-2" />
                      </div>
                    </motion.div>

                    {/* Skills grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <PremiumSkillBadge
                          key={skill.name}
                          name={skill.name}
                          level={
                            (skill.proficiency === "Expert" || skill.proficiency === "Advanced" || skill.proficiency === "Intermediate")
                              ? skill.proficiency
                              : "Intermediate"
                          }
                          index={skillIndex}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* PROFICIENCY LEGEND */}
          <SectionWrapper>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <AnimatedDivider center />
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 mt-8">
                  Expertise Levels
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    level: "Expert",
                    description: "Mastered through years of professional practice. Can lead, teach, and innovate.",
                    color: "from-accent-500 to-accent-600",
                  },
                  {
                    level: "Advanced",
                    description: "Deep proficiency. Can solve complex problems independently.",
                    color: "from-accent-400 to-accent-500",
                  },
                  {
                    level: "Intermediate",
                    description: "Solid understanding. Can apply effectively in projects.",
                    color: "from-accent-300 to-accent-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <div className={`h-1 w-full rounded-full bg-gradient-to-r ${item.color} mb-6`} />
                        <h3 className="text-xl font-bold text-[#111827] mb-3">{item.level}</h3>
                        <p className="text-[#475569] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* LEARNING & GROWTH */}
          <SectionWrapper withGradient>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <AnimatedDivider center />
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 mt-8">
                  Continuous Growth
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Professional Certifications",
                    description:
                      "GD&T Advanced (Udemy), FMEA Specialist (Udemy), PG Diploma in Hybrid & EV (Skill-Lync — in progress). Validated expertise, not just credentials.",
                    link: "/tools",
                    linkText: "View Certifications",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Staying current with EV/HEV powertrain design, battery systems, and AI-integrated engineering workflows. Engineering is never static.",
                    link: "/tools",
                    linkText: "Explore Tools",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-[#111827] mb-4">{item.title}</h3>
                        <p className="text-[#475569] leading-relaxed mb-6 flex-1">{item.description}</p>
                        <motion.a
                          href={item.link}
                          className="text-accent-400 font-medium flex items-center gap-2 hover:text-accent-300 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {item.linkText}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.a>
                      </div>
                    </GlassCard>
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
