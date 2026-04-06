import type { AnimationLibs } from '@/lib/animations/animation-libs';
import type { CreateTimelineSection } from '@/lib/animations/section-timeline';
import { createSequentialThresholdAnimations } from '@/lib/animations/text-animations';

function getSection4Elements(libs: AnimationLibs) {
  const section = document.getElementById('section4');
  const title = document.getElementById('section4Subtitle');
  const description = document.getElementById('section4Description');
  const button = document.getElementById('section4Button');
  const founders = document.getElementById('founders');
  const founderColumns = libs.gsap.utils.toArray('.foundersColumn');
  if (!section) throw new Error('Section 4 not found');
  if (!title) throw new Error('Section 4 title not found');
  if (!description) throw new Error('Section 4 description not found');
  if (!founders) throw new Error('Founders not found');
  if (!founderColumns?.length) throw new Error('Founder columns not found');
  return {
    section,
    title,
    titleSplit: libs.SplitText.create(title, { type: 'words,chars' }),
    description,
    descriptionSplit: libs.SplitText.create(description, { type: 'lines', aria: 'none' }),
    button,
    founders,
    founderColumns,
  };
}

function initSection4(libs: AnimationLibs) {
  const elements = getSection4Elements(libs);
  libs.gsap.set(elements.button, { opacity: 0 });
  return elements;
}

export const createSection4: CreateTimelineSection = (libs) => {
  const elements = initSection4(libs);
  let hasFadedIn = false;
  const animateText = createSequentialThresholdAnimations(libs, [
    { elements: Array.from(elements.titleSplit.chars) },
    { elements: Array.from(elements.descriptionSplit.lines), startY: 0.04, overlap: 0.25, stagger: 0.1 },
    { elements: [elements.button as Element], overlap: 0.5, startBlur: 1 },
  ]);

  return {
    id: 'section4',
    section: elements.section,
    animations: [
      {
        id: 'fadeInHeader',
        start: 10,
        end: 20,
        update: animateText,
      },
      {
        id: 'fadeInFoundersColumns',
        start: 30,
        end: 40,
        update: () => {
          if (hasFadedIn) return;
          hasFadedIn = true;
          const vh = window.innerHeight;
          libs.gsap.fromTo(
            elements.founderColumns,
            {
              opacity: 0,
              y: vh * 0.3,
              scale: 0.8,
              rotateX: -50,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 0.8,
              delay: 0.5,
              stagger: 0.1,
            },
          );
        },
      },
    ],
  };
};
