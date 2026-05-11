import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData } from "@/data/tools";

export default function Tools() {
  const certificates = toolsData.filter((t) => t.type === "certificate");
  const templates = toolsData.filter((t) => t.type === "template");
  const prompts = toolsData.filter((t) => t.type === "prompt");
  const resources = toolsData.filter((t) => t.type === "resource");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Tools & Digital Products
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Certificates, templates, tools, and resources I've created to help
            with engineering and digital product development
          </p>

          {/* Certificates */}
          {certificates.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📜</span> Certificates & Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-card transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-lg text-slate-900">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {cert.dateEarned}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      {cert.description}
                    </p>
                    <p className="text-sm text-accent-600 font-medium mb-4">
                      {cert.issuedBy}
                    </p>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent-600 hover:text-accent-700 flex items-center gap-1"
                      >
                        Verify Certificate →
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
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📋</span> Templates & Frameworks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-card transition-all"
                  >
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">
                      {template.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">
                      {template.description}
                    </p>
                    {template.problem && (
                      <p className="text-slate-600 text-sm mb-4">
                        <strong>Solves:</strong> {template.problem}
                      </p>
                    )}
                    {template.url && (
                      <a
                        href={template.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent-50 text-accent-700 px-4 py-2 text-sm font-medium hover:bg-accent-100 transition-colors"
                      >
                        Access Template →
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
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🤖</span> AI Workflow Prompts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-card transition-all"
                  >
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">
                      {prompt.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">
                      {prompt.description}
                    </p>
                    {prompt.problem && (
                      <p className="text-slate-600 text-sm mb-2">
                        <strong>Automates:</strong> {prompt.problem}
                      </p>
                    )}
                    {prompt.hoursave && (
                      <p className="text-accent-600 text-sm font-medium mb-4">
                        ⏱️ {prompt.hoursave}
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
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📚</span> Resources & Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-card transition-all"
                  >
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 text-sm font-medium"
                      >
                        Read Guide →
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
  );
}
