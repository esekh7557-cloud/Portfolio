'use client';

import Image from 'next/image';
import { useScrollReveal } from './use-scroll-reveal';

interface CaseStudy {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Digital Atelier Furniture Store',
    subtitle: 'E-Commerce x Product Experience',
    problem:
      'Furniture brands need a storefront that feels premium while still making browsing, collection discovery, and product exploration effortless for shoppers.',
    solution:
      'Created a minimalist furniture commerce experience for Digital Atelier with a polished hero, curated collection flow, lookbook-focused navigation, and responsive product presentation designed to make high-end furniture feel tactile online.',
    tech: ['React', 'Tailwind CSS', 'Responsive UI', 'Vercel'],
    image: '/projects/digital-atelier.png',
    liveUrl: 'https://furniture-flame-three.vercel.app/',
  },
  {
    title: 'AI-Powered Attendance System',
    subtitle: 'Computer Vision × Full-Stack',
    problem:
      'Manual attendance tracking was error-prone and time-consuming for educational institutions managing hundreds of students daily.',
    solution:
      'Built a real-time facial recognition system using YOLOv8 object detection, integrated with a React dashboard and Supabase backend for automated attendance tracking and analytics.',
    tech: ['React', 'Supabase', 'YOLOv8', 'Python', 'OpenCV'],
    image: '/projects/ai-attendance.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Smart Inventory Manager',
    subtitle: 'Predictive Analytics × SaaS',
    problem:
      'Businesses were losing revenue from stockouts and overstock situations, relying on manual inventory checks and guesswork.',
    solution:
      'Developed an AI-assisted inventory platform with predictive stock analysis, automated reorder triggers, and multi-location support built on a robust PostgreSQL schema.',
    tech: ['Next.js', 'PostgreSQL', 'TensorFlow', 'Node.js'],
    image: '/projects/smart-inventory.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'IoT Monitoring Dashboard',
    subtitle: 'Hardware Integration × Real-Time',
    problem:
      'Industrial facilities needed a unified view of dozens of IoT sensors across multiple zones, with instant alerting for anomalies.',
    solution:
      'Created a real-time dashboard ingesting MQTT sensor data, with live Chart.js visualizations, threshold-based alerts, and historical trend analysis.',
    tech: ['React', 'MQTT', 'Chart.js', 'Arduino', 'Node.js'],
    image: '/projects/iot-dashboard.png',
    liveUrl: '#',
  },
  {
    title: 'Digital Agency Platform',
    subtitle: 'Multi-Tenant × Admin System',
    problem:
      'A growing agency needed a centralized platform to manage client projects, team workflows, and deliverables across multiple accounts.',
    solution:
      'Architected a multi-tenant admin platform with role-based access, project pipelines, client portals, and integrated invoicing — all on a Supabase-powered backend.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    image: '/projects/agency-platform.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="work"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Divider */}
      <div className="divider-line w-full max-w-6xl mx-auto mb-28 md:mb-40"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28 max-w-2xl reveal">
          <span className="section-label">Selected Works</span>
          <h2 className="section-heading mb-6">
            Projects that
            <br />
            <span className="gradient-text">speak for themselves.</span>
          </h2>
          <p className="section-subheading">
            A curated selection of deep-dive case studies — each showcasing
            the intersection of engineering, design, and strategic thinking.
          </p>
        </div>

        {/* Case Studies — Alternating Layout */}
        <div className="space-y-28 md:space-y-40">
          {caseStudies.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Image */}
                <div
                  className={`project-image-wrapper ${
                    isEven ? 'reveal-left' : 'reveal-right'
                  } ${isEven ? '' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-[16/10] bg-charcoal-900 rounded-2xl overflow-hidden border border-charcoal-700/30">
                    <Image
                      src={project.image}
                      alt={`${project.title} — case study mockup`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    isEven ? 'reveal-right' : 'reveal-left'
                  } ${isEven ? '' : 'lg:order-1'}`}
                >
                  <div>
                    <p className="text-cobalt-400 text-sm font-medium tracking-wider uppercase mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-charcoal-300 leading-relaxed">
                    <p>
                      <span className="text-charcoal-400 text-sm font-medium uppercase tracking-wider">
                        Problem —{' '}
                      </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="text-charcoal-400 text-sm font-medium uppercase tracking-wider">
                        Solution —{' '}
                      </span>
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-cobalt-400 hover:text-cobalt-300 transition-colors underline underline-offset-4 decoration-cobalt-400/30 hover:decoration-cobalt-300"
                      >
                        View Live ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-charcoal-400 hover:text-white transition-colors underline underline-offset-4 decoration-charcoal-600 hover:decoration-charcoal-400"
                      >
                        Source Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
