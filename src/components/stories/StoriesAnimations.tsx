'use client';

import { useEffect } from 'react';

export function StoriesAnimations() {
  useEffect(() => {
    // Tab switching
    const tabs = document.querySelectorAll<HTMLElement>('.tab');
    const panels = document.querySelectorAll<HTMLElement>('.panel');

    function switchTab(index: number) {
      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('is-selected');
        } else {
          tab.classList.remove('is-selected');
        }
      });
      panels.forEach((panel, i) => {
        if (i === index) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    }

    tabs.forEach((tab, i) => {
      const btn = tab.querySelector('.tabButton');
      if (btn) {
        btn.addEventListener('click', () => switchTab(i));
      }
    });

    // Title animation with GSAP SplitText
    async function animateTitle() {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default || gsapModule.gsap;
        const { SplitText } = await import('gsap/SplitText');
        gsap.registerPlugin(SplitText);

        const titleEl = document.querySelector('.storiesSection1Title');
        if (!titleEl) return;

        const split = new SplitText(titleEl, { type: 'chars' });
        gsap.set(titleEl, { opacity: 1 });

        gsap.from(split.chars, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.02,
          ease: 'power2.out',
          onComplete: () => {
            // Fade in tabs and panels
            gsap.to('.tabs', { opacity: 1, duration: 0.5, ease: 'power2.out' });
            gsap.to('.panels', { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.1 });
          },
        });
      } catch {
        // Fallback: just show everything
        const titleEl = document.querySelector<HTMLElement>('.storiesSection1Title');
        const tabsEl = document.querySelector<HTMLElement>('.tabs');
        const panelsEl = document.querySelector<HTMLElement>('.panels');
        if (titleEl) titleEl.style.opacity = '1';
        if (tabsEl) tabsEl.style.opacity = '1';
        if (panelsEl) panelsEl.style.opacity = '1';
      }
    }

    animateTitle();

    // Video card click delegation
    function handleVideoClick(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest<HTMLElement>('.videoContainer');
      if (!btn) return;
      const playbackId = btn.dataset.playbackId;
      if (playbackId) {
        window.dispatchEvent(new CustomEvent('video-player:open', { detail: { playbackId } }));
      }
    }
    document.addEventListener('click', handleVideoClick);

    return () => {
      document.removeEventListener('click', handleVideoClick);
    };
  }, []);

  return null;
}
