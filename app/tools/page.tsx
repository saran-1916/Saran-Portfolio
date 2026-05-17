"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData } from "@/data/tools";
import ToolsBackground from "@/components/backgrounds/ToolsBackground";

const IconCertificate = () => (
  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconTemplate = () => (
  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const IconAI = () => (
  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconResource = () => (
  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const IconClock = () => (
  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Tools() {
  const certificates = toolsData.filter((t) => t.type === "certificate");
  const templates = toolsData.filter((t) => t.type === "template");
  const prompts = toolsData.filter((t) => t.type === "prompt");
  const resources = toolsData.filter((t) => t.type === "resource");

  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden"
      style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}
    >
      <ToolsBackground />
      <div className="relative z-20 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-2">
              Tools & Digital Products
            </h1>
            <p className="text-xl text-[#475569] mb-12">
              Certificates, templates, tools, and resources I've created to help with engineering and digital product development
            </p>

            {/* Certificates */}
            {certificates.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center">
                    <IconCertificate />
                  </div>
                  Certificates & Credentials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-6 hover:border-[rgba(15,23,42,0.2)] shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-semibold text-lg text-[#111827]">{cert.title}</h3>
                        <span className="text-xs font-medium text-[#475569] bg-[rgba(15,23,42,0.06)] px-3 py-1 rounded-full whitespace-nowrap">
                          {cert.dateEarned}
                        </span>
                      </div>
                      <p className="text-[#475569] text-sm mb-3">{cert.description}</p>
                      <p className="text-sm text-[#0F766E] font-medium mb-4">{cert.issuedBy}</p>
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#0F766E] hover:text-[#115e59] flex items-center gap-1"
                        >
                          Verify Certificate
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Templates */}
            {templates.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center">
                    <IconTemplate />
                  </div>
                  Templates & Frameworks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className="rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-6 hover:border-[rgba(15,23,42,0.2)] shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-lg text-[#111827] mb-3">{template.title}</h3>
                      <p className="text-[#475569] text-sm mb-2">{template.description}</p>
                      {template.problem && (
                        <p className="text-[#475569] text-sm mb-4">
                          <strong className="text-[#475569]">Solves:</strong> {template.problem}
                        </p>
                      )}
                      {template.url && (
                        <a
                          href={template.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 px-4 py-2 text-sm font-medium hover:bg-[#0F766E]/20 transition-colors"
                        >
                          Access Template
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Prompts */}
            {prompts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center">
                    <IconAI />
                  </div>
                  AI Workflow Prompts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-6 hover:border-[rgba(15,23,42,0.2)] shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-lg text-[#111827] mb-3">{prompt.title}</h3>
                      <p className="text-[#475569] text-sm mb-2">{prompt.description}</p>
                      {prompt.problem && (
                        <p className="text-[#475569] text-sm mb-2">
                          <strong className="text-[#475569]">Automates:</strong> {prompt.problem}
                        </p>
                      )}
                      {prompt.hoursave && (
                        <p className="text-[#0F766E] text-sm font-medium mb-4 flex items-center gap-1.5">
                          <IconClock />
                          {prompt.hoursave}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resources */}
            {resources.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-400/10 border border-accent-400/20 flex items-center justify-center">
                    <IconResource />
                  </div>
                  Resources & Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-6 hover:border-[rgba(15,23,42,0.2)] shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-lg text-[#111827] mb-3">{resource.title}</h3>
                      <p className="text-[#475569] text-sm mb-4">{resource.description}</p>
                      {resource.url && (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#0F766E] hover:text-[#115e59] text-sm font-medium"
                        >
                          Read Guide
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
