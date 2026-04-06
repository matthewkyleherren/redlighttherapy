import type { AnimationLibs } from '@/lib/animations/animation-libs';
import type { CreateTimelineSection } from '@/lib/animations/section-timeline';
import { createSequentialThresholdAnimations } from '@/lib/animations/text-animations';

function getSection6Elements(libs: AnimationLibs) {
  const section = document.getElementById('section6');
  const header = document.getElementById('section6Header');
  const title = document.getElementById('section6Subtitle');
  const description = document.getElementById('section6Description');
  const button = document.getElementById('section6Button');
  if (!section) throw new Error('Section 6 not found');
  if (!header) throw new Error('Section 6 header not found');
  if (!title) throw new Error('Section 6 title not found');
  if (!description) throw new Error('Section 6 description not found');
  if (!button) throw new Error('Section 6 button not found');
  return {
    section,
    header,
    title,
    titleSplit: libs.SplitText.create(title, { type: 'words,chars' }),
    description,
    descriptionSplit: libs.SplitText.create(description, { type: 'lines', aria: 'none' }),
    button,
  };
}

export const createSection6: CreateTimelineSection = (libs) => {
  const elements = getSection6Elements(libs);
  const animateText = createSequentialThresholdAnimations(libs, [
    { elements: Array.from(elements.titleSplit.chars) },
    { elements: Array.from(elements.descriptionSplit.lines), overlap: 0.25, stagger: 0.1 },
    { elements: [elements.button as Element], overlap: 0.5, startBlur: 1 },
  ]);
  return {
    id: 'section6',
    section: elements.section,
    animations: [
      {
        id: 'fadeInHeader',
        start: 10,
        end: 20,
        update: (progress) => {
          animateText(progress);
        },
      },
    ],
  };
};
