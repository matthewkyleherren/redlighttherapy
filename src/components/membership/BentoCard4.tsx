'use client';

import { useEffect, useRef } from 'react';

const BAR_HEIGHTS = [50, 69, 92, 127, 138, 92, 69, 144, 91, 91];

export function BentoCard4() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(card);
            observer.unobserve(card);
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  async function animate(card: HTMLElement) {
    const { default: gsap } = await import('gsap');
    const title = card.querySelector('.bentoCard4Title');
    const lineEl = card.querySelector('.bentoCard4Line');
    const line = card.querySelector('.bentoCard4Line line');
    const dot = card.querySelector('.bentoCard4Dot');
    const bars = card.querySelectorAll('.bentoCard4Bar');

    if (title) gsap.to(title, { opacity: 1, duration: 0.5, ease: 'power2.out' });

    if (lineEl) gsap.to(lineEl, { opacity: 1, duration: 0.3, delay: 0.2 });
    if (line) {
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.inOut',
      });
    }
    if (dot) {
      gsap.to(dot, {
        scale: 1,
        duration: 0.4,
        delay: 0.9,
        ease: 'back.out(1.7)',
      });
    }

    gsap.to(bars, {
      scaleY: 1,
      duration: 0.6,
      stagger: 0.08,
      delay: 1,
      ease: 'power2.out',
    });
  }

  return (
    <div ref={cardRef} className="bentoCard4">
      <p className="bentoCard4Title">
        Automated{' '}
        <span className="bentoCard4TitleItalic">portfolio</span>
        <br />
        management
      </p>
      <div className="bentoCard4LineContainer">
        <svg className="bentoCard4Line" width="2" height="48" viewBox="0 0 2 48">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="48"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="bentoCard4Dot" />
      </div>
      <div className="bentoCard4Bars">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="bentoCard4Bar"
            style={{ '--bar-height': `${h}px` } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
