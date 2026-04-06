import type { AnimationLibs } from '@/lib/animations/animation-libs';
import type { CreateTimelineSection } from '@/lib/animations/section-timeline';
import { interpolate } from '@/lib/utils/animations';

function getSection1Elements(libs: AnimationLibs) {
  const pageHeader = document.getElementById('pageHeader');
  const section = document.getElementById('section1');
  const header = document.getElementById('section1Header');
  const title = document.getElementById('section1Title');
  const heroImage = document.querySelector('.section1HeroImage') as HTMLElement | null;
  const description = document.getElementById('section1Description');
  const headerButtons = document.getElementById('section1HeaderButtons');
  if (!pageHeader) throw new Error('Page header not found');
  if (!section) throw new Error('Section 1 not found');
  if (!header) throw new Error('Section 1 header not found');
  if (!title) throw new Error('Section 1 title not found');
  if (!description) throw new Error('Section 1 description not found');
  if (!headerButtons) throw new Error('Section 1 header buttons not found');
  return {
    pageHeader,
    section,
    header,
    title,
    titleSplit: libs.SplitText.create(title, { type: 'words,chars' }),
    description,
    heroImage,
    headerButtons,
  };
}

function initSection1(libs: AnimationLibs) {
  const elements = getSection1Elements(libs);
  if (elements.title.getAttribute('data-section1-faded-in') !== 'true') {
    const vh = window.innerHeight;
    libs.gsap.set(elements.title, { opacity: 0 });
    libs.gsap.set(elements.titleSplit.chars, { opacity: 0 });
    libs.gsap.set(elements.pageHeader, { opacity: 0, y: -vh * 0.1 });
    libs.gsap.set([elements.headerButtons, elements.description], { opacity: 0, y: vh * 0.08 });
  }
  return elements;
}

export function fadeInSection1(libs: AnimationLibs, onComplete?: () => void) {
  const elements = getSection1Elements(libs);
  const vh = window.innerHeight;
  elements.title.setAttribute('data-section1-faded-in', 'true');
  libs.gsap.set(elements.title, { opacity: 1 });
  libs.gsap.set(elements.titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });
  libs.gsap.set(elements.pageHeader, { opacity: 0, y: -vh * 0.16 });
  libs.gsap.set([elements.headerButtons, elements.description], { opacity: 0, y: vh * 0.08 });

  const timeline = libs.gsap.timeline({ onComplete });
  timeline.to(
    elements.pageHeader,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    `=`,
  );
  timeline.to(
    elements.titleSplit.chars,
    {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.05,
    },
    '<0.7',
  );
  timeline.to(
    [elements.headerButtons, elements.description],
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
    },
    '<',
  );
}

export function fadeOutSection1Headers(libs: AnimationLibs) {
  const elements = getSection1Elements(libs);
  const vh = window.innerHeight;
  libs.gsap.to(elements.pageHeader, {
    opacity: 0,
    y: -vh * 0.1,
    duration: 0.3,
    ease: 'power2.inOut',
  });
  libs.gsap.to(elements.header, {
    opacity: 0,
    y: vh * 0.1,
    duration: 0.3,
    ease: 'power2.inOut',
  });
}

export function fadeInSection1Headers(libs: AnimationLibs) {
  const elements = getSection1Elements(libs);
  const duration = 0.3;
  libs.gsap.to(elements.pageHeader, {
    opacity: 1,
    y: 0,
    duration,
    ease: 'power2.inOut',
  });
  libs.gsap.to(elements.header, {
    opacity: 1,
    y: 0,
    duration,
    ease: 'power2.inOut',
  });
}

export const createSection1: CreateTimelineSection = (libs) => {
  const elements = initSection1(libs);
  return {
    id: 'section1',
    section: elements.section,
    start: 'top',
    animations: [
      {
        id: 'fadeOutSection1',
        start: 20,
        end: 80,
        update: (progress) => {
          const opacity = interpolate(1, 0.5, progress);
          libs.gsap.set(elements.section, { opacity });
        },
      },
      ...(elements.heroImage ? [{
        id: 'hero-pan',
        start: 0,
        end: 100,
        update: (progress: number) => {
          const vh = window.innerHeight;
          const y = interpolate(0, vh * 0.5, progress);
          libs.gsap.set(elements.heroImage, { y });
        },
      }] : []),
    ],
  };
};
