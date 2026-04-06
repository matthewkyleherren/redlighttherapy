'use client';

import Link from 'next/link';

export function Section6() {
  return (
    <div id="section6" className="section section6">
      <div id="section6Header" className="header section6Header">
        <h1 id="section6Subtitle" className="subtitle section6Subtitle">
          Build what endures, with <span className="titleItalic section6SubtitleItalic">long-term</span> partners.
        </h1>
        <div id="section6Description" className="description section6Description">
          We partner early and stay close, supporting founders advancing mankind with capital,
          storytelling, and hands-on support from day one.
        </div>
        <Link href="/founders" id="section6Button" className="btn-component btn-default button-md">
          <span className="btn-title">Learn more</span>
          <span className="btn-icon btn-icon-right">
            <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
