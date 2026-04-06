'use client';

import { useEffect } from 'react';

const BENEFITS = [
  {
    title: 'Meaningful options package',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12" />
        <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <path d="M2 12h20" />
        <path d="M12 6v6" />
      </svg>
    ),
  },
  {
    title: 'Private healthcare',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v12" />
        <path d="M6 12h12" />
      </svg>
    ),
  },
  {
    title: 'Generous parental leave policy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: 'Perks with Juno',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Gym membership contributions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path d="M20.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path d="M5 8v8" />
        <path d="M19 8v8" />
        <path d="M5 12h14" />
        <path d="M3 10v4" />
        <path d="M21 10v4" />
      </svg>
    ),
  },
  {
    title: 'Night nanny for new parents',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M14.5 8.5l.5-.5" />
        <path d="M17 11l.5-.5" />
        <path d="M19.5 8l.5-.5" />
      </svg>
    ),
  },
];

function BenefitItem({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <li>
      <div className="benefitContainer">
        <div className="glass benefit">
          <span style={{ display: 'flex', alignItems: 'center', marginRight: '0.75rem', flexShrink: 0 }}>
            {icon}
          </span>
          <span className="benefitTitle">{title}</span>
        </div>
      </div>
    </li>
  );
}

function initBenefitsMarquee(container: HTMLElement) {
  const content = container.querySelector<HTMLUListElement>('.benefitsContent');
  if (!content) return;

  const contentEl = content;
  const originalItems = Array.from(contentEl.children);
  for (const item of originalItems) {
    contentEl.appendChild(item.cloneNode(true));
  }

  const getScrollSpeed = () => {
    const cssVal = getComputedStyle(container).getPropertyValue('--scrollSpeed');
    return parseFloat(cssVal) || 80;
  };

  function recalculate() {
    const scrollDistance = contentEl.scrollWidth / 2;
    container.style.setProperty('--scrollDistance', `${scrollDistance}px`);
    const speed = getScrollSpeed();
    const duration = scrollDistance / speed;
    container.style.setProperty('--benefitAnimationDuration', `${duration}s`);
  }

  recalculate();

  const resizeObserver = new ResizeObserver(() => {
    const computedStyle = getComputedStyle(contentEl);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentX = matrix.m41;
    const oldDistance = parseFloat(container.style.getPropertyValue('--scrollDistance')) || 1;
    const phase = oldDistance > 0 ? currentX / -oldDistance : 0;

    recalculate();

    const newDuration = parseFloat(container.style.getPropertyValue('--benefitAnimationDuration')) || 30;
    const delay = -(phase * newDuration);
    container.style.setProperty('--benefitAnimationDelay', `${delay}s`);
  });

  resizeObserver.observe(container);

  if ('fonts' in document && document.fonts?.ready) {
    document.fonts.ready.then(() => recalculate());
  }

  return () => {
    resizeObserver.disconnect();
  };
}

export function CareersSection4() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const marquee1 = document.getElementById('benefitsMarquee1');
    const marquee2 = document.getElementById('benefitsMarquee2');

    if (marquee1) {
      const cleanup = initBenefitsMarquee(marquee1);
      if (cleanup) cleanups.push(cleanup);
    }
    if (marquee2) {
      const cleanup = initBenefitsMarquee(marquee2);
      if (cleanup) cleanups.push(cleanup);
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, []);

  return (
    <section id="section4" className="section section4">
      <div id="section4Content" className="section4Content">
        <div className="titleContainer section4SubtitleContainer">
          <h2 id="section4Subtitle" className="subtitle section4Subtitle">
            Our<span className="subtitleItalic section4SubtitleItalic"> benefits.</span>
          </h2>
        </div>

        <div className="benefitsContainer">
          <div id="benefitsMarquee1" className="benefits benefits--right">
            <ul className="benefitsContent">
              {BENEFITS.map((b, i) => (
                <BenefitItem key={i} title={b.title} icon={b.icon} />
              ))}
            </ul>
          </div>

          <div id="benefitsMarquee2" className="benefits">
            <ul className="benefitsContent">
              {BENEFITS.map((b, i) => (
                <BenefitItem key={i} title={b.title} icon={b.icon} />
              ))}
            </ul>
          </div>
        </div>

        <div className="benefitImagesContainer !z-2" aria-hidden="true">
          <div id="benefitImagesLeft" className="benefitImagesLeft">
            <img src="/images/careers/run.png" alt="" loading="lazy" className="benefitImage" width={219} height={362} />
            <img src="/images/careers/padel.png" alt="" loading="lazy" className="benefitImage" width={542} height={361} />
          </div>
          <div id="benefitImagesRight" className="benefitImagesRight">
            <img src="/images/careers/health.png" alt="" loading="lazy" className="benefitImage" width={255} height={382} />
            <img src="/images/careers/baby.png" alt="" loading="lazy" className="benefitImage" width={208} height={361} />
          </div>
        </div>
      </div>
    </section>
  );
}
