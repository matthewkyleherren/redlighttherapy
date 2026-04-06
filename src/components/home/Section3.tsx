'use client';

import Link from 'next/link';

const SECTION_3_PHOTOS = [
  {
    src: '/media-assets/691c9715b503f65d6eacedcc_676593909481ac98d6cefd6f_Red_20Light_20Therapy_20for_20Skin__20These_20Are_20the_20Science-Backed_20Benefits-min.jpeg',
    alt: 'Red light therapy — science-backed skin benefits',
  },
  {
    src: '/media-assets/red_light_therapy_bed_1.jpg',
    alt: 'Red light therapy pod interior',
  },
  {
    src: '/media-assets/hero-candidates/1_pod-portrait.jpg',
    alt: 'Woman inside red light therapy pod',
  },
  {
    src: '/media-assets/hero-candidates/3_light-on-face.jpg',
    alt: 'Red light on skin — blue and red contrast',
  },
  {
    src: '/media-assets/691d99a8a3d14ffa7b2a9b96_20240709_Ayun_1314.jpg',
    alt: 'Red light therapy session with goggles',
  },
];

export function Section3() {
  return (
    <div id="section3" className="section section3">
      <div id="section3Content" className="section3Content">
        <div
          id="section3Video"
          className="w-full h-full section3Video"
        >
          {SECTION_3_PHOTOS.map((photo, i) => (
            <img
              key={photo.src}
              id={`section3Photo${i}`}
              src={photo.src}
              alt={photo.alt}
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: i === 0 ? 1 : 0,
                transition: 'none',
              }}
            />
          ))}
        </div>
        <p id="section3BeliefsTitle" className="section3BeliefsTitle">Science reveals</p>
        <div id="section3Text" className="section3Text">
          <div id="section3TextItems" className="section3TextItems">
            <p className="section3TextItem">
              Light that penetrates <span className="section3TextItemItalic">50mm</span> beneath your skin.
            </p>
            <p className="section3TextItem">
              Mitochondria producing <span className="section3TextItemItalic">more ATP energy.</span>
            </p>
            <p className="section3TextItem">
              Recovery that happens <span className="section3TextItemItalic">while you rest.</span>
            </p>
            <p className="section3TextItem">
              Collagen that <span className="section3TextItemItalic">rebuilds itself.</span>
            </p>
            <p className="section3TextItem">
              A mind that thinks <span className="section3TextItemItalic">more clearly.</span>
            </p>
          </div>
        </div>
        <div className="glass btn-wrapper section3Button">
          <Link href="/science" className="btn-component btn-glass button-md">
            <span className="btn-title">Explore the science</span>
            <span className="btn-icon btn-icon-right">
              <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
