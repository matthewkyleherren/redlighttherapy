import Link from 'next/link';

const CLASSES = [
  { name: 'Kundalini Yoga', schedule: 'Mon / Thu', spots: 'Small group' },
  { name: 'Breathwork', schedule: 'Wed', spots: 'Small group' },
  { name: 'Ecstatic Dance', schedule: 'Fri', spots: 'Open floor' },
  { name: 'Lymphatic Drainage', schedule: 'Tue / Sat', spots: 'Small group' },
  { name: "Women's Vitality Flow", schedule: 'Sun', spots: 'Small group' },
];

export function AboutClassesList() {
  return (
    <section className="section aboutClassesSection">
      <div className="header">
        <div className="titleContainer">
          <h2 className="subtitle">
            We also <span className="subtitleItalic">move.</span>
          </h2>
        </div>
        <div className="descriptionContainer">
          <p className="description">
            Classes are kept small. The teaching is serious.
            Book any class with a session credit or as a standalone.
          </p>
        </div>
      </div>

      <div className="positions">
        <ul className="positionsList" role="list">
          {CLASSES.map((cls) => (
            <li key={cls.name} className="positionsItem">
              <Link className="positionsLink" href="/sessions#classes">
                <div className="glass positionRow">
                  <span className="positionTitle">{cls.name}</span>
                  <span className="positionHours">{cls.schedule}</span>
                  <span className="positionLocation">{cls.spots}</span>
                  <span className="positionArrowWrapper" aria-hidden="true">
                    <div className="glass positionArrow">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
