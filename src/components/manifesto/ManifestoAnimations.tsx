'use client';

import { useEffect } from 'react';

export function ManifestoAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const heroTitle = document.getElementById('manifestoHeroTitle');
      const badge = document.querySelector('.manifestoHero .badge') as HTMLElement | null;
      const sections = document.querySelectorAll<HTMLElement>('.manifestoSection, .manifestoCta');

      if (heroTitle) heroTitle.style.opacity = '1';
      if (badge) badge.style.opacity = '1';
      sections.forEach((el) => { el.style.opacity = '1'; });
      return;
    }

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      const { SplitText } = await import('gsap/SplitText');
      gsap.registerPlugin(SplitText);

      const heroTitle = document.getElementById('manifestoHeroTitle');
      if (!heroTitle) return;

      const split = new SplitText(heroTitle, { type: 'words,chars' });

      const tl = gsap.timeline();

      tl.fromTo(
        split.chars,
        { opacity: 0, y: '4vh', filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.03, ease: 'power2.out', duration: 0.8 }
      );

      tl.fromTo(
        '.manifestoHero .badge',
        { opacity: 0, y: '3vh' },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '<0.2'
      );

      gsap.fromTo(
        '.manifestoSection, .manifestoCta',
        { opacity: 0, y: '5vh', filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.12, ease: 'power2.out', duration: 0.8, delay: 0.6 }
      );

      cleanup = () => {
        tl.kill();
        split.revert();
      };
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
