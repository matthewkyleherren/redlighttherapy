export function CareersSection5() {
  return (
    <section id="section5" className="section section5" aria-labelledby="section5Subtitle">
      <div className="titleContainer section4SubtitleContainer">
        <h2 id="section5Subtitle" className="subtitle section5Subtitle">
          Open <span className="subtitleItalic section3SubtitleItalic">positions.</span>
        </h2>
      </div>

      <div className="positions">
        <section className="positionsDepartment" aria-label="Content">
          <h3 className="positionsDepartmentTitle">Content</h3>
          <ul className="positionsList" role="list">
            <li className="positionsItem">
              <a
                className="positionsLink"
                href="https://sequel-tech.workable.com/jobs/5262642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="glass positionRow">
                  <span className="positionTitle">Social Media Manager - London</span>
                  <span className="positionHours">Full time</span>
                  <span className="positionLocation">London</span>
                  <span className="positionArrowWrapper" aria-hidden="true">
                    <div className="glass positionArrow">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 6L19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div id="section5Footer" className="header section5Footer">
        <div className="titleContainer">
          <h3 id="section5FooterTitle" className="subtitle section5FooterTitle">
            <span className="titleItalic section5FooterTitleItalic">Passionate</span> but don&apos;t
            see any open roles?
          </h3>
        </div>
        <div className="descriptionContainer">
          <p id="section5FooterDescription" className="description section5FooterDescription">
            We&apos;re always searching for the best candidates. Feel free to send us your resume at{' '}
            <a href="mailto:careers@joinsequel.co" className="section5FooterLink">
              careers@joinsequel.co
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
