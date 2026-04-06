'use client';

import { InstagramCollage } from '@/components/stories/InstagramCollage';

export function AboutInstagram() {
  return (
    <section className="section aboutInstagramSection">
      <div className="header">
        <p className="label">@rbetter.at.red</p>
        <div className="titleContainer">
          <h2 className="subtitle">
            Follow the <span className="subtitleItalic">glow.</span>
          </h2>
        </div>
      </div>
      <InstagramCollage />
    </section>
  );
}
