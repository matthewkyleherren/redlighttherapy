'use client';

import { useEffect } from 'react';

export function VideosAnimations() {
  useEffect(() => {
    (async () => {
      const { gsap } = await import('gsap');
      gsap.fromTo(
        '#videosContainer',
        { opacity: 0, y: '3vh' },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
    })();

    // Wire up video card clicks to dispatch custom event
    function handleClick(e: Event) {
      const button = (e.target as HTMLElement).closest('.videosItem') as HTMLElement | null;
      if (!button) return;
      const playbackId = button.dataset.playbackId;
      if (playbackId) {
        window.dispatchEvent(
          new CustomEvent('video-player:open', { detail: { playbackId } })
        );
      }
    }

    const grid = document.querySelector('.videosGrid');
    grid?.addEventListener('click', handleClick);

    return () => {
      grid?.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
