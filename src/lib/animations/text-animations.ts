import type { AnimationLibs } from './animation-libs';

export type AnimateCharactersOptions = {
  y?: number;
  delay?: number;
  stagger?: number;
  duration: number;
  onComplete?: () => void;
};

export type AnimateLinesOptions = {
  opacity?: number;
  y?: number;
  delay?: number;
  stagger?: number;
  duration: number;
  onComplete?: () => void;
};

export function animateCharacters(
  libs: AnimationLibs,
  element: HTMLElement | null,
  options: AnimateCharactersOptions,
): void {
  if (!element) return;
  const vh = window.innerHeight;
  const split = libs.SplitText.create(element, { type: 'words,chars' });
  libs.gsap.set(split.chars, { opacity: 0, y: options?.y || vh * 0.05 });
  libs.gsap.to(element, { opacity: 1, delay: options?.delay || 0 });
  libs.gsap.to(split.chars, {
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    duration: options.duration,
    delay: options?.delay || 0,
    stagger: options?.stagger || 0.03,
    onComplete: options?.onComplete,
  });
}

export function animateLines(libs: AnimationLibs, element: HTMLElement | null, options: AnimateLinesOptions): void {
  if (!element) return;
  const vh = window.innerHeight;
  const split = libs.SplitText.create(element, { type: 'lines' });
  libs.gsap.set(split.lines, { opacity: 0, y: options?.y || vh * 0.1 });
  libs.gsap.to(element, { opacity: options?.opacity || 1, delay: options?.delay || 0 });
  libs.gsap.to(split.lines, {
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    duration: options.duration,
    delay: options?.delay || 0,
    stagger: options?.stagger || 0.1,
    onComplete: options?.onComplete,
  });
}

export function createCountUpAnimation(statId: string, libs: AnimationLibs) {
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

export type ThresholdAnimationOptions = {
  elements: Element[];
  triggerThreshold?: number;
  resetThreshold?: number;
  startY?: number;
  startBlur?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  overlap?: number;
};

export function createThresholdAnimation(libs: AnimationLibs, options: ThresholdAnimationOptions) {
  const {
    elements,
    triggerThreshold = 0.3,
    startY = 0.04,
    startBlur = 8,
    duration = 0.6,
    stagger = 0.08,
    ease = 'power2.out',
  } = options;

  const vh = window.innerHeight;
  let hasTriggered = false;

  libs.gsap.set(elements, {
    opacity: 0,
    y: vh * startY,
    filter: `blur(${startBlur}px)`,
  });

  return (progress: number, onComplete?: () => void) => {
    if (progress >= triggerThreshold && !hasTriggered) {
      hasTriggered = true;
      libs.gsap.to(elements, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration,
        ease,
        stagger,
        onComplete,
      });
    }
  };
}

export function createSequentialThresholdAnimations(
  libs: AnimationLibs,
  animationsConfig: ThresholdAnimationOptions[],
) {
  const vh = window.innerHeight;
  let hasTriggered = false;
  let timeline: ReturnType<typeof libs.gsap.timeline> | null = null;

  animationsConfig.forEach((config) => {
    const startY = config.startY || 0;
    const startBlur = config.startBlur || 8;
    libs.gsap.set(config.elements, {
      opacity: 0,
      y: vh * startY,
      filter: `blur(${startBlur}px)`,
    });
  });

  return (progress: number, onComplete?: () => void) => {
    const threshold = animationsConfig[0].triggerThreshold || 0.3;
    const resetThreshold = animationsConfig[0].resetThreshold || threshold - 0.1;

    if (progress >= threshold && !hasTriggered) {
      hasTriggered = true;
      timeline = libs.gsap.timeline({ onComplete });

      animationsConfig.forEach((config, index) => {
        const duration = config.duration || 0.5;
        const stagger = config.stagger || 0.02;
        const ease = config.ease || 'power2.out';
        const overlap = config.overlap ?? 0;

        let position: string | undefined;
        if (index > 0) {
          if (overlap === 0) {
            position = '>';
          } else {
            const prevConfig = animationsConfig[index - 1];
            const prevDuration = prevConfig.duration || 0.5;
            const prevStagger = prevConfig.stagger || 0.02;
            const prevElementCount = Array.isArray(prevConfig.elements) ? prevConfig.elements.length : 1;
            const prevTotalDuration = prevDuration + prevStagger * (prevElementCount - 1);
            const overlapTime = prevTotalDuration * overlap;
            position = `-=${overlapTime}`;
          }
        }

        timeline?.to(
          config.elements,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration,
            ease,
            stagger,
          },
          position,
        );
      });
    }

    if (progress < resetThreshold && hasTriggered) {
      hasTriggered = false;
      if (timeline) {
        timeline.kill();
        timeline = null;
      }
      animationsConfig.forEach((config) => {
        const startY = config.startY || 0;
        const startBlur = config.startBlur || 8;
        libs.gsap.to(config.elements, {
          opacity: 0,
          y: vh * startY,
          filter: `blur(${startBlur}px)`,
          duration: 0.3,
        });
      });
    }
  };
}
