'use client';

export function ScienceSection1() {
  return (
    <section id="scienceSection1" className="section section1">
      <div id="scienceHeader1" className="header header1">
        <div className="titleContainer">
          <h1 id="scienceHeader1Title" className="title header1Title">
            Your mitochondria have been{' '}
            <span className="titleItalic header1TitleItalic">waiting</span>{' '}
            for this.
          </h1>
        </div>
        <div className="descriptionContainer">
          <p id="scienceHeader1Description" className="description header1Description">
            Photobiomodulation. Fifty years of peer-reviewed research.
            Eleven minutes of light. This is what happens inside your cells.
          </p>
        </div>
        <a id="scienceHeader1Link" href="#mechanism" className="link">
          The science ↓
        </a>
      </div>
    </section>
  );
}
