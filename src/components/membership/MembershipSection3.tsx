import { BentoCard1 } from './BentoCard1';
import { BentoCard2 } from './BentoCard2';
import { BentoCard4 } from './BentoCard4';

export function MembershipSection3() {
  return (
    <div id="membershipSection3" className="section appFeaturesSection">
      <div className="appFeaturesHeader">
        <h2 id="membershipSection3Title" className="title appFeaturesTitle">
          Your{' '}
          <span className="titleItalic">digital</span>{' '}
          family office
        </h2>
      </div>

      <div className="bentoGrid">
        {/* Card 1 - spans 2 columns */}
        <div className="bentoCard bentoCardLarge">
          <BentoCard1 />
        </div>

        {/* Card 2 */}
        <div className="bentoCard">
          <BentoCard2 />
        </div>

        {/* Card 3 - Deal reviews */}
        <div className="bentoCard bentoCard3">
          <div className="bentoCard3BgWrapper">
            <img
              className="bentoCard3BgImg"
              src="/images/bento-card-3/deal-review.jpg"
              alt="Deal review"
              loading="lazy"
            />
            <div className="bentoCard3BgOverlay" />
          </div>
          <div className="bentoCard3Content">
            <p id="bentoCard3Title" className="bentoCard3Title">
              <span className="bentoCard3TitleItalic">Complimentary</span>{' '}
              <span className="bentoCard3TitleItalic">deal</span> reviews
              and due diligence
            </p>
          </div>
        </div>

        {/* Card 4 - Portfolio management */}
        <div className="bentoCard">
          <BentoCard4 />
        </div>

        {/* Card 5 - Masterclass */}
        <div className="bentoCard bentoCard5">
          <div className="bentoCard5Bg" />
          <p id="bentoCard5Title" className="bentoCard5Title">
            The{' '}
            <span className="bentoCard5TitleItalic">masterclass</span>
            {' '}of startup investing
          </p>
          <div className="bentoCard5PhoneContainer">
            <img
              className="bentoCard5Phone"
              src="/images/bento-card-5/phone.png"
              alt="Sequel app"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
