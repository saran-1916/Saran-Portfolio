"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppsBackground from "@/components/backgrounds/AppsBackground";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedDivider from "@/components/AnimatedDivider";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";
import { appsData } from "@/data/apps";

export default function Apps() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      <AppsBackground />

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
                  Digital Products
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
              >
                Apps & Web Products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
              >
                Engineering-focused digital products combining mechanical expertise with modern web technology
              </motion.p>
            </motion.div>
          </section>

          {/* APPS SHOWCASE */}
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {appsData.slice(0, 2).map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8 flex flex-col h-full">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 text-xs font-bold">
                            {app.year}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#111827] mb-3 flex-1">{app.title}</h3>

                        <p className="text-[#475569] leading-relaxed mb-6">{app.shortDescription}</p>

                        <p className="text-[#475569] text-sm mb-6 flex-1">
                          <span className="font-semibold text-accent-400">Why it exists:</span>{" "}
                          {app.whyBuilt}
                        </p>

                        <div className="mb-6">
                          <p className="text-xs font-bold text-[#475569] mb-3 uppercase tracking-wider">Tech Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {app.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-[rgba(15,23,42,0.06)] text-[#475569] text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {app.impact && (
                          <p className="text-sm text-accent-400 mb-6 italic border-l-2 border-accent-400/30 pl-3">
                            {app.impact}
                          </p>
                        )}

                        <div className="flex gap-2">
                          {app.liveUrl && (
                            <PremiumButton
                              label="Live Demo"
                              href={app.liveUrl}
                              variant="primary"
                              size="sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          )}
                          {app.githubUrl && (
                            <PremiumButton
                              label="View Code"
                              href={app.githubUrl}
                              variant="secondary"
                              size="sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {appsData.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard hover glow>
                    <div className="p-8">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 text-xs font-bold">
                          {appsData[2].year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#111827] mb-3">{appsData[2].title}</h3>

                      <p className="text-[#475569] leading-relaxed mb-6">{appsData[2].shortDescription}</p>

                      <p className="text-[#475569] text-sm mb-6">
                        <span className="font-semibold text-accent-400">Why it exists:</span>{" "}
                        {appsData[2].whyBuilt}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-bold text-[#475569] mb-3 uppercase tracking-wider">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {appsData[2].techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-[rgba(15,23,42,0.06)] text-[#475569] text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {appsData[2].impact && (
                        <p className="text-sm text-accent-400 mb-6 italic border-l-2 border-accent-400/30 pl-3">
                          {appsData[2].impact}
                        </p>
                      )}

                      <div className="flex gap-2">
                        {appsData[2].liveUrl && (
                          <PremiumButton
                            label="Live Demo"
                            href={appsData[2].liveUrl}
                            variant="primary"
                            size="sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        )}
                        {appsData[2].githubUrl && (
                          <PremiumButton
                            label="View Code"
                            href={appsData[2].githubUrl}
                            variant="secondary"
                            size="sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </div>
          </SectionWrapper>

          {/* TECH STACK SECTION */}
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
                <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 mt-8">Development Stack</h2>
                <p className="text-center text-[#475569]">Modern tools and technologies for building premium products</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Frontend",
                    icon: (
                      <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                  },
                  {
                    title: "Backend & Data",
                    icon: (
                      <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    ),
                    items: ["Node.js", "API Development", "Database Design", "Authentication"],
                  },
                  {
                    title: "AI & Tools",
                    icon: (
                      <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    items: ["Claude API", "AI Integration", "Automation", "Prompt Engineering"],
                  },
                ].map((stack, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard hover glow>
                      <div className="p-8">
                        <div className="w-10 h-10 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center mb-4">
                          {stack.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#111827] mb-6">{stack.title}</h3>
                        <ul className="space-y-3">
                          {stack.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-[#475569]">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* CTA SECTION */}
          <SectionWrapper withGradient>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">Ready to Build?</h2>
                <p className="text-lg text-[#475569] mb-8">
                  Interested in a collaboration or want to explore how these tools can enhance your mechanical engineering workflow?
                </p>
                <PremiumButton label="Let's Connect" href="/contact" variant="primary" size="lg" />
              </motion.div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
