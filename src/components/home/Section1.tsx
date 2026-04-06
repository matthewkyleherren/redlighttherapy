'use client';

import Link from 'next/link';

const SECTION_1_VIDEO_PLAYBACK_ID_MOBILE = 'BLC6VVUBEBHvYTC7x02S5iULppqcdMmsUmGHVXq02y8W8';

export function Section1() {
  return (
    <div
      id="section1"
      className="section section1 homeSection1"
      style={{
        '--section1-poster-url': `url('/api/mux-poster/${SECTION_1_VIDEO_PLAYBACK_ID_MOBILE}/index_time=0.webp')`,
      } as React.CSSProperties}
    >
      <div
        id="section1Video"
        className="w-full h-full section1Video"
        dangerouslySetInnerHTML={{
          __html: `<mux-video
            playback-id="${SECTION_1_VIDEO_PLAYBACK_ID_MOBILE}"
            stream-type="on-demand"
            metadata-video-title="Landing video"
            class="w-full h-full"
            style="--media-object-fit: cover; --media-object-position: center"
            tabindex="-1"
            autoplay="true"
            muted="true"
            loop="true"
            min-resolution="720p"
            max-resolution="1080p"
            preload="none"
            playsinline="true"
          ></mux-video>`,
        }}
      />

      <div className="section1HeaderGradient" />

      <div className="section1Content">
        {/* Video Controls */}
        <div id="homeVideoControls" className="glass homeVideoControlsContainer">
          <div className="homeVideoControls">
            <button id="homeVideoRestart" className="homeVideoControlButton" aria-label="Restart">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
            <button id="homeVideoPlayPause" className="homeVideoControlButton" aria-label="Play/Pause">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="3" width="5" height="18" rx="1" />
                <rect x="5" y="3" width="5" height="18" rx="1" />
              </svg>
            </button>
            <span id="homeVideoTime" className="homeVideoControlTime">0:00</span>
            <button id="homeVideoMuteToggle" className="homeVideoControlButton" aria-label="Mute/Unmute">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                <path d="M16 9a5 5 0 0 1 0 6" />
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
              </svg>
            </button>
            <button id="homeVideoClose" className="homeVideoControlButton" aria-label="Exit fullscreen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Section 1 Header */}
        <div id="section1Header" className="header section1Header">
          <div className="section1HeaderLeft">
            <h1 id="section1Title" className="title section1Title">
              Enter the<span id="section1TitleItalic" className="titleItalic section1TitleItalic">red.</span>
            </h1>
          </div>
          <div className="section1HeaderRight">
            <div className="section1HeaderRightContent">
              <div id="section1HeaderButtons" className="section1HeaderButtons">
                <div id="section1HeaderRightButton" className="glass btn-wrapper">
                  <button className="btn-component btn-glass button-sm" id="watchFilmButton">
                    <span className="btn-icon btn-icon-left">
                      <svg className="-ml-2 mr-1" width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.97948" cy="9.97948" r="9.69704" stroke="currentColor" strokeWidth="0.56488" />
                        <path
                          d="M12.5913 9.91337C12.6979 9.99337 12.6979 10.1533 12.5913 10.2333L8.88769 13.0131C8.75586 13.112 8.56764 13.0179 8.56764 12.8531L8.56764 7.29355C8.56764 7.12871 8.75586 7.03464 8.88769 7.13359L12.5913 9.91337Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="btn-title">Book a session</span>
                  </button>
                </div>
                <Link
                  href="/membership"
                  id="section1HeaderRightButton2"
                  className="btn-component btn-default button-sm"
                >
                  <span className="btn-title">Join the membership</span>
                  <span className="btn-icon btn-icon-right">
                    <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="section1DescriptionContainer">
                <div id="section1Description" className="description section1Description">
                  Zurich&apos;s first red light therapy studio. Cellular
                  recovery, collagen, clarity — in eleven minutes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
