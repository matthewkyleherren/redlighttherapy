import { PerksCarousel } from './PerksCarousel';

const PERKS = [
  { image: 'events.png', text: 'Access to <i>world-wide</i> events' },
  { image: 'concierge.png', text: '<i>24/7</i> investment concierge' },
  { image: 'deal-flow.png', text: 'Access the <i>best</i> deal flow' },
  { image: 'diligence.png', text: '<i>Complimentary</i> deal reviews and due diligence' },
  { image: 'advisor.png', text: 'Advisor <i>access</i>' },
  { image: 'portfolio.png', text: 'Automated <i>portfolio</i> management' },
  { image: 'content.png', text: 'The <i>masterclass</i> of startup investing' },
  { image: 'funds.png', text: 'Invest alongside <i>top-tier</i> funds' },
  { image: 'library.png', text: '<i>330+</i> educational video library' },
];

const PERKS_REVERSED = [...PERKS].reverse();

function perkTextToJsx(html: string) {
  const parts = html.split(/<i>(.*?)<\/i>/);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <span key={i} className="perkTextItalic">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function MembershipSection1() {
  return (
    <div id="membershipSection1" className="section section1 membershipSection1">
      <div id="membershipSection1Header" className="header section1Header membershipSection1Header">
        <h1 id="membershipSection1Title" className="title section1Title membershipSection1Title">
          Invest with the{' '}
          <span className="titleItalic section1TitleItalic membershipSection1TitleItalic">best</span>
        </h1>
        <p id="membershipSection1Description" className="description section1Description membershipSection1Description">
          The digital family office of the world&apos;s best athletes, artists and entrepreneurs
          investing in founders shaping the future of humanity.
        </p>
        <p id="membershipSection1Label" className="label section1Label membershipSection1Label">
          <svg
            className="section1LabelIcon"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 6V4a3 3 0 0 1 6 0v2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8" cy="10.5" r="1" fill="currentColor" />
          </svg>
          Access is by invitation only
        </p>
      </div>

      <div id="membershipSection1Perks" className="section1Perks">
        <PerksCarousel
          perks={PERKS.map((p) => ({
            image: `/images/${p.image}`,
            text: perkTextToJsx(p.text),
            alt: p.image.replace('.png', ''),
          }))}
          direction="left"
        />
        <PerksCarousel
          perks={PERKS_REVERSED.map((p) => ({
            image: `/images/${p.image}`,
            text: perkTextToJsx(p.text),
            alt: p.image.replace('.png', ''),
          }))}
          direction="right"
        />
      </div>
    </div>
  );
}
