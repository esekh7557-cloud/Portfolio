'use client';

import Image from 'next/image';

import { useScrollReveal } from './use-scroll-reveal';

export default function AboutSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Divider */}
      <div className="divider-line w-full max-w-6xl mx-auto mb-14 md:mb-20"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-16 lg:gap-20 items-start">
          {/* Left — Portrait */}
          <div className="lg:col-span-2 reveal-left">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-700/30 shadow-2xl shadow-cobalt-950/40">
              <Image
                src="/profile-photo.jpeg"
                alt="Portrait of Ebrahim Sekh"
                fill
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cobalt-600/10 to-transparent"></div>
            </div>
          </div>

          {/* Right — Narrative */}
          <div className="lg:col-span-3 space-y-8 reveal-right">
            <div>
              <span className="section-label">About</span>
              <h2 className="section-heading mb-6">
                Code meets <span className="gradient-text">strategy.</span>
              </h2>
            </div>

            <div className="space-y-5 text-charcoal-300 leading-relaxed text-base">
              <p>
                I&apos;m{' '}
                <span className="text-white font-medium">Ebrahim Sekh</span>,
                a software developer based in{' '}
                <span className="text-white font-medium">Goa, India</span>.
                I build intelligent, scalable systems that sit at the
                intersection of engineering precision and business impact.
              </p>
              <p>
                With a foundation in{' '}
                <span className="text-white font-medium">
                  Business Administration
                </span>{' '}
                and hands-on expertise in{' '}
                <span className="text-white font-medium">
                  full-stack development
                </span>
                , I don&apos;t just write code — I understand the product, the
                market, and the user. This dual lens helps me build solutions
                that are technically robust and commercially viable.
              </p>
              <p>
                My work spans{' '}
                <span className="text-white font-medium">
                  modern web applications
                </span>
                ,{' '}
                <span className="text-white font-medium">
                  computer vision systems
                </span>
                , and{' '}
                <span className="text-white font-medium">
                  IoT integrations
                </span>
                . I believe the best software isn&apos;t just functional —
                it&apos;s thoughtfully designed, performant under pressure,
                and a pleasure to use.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-charcoal-800">
              {[
                { value: '50+', label: 'Projects Shipped' },
                { value: '3+', label: 'Years Building' },
                { value: '15+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold font-heading text-white">
                    {stat.value}
                  </p>
                  <p className="text-charcoal-500 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
