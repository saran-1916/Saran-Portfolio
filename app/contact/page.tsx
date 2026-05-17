"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBackground from "@/components/backgrounds/ContactBackground";
import ContactHero from "@/components/ContactHero";
import PremiumInput from "@/components/PremiumInput";
import PremiumTextarea from "@/components/PremiumTextarea";
import PremiumSubmitButton from "@/components/PremiumSubmitButton";
import PremiumSocialCard from "@/components/PremiumSocialCard";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject.trim() || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fields && typeof data.fields === "object") {
          setErrors(data.fields as Record<string, string>);
          return;
        }
        throw new Error(data.error ?? "Something went wrong.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      title: "Email",
      description: "Send me a direct message",
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      href: SOCIAL_LINKS.linkedin,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      description: "Check out my projects",
      href: SOCIAL_LINKS.github,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "Resume",
      description: "Download my full resume",
      href: "/documents/resume.pdf",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#111827] overflow-hidden" style={{ "--accent": "#0F766E", "--accent-dark": "#115e59" } as React.CSSProperties}>
      {/* Animated background */}
      <ContactBackground />

      {/* Content */}
      <div className="relative z-20">
        <Header />

        {/* Hero Section */}
        <ContactHero />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Contact Form Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-[#111827] mb-2">
                      Send Me a Message
                    </h2>
                    <p className="text-[#475569]">
                      Fill out the form below and I'll get back to you as soon as
                      possible.
                    </p>
                  </motion.div>

                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PremiumInput
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Saran"
                      required
                      error={errors.name}
                    />
                    <PremiumInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      error={errors.email}
                    />
                  </div>

                  {/* Subject */}
                  <PremiumInput
                    label="Subject (optional)"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    error={errors.subject}
                  />

                  {/* Message */}
                  <PremiumTextarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    error={errors.message}
                  />

                  {/* Error message */}
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                    >
                      {errors.submit}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <PremiumSubmitButton
                    isLoading={isSubmitting}
                    isSuccess={isSuccess}
                    disabled={Object.keys(errors).length > 0}
                  />
                </form>
              </motion.div>
            </div>
          </section>

          {/* Social Links Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-[rgba(15,23,42,0.08)]">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[#111827] mb-2">
                  Other Ways to Connect
                </h2>
                <p className="text-[#475569]">
                  Choose your preferred method of communication
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <PremiumSocialCard
                    key={social.title}
                    title={social.title}
                    description={social.description}
                    href={social.href}
                    icon={social.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-[rgba(15,23,42,0.08)]">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-[#111827] mb-2">
                  Questions?
                </h2>
                <p className="text-[#475569] mb-8">
                  Here's what you should know
                </p>

                <div className="space-y-6">
                  {[
                    {
                      question: "How quickly will you respond?",
                      answer:
                        "I typically respond to messages within 24-48 hours. For urgent matters, feel free to reach out via email directly.",
                    },
                    {
                      question: "What kind of projects are you interested in?",
                      answer:
                        "I'm interested in mechanical engineering roles, CAD design projects, digital product opportunities, and collaborations that combine engineering with modern technology.",
                    },
                    {
                      question: "Can I schedule a call?",
                      answer:
                        "Absolutely! Include your preferred times and timezone in your message, and I'll get back to you with available slots.",
                    },
                    {
                      question: "Are you open to remote work?",
                      answer:
                        "Yes, I'm open to remote opportunities as well as hybrid or on-site positions, depending on the project and location.",
                    },
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-[rgba(15,23,42,0.08)] bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-accent-400 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-[#475569] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
