'use client';

export default function Services() {
  const services = [
    {
      id: 'web-dev',
      title: 'Website Development',
      icon: '🌐',
      description: 'Custom websites for restaurants, clinics, retail, and more',
      features: [
        'Mobile-responsive design',
        'SEO optimization',
        'Fast loading (< 2s)',
        'Contact forms',
        'Social media integration',
        'Free hosting for 6 months',
      ],
      pricing: '₹15,000',
      timeline: '7-14 days',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Applications',
      icon: '⚙️',
      description: 'Custom web apps with databases, user systems, and admin panels',
      features: [
        'Database design & setup',
        'User authentication',
        'Admin dashboard',
        'Payment integration',
        'Real-time updates',
        'Cloud deployment & monitoring',
      ],
      pricing: '₹30,000',
      timeline: '15-30 days',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful, modern designs that convert visitors into customers',
      features: [
        'Wireframing & prototyping',
        'User research',
        'Mobile-first design',
        'Accessibility (WCAG)',
        'Design systems',
        'Figma files included',
      ],
      pricing: '₹10,000',
      timeline: '5-10 days',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your business, target audience, and goals.',
    },
    {
      step: '02',
      title: 'Design & Plan',
      description: 'I create mockups and development plan for your approval.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building with clean code and best practices.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and smooth deployment to production.',
    },
  ];

  return (
    <div className="w-full relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-500/50 backdrop-blur-sm">
              💼 Our Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Services & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Affordable web development services for startups and small businesses. Get your project online quickly with transparent pricing and no hidden costs.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40">
              <div className="text-4xl mb-3">⚡</div>
              <p className="text-white/80 font-semibold">Fast Delivery</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-white/80 font-semibold">24/7 Support</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/40">
              <div className="text-4xl mb-3">👥</div>
              <p className="text-white/80 font-semibold">50+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">What I Can Build For You</h2>

          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`group rounded-3xl border backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                  idx === 1
                    ? 'bg-gradient-to-br from-purple-500/15 to-pink-500/15 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'bg-white/5 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-purple-500/10'
                }`}
              >
                <div className="p-10 md:p-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{service.icon}</div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
                        </div>
                      </div>

                      <p className="text-white/70 text-lg leading-relaxed">{service.description}</p>

                      <div>
                        <h4 className="font-bold text-white mb-4 text-lg uppercase tracking-wide">What&apos;s Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/80">
                              <span className="text-purple-400 font-bold text-xl mt-1">✓</span>
                              <span className="text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className={`p-8 rounded-2xl mb-6 border ${
                        idx === 1
                          ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-white/30'
                          : 'bg-gradient-to-br from-white/5 to-white/0 border-white/20'
                      }`}>
                        <p className="text-white/70 text-sm mb-3 uppercase tracking-wide font-semibold">Starting Price</p>
                        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                          {service.pricing}
                        </p>
                        <div className="pt-6 border-t border-white/20 space-y-3">
                          <p className="text-white/70 text-sm uppercase tracking-wide font-semibold">Typical Delivery</p>
                          <p className="text-2xl font-bold text-white">{service.timeline}</p>
                        </div>
                      </div>

                      <a
                        href="/contact"
                        className="px-6 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center transform hover:scale-105 duration-200"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">The Development Process</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">How we turn your vision into reality</p>
          </div>

          <div className="space-y-8">
            {process.map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/50 text-2xl font-bold text-white group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Me?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">6 reasons to work together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Fast Delivery',
                desc: 'Get your website live in 7-14 days, not weeks or months.',
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                desc: 'Premium quality at startup-friendly prices. Starting at ₹15,000.',
              },
              {
                icon: '🎯',
                title: 'Results Focused',
                desc: 'Every site is optimized for conversions, not just looks.',
              },
              {
                icon: '📱',
                title: 'Mobile First',
                desc: 'Perfect rendering on all devices from mobile to desktop.',
              },
              {
                icon: '🔍',
                title: 'SEO Optimized',
                desc: 'Rank higher on Google with proper SEO implementation.',
              },
              {
                icon: '🚀',
                title: 'Scalable Solutions',
                desc: 'Your site grows with your business, no complete rebuilds needed.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-white/30 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Limited Slots Available ✨</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              I only take 5 projects per month to ensure quality work. Let&apos;s discuss your project before slots fill up.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 duration-200"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
