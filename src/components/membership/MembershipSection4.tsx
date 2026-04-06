import { SigmaCard1 } from './SigmaCard1';

export function MembershipSection4() {
  return (
    <div id="membershipSection4" className="section sigmaSection">
      <div className="sigmaHeader">
        <div className="sigmaLogo">
          <svg
            className="sigmaLogoIcon"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.477 0 0 4.253 0 9.5S4.477 19 10 19s10-4.253 10-9.5S15.523 0 10 0Zm-.28 14.82c-2.48 0-4.38-1.71-4.38-4.56 0-2.58 1.68-4.86 4.74-4.86 1.02 0 1.86.24 2.46.54l-.54 1.62c-.48-.24-1.08-.42-1.86-.42-1.92 0-3.06 1.44-3.06 3.06 0 1.86 1.2 3 2.94 3 .84 0 1.5-.18 2.04-.48l.42 1.56c-.54.3-1.44.54-2.76.54Z"
              fill="white"
            />
          </svg>
          <span id="sigmaLogoText" className="sigmaLogoText">Sigma</span>
        </div>
        <h2 id="membershipSection4Title" className="sigmaTitle">
          Our platform for your{' '}
          <span className="sigmaTitleItalic">advisors</span>
        </h2>
      </div>

      <div className="sigmaGrid">
        <SigmaCard1 />

        {/* Sigma Card 2 */}
        <div className="sigmaCard sigmaCard2">
          <div className="sigmaMessages">
            <div className="sigmaMessage">
              <div className="sigmaMessageAvatar">
                <div className="sigmaMessageAvatarRing">
                  <img
                    className="sigmaMessageAvatarImg"
                    src="/images/sigma-card-1/athlete.png"
                    alt="Matthew"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sigmaMessageContent">
                <p className="sigmaMessageName">MATTHEW</p>
                <p className="sigmaMessageText">
                  What do you think about sequel&apos;s latest drop?
                </p>
              </div>
            </div>

            <div className="sigmaMessageLine" />

            <div className="sigmaMessage">
              <div className="sigmaMessageAvatar">
                <div className="sigmaMessageAvatarRing">
                  <img
                    className="sigmaMessageAvatarImg"
                    src="/images/sigma-card-1/advisor.png"
                    alt="Advisor"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sigmaMessageContent">
                <p className="sigmaMessageName">ADVISOR</p>
                <p className="sigmaMessageText">
                  I&apos;ve looked into it and we should add it to your portfolio.
                </p>
              </div>
            </div>
          </div>

          <div className="sigmaCardContent">
            <h3 className="sigmaCardTitle">
              Move with <span className="sigmaCardTitleItalic">confidence</span>
            </h3>
            <p className="sigmaCardDescription">
              Give them access to support your decisions, enabling you to move faster and
              focus on the important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
