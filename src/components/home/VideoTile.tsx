type VideoTileProps = {
  playbackId: string;
  title: string;
  subtitle: string;
  stage: string;
  videoTitle: string;
};

export function VideoTile({ playbackId, title, subtitle, stage, videoTitle }: VideoTileProps) {
  return (
    <div className="videoTile">
      <div
        className="w-full h-full videoTileVideo"
        dangerouslySetInnerHTML={{
          __html: `<mux-video
            playback-id="${playbackId}"
            stream-type="on-demand"
            metadata-video-title="${videoTitle}"
            aria-hidden="true"
            class="w-full h-full"
            style="--media-object-fit: cover; --media-object-position: center"
            tabindex="-1"
            autoplay="true"
            muted="true"
            loop="true"
            min-resolution="360p"
            max-resolution="720p"
            preload="none"
            playsinline="true"
          ></mux-video>`,
        }}
      />
      <div className="videoTileOverlay">
        <div className="videoTileHeader">
          <div className="glass badge stageBadge">
            <span className="badgeText">{stage}</span>
          </div>
          <div className="volumeIndicator" aria-hidden="true">
            <div className="glass !w-full h-full">
              <svg className="volumeIcon volumeOn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <svg className="volumeIcon volumeOff" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            </div>
          </div>
        </div>
        <div className="videoTileFooter">
          <div className="videoTileInfo">
            <p className="videoTileTitle">{title}</p>
            <p className="videoTileSubtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
