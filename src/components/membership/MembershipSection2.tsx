import { VCMarquee } from './VCMarquee';

const STATS = [
  { badge: 'Clients', prefix: '', target: 300, suffix: '+', subtitle: '' },
  { badge: 'Followers', prefix: '', target: 220, suffix: 'm+', subtitle: '' },
  { badge: 'World Champions', prefix: '', target: 25, suffix: '', subtitle: '' },
  { badge: 'Exits', prefix: '$', target: 20, suffix: 'bn', subtitle: '' },
];

export function MembershipSection2() {
  return (
    <div id="membershipSection2" className="section section2 membershipSection2">
      <div id="membershipSection2Header" className="header section2Header membershipSection2Header">
        <h2 id="membershipSection2Title" className="title section2Title membershipSection2Title">
          Your{' '}
          <span className="titleItalic section2TitleItalic membershipSection2TitleItalic">access</span>{' '}
          class
        </h2>
        <p id="membershipSection2Description" className="description section2Description membershipSection2Description">
          Members gain access to curated venture, private market, and special situation
          opportunities - alongside world leading funds and operators.
        </p>
      </div>

      <VCMarquee />

      <div id="membershipStats" className="membershipStats">
        {STATS.map((stat, i) => (
          <div key={stat.badge} id={`membershipStat${i + 1}`} className="membershipStat">
            <div className="membershipStatContent">
              <div className="glass badge statBadge">
                <span className="badgeText">{stat.badge}</span>
              </div>
            </div>
            <div>
              <p className="membershipStatTitle">
                {stat.prefix}
                <span className="statValue" data-target={stat.target}>
                  0
                </span>
                {stat.suffix}
              </p>
              {stat.subtitle && (
                <p className="membershipStatSubtitle">{stat.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
