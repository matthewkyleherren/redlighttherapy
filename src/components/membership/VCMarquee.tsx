'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const VC_LOGOS = [
  { src: '/images/8vc.png', alt: '8VC' },
  { src: '/images/a16z.png', alt: 'a16z', scale: 0.9 },
  { src: '/images/balderton-capital.png', alt: 'Balderton Capital' },
  { src: '/images/bessemer.png', alt: 'Bessemer', scale: 0.9 },
  { src: '/images/concept-ventures.png', alt: 'Concept Ventures', scale: 1.25 },
  { src: '/images/creandum.png', alt: 'Creandum', scale: 0.3 },
  { src: '/images/first-minute.png', alt: 'First Minute', scale: 0.9 },
  { src: '/images/game-changers.png', alt: 'Game Changers' },
  { src: '/images/goodwater.png', alt: 'Goodwater' },
  { src: '/images/google-ventures.png', alt: 'Google Ventures', scale: 0.8 },
  { src: '/images/initialized.png', alt: 'Initialized' },
  { src: '/images/local-globe.png', alt: 'Local Globe' },
  { src: '/images/menlo-ventures.png', alt: 'Menlo Ventures', scale: 0.9 },
  { src: '/images/partech-2.png', alt: 'Partech', scale: 0.75 },
  { src: '/images/signal-fire.png', alt: 'Signal Fire' },
];

export function VCMarquee() {
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
      id="vcLogos"
      className="league vcMarquee"
      style={{ '--league-elements': 15 } as React.CSSProperties}
    >
      <ul className="league-content">
        {VC_LOGOS.map((logo) => (
          <li key={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={128}
              loading="lazy"
              className="w-16 h-16 object-contain league-logo"
              style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
