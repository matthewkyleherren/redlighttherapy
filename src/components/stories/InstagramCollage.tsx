'use client';

import { useEffect, useRef } from 'react';

const COLUMNS = [
  {
    speed: 'slow',
    cards: [
      { imageNum: 7, url: 'https://www.instagram.com/p/DT_LCcignj9/' },
      { imageNum: 31, url: 'https://www.instagram.com/p/DQcZ2bmj3JZ/' },
      { imageNum: 25, url: 'https://www.instagram.com/p/DQ-FRFIjkD0/?img_index=1' },
      { imageNum: 3, url: 'https://www.instagram.com/p/DQcZRJzDYpJ/' },
      { imageNum: 10, url: 'https://www.instagram.com/p/DTI95bfgiFb/' },
      { imageNum: 1, url: 'https://www.instagram.com/p/DQr_pDIje-u/' },
    ],
  },
  {
    speed: 'fast',
    cards: [
      { imageNum: 15, url: 'https://www.instagram.com/p/DSDgLpbiCSp/' },
      { imageNum: 23, url: 'https://www.instagram.com/p/DRDD6dYAB9i/' },
      { imageNum: 34, url: 'https://www.instagram.com/p/DQcXEd4k4yd/' },
      { imageNum: 11, url: 'https://www.instagram.com/p/DTD9MCeigUv/' },
      { imageNum: 17, url: 'https://www.instagram.com/p/DR2hdq0iWLy/' },
      { imageNum: 22, url: 'https://www.instagram.com/p/DRNXFbwDlM_/' },
    ],
  },
  {
    speed: 'slow',
    cards: [
      { imageNum: 4, url: 'https://www.instagram.com/p/DUYP_amiDDw/' },
      { imageNum: 8, url: 'https://www.instagram.com/p/DT8rBb-CNTd/' },
      { imageNum: 24, url: 'https://www.instagram.com/p/DRAQBTqE7SW/' },
      { imageNum: 5, url: 'https://www.instagram.com/p/DUWVm4NE7m9/' },
      { imageNum: 12, url: 'https://www.instagram.com/p/DS5kcE5E6uj/' },
      { imageNum: 32, url: 'https://www.instagram.com/p/DQcZmfujgLk/' },
    ],
  },
  {
    speed: 'fast',
    cards: [
      { imageNum: 6, url: 'https://www.instagram.com/p/DUGtXBKFe3F/' },
      { imageNum: 29, url: 'https://www.instagram.com/p/DQcafx_idBG/' },
      { imageNum: 19, url: 'https://www.instagram.com/p/DRiJTm7CEBj/' },
      { imageNum: 2, url: 'https://www.instagram.com/p/DQkDe9XCLV3/' },
      { imageNum: 21, url: 'https://www.instagram.com/p/DRc3HU4ivuE/' },
      { imageNum: 16, url: 'https://www.instagram.com/p/DSA5xCdjW7c/' },
    ],
  },
  {
    speed: 'slow',
    cards: [
      { imageNum: 28, url: 'https://www.instagram.com/p/DQca03NjptB/' },
      { imageNum: 20, url: 'https://www.instagram.com/p/DRfq5idDAiJ/' },
      { imageNum: 26, url: 'https://www.instagram.com/p/DQttfeVlHsx/' },
      { imageNum: 18, url: 'https://www.instagram.com/p/DR0HfQwFVrT/' },
      { imageNum: 14, url: 'https://www.instagram.com/p/DSxuOgcDEy0/' },
      { imageNum: 33, url: 'https://www.instagram.com/p/DQcXoQIjsp2/' },
    ],
  },
];

export function InstagramCollage() {
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      columnsRef.current.forEach((col, i) => {
        if (!col) return;
        const rate = COLUMNS[i].speed === 'slow' ? 0.03 : 0.08;
        col.style.transform = `translateY(${-scrollY * rate}px)`;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="featuredInstagram">
      <div className="instagramCollage">
        <div className="collageGradient collageGradientTop" />
        <div className="collageGradient collageGradientBottom" />
        {COLUMNS.map((column, colIndex) => (
          <div
            key={colIndex}
            className="collageColumn"
            ref={(el) => { columnsRef.current[colIndex] = el; }}
          >
            {column.cards.map((card) => (
              <a
                key={card.imageNum}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="collageCard"
                aria-label={`Instagram post ${card.imageNum}`}
              >
                <img
                  src={`/images/stories/instagram-${card.imageNum}.webp`}
                  alt=""
                  className="collageThumbnail"
                  loading="lazy"
                />
                <div className="collageOverlay">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
