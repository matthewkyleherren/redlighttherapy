'use client';

export function VideoPlayerOverlay() {
  return (
    <div
      id="videoPlayerOverlay"
      className="videoPlayerOverlay"
      aria-hidden="true"
    >
      <div
        id="overlayVideoContainer"
        className="overlayVideoContainer"
        dangerouslySetInnerHTML={{
          __html: `<mux-video
            id="overlayVideo"
            class="overlayVideo"
            stream-type="on-demand"
            metadata-video-title="Overlay video player"
            style="--media-object-fit: contain; --media-object-position: center"
            preload="none"
            playsinline="true"
          ></mux-video>`,
        }}
      />
      <div id="overlayVideoControlsContainer" className="overlayVideoControlsContainer">
        <div id="overlayVideoControls" className="overlayVideoControls glass">
          <button
            id="overlayRestart"
            className="overlayVideoControlButton"
            type="button"
            aria-label="Restart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
          <button
            id="overlayPlayPause"
            className="overlayVideoControlButton"
            type="button"
            aria-label="Play/Pause"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </button>
          <span id="overlayTime" className="overlayVideoControlTime">00:00</span>
          <button
            id="overlayMute"
            className="overlayVideoControlButton"
            type="button"
            aria-label="Mute/Unmute"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
              <path d="M16 9a5 5 0 0 1 0 6" />
              <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
            </svg>
          </button>
          <button
            id="overlayClose"
            className="overlayVideoControlButton"
            type="button"
            aria-label="Close video player"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
