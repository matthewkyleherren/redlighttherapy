'use client';

import { useEffect } from 'react';

const CAROUSEL_IMAGES = [
  { src: '/media-assets/hero.webp', width: 1920, height: 1080 },
  { src: '/media-assets/hero-candidates/1_pod-portrait.jpg', width: 800, height: 1200 },
  { src: '/media-assets/red_light_therapy_bed_1.jpg', width: 1920, height: 1080 },
  { src: '/media-assets/hero-candidates/3_light-on-face.jpg', width: 800, height: 1200 },
  { src: '/media-assets/691d99a8a3d14ffa7b2a9b96_20240709_Ayun_1314.jpg', width: 1200, height: 800 },
  { src: '/media-assets/hero-candidates/4_led-treatment.jpg', width: 800, height: 1200 },
  { src: '/media-assets/199-6_red-light-therapy-mito-light-5.jpg', width: 1200, height: 800 },
  { src: '/media-assets/hero-candidates/5_led-panel-beam.jpg', width: 800, height: 1200 },
];

function initCarouselScroll(container: HTMLElement) {
  const content = container.querySelector<HTMLUListElement>('.carouselContent');
  if (!content) return;

  const contentEl = content;
  const originalItems = Array.from(contentEl.children);
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
    const computedStyle = getComputedStyle(contentEl);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentX = matrix.m41;
    const oldDistance = parseFloat(container.style.getPropertyValue('--scroll-distance')) || 1;
    const phase = oldDistance > 0 ? currentX / -oldDistance : 0;

    recalculate();

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

export function AboutSpaceCarousel() {
  useEffect(() => {
    const container = document.getElementById('aboutImagesCarousel');
    if (!container) return;
    const cleanup = initCarouselScroll(container);
    return cleanup;
  }, []);

  return (
    <section className="section aboutSpaceSection">
      <div className="header">
        <p className="label">Seefeldstrasse 152 · Seefeld · Zurich</p>
        <div className="titleContainer">
          <h2 className="subtitle">
            The <span className="subtitleItalic">space.</span>
          </h2>
        </div>
      </div>

      <div
        id="aboutImagesCarousel"
        className="imagesCarousel"
        style={{ '--carousel-images': CAROUSEL_IMAGES.length } as React.CSSProperties}
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
    </section>
  );
}
