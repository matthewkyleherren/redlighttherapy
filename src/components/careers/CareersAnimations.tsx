'use client';

import { useEffect, useRef } from 'react';
import { initAnimationLibs, type AnimationLibs } from '@/lib/animations/animation-libs';
import { createTimeline, type Timeline, type TimelineSection } from '@/lib/animations/section-timeline';
import { createSequentialThresholdAnimations } from '@/lib/animations/text-animations';
import { interpolate } from '@/lib/utils/animations';

// ---- Values Card Stack ----

function calculateCardPosition(relativeIndex: number, totalCards: number) {
  return {
    scale: 1 - relativeIndex * 0.08,
    rotation: relativeIndex * 5,
    y: 0,
    x: relativeIndex * 25,
    zIndex: totalCards - relativeIndex,
  };
}

function createValuesCardStack(libs: AnimationLibs) {
  const container = document.getElementById('values');
  const cardNodes = container?.querySelectorAll<HTMLElement>('.value');
  const leftBtn = document.getElementById('valuesArrowLeft') as HTMLButtonElement | null;
  const rightBtn = document.getElementById('valuesArrowRight') as HTMLButtonElement | null;
  if (!container || !cardNodes || cardNodes.length === 0 || !leftBtn || !rightBtn) return null;

  const cards = Array.from(cardNodes);
  const totalCards = cards.length;
  let currentIndex = 0;

  // Drag state
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
        // Card already swiped away
        libs.gsap.set(card, {
          x: -200,
          opacity: 0,
          zIndex: 0,
          pointerEvents: 'none',
        });
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
        libs.gsap.to(card, {
          ...props,
          duration: 0.4,
          ease: 'power2.out',
        });
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
      x: -200,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        libs.gsap.set(card, { pointerEvents: 'none' });
      },
    });
    currentIndex++;
    positionCards(true);
  }

  function goPrev() {
    if (currentIndex <= 0) return;
    currentIndex--;
    const card = cards[currentIndex];
    libs.gsap.fromTo(
      card,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        zIndex: totalCards,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out',
      },
    );
    positionCards(true);
  }

  // Arrow click handlers
  const onRight = () => goNext();
  const onLeft = () => goPrev();
  rightBtn.addEventListener('click', onRight);
  leftBtn.addEventListener('click', onLeft);

  // Drag handlers
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
    if (card) {
      libs.gsap.set(card, { x: currentDragX * 0.5 });
    }
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
      // Snap back
      positionCards(true);
    }
  }

  container.addEventListener('mousedown', onDragStart);
  container.addEventListener('touchstart', onDragStart, { passive: true });
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove, { passive: true });
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);

  // Initial position (no animation - will be set by scroll animation)
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

// ---- Section creators ----

function createCareersSection1(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section1');
  const header = document.getElementById('header1');
  const title = document.getElementById('header1Title');
  const description = document.getElementById('header1Description');
  const link = document.getElementById('header1GetInTouchButton');

  if (!section || !header || !title || !description || !link) {
    throw new Error('Careers section 1 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const vh = window.innerHeight;

  // Initial state
  libs.gsap.set(title, { opacity: 0 });
  libs.gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });
  libs.gsap.set(description, { opacity: 0, y: vh * 0.05 });
  libs.gsap.set(link, { opacity: 0, y: vh * 0.05 });

  return {
    id: 'section1',
    section,
    start: 'top',
    animations: [
      {
        id: 'fadeOutHeader1',
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

function createCareersSection2(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section2');
  const title = document.getElementById('header2Title');
  const description = document.getElementById('header2Description');
  const video = document.getElementById('section2Video');

  if (!section || !title || !description || !video) {
    throw new Error('Careers section 2 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const descriptionSplit = libs.SplitText.create(description, { type: 'lines' });

  const animateText = createSequentialThresholdAnimations(libs, [
    {
      elements: Array.from(titleSplit.chars),
      triggerThreshold: 0.3,
      startBlur: 8,
      startY: 0,
      duration: 0.4,
      stagger: 0.02,
    },
    {
      elements: Array.from(descriptionSplit.lines),
      triggerThreshold: 0.3,
      startBlur: 4,
      startY: 0.02,
      duration: 0.5,
      stagger: 0.08,
      overlap: 0.5,
    },
  ]);

  return {
    id: 'section2',
    section,
    animations: [
      {
        id: 'fadeInVideo',
        start: 10,
        end: 30,
        update: (progress) => {
          const opacity = interpolate(0, 0.5, progress);
          libs.gsap.set(video, { opacity });
        },
      },
      {
        id: 'animateText2',
        start: 20,
        end: 30,
        update: (progress) => {
          animateText(progress);
        },
      },
      {
        id: 'fadeOutVideo',
        start: 70,
        end: 90,
        update: (progress) => {
          const opacity = interpolate(0.5, 0, progress);
          libs.gsap.set(video, { opacity });
        },
      },
    ],
  };
}

function createCareersSection3(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section3');
  const title = document.getElementById('header3Title');
  const label = document.getElementById('header3Label');
  const subtitle = document.getElementById('header3Subtitle');
  const valuesWrapper = document.getElementById('valuesWrapper');

  if (!section || !title || !label || !subtitle || !valuesWrapper) {
    throw new Error('Careers section 3 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });

  // Set all chars to dim initially
  libs.gsap.set(titleSplit.chars, { opacity: 0.2 });
  libs.gsap.set(valuesWrapper, { opacity: 0, y: 40 });

  let cardStack: ReturnType<typeof createValuesCardStack> = null;

  return {
    id: 'section3',
    section,
    animations: [
      {
        id: 'typeHeader3',
        start: 20,
        end: 45,
        update: (progress) => {
          const totalChars = titleSplit.chars.length;
          const revealCount = Math.floor(progress * totalChars);
          for (let i = 0; i < totalChars; i++) {
            libs.gsap.set(titleSplit.chars[i], {
              opacity: i < revealCount ? 1 : 0.2,
            });
          }
        },
      },
      {
        id: 'animateValues',
        start: 50,
        end: 70,
        update: (progress) => {
          if (progress > 0.1) {
            libs.gsap.to(valuesWrapper, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              overwrite: true,
            });

            // Initialize card stack once visible
            if (!cardStack) {
              cardStack = createValuesCardStack(libs);
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

function createCareersSection4(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section4');
  const subtitle = document.getElementById('section4Subtitle');
  const benefitImagesLeft = document.getElementById('benefitImagesLeft');
  const benefitImagesRight = document.getElementById('benefitImagesRight');

  if (!section || !subtitle) {
    throw new Error('Careers section 4 elements not found');
  }

  return {
    id: 'section4',
    section,
    animations: [
      {
        id: 'parallaxImages',
        start: 0,
        end: 100,
        update: (progress) => {
          if (benefitImagesLeft) {
            const yLeft = interpolate(80, -80, progress);
            libs.gsap.set(benefitImagesLeft, { y: yLeft });
          }
          if (benefitImagesRight) {
            const yRight = interpolate(-80, 80, progress);
            libs.gsap.set(benefitImagesRight, { y: yRight });
          }
        },
      },
    ],
  };
}

function createCareersSection5(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section5');
  const footerTitle = document.getElementById('section5FooterTitle');
  const footerDescription = document.getElementById('section5FooterDescription');

  if (!section || !footerTitle || !footerDescription) {
    throw new Error('Careers section 5 elements not found');
  }

  const titleSplit = libs.SplitText.create(footerTitle, { type: 'words,chars' });
  const descriptionSplit = libs.SplitText.create(footerDescription, { type: 'lines' });

  // Set initial state
  libs.gsap.set(titleSplit.chars, { opacity: 0 });
  libs.gsap.set(descriptionSplit.lines, { opacity: 0 });

  let hasTriggered = false;

  return {
    id: 'section5',
    section,
    animations: [
      {
        id: 'fadeInFooter5',
        start: 40,
        end: 60,
        update: (progress) => {
          if (progress > 0.3 && !hasTriggered) {
            hasTriggered = true;
            libs.gsap.to(titleSplit.chars, {
              opacity: 1,
              duration: 0.4,
              stagger: 0.02,
              ease: 'power2.out',
            });
            libs.gsap.to(descriptionSplit.lines, {
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              delay: 0.3,
              ease: 'power2.out',
            });
          }
          if (progress < 0.1 && hasTriggered) {
            hasTriggered = false;
            libs.gsap.set(titleSplit.chars, { opacity: 0 });
            libs.gsap.set(descriptionSplit.lines, { opacity: 0 });
          }
        },
      },
    ],
  };
}

// ---- Entrance animation ----

function playSection1Entrance(libs: AnimationLibs) {
  const title = document.getElementById('header1Title');
  const description = document.getElementById('header1Description');
  const link = document.getElementById('header1GetInTouchButton');
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

  tl.to(
    titleSplit.chars,
    {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.04,
    },
    '<0.5',
  );

  if (description) {
    tl.to(description, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.3');
  }

  if (link) {
    tl.to(link, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.1');
  }
}

// ---- Main setup ----

function setupTimeline(libs: AnimationLibs): Timeline {
  const timeline = createTimeline(libs);
  timeline.initSection(createCareersSection1(libs));
  timeline.initSection(createCareersSection2(libs));
  timeline.initSection(createCareersSection3(libs));
  timeline.initSection(createCareersSection4(libs));
  timeline.initSection(createCareersSection5(libs));
  timeline.refresh();
  return timeline;
}

export function CareersAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let timeline: Timeline | null = null;

    async function init() {
      // Wait for fonts
      if ('fonts' in document && document.fonts?.ready) {
        await Promise.race([document.fonts.ready, new Promise<void>((r) => setTimeout(r, 3000))]);
      }

      const libs = await initAnimationLibs();
      timeline = setupTimeline(libs);
      playSection1Entrance(libs);
    }

    init();

    return () => {
      timeline?.dispose();
    };
  }, []);

  return null;
}
