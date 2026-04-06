'use client';

import { useEffect, useRef } from 'react';
import { initAnimationLibs, type AnimationLibs } from '@/lib/animations/animation-libs';
import { createTimeline, type Timeline } from '@/lib/animations/section-timeline';
import { createSection1, fadeInSection1 } from '@/lib/animations/sections/section-1';
import { createSection2 } from '@/lib/animations/sections/section-2';
import { createSection3 } from '@/lib/animations/sections/section-3';
import { createSection4 } from '@/lib/animations/sections/section-4';
import { createSection5 } from '@/lib/animations/sections/section-5';
import { createSection6 } from '@/lib/animations/sections/section-6';

function setupTimeline(libs: AnimationLibs): Timeline {
  const timeline = createTimeline(libs);
  timeline.initSection(createSection1(libs, undefined));
  timeline.initSection(createSection2(libs, undefined));
  timeline.initSection(createSection3(libs, undefined));
  timeline.initSection(createSection4(libs, undefined));
  timeline.initSection(createSection5(libs, undefined));
  timeline.initSection(createSection6(libs, undefined));
  timeline.refresh();
  return timeline;
}

export function HomeAnimations() {
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
      // Fade in hero text/buttons immediately (no video dependency)
      fadeInSection1(libs);
    }

    init();

    return () => {
      timeline?.dispose();
    };
  }, []);

  return null;
}
