'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
// red. wordmark replaces SequelLogo

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      const overlay = document.getElementById('mobile-menu-overlay');
      if (overlay) {
        if (next) {
          overlay.style.clipPath = 'circle(150% at 50% 50%)';
          overlay.style.pointerEvents = 'auto';
          overlay.setAttribute('aria-hidden', 'false');
          overlay.removeAttribute('inert');
        } else {
          overlay.style.clipPath = 'circle(0% at 50% 50%)';
          overlay.style.pointerEvents = 'none';
          overlay.setAttribute('aria-hidden', 'true');
          overlay.setAttribute('inert', '');
        }
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Fixed gradient background */}
      <div className="fixed top-0 left-0 right-0 z-50 h-32 bg-gradient-to-b from-black/40 to-black/0 pointer-events-none" />

      <header id="pageHeader" className="fixed top-0 left-0 right-0 z-[60] pageHeader pointer-events-none">
        <nav className="mx-auto px-6 sm:px-10 lg:px-10 lg:py-10 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-1 z-[60]">
              <Link
                href="/"
                className="inline-flex min-h-[44px] min-w-[44px] items-center pointer-events-auto"
                id="header-logo"
                aria-label="red. home"
                title="red. home"
              >
                <span className="sr-only">red. home</span>
                <span className="text-2xl sm:text-3xl font-light tracking-tight" style={{ fontFamily: 'Bradford', color: 'var(--color-accent)' }}>red.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div id="headerDesktopTabs" className="hidden lg:flex lg:flex-1 items-center justify-center gap-8 pointer-events-auto">
              <Link href="/sessions" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                Sessions
              </Link>
              <Link href="/science" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                Science
              </Link>
              <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                About
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/book" className="btn-component btn-default button-md pointer-events-auto">
                <span className="btn-title">Book Now</span>
                <span className="btn-icon btn-icon-right">
                  <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden flex flex-col items-center justify-center w-11 h-11 gap-[5px] z-[60] pointer-events-auto"
              aria-label="Toggle menu"
              aria-controls="mobile-menu-overlay"
              aria-expanded={menuOpen}
              id="mobile-menu-button"
              onClick={toggleMenu}
            >
              <span
                className="menu-line menu-line-1 block w-[20px] h-[2px] rounded-full bg-white origin-center transition-transform duration-300 ease-out"
                style={menuOpen ? { transform: 'translateY(3.5px) rotate(45deg)' } : undefined}
              />
              <span
                className="menu-line menu-line-2 block w-[20px] h-[2px] rounded-full bg-white origin-center transition-transform duration-300 ease-out"
                style={menuOpen ? { transform: 'translateY(-3.5px) rotate(-45deg)' } : undefined}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className="fixed inset-0 bg-black z-[55] lg:hidden pointer-events-none"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        style={{
          clipPath: 'circle(0% at 50% 50%)',
          transition: 'clip-path 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        <nav className="flex flex-col h-full py-6">
          {/* Navigation Links */}
          <div className="flex flex-1 justify-center flex-col">
            <div className="flex flex-col gap-3 px-6">
              <Link href="/" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/sessions" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Sessions
              </Link>
              <Link href="/science" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Science
              </Link>
              <Link href="/about" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                About
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 px-6">
            <a href="https://instagram.com/rbetter.at.red" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="4" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
