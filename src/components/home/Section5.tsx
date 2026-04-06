'use client';

import { LeagueMarquee } from './LeagueMarquee';

const STATS = [
  { id: 'stat1', badge: 'Research', prefix: '', target: 57, suffix: '+', subtitle: 'Peer-reviewed studies' },
  { id: 'stat2', badge: 'Wavelengths', prefix: '', target: 3, suffix: '', subtitle: 'Targeted light frequencies' },
  { id: 'stat3', badge: 'Session', prefix: '', target: 11, suffix: 'min', subtitle: 'To start feeling the difference' },
  { id: 'stat4', badge: 'Penetration', prefix: '', target: 50, suffix: 'mm', subtitle: 'Deep into muscle and tissue' },
];

export function Section5() {
  return (
    <div id="section5" className="section section5">
      <div id="section5Header" className="header section5Header">
        <h1 id="section5Subtitle" className="subtitle section5Subtitle">
          The numbers behind the <span className="titleItalic section5SubtitleItalic">ritual.</span>
        </h1>
        <div id="section5Description" className="description section5Description">
          Photobiomodulation is among the most studied non-invasive
          therapies in modern medicine. These are some of the reasons why.
        </div>
      </div>

      <div id="stats" className="stats">
        {STATS.map((stat) => (
          <div key={stat.id} id={stat.id} className="stat">
            <div className="glass badge statBadge">
              <span className="badgeText">{stat.badge}</span>
            </div>
            <div className="statContent">
              <p className="statTitle">
                {stat.prefix}<span className="statValue" data-target={stat.target}>0</span>{stat.suffix}
              </p>
              <p className="statSubtitle">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <LeagueMarquee />
    </div>
  );
}
