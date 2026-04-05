'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: 'website', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="w-full relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-500/50 backdrop-blur-sm">
                📞 Get in Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Let&apos;s <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Work Together</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life. Reach out using any method below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-10 space-y-6">
                <h2 className="text-3xl font-bold">Send me a message</h2>

                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 flex items-start gap-3">
                    <span className="text-xl mt-1">✓</span>
                    <div>
                      <p className="font-semibold">Thank you! Your message sent successfully.</p>
                      <p className="text-sm text-green-300/80">I&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                      placeholder="+91 73856 93147"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                    >
                      <option value="website" className="bg-gray-900">Website Development</option>
                      <option value="fullstack" className="bg-gray-900">Full-Stack Application</option>
                      <option value="ui-ux" className="bg-gray-900">UI/UX Design</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 duration-200"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-white/50 text-center">
                    I&apos;ll respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold mb-8">Quick Contact Methods</h2>

              <a
                href="https://wa.me/917385693147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/40 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 transition-all group"
              >
                <div className="p-4 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition text-xl flex-shrink-0">
                  💬
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
                  <p className="text-white/70 text-sm mb-3">Chat with me instantly</p>
                  <p className="text-green-400 font-semibold">+91 73856 93147</p>
                </div>
              </a>

              <a
                href="mailto:digitquo@gmail.com"
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
              >
                <div className="p-4 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition text-xl flex-shrink-0">
                  ✉️
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-1">Email</h3>
                  <p className="text-white/70 text-sm mb-3">Send me an email</p>
                  <p className="text-blue-400 font-semibold break-all">digitquo@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917385693147"
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/40 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
              >
                <div className="p-4 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition text-xl flex-shrink-0">
                  ☎️
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-1">Call</h3>
                  <p className="text-white/70 text-sm mb-3">Direct phone call</p>
                  <p className="text-purple-400 font-semibold">+91 73856 93147</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/10 border border-orange-500/40">
                <div className="p-4 rounded-lg bg-orange-500/20 transition text-xl flex-shrink-0">
                  Location
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-1">Address</h3>
                  <p className="text-white/70 text-sm mb-3">Meet or write to me here</p>
                  <p className="text-orange-300 font-semibold">Ramnagar, Betim, Bardez, North Goa, India</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;Professional, responsive, and delivered beyond expectations. Highly recommended!&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white text-lg">Rajesh Kumar</p>
                  <p className="text-white/60 text-sm">Restaurant Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
