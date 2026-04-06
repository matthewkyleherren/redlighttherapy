'use client';

import { useEffect, useRef } from 'react';
import { Clock } from './Clock';
import { FooterLink } from './FooterLink';
import { FooterSocialIcons } from './SocialIcons';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
            observer.unobserve(footer);
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="bg-[#0d0d0d] w-full shadow-[inset_0_2px_0_0_#2C2C2C] py-24 gap-40 flex flex-col opacity-0 translate-y-96 transition-all duration-1000 ease-out"
    >
      {/* Hero tagline section */}
      <div className="px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight" style={{ color: 'var(--color-text)' }}>
          Enter the <span className="italic" style={{ fontFamily: 'Bradford', color: 'var(--color-accent)' }}>red.</span>
        </h2>
      </div>

      {/* Footer links section */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-16">
          {/* Left side: Navigation columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 md:gap-x-20 lg:gap-x-48">
            {/* Navigation column */}
            <div className="flex flex-col gap-4">
              <span className="text-white/70 text-[10px] font-sans uppercase tracking-wide">Navigation</span>
              <div className="flex flex-col gap-4">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/sessions">Sessions</FooterLink>
                <FooterLink href="/science">Science</FooterLink>
                <FooterLink href="/about">About</FooterLink>
              </div>
            </div>

            {/* Company column */}
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-[10px] font-sans uppercase tracking-wide">Info</span>
              <div className="flex flex-col gap-4">
                <FooterLink href="/membership">Membership</FooterLink>
                <FooterLink href="/book">Gift Cards</FooterLink>
                <FooterLink href="/privacy" external>Privacy policy</FooterLink>
              </div>
            </div>
          </div>

          {/* Right side: Location */}
          <div className="hidden lg:flex flex-col gap-2">
            <Clock
              timezone="Europe/Zurich"
              city="Zurich"
              country="Switzerland"
              ariaLabel="Clock showing time in Zurich"
            />
            <p className="text-[13px] font-sans uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
              Seefeldstrasse 152, 8008 Zurich
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Email */}
          <FooterLink href="mailto:hello@betteratred.com" external>
            hello@betteratred.com
          </FooterLink>

          {/* Center: Copyright */}
          <p className="text-[13px] font-sans text-white uppercase tracking-wide">
            &copy;2026 ALL RIGHTS RESERVED
          </p>

          {/* Right: Social icons */}
          <FooterSocialIcons />
        </div>
      </div>
    </footer>
  );
}
