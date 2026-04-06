'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LEAGUES = [
  { src: '/images/atp.png', alt: 'ATP', scale: 0.85 },
  { src: '/images/baftas.png', alt: 'BAFTAs' },
  { src: '/images/ucl.png', alt: 'UEFA Champions League' },
  { src: '/images/pl.png', alt: 'Premier League' },
  { src: '/images/f1.png', alt: 'F1', scale: 0.85 },
  { src: '/images/grammys.png', alt: 'Grammys' },
  { src: '/images/mlb.png', alt: 'MLB', scale: 0.85 },
  { src: '/images/nfl.png', alt: 'NFL' },
  { src: '/images/nba.png', alt: 'NBA', scale: 0.95 },
  { src: '/images/nhl.png', alt: 'NHL' },
  { src: '/images/pga.png', alt: 'PGA' },
  { src: '/images/efl.png', alt: 'EFL' },
  { src: '/images/olympics.png', alt: 'Olympics', scale: 0.95 },
  { src: '/images/oscars.png', alt: 'Oscars' },
  { src: '/images/y-combinator.png', alt: 'Y-combinator' },
];

export function LeagueMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const infiniteScrollInit = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            playEntrance(el);
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function playEntrance(el: HTMLElement) {
    // Dynamically import gsap for the entrance animation
    const { default: gsap } = await import('gsap');
    const imgs = el.querySelectorAll('.league-content li img');
    gsap.timeline({ defaults: { ease: 'power2.out' } }).to(imgs, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.6,
      stagger: 0.12,
    });
    initInfiniteScroll(el);
  }

  function initInfiniteScroll(el: HTMLElement) {
    if (infiniteScrollInit.current) return;
    infiniteScrollInit.current = true;

    const ul = el.querySelector('ul.league-content');
    if (!ul) return;

    const count = ul.children.length;
    el.style.setProperty('--league-elements', count.toString());

    // Clone items for seamless loop
    const originals = Array.from(ul.children).slice(0, count);
    for (const child of originals) {
      const clone = child.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      const img = clone.querySelector('img');
      if (img) {
        img.style.opacity = '1';
        img.style.filter = 'blur(0px)';
      }
      ul.appendChild(clone);
    }

    el.style.setProperty('--scroll-play-state', 'running');
  }

  return (
    <div
      ref={containerRef}
      id="leagues"
      className="league section5Leagues"
      style={{ '--league-elements': 15 } as React.CSSProperties}
    >
      <ul className="league-content">
        {LEAGUES.map((league) => (
          <li key={league.alt}>
            <Image
              src={league.src}
              alt={league.alt}
              width={128}
              height={128}
              loading="lazy"
              className="w-16 h-16 object-contain league-logo"
              style={league.scale ? { transform: `scale(${league.scale})` } : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
