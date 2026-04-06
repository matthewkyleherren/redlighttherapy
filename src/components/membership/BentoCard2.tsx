'use client';

import { useEffect, useRef } from 'react';

const MESSAGES = [
  {
    avatar: '/images/bento-card-2/matthew.jpg',
    name: 'MATTHEW',
    question: 'How do you assess startups?',
  },
  {
    avatar: '/images/bento-card-2/jess.jpg',
    name: 'JESS',
    question: 'How many startups should I invest in per year?',
  },
];

export function BentoCard2() {
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
    const title = card.querySelector('.bentoCard2Title');
    const subtitle = card.querySelector('.bentoCard2Subtitle');
    const messages = card.querySelectorAll('.messageCard');

    if (title) gsap.to(title, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    if (subtitle) gsap.to(subtitle, { opacity: 1, duration: 0.5, delay: 0.15, ease: 'power2.out' });
    gsap.to(messages, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.3,
      ease: 'power2.out',
    });
  }

  return (
    <div className="bentoCard2Container">
      <div ref={cardRef} className="bentoCard2">
        <div className="bentoCard2Header">
          <p className="bentoCard2Title">24/7</p>
          <p className="bentoCard2Subtitle">
            Investment <span className="bentoCard2SubtitleItalic">concierge</span>
          </p>
        </div>
        <div className="bentoCard2Messages">
          <div className="bentoCard2MessagesInner">
            {MESSAGES.map((msg) => (
              <div key={msg.name} className="messageCard" style={{ transform: 'translateY(20px)' }}>
                <div className="messageAvatar">
                  <div className="messageAvatarRing">
                    <img
                      className="messageAvatarImg"
                      src={msg.avatar}
                      alt={msg.name}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="messageContent">
                  <p className="messageName">{msg.name}</p>
                  <p className="messageQuestion">{msg.question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
