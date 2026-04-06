'use client';

import { useEffect } from 'react';

export function PostsAnimations() {
  useEffect(() => {
    (async () => {
      const { gsap } = await import('gsap');
      gsap.fromTo(
        '#postsContainer',
        { opacity: 0, y: '3vh' },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
    })();
  }, []);

  return null;
}
