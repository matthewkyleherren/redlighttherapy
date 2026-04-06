'use client';

const EVENTS_VIDEO_PLAYBACK_ID = '02LqrLkxx00pWycsdZ02N02Vn00bibSl2G4IW2HTS028EvoCA';

const STATS = [
  { id: 'foundersStat1', badge: 'Dealflow', prefix: '', target: 121, suffix: '', subtitle: 'VCs in our dealflow network' },
  { id: 'foundersStat2', badge: "24' & 25'", prefix: '', target: 33, suffix: '+', subtitle: 'Events hosted' },
  { id: 'foundersStat3', badge: 'Network', prefix: '', target: 320, suffix: '', subtitle: 'Introductions made' },
];

export function FoundersSection4() {
  return (
    <div id="section4" className="section section4 foundersSection4">
      <div id="header4" className="header">
        <div className="titleContainer">
          <h2 id="header4Title" className="title header4Title">
            Events and introductions with{' '}
            <span className="titleItalic header4TitleItalic">impact.</span>
          </h2>
        </div>
        <div id="header4Description" className="description header4Description">
          We curate introductions and events that make a difference.
        </div>
      </div>

      <div id="foundersStats" className="stats">
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

      <button
        id="section4VideoContainer"
        className="section4VideoContainer"
        type="button"
        aria-label="Play events video"
      >
        <div
          className="section4Video"
          dangerouslySetInnerHTML={{
            __html: `<mux-video
              playback-id="${EVENTS_VIDEO_PLAYBACK_ID}"
              stream-type="on-demand"
              metadata-video-title="Events video"
              aria-hidden="true"
              class="w-full h-full"
              style="--media-object-fit: cover; --media-object-position: center"
              tabindex="-1"
              autoplay="true"
              muted="true"
              loop="true"
              min-resolution="720p"
              max-resolution="2160p"
              preload="none"
              playsinline="true"
            ></mux-video>`,
          }}
        />
        <div className="section4VideoPlay glass">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </div>
      </button>
    </div>
  );
}
