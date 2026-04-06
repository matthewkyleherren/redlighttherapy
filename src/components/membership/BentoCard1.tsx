'use client';

import { useEffect, useRef } from 'react';

const FLOATING_AVATARS = [
  { className: 'floatingAvatar1', src: '/images/bento-card-1/avatar-2.jpg', style: { top: '12%', left: '5%' } },
  { className: 'floatingAvatar2', src: '/images/bento-card-1/avatar-3.jpg', style: { top: '55%', left: '2%' } },
  { className: 'floatingAvatar3', src: '/images/bento-card-1/avatar-4.jpg', style: { top: '8%', right: '45%' } },
  { className: 'floatingAvatar4', src: '/images/bento-card-1/avatar-5.jpg', style: { bottom: '15%', right: '25%' } },
  { className: 'floatingAvatar5', src: '/images/bento-card-1/investor-1.jpg', style: { bottom: '8%', left: '35%' } },
];

export function BentoCard1() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(card);
            observer.unobserve(card);
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  async function animate(card: HTMLElement) {
    const { default: gsap } = await import('gsap');
    const avatars = card.querySelectorAll('.floatingAvatar');
    const title = card.querySelector('.bentoCard1Title');
    const dealCard = card.querySelector('.dealCard');
    const investBtn = card.querySelector('.investButton');

    gsap.to(avatars, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });

    if (title) {
      gsap.to(title, { opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' });
    }
    if (dealCard) {
      gsap.to(dealCard, { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power2.out' });
    }
    if (investBtn) {
      gsap.to(investBtn, { opacity: 1, duration: 0.6, delay: 0.6, ease: 'power2.out' });
    }
  }

  return (
    <div className="bentoCard1Container">
      <div ref={cardRef} className="bentoCard1">
        {FLOATING_AVATARS.map((avatar) => (
          <div
            key={avatar.className}
            className={`floatingAvatar ${avatar.className}`}
            style={avatar.style}
          >
            <div className="floatingAvatarBorder">
              <img
                className="floatingAvatarImg"
                src={avatar.src}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        ))}

        <div className="bentoCard1Content">
          <div className="bentoCard1TitleContainer">
            <p className="bentoCard1Title">
              Direct{' '}
              <span className="bentoCard1TitleItalic">investment</span>
              <br />
              opportunities
            </p>
          </div>

          <div className="dealCard">
            <div className="dealCardBg">
              <img
                className="dealCardBgImg"
                src="/images/bento-card-1/rocket-bg.jpg"
                alt=""
                loading="lazy"
              />
              <div className="dealCardBgOverlay" />
            </div>
            <div className="dealCardContent">
              <div className="timerSection">
                <p className="timerValue">7h&nbsp;&nbsp;23m&nbsp;&nbsp;23s</p>
                <p className="timerLabel">time left to invest</p>
              </div>
              <div className="investorsSection">
                <div className="investorAvatars">
                  <div className="investorAvatar">
                    <img
                      className="investorAvatarImg"
                      src="/images/bento-card-1/investor-1.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="investorAvatar" style={{ marginLeft: '-8px' }}>
                    <img
                      className="investorAvatarImg"
                      src="/images/bento-card-1/investor-2.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="investorCount">
                  <span>40+</span>
                </div>
              </div>
            </div>
            <div className="investButton">
              <div className="investButtonGlass" />
              <span className="investButtonText">INVEST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
