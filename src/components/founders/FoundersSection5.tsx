'use client';

import Link from 'next/link';

const SHORT_STATS = [
  { id: 'shortStat1', target: 13, suffix: '', subtitle: 'Companies started' },
  { id: 'shortStat2', target: 400, prefix: '$', suffix: 'm+', subtitle: 'Exits' },
  { id: 'shortStat3', target: 80, prefix: '$', suffix: 'm+', subtitle: 'VC money raised' },
  { id: 'shortStat4', target: 20, prefix: '$', suffix: 'b+', subtitle: 'Client exits' },
];

const EVENTS = [
  {
    id: 'event1',
    side: 'left' as const,
    title: 'Capital One acquires Velocity Black',
    date: '1st June 2023',
    image: '/images/founders/velocity-black.png',
  },
  {
    id: 'event2',
    side: 'right' as const,
    title: 'KGA acquires Stresscoach',
    date: '20th July 2022',
    image: '/images/founders/stresscoach.png',
  },
  {
    id: 'event3',
    side: 'left' as const,
    title: 'Indeed acquires Syft',
    date: '30th May 2019',
    image: '/images/founders/syft.png',
  },
  {
    id: 'event4',
    side: 'right' as const,
    title: 'Access Group acquires DesignMyNight',
    date: '23rd Nov 2017',
    image: '/images/founders/design-my-night.png',
  },
];

function EventCard({ event }: { event: typeof EVENTS[number] }) {
  return (
    <div className="event">
      <div>
        <p className="eventDescription">{event.title}</p>
        <div className="glass badge eventBadge">
          <span className="eventBadgeText">{event.date}</span>
        </div>
      </div>
      <img
        src={event.image}
        alt={event.title}
        className="eventImage"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function FoundersSection5() {
  return (
    <>
      <div id="section5" className="section section5">
        <div id="header5" className="header">
          <div className="titleContainer">
            <h2 id="header5Title" className="title header5Title">
              Real operating{' '}
              <span className="titleItalic header5TitleItalic">expertise.</span>
            </h2>
          </div>
          <div id="header5Description" className="description header5Description">
            Our team has started 13 companies with $400m+ in exits and helped clients achieve $20b+ in exits.
            We bring real operating experience to every founder we back.
          </div>
        </div>

        <div id="section5Content" className="section5Content">
          {/* Desktop layout: interleaved stats and events */}
          {SHORT_STATS.map((stat, i) => (
            <div key={stat.id}>
              <div id={stat.id} className={`shortStat ${i > 0 ? 'shortStatMobile' : ''}`}>
                <p className="shortStatTitle">
                  {stat.prefix}<span className="shortStatValue" data-target={stat.target}>0</span>{stat.suffix}
                </p>
                <p className="shortStatSubtitle">{stat.subtitle}</p>
              </div>
              {EVENTS[i] && (
                <div
                  id={EVENTS[i].id}
                  className={`eventDesktop ${EVENTS[i].side === 'left' ? 'eventLeft' : 'eventRight'}`}
                >
                  <EventCard event={EVENTS[i]} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile carousel for events */}
        <div className="eventsCarousel eventMobile">
          {EVENTS.map((event) => (
            <div key={event.id} className="eventMobileItem">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: CTA */}
      <div id="section6" className="section section6">
        <div id="header6" className="header header6">
          <div className="titleContainer">
            <h2 id="header6Title" className="subtitle header6Title">
              Partner with{' '}
              <span className="titleItalic">us.</span>
            </h2>
          </div>
          <Link href="/founders/submit" id="header6Link" className="link ctaLink">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </>
  );
}
