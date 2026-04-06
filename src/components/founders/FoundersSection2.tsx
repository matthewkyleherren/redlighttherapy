'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const VCS = [
  { src: '/images/founders/8vc.png', alt: '8VC' },
  { src: '/images/founders/a16z.png', alt: 'a16z', scale: 0.9 },
  { src: '/images/founders/balderton-capital.png', alt: 'Balderton Capital' },
  { src: '/images/founders/bessemer.png', alt: 'Bessemer', scale: 0.9 },
  { src: '/images/founders/concept-ventures.png', alt: 'Concept Ventures', scale: 1.25 },
  { src: '/images/founders/creandum.png', alt: 'Creandum', scale: 0.3 },
  { src: '/images/founders/first-minute.png', alt: 'First Minute', scale: 0.9 },
  { src: '/images/founders/game-changers.png', alt: 'Game Changers' },
  { src: '/images/founders/goodwater.png', alt: 'Goodwater' },
  { src: '/images/founders/google-ventures.png', alt: 'Google Ventures', scale: 0.8 },
  { src: '/images/founders/initialized.png', alt: 'Initialized' },
  { src: '/images/founders/local-globe.png', alt: 'Local Globe' },
  { src: '/images/founders/menlo-ventures.png', alt: 'Menlo Ventures', scale: 0.9 },
  { src: '/images/founders/partech-2.png', alt: 'Partech', scale: 0.75 },
  { src: '/images/founders/signal-fire.png', alt: 'Signal Fire' },
];

const CHEQUES = [
  {
    stage: 'Pre-seed/Seed',
    amount: '$100k-$200k',
    description: 'Our average cheque size for Pre-seed & Seed.',
    badgeClass: 'stageBadgeDark',
  },
  {
    stage: 'Series A - Series C',
    amount: '$500k-$3m',
    description: 'Our average cheque size for Series A - Series C.',
    badgeClass: 'stageBadgeLight',
  },
];

export function FoundersSection2() {
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
    const imgs = el.querySelectorAll('.marquee-content li img');
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

    const ul = el.querySelector('ul.marquee-content');
    if (!ul) return;

    const count = ul.children.length;
    el.style.setProperty('--marquee-elements', count.toString());

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
    <div id="section2" className="section section2">
      <div id="header2" className="header">
        <div className="titleContainer">
          <h2 id="header2Title" className="title header2Title">
            We co-invest with top tier funds.
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        id="vcMarquee"
        className="marquee"
        style={{ '--marquee-elements': 15 } as React.CSSProperties}
      >
        <ul className="marquee-content">
          {VCS.map((vc) => (
            <li key={vc.alt}>
              <Image
                src={vc.src}
                alt={vc.alt}
                width={128}
                height={128}
                loading="lazy"
                className="w-16 h-16 object-contain marquee-logo"
                style={vc.scale ? { transform: `scale(${vc.scale})` } : undefined}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="cheques">
        {CHEQUES.map((cheque) => (
          <div key={cheque.stage} className="cheque">
            <div className={`stageBadge ${cheque.badgeClass}`}>
              <span className="badgeText">{cheque.stage}</span>
            </div>
            <p className="chequeTitle">{cheque.amount}</p>
            <p className="chequeDescription">{cheque.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
