const WAVELENGTHS = [
  {
    nm: '630nm',
    name: 'Visible Red',
    color: '#E84B3A',
    depth: '~2mm',
    body: 'Activates fibroblasts at the skin surface. Stimulates collagen synthesis, improves tone, and reduces superficial inflammation.',
  },
  {
    nm: '660nm',
    name: 'Deep Red',
    color: '#C8392B',
    depth: '~10mm',
    body: 'Reaches the upper dermis and muscle layer. Drives the core anti-inflammatory signalling cascade. The workhorse wavelength.',
  },
  {
    nm: '850nm',
    name: 'Near-Infrared',
    color: '#8B1A10',
    depth: '~50mm',
    body: 'Invisible to the eye. Passes through tissue entirely — reaching deep muscle, joint, lymph, and nerve. The recovery wavelength.',
  },
];

export function WavelengthBento() {
  return (
    <section className="section wavelengthBentoSection">
      <div className="header">
        <div className="titleContainer">
          <h2 className="subtitle">
            The <span className="subtitleItalic">wavelengths.</span>
          </h2>
        </div>
      </div>

      <div className="wavelengthGrid">
        {WAVELENGTHS.map((w) => (
          <div key={w.nm} className="wavelengthCell">
            <span className="wavelengthNm" style={{ color: w.color }}>{w.nm}</span>
            <div className="wavelengthBar" style={{ backgroundColor: w.color }} />
            <span className="wavelengthName">{w.name}</span>
            <p className="wavelengthBody">{w.body}</p>
            <div className="glass badge wavelengthDepth">
              <span className="badgeText">{w.depth} depth</span>
            </div>
          </div>
        ))}
      </div>

      <p className="description" style={{ maxWidth: 520, textAlign: 'center', margin: '2rem auto 0' }}>
        The 700–770nm range? Research calls it the &quot;gap zone&quot; — photons here don&apos;t
        bind efficiently to any meaningful chromophore. Most consumer panels are in this
        range. Most people don&apos;t know that.
      </p>
    </section>
  );
}
