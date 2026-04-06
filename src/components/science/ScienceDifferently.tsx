const FEATURES = [
  {
    label: 'Delivery',
    title: 'Above + Below',
    body: 'Both surfaces active simultaneously. 630, 660, and 850nm delivered to your full body — front, back, simultaneously.',
  },
  {
    label: 'Dosage',
    title: 'Calibrated dose',
    body: 'Enough light to stimulate. Not so much that it inhibits. The biphasic dose response, respected.',
  },
  {
    label: 'Hardware',
    title: 'Clinical-grade output',
    body: 'Not a consumer panel. Not a tanning bed. Full-body clinical LED panels with the therapeutic fluence range of published studies.',
  },
  {
    label: 'Experience',
    title: 'Mindfulness Menu',
    body: 'A guided audio sequence developed specifically for the duration of your session. Eleven minutes of light. Eleven of quiet.',
  },
];

export function ScienceDifferently() {
  return (
    <section className="section scienceDifferentlySection">
      <div className="header">
        <div className="titleContainer">
          <h2 className="subtitle">
            The studio, not{' '}
            <span className="subtitleItalic">the device.</span>
          </h2>
        </div>
        <div className="descriptionContainer">
          <p className="description">
            Consumer red light panels output 20–100mW/cm² at a single wavelength,
            positioned 15–30cm from one side of your body. That is not what we do.
          </p>
        </div>
      </div>

      <div className="differenceGrid">
        {FEATURES.map((f) => (
          <div key={f.title} className="glass differenceCard">
            <div className="glass badge">
              <span className="badgeText">{f.label}</span>
            </div>
            <h3 className="differenceCardTitle">{f.title}</h3>
            <p className="differenceCardBody">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
