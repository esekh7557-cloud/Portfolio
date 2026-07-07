'use client';

import {
  Code2,
  Database,
  Brain,
  Video,
  Cpu,
  Palette,
  Server,
  Layers,
} from 'lucide-react';
import { useScrollReveal } from './use-scroll-reveal';

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  span: string;
}

const services: ServiceCard[] = [
  {
    icon: Code2,
    title: 'Front-End & UI',
    description:
      'Fluid, responsive interfaces built with React and modern CSS. Pixel-perfect implementations with smooth animations and accessible design.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    span: 'md:col-span-2',
  },
  {
    icon: Server,
    title: 'Back-End & APIs',
    description:
      'Robust server architectures, RESTful APIs, and real-time data pipelines designed for scale.',
    tags: ['Node.js', 'PostgreSQL', 'Supabase'],
    span: 'md:col-span-1',
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Relational data modeling, migrations, and optimized query architecture for complex multi-tenant systems.',
    tags: ['PostgreSQL', 'Supabase', 'Schema Design'],
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    title: 'AI / ML Integration',
    description:
      'End-to-end machine learning pipelines — from model training to production deployment. Computer vision, NLP, and predictive analytics.',
    tags: ['TensorFlow', 'YOLOv8', 'Python', 'OpenCV'],
    span: 'md:col-span-2',
  },
  {
    icon: Cpu,
    title: 'Smart Systems',
    description:
      'IoT prototyping and hardware-software integration. Sensor networks, embedded controllers, and real-time monitoring dashboards.',
    tags: ['Arduino', 'MQTT', 'IoT', 'Embedded'],
    span: 'md:col-span-1',
  },
  {
    icon: Video,
    title: 'Video & Creative',
    description:
      'Cinematic video ad scripting and production-ready motion content for brands that want to stand out.',
    tags: ['Scripting', 'Storyboarding', 'Ad Creative'],
    span: 'md:col-span-1',
  },
  {
    icon: Palette,
    title: 'UI/UX Strategy',
    description:
      'User-centered design systems that balance aesthetic beauty with conversion-driven information architecture.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    span: 'md:col-span-1',
  },
  {
    icon: Layers,
    title: 'Full-Stack Products',
    description:
      'End-to-end product development from concept to deployment. I own the entire stack so nothing falls between the cracks.',
    tags: ['Architecture', 'DevOps', 'CI/CD'],
    span: 'md:col-span-1',
  },
];

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Divider */}
      <div className="divider-line w-full max-w-6xl mx-auto mb-28 md:mb-40"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl reveal">
          <span className="section-label">Services & Arsenal</span>
          <h2 className="section-heading mb-6">
            What I <span className="gradient-text">bring to the table.</span>
          </h2>
          <p className="section-subheading">
            From pixel-perfect front-ends to intelligent back-end systems —
            a complete technical toolkit shaped by real-world projects.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bento-card group reveal stagger-${Math.min(index + 1, 6)} ${service.span}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-cobalt-600/10 text-cobalt-400 group-hover:bg-cobalt-600/20 transition-colors duration-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-white pt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-charcoal-300 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-charcoal-800 text-charcoal-400 border border-charcoal-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
