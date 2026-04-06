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
    image: '/images/founders.jpg',
    alt: 'Card image: Not just another VC',
    width: 1100,
    height: 1688,
    badge: 'Founders',
    title: 'Not just another VC',
    about: "We bring capital, storytelling, network, influence and expertise to the world's best founders.",
    buttonText: 'For founders',
    href: '/founders',
  },
  {
    image: '/images/memberships-grok.jpg',
    alt: 'Card image: Invest with the best',
    width: 1100,
    height: 1190,
    badge: 'Athletes, Artists & Entrepreneurs',
    title: 'Invest with the best',
    about: 'Access to the most coveted private investment opportunities on the planet.',
    buttonText: 'For members',
    href: '/membership',
  },
];

export function Section2() {
  return (
    <div id="section2" className="section section2">
      <h1 id="section2Subtitle" className="subtitle section2Subtitle">
        The digital family office investing in founders shaping the
        <span id="section2SubtitleItalic" className="titleItalic section2SubtitleItalic">future</span>
        of humanity.
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
