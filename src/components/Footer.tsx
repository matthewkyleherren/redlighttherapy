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
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight">
          Your <span className="italic" style={{ fontFamily: 'Bradford' }}>legacy,</span> made.
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
                <FooterLink href="/founders">Founders</FooterLink>
                <FooterLink href="/stories">Stories</FooterLink>
                <FooterLink href="/membership">Membership</FooterLink>
              </div>
            </div>

            {/* Company column */}
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-[10px] font-sans uppercase tracking-wide">Company</span>
              <div className="flex flex-col gap-4">
                <FooterLink href="/manifesto" external>Manifesto</FooterLink>
                <FooterLink href="/careers" external>Careers</FooterLink>
                <FooterLink href="https://sigma.sequel.co/" external>Advisor access</FooterLink>
                <FooterLink href="/privacy" external>Privacy policy</FooterLink>
              </div>
            </div>
          </div>

          {/* Right side: Clocks (hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-3 gap-x-24">
            <Clock
              timezone="America/Los_Angeles"
              city="San Francisco"
              country="United States"
              ariaLabel="Clock showing time in San Francisco"
            />
            <Clock
              timezone="America/New_York"
              city="Miami"
              country="United States"
              ariaLabel="Clock showing time in Miami"
            />
            <Clock
              timezone="Europe/London"
              city="London"
              country="United Kingdom"
              ariaLabel="Clock showing time in London"
            />
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Email */}
          <FooterLink href="mailto:members@sequel.co" external>
            members@sequel.co
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
