'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { SequelLogo } from './SequelLogo';

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
                aria-label="Sequel home"
                title="Sequel home"
              >
                <span className="sr-only">Sequel home</span>
                <SequelLogo className="w-auto h-6 sm:h-8" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div id="headerDesktopTabs" className="hidden lg:flex lg:flex-1 items-center justify-center gap-8 pointer-events-auto">
              <Link href="/founders" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                Founders
              </Link>
              <Link href="/membership" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                Membership
              </Link>
              <Link href="/stories" className="text-white/90 hover:text-white transition-colors duration-200 text-md font-medium">
                Stories
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/founders/submit" className="btn-component btn-default button-md pointer-events-auto">
                <span className="btn-title">Build the future</span>
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
              <Link href="/founders" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Founders
              </Link>
              <Link href="/membership" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Membership
              </Link>
              <Link href="/stories" className="mobile-nav-link text-white text-4xl font-300 leading-tight tracking-tight" onClick={toggleMenu}>
                Stories
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 px-6">
            <a href="https://instagram.com/sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="4" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 14 16" fill="rgba(255, 255, 255, 0.4)" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 0H7.66667V10.9333C7.66667 12.1333 6.7 13.1111 5.5 13.1111C4.3 13.1111 3.33333 12.1333 3.33333 10.9333C3.33333 9.75556 4.27778 8.8 5.43333 8.75556V6.31111C2.93333 6.35556 0.916667 8.4 0.916667 10.9333C0.916667 13.4889 2.97778 15.5556 5.47778 15.5556C7.97778 15.5556 10.0833 13.4667 10.0833 10.9333V5.33333C11.0278 6.02222 12.1722 6.4 13.3611 6.42222V3.97778C11.4944 3.91111 10.0833 2.13333 10.0833 0Z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 22 16" fill="rgba(255, 255, 255, 0.4)" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5819 2.51049C21.3376 1.58364 20.6157 0.855249 19.6972 0.608688C17.9914 0.166672 11.2 0.166672 11.2 0.166672C11.2 0.166672 4.40857 0.166672 2.70279 0.608688C1.78429 0.855249 1.06239 1.58364 0.818104 2.51049C0.380371 4.23103 0.380371 7.83334 0.380371 7.83334C0.380371 7.83334 0.380371 11.4356 0.818104 13.1562C1.06239 14.083 1.78429 14.8114 2.70279 15.058C4.40857 15.5 11.2 15.5 11.2 15.5C11.2 15.5 17.9914 15.5 19.6972 15.058C20.6157 14.8114 21.3376 14.083 21.5819 13.1562C22.0196 11.4356 22.0196 7.83334 22.0196 7.83334C22.0196 7.83334 22.0196 4.23103 21.5819 2.51049ZM9.03037 11.2083V4.45834L14.6529 7.83334L9.03037 11.2083Z" />
              </svg>
            </a>
            <a href="https://x.com/joinsequel" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.4)" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/sequel-yourlegacymade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.4)" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.27071 22.9165H1.46977V8.50183H6.27071V22.9165ZM3.87037 6.53082H3.83912C2.22813 6.53082 1.18555 5.42171 1.18555 4.03271C1.18555 2.61479 2.25763 1.53711 3.89987 1.53711C5.54212 1.53711 6.55537 2.61479 6.58662 4.03271C6.58662 5.42171 5.54212 6.53082 3.87037 6.53082ZM23.5836 22.9165H18.7832V15.2176C18.7832 13.2756 18.0879 11.9511 16.3504 11.9511C15.0252 11.9511 14.2343 12.845 13.8871 13.7078C13.7602 14.0171 13.7292 14.448 13.7292 14.8795V22.9165H8.92861C8.92861 22.9165 8.99134 9.8556 8.92861 8.50183H13.7292V10.5469C14.3672 9.56568 15.5091 8.1641 18.0532 8.1641C21.2078 8.1641 23.5836 10.2303 23.5836 14.6628V22.9165Z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
