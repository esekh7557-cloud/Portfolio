'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/90 backdrop-blur-xl border-b border-charcoal-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="#hero"
            className="text-xl font-bold font-heading text-white hover:opacity-80 transition-opacity tracking-tight"
          >
            Ebrahim
            <span className="text-cobalt-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-charcoal-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 px-5 py-2.5 bg-cobalt-600 text-white rounded-lg font-medium text-sm hover:bg-cobalt-500 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-300 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 pt-2 space-y-1 border-t border-charcoal-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block text-charcoal-400 hover:text-white transition-colors py-3 px-4 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block mx-4 mt-3 px-5 py-3 bg-cobalt-600 text-white rounded-lg font-medium text-sm text-center hover:bg-cobalt-500 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
