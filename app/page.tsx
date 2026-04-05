'use client';

import Link from 'next/link';
import ShaderBackground from '@/components/ui/shader-background';

export default function Home() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Animated Background - Only in Hero */}
        <div className="absolute inset-0 -z-10">
          <ShaderBackground />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-500/50 backdrop-blur-sm">
                ✨ Ebrahim Sekh
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-3">Build Modern Web</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Experiences for Your Business
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              I create fast-loading, beautiful websites and full-stack applications for restaurants, local businesses, and startups. Modern design. Affordable pricing. Quick delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Project →
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 md:pt-20 border-t border-white/10 mt-12 md:mt-20">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                50+
              </p>
              <p className="text-white/60 text-sm md:text-base">Projects</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-white/60 text-sm md:text-base">Satisfaction</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                3+ yrs
              </p>
              <p className="text-white/60 text-sm md:text-base">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What I Offer</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Complete digital solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast & Responsive',
                description: 'Lightning-fast websites optimized for mobile. Your site loads in under 2 seconds.',
                color: 'from-blue-500/20 to-blue-600/20'
              },
              {
                icon: '💻',
                title: 'Modern Technology',
                description: 'Built with Next.js, React, and Tailwind CSS. Future-proof and scalable.',
                color: 'from-purple-500/20 to-purple-600/20'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Modern UI/UX that converts visitors into customers. SEO-optimized.',
                color: 'from-pink-500/20 to-pink-600/20'
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Pricing Plans</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Affordable pricing that fits your budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹15,000',
                items: ['5-10 Pages', 'Responsive Design', 'Contact Form', 'Free Hosting (6 months)', 'Basic SEO'],
              },
              {
                name: 'Professional',
                price: '₹30,000',
                items: ['15+ Pages', 'E-Commerce Ready', 'SEO Optimization', '1 Year Support', 'Analytics Setup', 'Blog Section'],
                featured: true,
              },
              {
                name: 'Enterprise',
                price: '₹50,000+',
                items: ['Custom Features', 'Full-Stack App', 'Admin Dashboard', 'Priority Support', '24/7 Maintenance', 'Advanced Analytics'],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/60 shadow-2xl shadow-purple-500/20 scale-105 md:scale-110'
                    : 'bg-white/5 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-purple-500/10'
                }`}
              >
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {plan.items.map((item, i) => (
                      <li key={i} className="text-white/80 flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 block text-center ${
                      plan.featured
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                        : 'border border-white/20 text-white hover:bg-white/5'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
            <p className="text-white/60 text-lg">Real testimonials from real clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Professional, responsive, and delivered beyond expectations. My restaurant now gets 10+ orders daily online!",
                author: "Rajesh Kumar",
                role: "Restaurant Owner"
              },
              {
                quote: "Affordable pricing with top-notch quality. The website loads super fast and looks amazing on mobile.",
                author: "Priya Singh",
                role: "E-Store Owner"
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 space-y-4"
              >
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-white/30 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Limited slots available. Get your modern, fast-loading website built in 7 days or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/917385693147"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
