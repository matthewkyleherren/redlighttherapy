'use client';

import Image from 'next/image';
import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS = [
  {
    image: '/media-assets/salt-light.jpg',
    alt: 'Individual red light session',
    width: 1920,
    height: 1280,
    badge: 'Individual Sessions',
    title: 'The eleven-minute ritual.',
    about: 'Full-body immersion in 630nm, 660nm, and 850nm light. Guided mindfulness included. From CHF 33.',
    buttonText: 'View sessions',
    href: '/sessions',
  },
  {
    image: '/media-assets/199-6_red-light-therapy-mito-light-5.jpg',
    alt: 'red. unlimited membership',
    width: 1920,
    height: 1280,
    badge: 'Membership',
    title: 'Unlimited. CHF 222.',
    about: 'No credits. No booking friction. Just show up whenever your body asks — and it will.',
    buttonText: 'Join now',
    href: '/membership',
  },
];

export function Section2() {
  return (
    <div id="section2" className="section section2">
      <h1 id="section2Subtitle" className="subtitle section2Subtitle">
        Science-backed recovery, ritual, and
        <span id="section2SubtitleItalic" className="titleItalic section2SubtitleItalic">renewal</span>
        — in the heart of Zurich.
      </h1>
      <div id="section2Cards" className="section2Cards">
        {CARDS.map((card) => (
          <div key={card.title} className="homeCard">
            <Image
              src={card.image}
              alt={card.alt}
              width={card.width}
              height={card.height}
              loading="lazy"
              className="homeCardImage"
            />
            <div className="homeCardOverlay" />
            <div className="homeCardContent">
              <div className="glass badge homeCardBadge">
                <span className="badgeText">{card.badge}</span>
              </div>
              <div className="homeCardText">
                <h2 className="homeCardTitle">{card.title}</h2>
                <p className="homeCardAbout">{card.about}</p>
                <Link href={card.href} className="btn-component btn-default button-sm homeCardButton">
                  <span className="btn-title">{card.buttonText}</span>
                  <span className="btn-icon btn-icon-right">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
