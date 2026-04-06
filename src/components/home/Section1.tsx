'use client';

import Link from 'next/link';

export function Section1() {
  return (
    <div
      id="section1"
      className="section section1 homeSection1"
      style={{ background: '#000' }}
    >
      <div className="section1HeroImage">
        <img
          src="/media-assets/hero.webp"
          alt="Red light therapy bed"
          className="section1HeroImg"
        />
      </div>

      <div className="section1HeaderGradient" />

      <div className="section1Content">
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
                <Link href="/book" id="section1HeaderRightButton" className="glass btn-wrapper">
                  <span className="btn-component btn-glass button-sm">
                    <span className="btn-title">Book a session</span>
                    <span className="btn-icon btn-icon-right">
                      <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </Link>
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
