'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black via-black/80 to-black/50 border-t border-white/10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">Building modern web experiences for businesses across India.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Services</h4>
            <div className="space-y-3">
              <p className="text-white/70 text-sm hover:text-white transition-colors duration-200"><a href="#web-dev">Web Development</a></p>
              <p className="text-white/70 text-sm hover:text-white transition-colors duration-200"><a href="#fullstack">Full-Stack Apps</a></p>
              <p className="text-white/70 text-sm hover:text-white transition-colors duration-200"><a href="#ui-ux">UI/UX Design</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/projects" className="text-white/70 text-sm hover:text-white transition-colors duration-200 block">Portfolio</Link>
              <Link href="/about" className="text-white/70 text-sm hover:text-white transition-colors duration-200 block">About Me</Link>
              <Link href="/services" className="text-white/70 text-sm hover:text-white transition-colors duration-200 block">Services</Link>
              <Link href="/contact" className="text-white/70 text-sm hover:text-white transition-colors duration-200 block">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/919876543210" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                📞 WhatsApp
              </a>
              <a href="mailto:contact@example.com" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2">
                ✉️ Email
              </a>
              <a href="https://github.com" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
              <a href="https://linkedin.com" className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            © {currentYear} Portfolio. All rights reserved. | Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
