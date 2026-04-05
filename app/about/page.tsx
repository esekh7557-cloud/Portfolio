'use client';

export default function About() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Git', 'REST APIs', 'WebGL', 'UI/UX Design',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your goals, target audience, and business needs to create the perfect plan.',
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'I create beautiful mockups and prototypes using modern design principles.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your site with clean, maintainable code and best practices.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing, SEO optimization, and smooth deployment to production.',
    },
  ];

  return (
    <div className="w-full relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-500/50 backdrop-blur-sm">
              👋 About Me
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m a Web Developer
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Building Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            With 3+ years of experience, I&apos;ve helped 50+ startups and local businesses establish their online presence with modern, fast, and beautiful websites.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">My Story</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  I started as a self-taught developer and fell in love with creating beautiful web experiences. What began as a side project evolved into helping businesses grow online. I specialize in modern web technologies and building scalable applications that solve real problems.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Why Work With Me</h3>
                <ul className="space-y-4">
                  {[
                    'Fast delivery - your site ready in 7 days',
                    'Affordable pricing - starting at ₹15,000',
                    'Modern stack - Next.js, React, Tailwind CSS',
                    'SEO optimized - built for search engines',
                    'Responsive design - works on all devices',
                    '24/7 WhatsApp support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80 text-lg">
                      <span className="text-purple-400 font-bold text-2xl">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/30 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                <p className="text-white font-bold text-xl">Ebrahim Sekh</p>
                <p className="text-white/60 text-sm mt-2">Web Developer & Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">The tools I use to build amazing digital products</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-center group"
              >
                <p className="font-semibold text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">My Development Process</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">How I turn ideas into reality</p>
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
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What Clients Say</h2>
            <p className="text-white/60 text-lg">Real feedback from happy clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Exceeded all expectations! Professional, responsive, and delivered beyond what we asked. Highly recommended!",
                author: "Rajesh Kumar",
                role: "Restaurant Owner"
              },
              {
                quote: "Affordable, quality work. The website loads super fast and looks amazing on mobile. Best decision ever!",
                author: "Priya Singh",
                role: "E-Store Owner"
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 space-y-4"
              >
                <div className="flex gap-1 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-white/30 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 duration-200"
              >
                Start Your Project
              </a>
              <a
                href="https://wa.me/917385693147"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
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
