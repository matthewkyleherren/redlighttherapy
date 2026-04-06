'use client';

import Link from 'next/link';

const SECTION_3_VIDEO_PLAYBACK_ID = 'hy3IUy2Ew8G37L3zxEt01b4G50047KEeBhCxFyki7VUmU';

export function Section3() {
  return (
    <div id="section3" className="section section3">
      <div id="section3Content" className="section3Content">
        <div
          id="section3Video"
          className="w-full h-full section3Video"
          dangerouslySetInnerHTML={{
            __html: `<mux-video
              playback-id="${SECTION_3_VIDEO_PLAYBACK_ID}"
              stream-type="on-demand"
              metadata-video-title="Home section 3 video"
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
        <p id="section3BeliefsTitle" className="section3BeliefsTitle">We believe in</p>
        <div id="section3Text" className="section3Text">
          <div id="section3TextItems" className="section3TextItems">
            <p className="section3TextItem">
              Backing founders who <span className="section3TextItemItalic">bend reality.</span>
            </p>
            <p className="section3TextItem">
              People who think impossible is an <span className="section3TextItemItalic">opinion.</span>
            </p>
            <p className="section3TextItem">
              Choosing <span className="section3TextItemItalic">courage</span> over comfort.
            </p>
            <p className="section3TextItem">
              <span className="section3TextItemItalic">Refusing</span> to accept the world that was given to us.
            </p>
            <p className="section3TextItem">
              <span className="section3TextItemItalic">Longevity</span> over hype.
            </p>
          </div>
        </div>
        <div className="glass btn-wrapper section3Button">
          <Link href="/manifesto" className="btn-component btn-glass button-md">
            <span className="btn-title">Read our manifesto</span>
            <span className="btn-icon btn-icon-right">
              <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
