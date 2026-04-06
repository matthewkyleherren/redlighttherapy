'use client';

import { useEffect, useRef } from 'react';
import { initAnimationLibs, type AnimationLibs } from '@/lib/animations/animation-libs';
import { createTimeline, type Timeline, type TimelineSection } from '@/lib/animations/section-timeline';
import { interpolate } from '@/lib/utils/animations';

function calculateCardPosition(relativeIndex: number, totalCards: number) {
  return {
    scale: 1 - relativeIndex * 0.08,
    rotation: relativeIndex * 5,
    y: 0,
    x: relativeIndex * 25,
    zIndex: totalCards - relativeIndex,
  };
}

function createScienceValuesCardStack(libs: AnimationLibs) {
  const container = document.getElementById('scienceValues');
  const cardNodes = container?.querySelectorAll<HTMLElement>('.value');
  const leftBtn = document.getElementById('scienceValuesArrowLeft') as HTMLButtonElement | null;
  const rightBtn = document.getElementById('scienceValuesArrowRight') as HTMLButtonElement | null;
  if (!container || !cardNodes || cardNodes.length === 0 || !leftBtn || !rightBtn) return null;

  const cards = Array.from(cardNodes);
  const totalCards = cards.length;
  let currentIndex = 0;

  let isDragging = false;
  let startX = 0;
  let startTime = 0;
  let currentDragX = 0;

  function updateButtonStates() {
    leftBtn!.disabled = currentIndex === 0;
    rightBtn!.disabled = currentIndex === totalCards - 1;
  }

  function positionCards(animate = true) {
    for (let i = 0; i < totalCards; i++) {
      const card = cards[i];
      const relativeIndex = i - currentIndex;
      if (relativeIndex < 0) {
        libs.gsap.set(card, { x: -200, opacity: 0, zIndex: 0, pointerEvents: 'none' });
        continue;
      }
      const pos = calculateCardPosition(relativeIndex, totalCards);
      const props = {
        scale: pos.scale,
        rotation: pos.rotation,
        y: pos.y,
        x: pos.x,
        zIndex: pos.zIndex,
        opacity: relativeIndex > 3 ? 0 : 1,
        pointerEvents: relativeIndex === 0 ? 'auto' : 'none',
      };
      if (animate) {
        libs.gsap.to(card, { ...props, duration: 0.4, ease: 'power2.out' });
      } else {
        libs.gsap.set(card, props);
      }
    }
    updateButtonStates();
  }

  function goNext() {
    if (currentIndex >= totalCards - 1) return;
    const card = cards[currentIndex];
    libs.gsap.to(card, {
      x: -200, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => { libs.gsap.set(card, { pointerEvents: 'none' }); },
    });
    currentIndex++;
    positionCards(true);
  }

  function goPrev() {
    if (currentIndex <= 0) return;
    currentIndex--;
    const card = cards[currentIndex];
    libs.gsap.fromTo(card,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, scale: 1, rotation: 0, zIndex: totalCards, pointerEvents: 'auto', duration: 0.4, ease: 'power2.out' },
    );
    positionCards(true);
  }

  const onRight = () => goNext();
  const onLeft = () => goPrev();
  rightBtn.addEventListener('click', onRight);
  leftBtn.addEventListener('click', onLeft);

  function getClientX(e: MouseEvent | TouchEvent) {
    return 'touches' in e ? e.touches[0].clientX : e.clientX;
  }

  function onDragStart(e: MouseEvent | TouchEvent) {
    isDragging = true;
    startX = getClientX(e);
    startTime = Date.now();
    currentDragX = 0;
    container!.style.cursor = 'grabbing';
  }

  function onDragMove(e: MouseEvent | TouchEvent) {
    if (!isDragging) return;
    currentDragX = getClientX(e) - startX;
    const card = cards[currentIndex];
    if (card) libs.gsap.set(card, { x: currentDragX * 0.5 });
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    container!.style.cursor = 'grab';
    const elapsed = Date.now() - startTime;
    const velocity = Math.abs(currentDragX) / (elapsed || 1);
    const threshold = 80;
    if (currentDragX < -threshold || (currentDragX < 0 && velocity > 0.5)) {
      goNext();
    } else if (currentDragX > threshold || (currentDragX > 0 && velocity > 0.5)) {
      goPrev();
    } else {
      positionCards(true);
    }
  }

  container.addEventListener('mousedown', onDragStart);
  container.addEventListener('touchstart', onDragStart, { passive: true });
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove, { passive: true });
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);

  positionCards(false);

  return {
    positionCards,
    dispose() {
      rightBtn.removeEventListener('click', onRight);
      leftBtn.removeEventListener('click', onLeft);
      container.removeEventListener('mousedown', onDragStart);
      container.removeEventListener('touchstart', onDragStart);
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('touchmove', onDragMove);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchend', onDragEnd);
    },
  };
}

function createScienceSection1(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('scienceSection1');
  const header = document.getElementById('scienceHeader1');
  const title = document.getElementById('scienceHeader1Title');
  const description = document.getElementById('scienceHeader1Description');
  const link = document.getElementById('scienceHeader1Link');

  if (!section || !header || !title || !description || !link) {
    throw new Error('Science section 1 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const vh = window.innerHeight;

  libs.gsap.set(title, { opacity: 0 });
  libs.gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });
  libs.gsap.set(description, { opacity: 0, y: vh * 0.05 });
  libs.gsap.set(link, { opacity: 0, y: vh * 0.05 });

  return {
    id: 'scienceSection1',
    section,
    start: 'top',
    animations: [
      {
        id: 'fadeOutScienceHeader1',
        start: 0,
        end: 15,
        update: (progress) => {
          const opacity = interpolate(1, 0, progress);
          const y = interpolate(0, -vh * 0.1, progress);
          libs.gsap.set(header, { opacity, y });
        },
      },
    ],
  };
}

function createScienceEvidenceSection(libs: AnimationLibs): TimelineSection {
  const section = document.querySelector<HTMLElement>('.scienceEvidenceSection');
  const valuesWrapper = document.getElementById('scienceValuesWrapper');

  if (!section || !valuesWrapper) {
    throw new Error('Science evidence section elements not found');
  }

  libs.gsap.set(valuesWrapper, { opacity: 0, y: 40 });

  let cardStack: ReturnType<typeof createScienceValuesCardStack> = null;

  return {
    id: 'scienceEvidence',
    section,
    animations: [
      {
        id: 'animateScienceValues',
        start: 30,
        end: 60,
        update: (progress) => {
          if (progress > 0.1) {
            libs.gsap.to(valuesWrapper, {
              opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', overwrite: true,
            });
            if (!cardStack) {
              cardStack = createScienceValuesCardStack(libs);
            }
          }
        },
      },
    ],
    dispose() {
      cardStack?.dispose();
    },
  };
}

function playScienceSection1Entrance(libs: AnimationLibs) {
  const title = document.getElementById('scienceHeader1Title');
  const description = document.getElementById('scienceHeader1Description');
  const link = document.getElementById('scienceHeader1Link');
  const pageHeader = document.getElementById('pageHeader');

  if (!title) return;

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const vh = window.innerHeight;

  libs.gsap.set(title, { opacity: 1 });

  const tl = libs.gsap.timeline();

  if (pageHeader) {
    libs.gsap.set(pageHeader, { opacity: 0, y: -vh * 0.1 });
    tl.to(pageHeader, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '=');
  }

  tl.to(titleSplit.chars, {
    opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out', stagger: 0.04,
  }, '<0.5');

  if (description) {
    tl.to(description, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.3');
  }

  if (link) {
    tl.to(link, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.1');
  }
}

function setupTimeline(libs: AnimationLibs): Timeline {
  const timeline = createTimeline(libs);
  timeline.initSection(createScienceSection1(libs));
  timeline.initSection(createScienceEvidenceSection(libs));
  timeline.refresh();
  return timeline;
}

export function ScienceAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let timeline: Timeline | null = null;

    async function init() {
      if ('fonts' in document && document.fonts?.ready) {
        await Promise.race([document.fonts.ready, new Promise<void>((r) => setTimeout(r, 3000))]);
      }

      const libs = await initAnimationLibs();
      timeline = setupTimeline(libs);
      playScienceSection1Entrance(libs);
    }

    init();

    return () => {
      timeline?.dispose();
    };
  }, []);

  return null;
}
