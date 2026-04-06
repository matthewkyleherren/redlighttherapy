'use client';

import { useEffect, useRef } from 'react';

export function MembershipAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let cleanups: Array<() => void> = [];

    async function init() {
      // Wait for fonts
      if ('fonts' in document && document.fonts?.ready) {
        await Promise.race([document.fonts.ready, new Promise<void>((r) => setTimeout(r, 3000))]);
      }

      const { default: gsap } = await import('gsap');
      const { SplitText } = await import('gsap/SplitText');
      gsap.registerPlugin(SplitText);

      // Section 1 entrance
      const s1Title = document.getElementById('membershipSection1Title');
      const s1Desc = document.getElementById('membershipSection1Description');
      const s1Label = document.getElementById('membershipSection1Label');
      const s1Perks = document.getElementById('membershipSection1Perks');

      if (s1Title) {
        const titleSplit = SplitText.create(s1Title, { type: 'words,chars' });
        gsap.set(s1Title, { opacity: 1 });
        gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });

        const tl = gsap.timeline({ delay: 0.3 });
        tl.to(titleSplit.chars, {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          stagger: 0.03,
          ease: 'power2.out',
        });

        if (s1Desc) {
          gsap.set(s1Desc, { opacity: 0 });
          tl.to(s1Desc, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2');
        }

        if (s1Label) {
          gsap.set(s1Label, { opacity: 0 });
          tl.to(s1Label, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
        }

        if (s1Perks) {
          gsap.set(s1Perks, { opacity: 0, y: '4vh' });
          tl.to(s1Perks, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2');
        }
      }

      // Section 2 - IntersectionObserver driven
      const s2Title = document.getElementById('membershipSection2Title');
      const s2Desc = document.getElementById('membershipSection2Description');
      const membershipStats = document.getElementById('membershipStats');

      if (s2Title) {
        const titleSplit = SplitText.create(s2Title, { type: 'words,chars' });
        gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });

        let hasTriggered = false;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !hasTriggered) {
                hasTriggered = true;
                gsap.to(titleSplit.chars, {
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 0.5,
                  stagger: 0.03,
                  ease: 'power2.out',
                });

                if (s2Desc) {
                  gsap.to(s2Desc, { opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' });
                }

                // Count up stats
                if (membershipStats) {
                  const statEls = membershipStats.querySelectorAll('.statValue');
                  statEls.forEach((el) => {
                    const target = parseInt(el.getAttribute('data-target') || '0', 10);
                    const counter = { value: 0 };
                    gsap.to(counter, {
                      value: target,
                      duration: 2,
                      delay: 0.5,
                      ease: 'power2.out',
                      onUpdate: () => {
                        el.textContent = Math.round(counter.value).toString();
                      },
                    });
                  });
                }

                observer.disconnect();
              }
            }
          },
          { threshold: 0.3 },
        );
        observer.observe(s2Title);
        cleanups.push(() => observer.disconnect());
      }

      // Section 3 - Bento grid title
      const s3Title = document.getElementById('membershipSection3Title');
      if (s3Title) {
        const titleSplit = SplitText.create(s3Title, { type: 'words,chars' });
        gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });

        let hasTriggered = false;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !hasTriggered) {
                hasTriggered = true;
                gsap.to(titleSplit.chars, {
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 0.5,
                  stagger: 0.03,
                  ease: 'power2.out',
                });

                // Animate bento card titles that are server-rendered
                const card3Title = document.getElementById('bentoCard3Title');
                const card5Title = document.getElementById('bentoCard5Title');
                if (card3Title) gsap.to(card3Title, { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power2.out' });
                if (card5Title) gsap.to(card5Title, { opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' });

                observer.disconnect();
              }
            }
          },
          { threshold: 0.2 },
        );
        observer.observe(s3Title);
        cleanups.push(() => observer.disconnect());
      }

      // Section 4 - Sigma
      const sigmaLogoIcon = document.querySelector('.sigmaLogoIcon') as HTMLElement;
      const sigmaLogoText = document.getElementById('sigmaLogoText');
      const s4Title = document.getElementById('membershipSection4Title');

      if (s4Title) {
        const titleSplit = SplitText.create(s4Title, { type: 'words,chars' });
        gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });

        let hasTriggered = false;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !hasTriggered) {
                hasTriggered = true;

                if (sigmaLogoIcon) gsap.to(sigmaLogoIcon, { opacity: 1, duration: 0.5, ease: 'power2.out' });
                if (sigmaLogoText) gsap.to(sigmaLogoText, { opacity: 1, duration: 0.5, delay: 0.1, ease: 'power2.out' });

                gsap.to(titleSplit.chars, {
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 0.5,
                  stagger: 0.03,
                  delay: 0.2,
                  ease: 'power2.out',
                });

                observer.disconnect();
              }
            }
          },
          { threshold: 0.3 },
        );
        observer.observe(s4Title);
        cleanups.push(() => observer.disconnect());
      }

      // Section 5 - Invitation
      const s5Title = document.getElementById('membershipSection5Title');
      const s5Desc = document.getElementById('membershipSection5Description');

      if (s5Title) {
        const titleSplit = SplitText.create(s5Title, { type: 'words,chars' });
        gsap.set(titleSplit.chars, { opacity: 0, filter: 'blur(8px)' });

        let hasTriggered = false;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !hasTriggered) {
                hasTriggered = true;
                gsap.to(titleSplit.chars, {
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 0.5,
                  stagger: 0.03,
                  ease: 'power2.out',
                });
                if (s5Desc) {
                  gsap.to(s5Desc, { opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' });
                }
                observer.disconnect();
              }
            }
          },
          { threshold: 0.3 },
        );
        observer.observe(s5Title);
        cleanups.push(() => observer.disconnect());
      }
    }

    init();

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
