'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

import { useScrollReveal } from './use-scroll-reveal';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('sending');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.error ?? 'Unable to send your message right now.'
        );
      }

      setSubmissionState('success');
      setFeedbackMessage('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });

      window.setTimeout(() => {
        setSubmissionState('idle');
        setFeedbackMessage('');
      }, 4000);
    } catch (error) {
      setSubmissionState('error');
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (submissionState !== 'idle') {
      setSubmissionState('idle');
      setFeedbackMessage('');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="divider-line w-full max-w-6xl mx-auto mb-14 md:mb-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="section-label">Contact</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tight mb-6">
            Have a project
            <br />
            <span className="gradient-text">in mind?</span>
          </h2>
          <p className="text-charcoal-300 text-base sm:text-lg max-w-lg mx-auto px-2 sm:px-0">
            Let&apos;s create something extraordinary together. Reach out and
            let&apos;s discuss your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
          <div className="md:col-span-2 space-y-6 sm:space-y-8 reveal-left">
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:esekh7557@gmail.com"
                  className="text-charcoal-200 hover:text-cobalt-400 transition-colors"
                >
                  esekh7557@gmail.com
                </a>
              </div>

              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:7385693147"
                  className="text-charcoal-200 hover:text-cobalt-400 transition-colors"
                >
                  7385693147
                </a>
              </div>

              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-charcoal-200">Goa, India</p>
              </div>
            </div>

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
              </div>
            </div>
          </div>

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
                  suppressHydrationWarning
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
                disabled={submissionState === 'sending'}
                className={`btn-primary w-full flex items-center justify-center gap-2 ${
                  submissionState === 'success'
                    ? '!bg-emerald-600 !shadow-emerald-600/20'
                    : ''
                }`}
              >
                {submissionState === 'sending' ? (
                  <span>Sending...</span>
                ) : submissionState === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {feedbackMessage ? (
                <p
                  className={`text-sm ${
                    submissionState === 'error'
                      ? 'text-rose-400'
                      : 'text-emerald-400'
                  }`}
                  aria-live="polite"
                >
                  {feedbackMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
