'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Ebrahim Sekh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-white/80 hover:text-white transition-all duration-200 hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-clip-text">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-all duration-200 hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-clip-text">About</Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-all duration-200 hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-clip-text">Projects</Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-all duration-200 hover:text-transparent hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-clip-text">Services</Link>
            <Link href="/contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl hover:text-purple-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-white/10 pt-4">
            <Link href="/" className="block text-white/80 hover:text-white transition py-2 px-3 rounded hover:bg-white/5">Home</Link>
            <Link href="/about" className="block text-white/80 hover:text-white transition py-2 px-3 rounded hover:bg-white/5">About</Link>
            <Link href="/projects" className="block text-white/80 hover:text-white transition py-2 px-3 rounded hover:bg-white/5">Projects</Link>
            <Link href="/services" className="block text-white/80 hover:text-white transition py-2 px-3 rounded hover:bg-white/5">Services</Link>
            <Link href="/contact" className="block px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
