'use client';

import { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { useScrollReveal } from './use-scroll-reveal';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactSection() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Divider */}
      <div className="divider-line w-full max-w-6xl mx-auto mb-28 md:mb-40"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Massive Headline */}
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="section-label">Contact</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tight mb-6">
            Have a project
            <br />
            <span className="gradient-text">in mind?</span>
          </h2>
          <p className="text-charcoal-300 text-lg max-w-lg mx-auto">
            Let&apos;s create something extraordinary together. Reach out
            and let&apos;s discuss your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Info + Book a Call */}
          <div className="md:col-span-2 space-y-8 reveal-left">
            {/* Book a Call */}
            <a
              href="#"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-charcoal-900 border border-charcoal-700/50 hover:border-cobalt-600/30 hover:bg-charcoal-800/80 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-cobalt-600/10 text-cobalt-400 group-hover:bg-cobalt-600/20 transition-colors">
                <Calendar size={22} />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Book a Call</p>
                <p className="text-charcoal-500 text-xs mt-0.5">
                  Schedule a 30-min discovery call
                </p>
              </div>
            </a>

            {/* Contact Details */}
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:digitquo@gmail.com"
                  className="text-charcoal-200 hover:text-cobalt-400 transition-colors"
                >
                  digitquo@gmail.com
                </a>
              </div>
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-charcoal-200">Goa, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-charcoal-800">
              <div className="flex gap-3">
                <a
                  href="https://github.com/esekh7557-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700/50 text-charcoal-400 hover:text-white hover:border-charcoal-600 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700/50 text-charcoal-400 hover:text-white hover:border-charcoal-600 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="md:col-span-3 reveal-right">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-700/50 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-charcoal-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-charcoal-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-charcoal-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="input-field resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`btn-primary w-full flex items-center justify-center gap-2 ${
                  submitted
                    ? '!bg-emerald-600 !shadow-emerald-600/20'
                    : ''
                }`}
              >
                {submitted ? (
                  <>
                    <span>Message Sent!</span>
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
