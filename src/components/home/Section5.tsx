'use client';

import { LeagueMarquee } from './LeagueMarquee';

const STATS = [
  { id: 'stat1', badge: 'Network', prefix: '', target: 300, suffix: '+', subtitle: "Of the world's best" },
  { id: 'stat2', badge: 'Network', prefix: '', target: 25, suffix: '+', subtitle: 'World Champions' },
  { id: 'stat3', badge: 'Members', prefix: '$', target: 20, suffix: 'bn+', subtitle: 'In exits by our members.' },
  { id: 'stat4', badge: 'Investments', prefix: '$', target: 100, suffix: 'm', subtitle: 'Invested in venture' },
];

export function Section5() {
  return (
    <div id="section5" className="section section5">
      <div id="section5Header" className="header section5Header">
        <h1 id="section5Subtitle" className="subtitle section5Subtitle">
          From early momentum to <span className="titleItalic section5SubtitleItalic">global</span> awareness.
        </h1>
        <div id="section5Description" className="description section5Description">
          Our network of investors spans world-class athletes, artists, and entrepreneurs, people
          who shape culture, shift perspective, and open doors.
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
