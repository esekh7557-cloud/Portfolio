'use client';

import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-50"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Overline */}
        <p className="hero-animate hero-delay-1 text-cobalt-400 text-sm font-medium tracking-[0.25em] uppercase mb-8">
          Software Developer &middot; Strategic Technologist
        </p>

        {/* Main Headline */}
        <h1 className="hero-animate hero-delay-2 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight text-white mb-8">
          Engineering Scalable
          <br />
          <span className="gradient-text">Web Solutions</span> &
          <br />
          Digital Experiences.
        </h1>

        {/* Subheadline */}
        <p className="hero-animate hero-delay-3 text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto leading-relaxed mb-12">
          I combine deep software engineering expertise with a strategic
          business mindset to build products that are technically excellent
          and commercially impactful.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="btn-primary text-center">
            View Selected Works
          </a>
          <a href="#contact" className="btn-ghost text-center">
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-animate hero-delay-5">
        <a
          href="#work"
          className="flex flex-col items-center gap-2 text-charcoal-500 hover:text-cobalt-400 transition-colors duration-300"
          aria-label="Scroll to work"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
