'use client';

import { useEffect, useRef } from 'react';

export function SigmaCard1() {
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
      { threshold: 0.2 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  async function animate(card: HTMLElement) {
    const { default: gsap } = await import('gsap');
    const nodes = card.querySelectorAll(
      '.diagramNodeUser, .diagramNodeAccessGranted, .diagramNodeAdvisor, .diagramNodePortfolio, .diagramNodeDrops, .diagramNodeTax',
    );
    const lines = card.querySelectorAll('.diagramSvgLine');

    gsap.to(nodes, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)',
    });

    gsap.to(lines, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.08,
      delay: 0.3,
      ease: 'power2.out',
    });
  }

  return (
    <div ref={cardRef} className="sigmaCard sigmaCard1">
      <div className="accessDiagram">
        {/* User node */}
        <div className="diagramNode diagramNodeUser">
          <div className="diagramAvatarRing">
            <img
              className="diagramAvatarImg"
              src="/images/sigma-card-1/athlete.png"
              alt="User"
              loading="lazy"
            />
          </div>
        </div>

        {/* Line: User → Access */}
        <div className="diagramLineUserToAccess">
          <svg className="diagramSvgLine" width="25" height="2" viewBox="0 0 25 2">
            <line x1="0" y1="1" x2="25" y2="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Access Granted node */}
        <div className="diagramNode diagramNodeAccessGranted">
          <div className="diagramPill diagramPillGreen">
            <span>ACCESS GRANTED</span>
          </div>
        </div>

        {/* Line: Access → Advisor */}
        <div className="diagramLineAccessToAdvisor">
          <svg className="diagramSvgLine" width="25" height="2" viewBox="0 0 25 2">
            <line x1="0" y1="1" x2="25" y2="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Advisor node */}
        <div className="diagramNode diagramNodeAdvisor">
          <div className="diagramAvatarRing">
            <img
              className="diagramAvatarImg"
              src="/images/sigma-card-1/advisor.png"
              alt="Advisor"
              loading="lazy"
            />
          </div>
        </div>

        {/* Line: Advisor → Portfolio (vertical up) */}
        <div className="diagramLineToPortfolio">
          <svg className="diagramSvgLine" width="2" height="30" viewBox="0 0 2 30">
            <line x1="1" y1="0" x2="1" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Portfolio node */}
        <div className="diagramNode diagramNodePortfolio">
          <div className="diagramPill">
            <span>PORTFOLIO</span>
          </div>
        </div>

        {/* Line: Advisor → Drops (vertical down) */}
        <div className="diagramLineToDrops">
          <svg className="diagramSvgLine" width="2" height="30" viewBox="0 0 2 30">
            <line x1="1" y1="0" x2="1" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Drops node */}
        <div className="diagramNode diagramNodeDrops">
          <div className="diagramPill">
            <span>DROPS</span>
          </div>
        </div>

        {/* Line: Advisor → Tax (horizontal right) */}
        <div className="diagramLineToTax">
          <svg className="diagramSvgLine" width="25" height="2" viewBox="0 0 25 2">
            <line x1="0" y1="1" x2="25" y2="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="1 2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Tax node */}
        <div className="diagramNode diagramNodeTax">
          <div className="diagramPill">
            <span>TAX</span>
          </div>
        </div>
      </div>

      <div className="sigmaCardContent">
        <h3 className="sigmaCardTitle">
          Administration, <span className="sigmaCardTitleItalic">simplified</span>
        </h3>
        <p className="sigmaCardDescription">
          Let your advisors deal with completing forms and accessing your tax information.
        </p>
      </div>
    </div>
  );
}
