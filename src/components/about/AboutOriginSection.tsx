'use client';

export function AboutOriginSection() {
  return (
    <section id="origin" className="section aboutOriginSection">
      <div className="aboutOriginGrid">
        <div className="aboutOriginImage">
          <img
            src="/media-assets/hero-candidates/1_pod-portrait.jpg"
            alt="The red. studio pod interior"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="aboutOriginText">
          <p className="label">Origin</p>
          <h2 className="subtitle">
            The gap between the{' '}
            <span className="subtitleItalic">science</span> and the salon.
          </h2>
          <div className="aboutOriginBody">
            <p>
              Red light therapy has been peer-reviewed since the 1960s. NASA used it for wound
              healing in space. Olympic athletes have used it for recovery. Dermatologists have
              used it for collagen stimulation for decades.
            </p>
            <p>
              But finding somewhere in Zurich to actually do it — with clinical-grade panels,
              in a space that didn&apos;t feel like a tanning salon or a hospital corridor — wasn&apos;t
              possible.
            </p>
            <p>So we built one.</p>
            <p>
              red. opened at Seefeldstrasse 152, 8008 Zurich, with one intention: to give this
              city access to serious light therapy in a space that respects both the science and
              the person receiving it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
