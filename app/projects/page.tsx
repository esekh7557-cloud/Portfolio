'use client';

import ProjectCard from '@/components/project-card';

export default function Projects() {
  const projects = [
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering',
      problem: 'Restaurant had no online presence, losing customers who search online',
      solution: 'Built a beautiful, mobile-first website with menu showcase, online ordering, and reservation system',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
      liveUrl: 'https://restaurant-bay-omega.vercel.app/',
      results: '45% increase in online orders, 2.3s load time, 98 Lighthouse score',
    },
    {
      title: 'E-Commerce Store',
      description: 'Full-stack e-commerce platform for retail business',
      problem: 'Manual inventory management, no online sales channel',
      solution: 'Built complete e-commerce platform with admin dashboard, payment integration, and real-time inventory',
      tech: ['Next.js', 'MongoDB', 'Stripe', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db4a?w=800&h=600&fit=crop',
      liveUrl: 'https://example-ecommerce.vercel.app',
      results: '3x revenue increase, 50+ SKUs managed, ₹5L+ business in 3 months',
    },
    {
      title: 'Clinic Management System',
      description: 'Custom app for managing clinic operations',
      problem: 'Paper-based patient records, manual appointment scheduling',
      solution: 'Built digital appointment system with patient records, prescription management, and billing',
      tech: ['React', 'PostgreSQL', 'Express', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop',
      liveUrl: 'https://example-clinic.vercel.app',
      results: '80% time savings on paperwork, 200+ patients managed, 4.9★ rating',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for data visualization',
      problem: 'Raw data in spreadsheets, hard to extract insights',
      solution: 'Built interactive dashboard with real-time analytics, charts, and customizable reports',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      liveUrl: 'https://example-dashboard.vercel.app',
      results: '90% faster insights, 50+ metrics tracked, saved 10hrs/week',
    },
    {
      title: 'Fitness App Landing Page',
      description: 'High-converting landing page for fitness startup',
      problem: 'Low conversion rate, no clear value proposition',
      solution: 'Redesigned landing with better messaging, testimonials, and optimized CTA',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1552196558-f3b5fb3f387e?w=800&h=600&fit=crop',
      liveUrl: 'https://example-fitness.vercel.app',
      results: '65% increase in conversions, 4.2s load time, 40+ signups/week',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio for freelance designer',
      problem: 'No portfolio online, difficult to showcase work',
      solution: 'Built stunning portfolio with smooth animations and responsive design',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      liveUrl: 'https://example-portfolio.vercel.app',
      results: '15+ client inquiries/month, 98 Lighthouse score',
    },
  ];

  return (
    <div className="w-full relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center w-full space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-500/50 backdrop-blur-sm">
              ✨ Ebrahim Sekh Projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Recent Work</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I&apos;ve built for startups, local businesses, and established companies. Each project showcases my ability to solve real problems with modern technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Projects - 2 columns */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project, idx) => (
                <div key={idx} className="transform hover:scale-105 transition-transform duration-300">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects - 3 columns */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Other Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.slice(2).map((project, idx) => (
                <div key={idx} className="transform hover:scale-105 transition-transform duration-300">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">My Development Process</h2>
            <p className="text-white/60 text-lg">How I transform ideas into reality</p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Understand Your Vision',
                desc: 'I dive deep into understanding your business goals and user needs through detailed discussions.',
              },
              {
                num: '02',
                title: 'Design & Prototype',
                desc: 'Create beautiful mockups and prototypes using modern design principles and best practices.',
              },
              {
                num: '03',
                title: 'Develop & Build',
                desc: 'Build your project with clean, maintainable code using the latest technologies.',
              },
              {
                num: '04',
                title: 'Launch & Support',
                desc: 'Rigorous testing, optimization, and smooth deployment with ongoing support.',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/50 text-2xl font-bold bg-clip-text text-transparent">
                    {step.num}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{step.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold">Have a Project in Mind?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build something amazing together. Contact me to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
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
