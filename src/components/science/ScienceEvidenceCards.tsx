'use client';

const EVIDENCE = [
  {
    title: 'Skin & Collagen',
    descriptions: [
      'Controlled clinical trials show that red and near-infrared light treatment increases intradermal collagen density and reduces fine lines. The mechanism is direct: photons activate fibroblast cells — the factories that produce collagen.',
      'A 2014 blinded trial in Photomedicine and Laser Surgery showed statistically significant improvement in collagen density after twice-weekly sessions. Not after months — within weeks.',
      'Most clinical studies use 10–12 minutes per session, twice a week, across 4–12 weeks. Our 11-minute protocol is exactly in this window.',
      'This is the most robustly evidenced application of photobiomodulation. Stanford Medicine, dermatology journals, and independent researchers all converge here.',
    ],
  },
  {
    title: 'Inflammation & Recovery',
    descriptions: [
      'PBM operates on inflammation at multiple levels simultaneously. Photons absorbed by CCO trigger a brief, controlled burst of reactive oxygen species — not damaging, but signalling.',
      'This activates NF-\u03BAB — a transcription factor that in healthy tissue promotes repair. In already-inflamed tissue, the same pathway paradoxically reduces pro-inflammatory cytokines: TNF-\u03B1, interleukin-1\u03B2, prostaglandins.',
      'Animal studies document reduced inflammatory markers (TNF-\u03B1, IL-1\u03B2) and decreased M1 macrophage markers. Human trials show clinical improvements in arthritis, muscle recovery, and autoimmune thyroiditis.',
      'Elite athletes have used this for decades. They didn\'t wait for the wellness industry to catch up.',
    ],
  },
  {
    title: 'Brain & Cognition',
    descriptions: [
      'Near-infrared wavelengths cross the blood-brain barrier. This is not a claim — it is documented physics. The skull attenuates but does not block 850nm light.',
      'A 2024 randomised controlled trial (PMC12689328) documented significant improvements in cognitive function and neuropsychiatric symptoms in post-stroke patients treated with 630nm red light.',
      'The mechanism: PBM activates enzymes involved in formaldehyde metabolism. Formaldehyde is a metabolic byproduct that accumulates with cognitive stress and impairs neuronal function.',
      'Sleep research suggests red-wavelength light in the evening supports melatonin production by minimising blue-spectrum disruption of circadian rhythms.',
    ],
  },
  {
    title: 'Hormonal Support',
    descriptions: [
      'The hormonal applications of PBM are among the more intriguing and less-publicised areas of research.',
      'Several studies have examined effects on testosterone and thyroid function. The mechanism appears to involve mitochondrial activation in endocrine tissue — the same CCO pathway, different organ.',
      'A study on autoimmune thyroiditis showed reduced inflammatory antibody levels after PBM treatment — a meaningful result for a condition where options are limited.',
      'We include this category with appropriate honesty: the evidence is promising, not definitive. More studies are in progress. We\'ll update this page as the literature develops.',
    ],
  },
];

export function ScienceEvidenceCards() {
  return (
    <section className="section scienceEvidenceSection">
      <div className="header">
        <div className="titleContainer">
          <h2 className="subtitle">
            The <span className="subtitleItalic">evidence.</span>
          </h2>
        </div>
      </div>

      <div id="scienceValuesWrapper" className="valuesWrapper">
        <div id="scienceValues" className="values">
          {EVIDENCE.map((item, i) => (
            <div key={i} className="value" data-card-index={i}>
              <div className="valueContent">
                <div className="glass badge">
                  <span className="badgeText">{item.title}</span>
                </div>
                <div className="valueDescriptionContainer">
                  {item.descriptions.map((desc, j) => (
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
            id="scienceValuesArrowLeft"
            className="arrowButton"
            aria-label="Previous evidence"
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
            id="scienceValuesArrowRight"
            className="arrowButton"
            aria-label="Next evidence"
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
