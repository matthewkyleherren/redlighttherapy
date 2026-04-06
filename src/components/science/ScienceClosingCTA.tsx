import Link from 'next/link';

export function ScienceClosingCTA() {
  return (
    <section className="section scienceClosingSection">
      <div className="header section5Footer">
        <div className="titleContainer">
          <h3 className="subtitle">
            <span className="titleItalic">Fifty years</span>{' '}
            of research. Eleven minutes to feel it.
          </h3>
        </div>
        <div className="descriptionContainer">
          <p className="description">
            Sessions from CHF 33. The science is real. The experience,
            however, you have to come in for.
          </p>
        </div>
        <Link href="/book" className="btn-component btn-default button-md" style={{ marginTop: '2rem' }}>
          <span className="btn-title">Book a session</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12H19" />
            <path d="M13 6L19 12L13 18" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
