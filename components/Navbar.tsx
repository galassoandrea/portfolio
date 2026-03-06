'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          <Image 
            className="w-18 md:w-20"
            src="/logo.png"
            width={80}
            height={80}
            alt="logo image"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-md font-medium text-slate-400">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Social & Resume */}
        <div className="hidden md:flex gap-8 items-center text-md font-medium text-slate-400">
          <Link href="/cv_public.pdf" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">Resume</Link>
          <a 
              href="https://github.com/galassoandrea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
          >
              <FiGithub size={20} />
          </a>
          <a 
              href="https://www.linkedin.com/in/andrea-galasso-751798167" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
          >
              <FiLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-400 hover:text-white transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-b border-slate-700">
          <div className="h-full px-6 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-white transition py-2"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <Link 
              href="/cv_public.pdf" 
              target="_blank" 
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition text-center"
              onClick={closeMenu}
            >
              Resume
            </Link>

            {/* Mobile Social Links */}
            <div className="flex gap-6 pt-4 border-t border-slate-700">
              <a 
                href="https://github.com/galassoandrea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/andrea-galasso-751798167" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}