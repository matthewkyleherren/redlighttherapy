'use client';

const VALUES = [
  {
    title: 'Technology is a tool. Ritual is the point.',
    descriptions: [
      'There are faster ways to recover. There are cheaper ways to work on your skin.',
      'We are not interested in being the fastest or cheapest. We are interested in building a practice — something you come back to not because you have to, but because you want to.',
      'Every session includes a guided mindfulness element. Not because it improves ATP production (though stillness probably helps). Because those eleven minutes of quiet might be the most important eleven minutes of your week.',
      'Biohacking without introspection is just hardware maintenance. We do both.',
    ],
  },
  {
    title: 'We tell you what the science actually says.',
    descriptions: [
      'The wellness industry is full of overclaiming. We are not interested in that.',
      'Red light therapy has fifty years of peer-reviewed research behind it. We will cite those studies. We will also tell you which applications still need more evidence.',
      'Our target audience can spot pseudoscience. We trust that, and we respect it.',
      'The science is strong enough on its own. It doesn\'t need embellishment.',
    ],
  },
  {
    title: 'The body needs both activation and restoration.',
    descriptions: [
      'The LED beds are the foundation. But red. is also a movement studio.',
      'Kundalini yoga. Ecstatic dance. Breathwork. Lymphatic drainage. Women\'s vitality flow.',
      'These are not ancillary — they\'re part of the same belief that recovery and activation are two sides of the same commitment.',
      'Red light handles the cellular layer. Movement handles the rest.',
    ],
  },
  {
    title: 'The person matters as much as the protocol.',
    descriptions: [
      'Our members are not one type of person.',
      'Some are competitive athletes managing recovery loads. Some are professionals who haven\'t slept properly in months. Some are women navigating hormonal transitions. Some came in curious and became regulars before they could explain why.',
      'What they share: they take their health seriously, they don\'t have time for things that don\'t work, and they\'d rather have evidence than enthusiasm.',
      'We have both.',
    ],
  },
];

export function AboutPhilosophyCards() {
  return (
    <section className="section aboutPhilosophySection">
      <div className="header">
        <div className="titleContainer">
          <h2 className="subtitle">
            Our<span className="subtitleItalic"> philosophy.</span>
          </h2>
        </div>
      </div>

      <div id="aboutValuesWrapper" className="valuesWrapper">
        <div id="aboutValues" className="values">
          {VALUES.map((value, i) => (
            <div key={i} className="value" data-card-index={i}>
              <div className="valueContent">
                <div className="glass badge">
                  <span className="badgeText">{value.title}</span>
                </div>
                <div className="valueDescriptionContainer">
                  {value.descriptions.map((desc, j) => (
                    <p key={j} className="valueDescription">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="valuesNavigation">
          <button
            id="aboutValuesArrowLeft"
            className="arrowButton"
            aria-label="Previous value"
            disabled
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          <button
            id="aboutValuesArrowRight"
            className="arrowButton"
            aria-label="Next value"
          >
            <div className="glass" style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
