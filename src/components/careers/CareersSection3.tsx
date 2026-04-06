'use client';

import { useEffect } from 'react';

const VALUES = [
  {
    title: 'We play to win',
    descriptions: [
      'We are here to win - not just to take part.',
      'Just like our clients who operate at the elite level of sport, we understand that in order to win; we need to put in the work.',
      'This means going the extra mile, being willing to do what others will not and holding ourselves to a higher standard. Some companies play to not lose, we play to win.',
      'We are proactive, decisive and have the courage to take risks.',
    ],
  },
  {
    title: 'We are adaptable',
    descriptions: [
      'We understand in a world that is changing faster than ever before - the only constant is change.',
      'The average lifespan of a Fortune 100 company in 1958 was 61 years, now it is 18 years.',
      'We adapt to a changing world, constantly iterating, moving forward and staying relevant.',
    ],
  },
  {
    title: 'Impossible is an opinion',
    descriptions: [
      'We are on a mission to build something which has never been done before from the ground up.',
      'It will be a hard journey full of challenges which are currently unsolved.',
      'Our culture is defined by the fact that when we are confronted with challenges, we work from the assumption that it is possible to overcome them.',
    ],
  },
  {
    title: 'We are transparent',
    descriptions: [
      'We challenge each other.',
      'Regardless of title, seniority or reporting lines.',
      'We give feedback and we are hungry to receive it.',
      'We value honest feedback delivered with kindness, and we value people who ask questions.',
    ],
  },
];

const CAROUSEL_IMAGES = [
  { src: '/images/careers/1.png', width: 480, height: 721 },
  { src: '/images/careers/2.png', width: 1050, height: 660 },
  { src: '/images/careers/3.png', width: 480, height: 721 },
  { src: '/images/careers/4.png', width: 1050, height: 660 },
  { src: '/images/careers/5.png', width: 480, height: 721 },
  { src: '/images/careers/6.png', width: 1050, height: 660 },
  { src: '/images/careers/7.png', width: 1050, height: 660 },
  { src: '/images/careers/8.png', width: 1050, height: 660 },
  { src: '/images/careers/9.png', width: 480, height: 634 },
  { src: '/images/careers/10.png', width: 1050, height: 660 },
];

function initCarouselScroll(container: HTMLElement) {
  const content = container.querySelector<HTMLUListElement>('.carouselContent');
  if (!content) return;

  const contentEl = content;
  const originalItems = Array.from(contentEl.children);
  // Clone all original items for seamless loop
  for (const item of originalItems) {
    contentEl.appendChild(item.cloneNode(true));
  }

  const scrollSpeed = 60;

  function recalculate() {
    const scrollDistance = contentEl.scrollWidth / 2;
    container.style.setProperty('--scroll-distance', `${scrollDistance}px`);
    const duration = scrollDistance / scrollSpeed;
    container.style.setProperty('--carousel-animation-duration', `${duration}s`);
  }

  recalculate();

  const resizeObserver = new ResizeObserver(() => {
    // Preserve animation phase
    const computedStyle = getComputedStyle(contentEl);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentX = matrix.m41;
    const oldDistance = parseFloat(container.style.getPropertyValue('--scroll-distance')) || 1;
    const phase = oldDistance > 0 ? currentX / -oldDistance : 0;

    recalculate();

    const newDistance = parseFloat(container.style.getPropertyValue('--scroll-distance')) || 1;
    const newDuration = parseFloat(container.style.getPropertyValue('--carousel-animation-duration')) || 40;
    const delay = -(phase * newDuration);
    container.style.setProperty('--carousel-animation-delay', `${delay}s`);
  });

  resizeObserver.observe(container);

  if ('fonts' in document && document.fonts?.ready) {
    document.fonts.ready.then(() => recalculate());
  }

  return () => {
    resizeObserver.disconnect();
  };
}

export function CareersSection3() {
  useEffect(() => {
    const container = document.getElementById('imagesCarousel');
    if (!container) return;
    const cleanup = initCarouselScroll(container);
    return cleanup;
  }, []);

  return (
    <section id="section3" className="section section3">
      <div id="header3" className="header header3">
        <p id="header3Label" className="label header3Label">
          Join a team of game-changers
        </p>
        <div className="titleContainer">
          <h2 id="header3Title" className="title header3Title">
            We are looking for ambitious people who want to create
            <span className="titleItalic header3TitleItalic"> something </span>
            meaningful while growing alongside some of the world&apos;s most driven individuals.
          </h2>
        </div>
      </div>

      <div
        id="imagesCarousel"
        className="imagesCarousel"
        style={{ '--carousel-images': 10 } as React.CSSProperties}
      >
        <ul className="carouselContent">
          {CAROUSEL_IMAGES.map((img, i) => (
            <li key={i} className="carouselItem">
              <img
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="carouselImage"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="header">
        <div className="titleContainer">
          <h2 id="header3Subtitle" className="subtitle header3Subtitle">
            Our<span className="subtitleItalic header3SubtitleItalic"> values.</span>
          </h2>
        </div>
      </div>

      <div id="valuesWrapper" className="valuesWrapper">
        <div id="values" className="values">
          {VALUES.map((value, i) => (
            <div key={i} className="value" data-card-index={i}>
              <div className="valueContent">
                <div className="glass badge">
                  <span className="badgeText">{value.title}</span>
                </div>
                <div className="valueDescriptionContainer">
                  {value.descriptions.map((desc, j) => (
                    <p key={j} className="valueDescription">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="valuesNavigation">
          <button
            id="valuesArrowLeft"
            className="arrowButton"
            aria-label="Previous value"
            disabled
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          <button
            id="valuesArrowRight"
            className="arrowButton"
            aria-label="Next value"
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
