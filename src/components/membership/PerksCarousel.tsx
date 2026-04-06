'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Perk = {
  image: string;
  text: ReactNode;
  alt: string;
};

type PerksCarouselProps = {
  perks: Perk[];
  direction: 'left' | 'right';
};

export function PerksCarousel({ perks, direction }: PerksCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const hasCloned = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const ul = ulRef.current;
    if (!wrapper || !ul) return;

    function measureAndClone() {
      if (!ul) return;

      // Measure original items total width
      const items = Array.from(ul.children);
      const originalCount = hasCloned.current ? items.length / 2 : items.length;
      let totalWidth = 0;
      for (let i = 0; i < originalCount; i++) {
        const item = items[i] as HTMLElement;
        totalWidth += item.offsetWidth + 10; // 10px gap
      }

      ul.style.setProperty('--scrollDistance', `${totalWidth}px`);

      // Clone items for seamless loop
      if (!hasCloned.current) {
        hasCloned.current = true;
        const originals = Array.from(ul.children);
        for (const child of originals) {
          const clone = child.cloneNode(true) as HTMLElement;
          clone.setAttribute('aria-hidden', 'true');
          ul.appendChild(clone);
        }
      }
    }

    measureAndClone();

    const resizeObserver = new ResizeObserver(() => {
      measureAndClone();
    });
    resizeObserver.observe(wrapper);

    // IntersectionObserver to start animation when visible
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            wrapper.classList.add('is-visible');
            wrapper.style.setProperty('--scrollPlayState', 'running');
          }
        }
      },
      { threshold: 0.1 },
    );
    intersectionObserver.observe(wrapper);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="perksWrapper">
      <div className={`perks${direction === 'right' ? ' perks--right' : ''}`}>
        <ul ref={ulRef} className="perksContent">
          {perks.map((perk, i) => (
            <li key={i} className="perkContainer">
              <div className="perkCard">
                <img
                  className="perkImage"
                  src={perk.image}
                  alt={perk.alt}
                  loading="lazy"
                />
                <div className="perkOverlay" />
                <p className="perkText">{perk.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
