'use client';

export function AboutSection1() {
  return (
    <section id="aboutSection1" className="section section1">
      <div id="aboutHeader1" className="header header1">
        <div className="titleContainer">
          <h1 id="aboutHeader1Title" className="title header1Title">
            We built the room we{' '}
            <span className="titleItalic header1TitleItalic">wished</span>{' '}
            existed.
          </h1>
        </div>
        <div className="descriptionContainer">
          <p id="aboutHeader1Description" className="description header1Description">
            Zurich&apos;s first red light therapy studio. Science-backed,
            ritual-grounded, located at Seefeldstrasse 152.
          </p>
        </div>
        <a id="aboutHeader1Link" href="#origin" className="link">
          Our story ↓
        </a>
      </div>
    </section>
  );
}
