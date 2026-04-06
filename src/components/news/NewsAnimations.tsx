'use client';

import { useEffect } from 'react';

export function NewsAnimations() {
  useEffect(() => {
    (async () => {
      const { gsap } = await import('gsap');
      gsap.fromTo(
        '#newsArticles',
        { opacity: 0, y: '3vh' },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
    })();
  }, []);

  return null;
}
