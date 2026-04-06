import type { AnimationLibs } from '@/lib/animations/animation-libs';
import type { CreateTimelineSection } from '@/lib/animations/section-timeline';
import { createCountUpAnimation, createSequentialThresholdAnimations } from '@/lib/animations/text-animations';
import { interpolate } from '@/lib/utils/animations';

function getSection5Elements(libs: AnimationLibs) {
  const section = document.getElementById('section5');
  const header = document.getElementById('section5Header');
  const title = document.getElementById('section5Subtitle');
  const description = document.getElementById('section5Description');
  const stats = document.getElementById('stats');
  const statsArray = libs.gsap.utils.toArray('.stat');
  if (!section) throw new Error('Section 5 not found');
  if (!header) throw new Error('Section 5 header not found');
  if (!title) throw new Error('Section 5 title not found');
  if (!description) throw new Error('Section 5 description not found');
  if (!stats) throw new Error('Section 5 stats not found');
  return {
    section,
    header,
    title,
    titleSplit: libs.SplitText.create(title, { type: 'words,chars' }),
    description,
    descriptionSplit: libs.SplitText.create(description, { type: 'lines', aria: 'none' }),
    stats,
    statsArray,
  };
}

function initSection5(libs: AnimationLibs) {
  const elements = getSection5Elements(libs);
  libs.gsap.set(elements.stats, { opacity: 0 });
  return elements;
}

export const createSection5: CreateTimelineSection = (libs) => {
  const elements = initSection5(libs);
  const animateText = createSequentialThresholdAnimations(libs, [
    { elements: Array.from(elements.titleSplit.chars) },
    { elements: Array.from(elements.descriptionSplit.lines), startY: 0.05, overlap: 0.25, stagger: 0.1 },
  ]);
  const stat1Animation = createCountUpAnimation('stat1', libs);
  const stat2Animation = createCountUpAnimation('stat2', libs);
  const stat3Animation = createCountUpAnimation('stat3', libs);
  const stat4Animation = createCountUpAnimation('stat4', libs);
  if (!stat1Animation || !stat2Animation || !stat3Animation || !stat4Animation)
    throw new Error('Failed to create stat animations.');
  return {
    id: 'section5',
    section: elements.section,
    animations: [
      {
        id: 'fadeInHeader',
        start: 10,
        end: 20,
        update: animateText,
      },
      {
        id: 'fadeInStats',
        start: 10,
        end: 20,
        update: (progress) => {
          const opacity = interpolate(0, 1, progress);
          const scale = interpolate(0.8, 1, progress);
          const y = interpolate(window.innerHeight * 0.1, 0, progress);
          libs.gsap.set(elements.stats, { opacity });
          libs.gsap.set(elements.statsArray, { scale, y });
          stat1Animation?.(progress);
          stat2Animation?.(progress);
          stat3Animation?.(progress);
          stat4Animation?.(progress);
        },
      },
    ],
  };
};
