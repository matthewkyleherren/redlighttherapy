'use client';

import { useEffect } from 'react';

const BENEFITS = [
  { title: 'Collagen production', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9" /></svg> },
  { title: 'Muscle recovery', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /><path d="M20.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /><path d="M5 8v8" /><path d="M19 8v8" /><path d="M5 12h14" /><path d="M3 10v4" /><path d="M21 10v4" /></svg> },
  { title: 'Sleep quality', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg> },
  { title: 'Inflammation reduction', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c1 3 3.5 5 6 5-1 4-3 8-6 12-3-4-5-8-6-12 2.5 0 5-2 6-5z" /></svg> },
  { title: 'ATP energy output', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
  { title: 'Hormonal balance', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
  { title: 'Cognitive clarity', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6-1 1-1 2-1 3h-6c0-1 0-2-1-3-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z" /><path d="M9 18h6" /><path d="M10 22h4" /></svg> },
  { title: 'Skin tone & texture', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg> },
  { title: 'Joint mobility', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M12 8v4" /><path d="M8 12l-3 7" /><path d="M16 12l3 7" /><path d="M9 16l-2 6" /><path d="M15 16l2 6" /></svg> },
  { title: 'Lymphatic drainage', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /><path d="M12 2c3 4 5 8 5 10s-2 6-5 10" /><path d="M12 2c-3 4-5 8-5 10s2 6 5 10" /></svg> },
  { title: 'Mood regulation', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg> },
  { title: 'Performance recovery', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
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

export function ScienceBenefitsMarquee() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const marquee1 = document.getElementById('scienceBenefitsMarquee1');
    const marquee2 = document.getElementById('scienceBenefitsMarquee2');

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
    <section className="section scienceBenefitsSection">
      <div className="section4Content scienceBenefitsContent">
        <div className="header">
          <div className="titleContainer section4SubtitleContainer">
            <h2 className="subtitle">
              What light does{' '}
              <span className="subtitleItalic">to your body.</span>
            </h2>
          </div>
          <div className="descriptionContainer">
            <p className="description">
              One session. Twelve concurrent biological effects.
              Here are the ones with the strongest evidence.
            </p>
          </div>
        </div>

        <div className="benefitsContainer">
          <div id="scienceBenefitsMarquee1" className="benefits benefits--right">
            <ul className="benefitsContent">
              {BENEFITS.map((b, i) => (
                <BenefitItem key={i} title={b.title} icon={b.icon} />
              ))}
            </ul>
          </div>

          <div id="scienceBenefitsMarquee2" className="benefits">
            <ul className="benefitsContent">
              {BENEFITS.map((b, i) => (
                <BenefitItem key={i} title={b.title} icon={b.icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
