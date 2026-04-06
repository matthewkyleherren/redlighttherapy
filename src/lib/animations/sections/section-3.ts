import type { AnimationLibs } from '@/lib/animations/animation-libs';
import type { CreateTimelineSection } from '@/lib/animations/section-timeline';
import { checkIsMobile } from '@/lib/platform';
import { interpolate } from '@/lib/utils/animations';

function getSection3Elements(libs: AnimationLibs) {
  const section = document.getElementById('section3');
  const content = document.getElementById('section3Content');
  const video = document.getElementById('section3Video');
  const textContainer = document.getElementById('section3Text');
  const textItems = document.getElementById('section3TextItems');
  const textItemsArray = libs.gsap.utils.toArray('.section3TextItem');
  const section2Cards = document.getElementById('section2Cards');
  if (!section) throw new Error('Section 3 not found');
  if (!content) throw new Error('Section 3 content not found');
  if (!video) throw new Error('Section 3 video not found');
  if (!textContainer) throw new Error('Section 3 text container not found');
  if (!textItems) throw new Error('Section 3 text items not found');
  if (!textItemsArray) throw new Error('Section 3 text items array not found');
  if (!section2Cards) throw new Error('Section 2 cards not found');
  return { section, content, video, textContainer, textItems, textItemsArray, section2Cards };
}

function getVideoWidth(section2Cards: HTMLElement) {
  const isMobile = checkIsMobile();
  return section2Cards.offsetWidth * (isMobile ? 0.8 : 1);
}

function initSection3(libs: AnimationLibs) {
  const elements = getSection3Elements(libs);
  updateTextItemsStyles(libs, elements.textContainer, elements.textItemsArray);
  const resize = () => {
    libs.gsap.set(elements.video, {
      width: getVideoWidth(elements.section2Cards),
      borderRadius: 10,
    });
  };
  resize();
  return { ...elements, resize };
}

function updateTextItemsStyles(libs: AnimationLibs, textContainer: HTMLElement, textItemsArray: unknown[]) {
  const containerRect = textContainer.getBoundingClientRect();
  const containerCenter = containerRect.top + containerRect.height / 2;
  textItemsArray.forEach((item) => {
    const element = item as HTMLElement;
    const itemRect = element.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const distanceFromCenter = Math.abs(itemCenter - containerCenter) / (containerRect.height / 2);
    const clampedDistance = Math.min(distanceFromCenter, 1);
    const opacity = interpolate(1, 0, clampedDistance);
    const scale = interpolate(1, 0.6, clampedDistance);
    const blur = interpolate(0, 1, clampedDistance);
    const signedDistance = (itemCenter - containerCenter) / (containerRect.height / 2);
    const rotateX = interpolate(0, 60, Math.abs(signedDistance)) * Math.sign(signedDistance) * -1;
    libs.gsap.set(element, {
      opacity,
      scale,
      filter: `blur(${blur}px)`,
      rotateX: `${rotateX}deg`,
      transformPerspective: 1000,
    });
  });
}

function getSnapPositions(textItemsArray: unknown[]): number[] {
  if (textItemsArray.length === 0) return [];
  const firstEl = textItemsArray[0] as HTMLElement;
  const firstRect = firstEl.getBoundingClientRect();
  const firstCenter = firstRect.top + firstRect.height / 2;
  return textItemsArray.map((item) => {
    const el = item as HTMLElement;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    return -(center - firstCenter);
  });
}

function snapEase(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const power = 3.5;
  if (t < 0.5) {
    return (2 * t) ** power / 2;
  }
  return 1 - (2 * (1 - t)) ** power / 2;
}

function getSnappedY(progress: number, snapPositions: number[]): number {
  const n = snapPositions.length;
  if (n <= 1) return snapPositions[0] ?? 0;
  const clamped = Math.max(0, Math.min(1, progress));
  const rawIndex = clamped * (n - 1);
  const prevIndex = Math.min(Math.floor(rawIndex), n - 2);
  const nextIndex = prevIndex + 1;
  const t = rawIndex - prevIndex;
  const eased = snapEase(t);
  return snapPositions[prevIndex] + (snapPositions[nextIndex] - snapPositions[prevIndex]) * eased;
}

export const createSection3: CreateTimelineSection = (libs) => {
  const elements = initSection3(libs);
  const vph = (100 * 100) / (325 + 100);
  let isPlaying = false;
  let currentScrollProgress = 0;
  window.addEventListener('resize', () => {
    if (currentScrollProgress < vph / 3 || currentScrollProgress > 100 - vph) elements.resize();
  });

  // Get the mux-video element inside the wrapper div
  const muxVideo = elements.video.querySelector('mux-video') as HTMLElement & { play: () => Promise<void>; pause: () => void } | null;

  return {
    id: 'section3',
    section: elements.section,
    animations: [
      {
        id: 'scrollProgress',
        start: 0,
        end: vph,
        update: (progress) => {
          currentScrollProgress = progress;
        },
      },
      {
        id: 'fadeInVideo',
        start: 0,
        end: vph / 2,
        update: (progress) => {
          if (progress < 0.05) {
            if (!isPlaying) return;
            if (muxVideo && typeof muxVideo.pause === 'function') muxVideo.pause();
            isPlaying = false;
          } else {
            if (isPlaying) return;
            if (muxVideo && typeof muxVideo.play === 'function') {
              const p = muxVideo.play();
              if (p && typeof p.catch === 'function') p.catch(() => undefined);
            }
            isPlaying = true;
          }
        },
      },
      {
        id: 'fadeInContent',
        start: 0,
        end: vph / 3,
        update: (progress) => {
          const opacity = interpolate(0, 1, progress);
          libs.gsap.set(elements.content, { opacity });
        },
      },
      {
        id: 'zoomInContent',
        start: vph / 3,
        end: vph,
        update: (progress) => {
          const startWidth = getVideoWidth(elements.section2Cards);
          const endWidth = window.innerWidth;
          const borderRadius = interpolate(10, 0, progress);
          const borderWidth = interpolate(1, 0, progress);
          const width = interpolate(startWidth, endWidth, progress);
          libs.gsap.set(elements.video, { width, borderRadius, borderWidth });
        },
      },
      {
        id: 'iterateTextItems',
        start: vph,
        end: 100 - vph - 5,
        update: (progress) => {
          const snapPositions = getSnapPositions(elements.textItemsArray);
          const y = getSnappedY(progress, snapPositions);
          libs.gsap.set(elements.textItems, { y });
          updateTextItemsStyles(libs, elements.textContainer, elements.textItemsArray);
        },
      },
      {
        id: 'zoomOutContent',
        start: 100 - vph,
        end: 100,
        update: (progress) => {
          const startWidth = window.innerWidth;
          const endWidth = getVideoWidth(elements.section2Cards);
          const width = interpolate(startWidth, endWidth, progress);
          const borderRadius = interpolate(0, 10, progress);
          const borderWidth = interpolate(1, 0, progress);
          const opacity = interpolate(1, 0, progress);
          libs.gsap.set(elements.video, { width, borderRadius, borderWidth });
          libs.gsap.set(elements.content, { opacity });
        },
      },
    ],
  };
};
