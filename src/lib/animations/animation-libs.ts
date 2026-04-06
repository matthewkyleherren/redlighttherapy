import type GSAPType from 'gsap';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger';
import type SplitTextType from 'gsap/SplitText';
import type LenisType from 'lenis';

export type AnimationLibs = {
  gsap: typeof GSAPType;
  lenis: LenisType;
  text: typeof SplitTextType;
  scroll: typeof ScrollTriggerType;
  Lenis: typeof LenisType;
  SplitText: typeof SplitTextType;
  ScrollTrigger: typeof ScrollTriggerType;
};

let initialized = false;

export async function initAnimationLibs(lenisConfig?: Partial<LenisType>): Promise<AnimationLibs> {
  const [{ default: gsap }, { ScrollTrigger }, { default: SplitText }, { default: Lenis }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/SplitText'),
    import('lenis'),
  ]);

  if (!initialized) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    initialized = true;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    orientation: 'vertical',
    syncTouch: true,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    ...lenisConfig,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time: number) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  let resizeTimeout: number;
  let lastWidth = window.innerWidth;
  const handleResize = () => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup function — call on route change
  const dispose = () => {
    window.removeEventListener('resize', handleResize);
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });
    lenis.destroy();
  };

  return { lenis, gsap, scroll: ScrollTrigger, text: SplitText, Lenis, SplitText, ScrollTrigger, dispose } as AnimationLibs & { dispose: () => void };
}
