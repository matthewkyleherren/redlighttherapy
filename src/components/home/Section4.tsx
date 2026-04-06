'use client';

import Link from 'next/link';
import { VideoTile } from './VideoTile';

export function Section4() {
  return (
    <div id="section4" className="section section4">
      <div id="section4Header" className="header section4Header">
        <h1 id="section4Subtitle" className="subtitle section4Subtitle">
          We bring value to founders <span className="titleItalic section4SubtitleItalic">beyond</span> capital.
        </h1>
        <div id="section4Description" className="description section4Description">
          We accelerate the world&apos;s best founders with storytelling, network, influence &amp;
          expertise.
        </div>
        <Link href="/founders" id="section4Button" className="btn-component btn-default button-md">
          <span className="btn-title">Learn more</span>
          <span className="btn-icon btn-icon-right">
            <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>

      <div id="founders" className="founders section4Founders">
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
              &ldquo;You guys continue to be wicked, value-add investors for us. One of your superpowers is your collective
              network.&rdquo;
            </blockquote>
            <p className="quoteTileSubtitle">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
