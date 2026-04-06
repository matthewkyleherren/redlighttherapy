'use client';

import { useEffect, useRef } from 'react';
import { initAnimationLibs, type AnimationLibs } from '@/lib/animations/animation-libs';
import { createTimeline, type Timeline, type TimelineSection } from '@/lib/animations/section-timeline';
import { createSequentialThresholdAnimations } from '@/lib/animations/text-animations';
import { interpolate } from '@/lib/utils/animations';

// ---- SVG icon helpers for overlay controls ----

function pauseIcon(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/></svg>`;
}
function playIcon(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
}
function volumeOnIcon(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>`;
}
function volumeOffIcon(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>`;
}

// ---- Video Player Overlay ----

type OverlayPlayer = {
  open: (playbackId: string) => void;
  close: () => void;
  dispose: () => void;
};

function setupVideoPlayerOverlay(libs: AnimationLibs): OverlayPlayer | null {
  const overlay = document.getElementById('videoPlayerOverlay');
  const video = document.getElementById('overlayVideo') as (HTMLMediaElement & { setAttribute: (k: string, v: string) => void }) | null;
  const controlsEl = document.getElementById('overlayVideoControls');
  const restartBtn = document.getElementById('overlayRestart');
  const playPauseBtn = document.getElementById('overlayPlayPause');
  const muteBtn = document.getElementById('overlayMute');
  const timeDisplay = document.getElementById('overlayTime');
  const closeBtn = document.getElementById('overlayClose');

  if (!overlay || !video || !controlsEl || !restartBtn || !playPauseBtn || !muteBtn || !timeDisplay || !closeBtn) return null;

  // Alias all to non-nullable bindings so closures satisfy TypeScript narrowing.
  const videoEl = video;
  const overlayEl = overlay;
  const controlsRef = controlsEl;
  const restartRef = restartBtn;
  const playPauseRef = playPauseBtn;
  const muteRef = muteBtn;
  const timeRef = timeDisplay;
  const closeRef = closeBtn;

  let isOpen = false;
  let animFrameId: number | null = null;

  const isPlaying = () => !(videoEl as any).paused;
  const isMuted = () => (videoEl as any).muted;

  const updatePlayPause = () => {
    playPauseRef.innerHTML = isPlaying() ? pauseIcon() : playIcon();
  };
  const updateMute = () => {
    muteRef.innerHTML = isMuted() ? volumeOffIcon() : volumeOnIcon();
  };
  const updateTime = () => {
    if (!isOpen) return;
    const t = (videoEl as any).currentTime || 0;
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    timeRef.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    animFrameId = requestAnimationFrame(updateTime);
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const keys = new Set(['Space', 'Escape', 'KeyR', 'ArrowLeft', 'ArrowRight', 'KeyM']);
    if (!keys.has(e.code)) return;
    e.preventDefault();
    switch (e.code) {
      case 'Space': {
        if (isPlaying()) (videoEl as any).pause();
        else (videoEl as any).play();
        updatePlayPause();
        return;
      }
      case 'Escape': close(); return;
      case 'KeyR': {
        (videoEl as any).currentTime = 0;
        (videoEl as any).play();
        updatePlayPause();
        return;
      }
      case 'ArrowLeft': {
        (videoEl as any).currentTime = Math.max(0, (videoEl as any).currentTime - 10);
        return;
      }
      case 'ArrowRight': {
        const dur = (videoEl as any).duration || 0;
        (videoEl as any).currentTime = Math.min(dur, (videoEl as any).currentTime + 10);
        return;
      }
      case 'KeyM': {
        (videoEl as any).muted = !(videoEl as any).muted;
        updateMute();
        return;
      }
    }
  };

  function open(playbackId: string) {
    if (isOpen) return;
    isOpen = true;

    videoEl.setAttribute('playback-id', playbackId);
    overlayEl.style.opacity = '1';
    overlayEl.style.visibility = 'visible';
    overlayEl.style.pointerEvents = 'auto';
    overlayEl.setAttribute('aria-hidden', 'false');

    // Fade in controls from bottom
    const vh = window.innerHeight;
    libs.gsap.fromTo(
      controlsRef,
      { opacity: 0, y: vh * 0.1 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.2 },
    );

    setTimeout(() => {
      (videoEl as any).muted = false;
      (videoEl as any).play();
      updatePlayPause();
      updateMute();
    }, 100);

    animFrameId = requestAnimationFrame(updateTime);
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;

    overlayEl.style.opacity = '0';
    overlayEl.style.pointerEvents = 'none';
    overlayEl.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      overlayEl.style.visibility = 'hidden';
      (videoEl as any).pause();
      videoEl.removeAttribute('playback-id');
    }, 300);

    if (animFrameId !== null) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
    document.removeEventListener('keydown', onKeydown);
  }

  const onRestart = () => {
    (videoEl as any).currentTime = 0;
    (videoEl as any).play();
    updatePlayPause();
  };
  const onTogglePlay = () => {
    if (isPlaying()) (videoEl as any).pause();
    else (videoEl as any).play();
    updatePlayPause();
  };
  const onToggleMute = () => {
    (videoEl as any).muted = !(videoEl as any).muted;
    updateMute();
  };

  restartRef.addEventListener('click', onRestart);
  playPauseRef.addEventListener('click', onTogglePlay);
  muteRef.addEventListener('click', onToggleMute);
  closeRef.addEventListener('click', close);
  videoEl.addEventListener('play', updatePlayPause);
  videoEl.addEventListener('pause', updatePlayPause);
  videoEl.addEventListener('volumechange', updateMute);

  return {
    open,
    close,
    dispose() {
      close();
      restartRef.removeEventListener('click', onRestart);
      playPauseRef.removeEventListener('click', onTogglePlay);
      muteRef.removeEventListener('click', onToggleMute);
      closeRef.removeEventListener('click', close);
      videoEl.removeEventListener('play', updatePlayPause);
      videoEl.removeEventListener('pause', updatePlayPause);
      videoEl.removeEventListener('volumechange', updateMute);
    },
  };
}

// ---- Services Card Stack ----

function calculateCardPosition(relativeIndex: number, totalCards: number) {
  return {
    scale: 1 - relativeIndex * 0.08,
    rotation: relativeIndex * 5,
    y: 0,
    x: relativeIndex * 25,
    zIndex: totalCards - relativeIndex,
  };
}

function createServicesCardStack(libs: AnimationLibs) {
  const container = document.getElementById('services');
  const cardNodes = container?.querySelectorAll<HTMLElement>('.service');
  const leftBtn = document.getElementById('servicesArrowLeft') as HTMLButtonElement | null;
  const rightBtn = document.getElementById('servicesArrowRight') as HTMLButtonElement | null;
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
      x: -200,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => { libs.gsap.set(card, { pointerEvents: 'none' }); },
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
        x: 0, opacity: 1, scale: 1, rotation: 0,
        zIndex: totalCards, pointerEvents: 'auto',
        duration: 0.4, ease: 'power2.out',
      },
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

    if (currentDragX < -threshold || (currentDragX < 0 && velocity > 0.5)) goNext();
    else if (currentDragX > threshold || (currentDragX > 0 && velocity > 0.5)) goPrev();
    else positionCards(true);
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

// ---- Short stat count-up (inline, not in .stat) ----

function createShortStatCountUp(statId: string, libs: AnimationLibs) {
  const stat = document.getElementById(statId);
  if (!stat) return null;
  const statValue = stat.querySelector('.shortStatValue') as HTMLElement;
  if (!statValue) return null;
  const targetValue = Number.parseInt(statValue.dataset.target || '0', 10);
  let hasAnimated = false;
  return (progress: number) => {
    if (progress >= 1 && !hasAnimated) {
      const counter = { value: 0 };
      libs.gsap.to(counter, {
        value: targetValue,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          statValue.textContent = Math.round(counter.value).toString();
        },
      });
      hasAnimated = true;
    } else if (progress < 0.5) {
      hasAnimated = false;
      statValue.textContent = '0';
    }
  };
}

// ---- Stat count-up (for section 4 stats) ----

function createStatCountUp(statId: string, libs: AnimationLibs) {
  const stat = document.getElementById(statId);
  if (!stat) return null;
  const statValue = stat.querySelector('.statValue') as HTMLElement;
  if (!statValue) return null;
  const targetValue = Number.parseInt(statValue.dataset.target || '0', 10);
  let hasAnimated = false;
  return (progress: number) => {
    if (progress >= 1 && !hasAnimated) {
      const counter = { value: 0 };
      libs.gsap.to(counter, {
        value: targetValue,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          statValue.textContent = Math.round(counter.value).toString();
        },
      });
      hasAnimated = true;
    } else if (progress < 0.5) {
      hasAnimated = false;
      statValue.textContent = '0';
    }
  };
}

// ---- Section creators ----

function createFoundersSection1(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section1');
  const header = document.getElementById('header1');
  const title = document.getElementById('header1Title');
  const link = document.getElementById('header1Link');

  if (!section || !header || !title) {
    throw new Error('Founders section 1 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const vh = window.innerHeight;

  libs.gsap.set(title, { opacity: 0 });
  libs.gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });
  if (link) libs.gsap.set(link, { opacity: 0, y: vh * 0.05 });

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

function createFoundersSection2(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section2');
  const title = document.getElementById('header2Title');

  if (!section || !title) {
    throw new Error('Founders section 2 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });

  const animateText = createSequentialThresholdAnimations(libs, [
    {
      elements: Array.from(titleSplit.chars),
      triggerThreshold: 0.3,
      startBlur: 8,
      startY: 0,
      duration: 0.4,
      stagger: 0.02,
    },
  ]);

  return {
    id: 'section2',
    section,
    animations: [
      {
        id: 'animateText2',
        start: 20,
        end: 35,
        update: (progress) => {
          animateText(progress);
        },
      },
    ],
  };
}

function createFoundersSection3(libs: AnimationLibs): TimelineSection {
  const section = document.querySelector('.foundersSection3') as HTMLElement;
  const title = document.getElementById('header3Title');
  const servicesWrapper = document.getElementById('servicesWrapper');

  if (!section || !title || !servicesWrapper) {
    throw new Error('Founders section 3 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  libs.gsap.set(titleSplit.chars, { opacity: 0.2 });
  libs.gsap.set(servicesWrapper, { opacity: 0, y: 40 });

  let cardStack: ReturnType<typeof createServicesCardStack> = null;

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
        id: 'animateServices',
        start: 50,
        end: 70,
        update: (progress) => {
          if (progress > 0.1) {
            libs.gsap.to(servicesWrapper, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              overwrite: true,
            });

            if (!cardStack) {
              cardStack = createServicesCardStack(libs);
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

function createFoundersSection4(libs: AnimationLibs): TimelineSection {
  const section = document.querySelector('.foundersSection4') as HTMLElement;
  const title = document.getElementById('header4Title');
  const description = document.getElementById('header4Description');
  const stats = document.getElementById('foundersStats');
  const videoContainer = document.getElementById('section4VideoContainer');

  if (!section || !title) {
    throw new Error('Founders section 4 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });

  const animateTitle = createSequentialThresholdAnimations(libs, [
    {
      elements: Array.from(titleSplit.chars),
      triggerThreshold: 0.3,
      startBlur: 8,
      startY: 0,
      duration: 0.4,
      stagger: 0.02,
    },
  ]);

  if (description) libs.gsap.set(description, { opacity: 0 });
  if (stats) libs.gsap.set(stats, { opacity: 0, y: 40 });
  if (videoContainer) libs.gsap.set(videoContainer, { opacity: 0, y: 60 });

  const countUp1 = createStatCountUp('foundersStat1', libs);
  const countUp2 = createStatCountUp('foundersStat2', libs);
  const countUp3 = createStatCountUp('foundersStat3', libs);

  return {
    id: 'section4',
    section,
    animations: [
      {
        id: 'animateTitle4',
        start: 10,
        end: 25,
        update: (progress) => {
          animateTitle(progress);
        },
      },
      {
        id: 'fadeInDescription4',
        start: 25,
        end: 40,
        update: (progress) => {
          if (description && progress > 0.3) {
            libs.gsap.to(description, { opacity: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
          }
        },
      },
      {
        id: 'fadeInStats4',
        start: 35,
        end: 55,
        update: (progress) => {
          if (stats && progress > 0.2) {
            libs.gsap.to(stats, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', overwrite: true });
          }
          countUp1?.(progress);
          countUp2?.(progress);
          countUp3?.(progress);
        },
      },
      {
        id: 'fadeInVideo4',
        start: 55,
        end: 75,
        update: (progress) => {
          if (videoContainer) {
            const opacity = interpolate(0, 1, progress);
            const y = interpolate(60, 0, progress);
            libs.gsap.set(videoContainer, { opacity, y });
          }
        },
      },
    ],
  };
}

function createFoundersSection5(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section5');
  const title = document.getElementById('header5Title');
  const description = document.getElementById('header5Description');

  if (!section || !title) {
    throw new Error('Founders section 5 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  const vh = window.innerHeight;

  const animateTitle = createSequentialThresholdAnimations(libs, [
    {
      elements: Array.from(titleSplit.chars),
      triggerThreshold: 0.3,
      startBlur: 8,
      startY: 0,
      duration: 0.4,
      stagger: 0.02,
    },
  ]);

  if (description) libs.gsap.set(description, { opacity: 0 });

  // Short stat count-ups
  const shortCountUp1 = createShortStatCountUp('shortStat1', libs);
  const shortCountUp2 = createShortStatCountUp('shortStat2', libs);
  const shortCountUp3 = createShortStatCountUp('shortStat3', libs);
  const shortCountUp4 = createShortStatCountUp('shortStat4', libs);

  // Event card elements
  const event1 = document.getElementById('event1');
  const event2 = document.getElementById('event2');
  const event3 = document.getElementById('event3');
  const event4 = document.getElementById('event4');

  return {
    id: 'section5',
    section,
    animations: [
      {
        id: 'animateTitle5',
        start: 5,
        end: 20,
        update: (progress) => {
          animateTitle(progress);
        },
      },
      {
        id: 'fadeInDescription5',
        start: 15,
        end: 30,
        update: (progress) => {
          if (description && progress > 0.3) {
            libs.gsap.to(description, { opacity: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
          }
        },
      },
      {
        id: 'shortStatCountUps',
        start: 25,
        end: 50,
        update: (progress) => {
          shortCountUp1?.(progress);
          shortCountUp2?.(progress);
          shortCountUp3?.(progress);
          shortCountUp4?.(progress);
        },
      },
      {
        id: 'eventCards',
        start: 30,
        end: 70,
        update: (progress) => {
          // Fly in events from left/right
          if (event1) {
            const p = Math.min(1, Math.max(0, (progress - 0) / 0.25));
            const x = interpolate(-100, 0, p);
            const rotate = interpolate(-10, 0, p);
            const opacity = interpolate(0, 1, p);
            libs.gsap.set(event1, { x: `${x}%`, rotate, opacity, transform: `translate(${x}%)`, y: interpolate(-40, 0, p) + '%' });
          }
          if (event2) {
            const p = Math.min(1, Math.max(0, (progress - 0.15) / 0.25));
            const x = interpolate(100, 0, p);
            const rotate = interpolate(10, 0, p);
            const opacity = interpolate(0, 1, p);
            libs.gsap.set(event2, { x: `${x}%`, rotate, opacity, y: interpolate(-40, 0, p) + '%' });
          }
          if (event3) {
            const p = Math.min(1, Math.max(0, (progress - 0.35) / 0.25));
            const x = interpolate(-100, 0, p);
            const rotate = interpolate(-10, 0, p);
            const opacity = interpolate(0, 1, p);
            libs.gsap.set(event3, { x: `${x}%`, rotate, opacity, y: interpolate(-40, 0, p) + '%' });
          }
          if (event4) {
            const p = Math.min(1, Math.max(0, (progress - 0.5) / 0.25));
            const x = interpolate(100, 0, p);
            const rotate = interpolate(10, 0, p);
            const opacity = interpolate(0, 1, p);
            libs.gsap.set(event4, { x: `${x}%`, rotate, opacity, y: interpolate(-40, 0, p) + '%' });
          }
        },
      },
    ],
  };
}

function createFoundersSection6(libs: AnimationLibs): TimelineSection {
  const section = document.getElementById('section6');
  const title = document.getElementById('header6Title');
  const link = document.getElementById('header6Link');

  if (!section || !title) {
    throw new Error('Founders section 6 elements not found');
  }

  const titleSplit = libs.SplitText.create(title, { type: 'words,chars' });
  libs.gsap.set(titleSplit.chars, { opacity: 0 });
  if (link) libs.gsap.set(link, { opacity: 0 });

  let hasTriggered = false;

  return {
    id: 'section6',
    section,
    animations: [
      {
        id: 'fadeInFooter6',
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
            if (link) {
              libs.gsap.to(link, {
                opacity: 1,
                duration: 0.5,
                delay: 0.3,
                ease: 'power2.out',
              });
            }
          }
          if (progress < 0.1 && hasTriggered) {
            hasTriggered = false;
            libs.gsap.set(titleSplit.chars, { opacity: 0 });
            if (link) libs.gsap.set(link, { opacity: 0 });
          }
        },
      },
    ],
  };
}

// ---- Entrance animation ----

function playSection1Entrance(libs: AnimationLibs) {
  const title = document.getElementById('header1Title');
  const link = document.getElementById('header1Link');
  const pageHeader = document.getElementById('pageHeader');
  const foundersColumns = document.querySelectorAll('.foundersColumn');

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

  if (link) {
    tl.to(link, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.3');
  }

  if (foundersColumns.length > 0) {
    tl.to(
      foundersColumns,
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      },
      '<0.2',
    );
  }
}

// ---- Video button bindings ----

function setupVideoButtons(overlayPlayer: OverlayPlayer) {
  const heroBtn = document.getElementById('header1TitleVideoButton');
  const showreelBtn = document.getElementById('header3ShowreelButton');
  const eventsBtn = document.getElementById('section4VideoContainer');

  const onHero = () => overlayPlayer.open('krVH3nGExGWFmZ00Q2HtS1JgiKzELBxGulaeu00IHiwag');
  const onShowreel = () => overlayPlayer.open('Vmmk01Bp7I1rS01luZ01R8LU01bfrb1UjFhKQCcSvCz8HXk');
  const onEvents = () => overlayPlayer.open('02LqrLkxx00pWycsdZ02N02Vn00bibSl2G4IW2HTS028EvoCA');

  heroBtn?.addEventListener('click', onHero);
  showreelBtn?.addEventListener('click', onShowreel);
  eventsBtn?.addEventListener('click', onEvents);

  return () => {
    heroBtn?.removeEventListener('click', onHero);
    showreelBtn?.removeEventListener('click', onShowreel);
    eventsBtn?.removeEventListener('click', onEvents);
  };
}

// ---- Main setup ----

function setupTimeline(libs: AnimationLibs): Timeline {
  const timeline = createTimeline(libs);
  timeline.initSection(createFoundersSection1(libs));
  timeline.initSection(createFoundersSection2(libs));
  timeline.initSection(createFoundersSection3(libs));
  timeline.initSection(createFoundersSection4(libs));
  timeline.initSection(createFoundersSection5(libs));
  timeline.initSection(createFoundersSection6(libs));
  timeline.refresh();
  return timeline;
}

export function FoundersAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let timeline: Timeline | null = null;
    let overlayPlayer: OverlayPlayer | null = null;
    let cleanupVideoButtons: (() => void) | null = null;
    let libs: (AnimationLibs & { dispose?: () => void }) | null = null;

    async function init() {
      // Check for reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('founders-reduced-motion');
      }

      // Wait for fonts
      if ('fonts' in document && document.fonts?.ready) {
        await Promise.race([document.fonts.ready, new Promise<void>((r) => setTimeout(r, 3000))]);
      }

      libs = await initAnimationLibs();

      overlayPlayer = setupVideoPlayerOverlay(libs);
      if (overlayPlayer) {
        cleanupVideoButtons = setupVideoButtons(overlayPlayer);
      }

      timeline = setupTimeline(libs);
      playSection1Entrance(libs);
    }

    init();

    return () => {
      timeline?.dispose();
      overlayPlayer?.dispose();
      cleanupVideoButtons?.();
      libs?.dispose?.();
    };
  }, []);

  return null;
}
