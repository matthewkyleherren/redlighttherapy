'use client';

import { useEffect, useRef } from 'react';

const BENEFITS = [
  'Collagen',
  'Recovery',
  'Sleep',
  'Inflammation',
  'Energy',
  'Hormones',
  'Cognition',
  'Skin',
  'Performance',
  'Mood',
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
    const { default: gsap } = await import('gsap');
    const chips = el.querySelectorAll('.league-content li .benefit-chip');
    gsap.timeline({ defaults: { ease: 'power2.out' } }).to(chips, {
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

    const originals = Array.from(ul.children).slice(0, count);
    for (const child of originals) {
      const clone = child.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      const chip = clone.querySelector('.benefit-chip');
      if (chip) {
        (chip as HTMLElement).style.opacity = '1';
        (chip as HTMLElement).style.filter = 'blur(0px)';
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
      style={{ '--league-elements': BENEFITS.length } as React.CSSProperties}
    >
      <ul className="league-content">
        {BENEFITS.map((benefit) => (
          <li key={benefit}>
            <span
              className="benefit-chip"
              style={{
                opacity: 0,
                filter: 'blur(4px)',
                display: 'inline-block',
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.15)',
                fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                whiteSpace: 'nowrap',
              }}
            >
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
