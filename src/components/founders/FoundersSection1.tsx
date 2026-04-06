'use client';

import Link from 'next/link';
import { VideoTile } from '@/components/home/VideoTile';

const HERO_VIDEO_PLAYBACK_ID = 'krVH3nGExGWFmZ00Q2HtS1JgiKzELBxGulaeu00IHiwag';

export function FoundersSection1() {
  return (
    <div id="section1" className="section section1">
      <div className="section1Content">
        <div id="header1" className="header header1">
          <div className="titleContainer">
            <h1 id="header1Title" className="title header1Title">
              We accelerate the world&apos;s best founders with storytelling,{' '}
              <button
                id="header1TitleVideoButton"
                className="header1TitleVideoContainer"
                type="button"
                aria-label="Play video"
              >
                <div
                  className="header1TitleVideo"
                  dangerouslySetInnerHTML={{
                    __html: `<mux-video
                      playback-id="${HERO_VIDEO_PLAYBACK_ID}"
                      stream-type="on-demand"
                      metadata-video-title="Founders hero video"
                      aria-hidden="true"
                      class="w-full h-full"
                      style="--media-object-fit: cover; --media-object-position: center"
                      tabindex="-1"
                      autoplay="true"
                      muted="true"
                      loop="true"
                      start-time="6"
                      min-resolution="360p"
                      max-resolution="720p"
                      preload="none"
                      playsinline="true"
                    ></mux-video>`,
                  }}
                />
                <div className="header1TitleVideoPlay glass">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </button>{' '}
              network, influence &amp; expertise.
            </h1>
          </div>
          <Link href="/founders/submit" id="header1Link" className="link">
            APPLY TO SEQUEL
          </Link>
        </div>

        <div id="founders" className="founders">
          {/* Column 1: Normal */}
          <div className="foundersColumn">
            <VideoTile
              playbackId="5attz0200T7muKz1gOropOtRnC3BTpfb2v01XvOEP4c02Pk"
              videoTitle="Founders tile - Neil Tanna"
              title="Neil Tanna"
              subtitle="CEO & Co-Founder of Howbout"
              stage="Series A"
            />
            <div className="quoteTile">
              <div className="glass badge">
                <span className="badgeText">Seed</span>
              </div>
              <blockquote className="quoteTileQuote">
                &ldquo;Already an 11 out of 10&rdquo;
              </blockquote>
              <p className="quoteTileSubtitle">Founder</p>
            </div>
          </div>

          {/* Column 2: Reverse */}
          <div className="foundersColumn foundersColumnReverse">
            <VideoTile
              playbackId="EUoDXDdpJ7o00KgIzYpMTwZ8x5wagSeqCzQCwjeyUJiI"
              videoTitle="Founders tile - Max Teichert"
              title="Max Teichert"
              subtitle="CEO & Co-Founder of Track Titan"
              stage="Seed"
            />
            <div className="quoteTile">
              <div className="glass badge">
                <span className="badgeText">Series A</span>
              </div>
              <blockquote className="quoteTileQuote">
                &ldquo;You guys continue to be wicked, value-add investors for us. One of your superpowers is your collective network.&rdquo;
              </blockquote>
              <p className="quoteTileSubtitle">Founder</p>
            </div>
          </div>

          {/* Column 3: Normal */}
          <div className="foundersColumn">
            <VideoTile
              playbackId="3U4pC01MH02RWD628LMoS55RNW5N4CbMnvdeEnG900VLic"
              videoTitle="Founders tile - Neil Parikh"
              title="Neil Parikh"
              subtitle="CEO & Co-Founder of Slingshot AI"
              stage="Series A"
            />
            <div className="quoteTile">
              <div className="glass badge">
                <span className="badgeText">Series A</span>
              </div>
              <blockquote className="quoteTileQuote">
                &ldquo;Holy shit, the video you made is fantastic... It&apos;s so great to have useful investors.&rdquo;
              </blockquote>
              <p className="quoteTileSubtitle">Founder of Slingshot AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
