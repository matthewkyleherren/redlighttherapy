import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ManifestoAnimations } from '@/components/manifesto/ManifestoAnimations';

export const metadata: Metadata = {
  title: 'Your legacy, made.',
};

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <ManifestoAnimations />
      <main>
        <section className="manifestoHero">
          <div className="glass badge">
            <span className="badgeText">Our Manifesto</span>
          </div>
          <h1 id="manifestoHeroTitle" className="manifestoHeroTitle">
            We are here to <span className="manifestoHeroTitleItalic">build</span> what endures.
          </h1>
        </section>

        <section className="manifestoSection">
          <p className="manifestoSectionTitle">Success is finite. Legacy is not.</p>
          <div className="manifestoSectionBody">
            <p>Greatness changes you.</p>
            <p>But what you do with greatness changes the world.</p>
            <p>We exist for those who have already built culture and now want to bend the future.</p>
            <p>We are a digital family office for exceptional athletes, artists and entrepreneurs who understand that influence is a responsibility, not a reward.</p>
            <p>Success is finite.</p>
            <p>Legacy is not.</p>
          </div>
        </section>

        <section className="manifestoSection">
          <p className="manifestoSectionTitle">Capital with conviction.</p>
          <div className="manifestoSectionBody">
            <p>Capital should compound more than wealth.</p>
            <p>It should compound reputation.</p>
            <p>Access.</p>
            <p>Trust.</p>
            <p>Possibility.</p>
            <p>We partner with founders building the infrastructure of the next century, those doing things not because they are easy, but because they are hard. Those who see impossible as an opinion.</p>
            <p>We back long-term builders over short-term noise.</p>
            <p>Institutions over moments.</p>
            <p>Equity over applause.</p>
          </div>
        </section>

        <section className="manifestoSection">
          <p className="manifestoSectionTitle">Stories move the world forward.</p>
          <div className="manifestoSectionBody">
            <p>Capital alone does not move the world.</p>
            <p>Stories do.</p>
            <p>Stories are how movements begin.</p>
            <p>How markets shift.</p>
            <p>How belief spreads.</p>
            <p>Storytelling is not decoration.</p>
            <p>It is strategy.</p>
            <p>We help our portfolio companies articulate not just what they build, but why it matters.</p>
            <p>Because the right story, told well, can accelerate adoption, attract talent, unlock capital and shape culture.</p>
          </div>
        </section>

        <section className="manifestoSection">
          <p className="manifestoSectionTitle">Built to last 100 years.</p>
          <div className="manifestoSectionBody">
            <p>We align cultural power with technological progress.</p>
            <p>We convert influence into infrastructure.</p>
            <p>We design legacies meant to last 100 years, with the urgency to act now.</p>
            <p>We are not chasing hype.</p>
            <p>We are building what endures.</p>
            <p>This is patient capital with conviction.</p>
            <p>Creative intelligence with discipline.</p>
            <p>Influence deployed with intent.</p>
            <p>We invest in the future of humanity, and in those bold enough to shape it.</p>
          </div>
        </section>

        <section className="manifestoCta">
          <h2 className="manifestoCtaTitle">
            Build what endures, with <span className="manifestoCtaItalic">long-term</span> partners
          </h2>
          <p className="manifestoCtaDescription">
            We partner and stay silent, supporting founders along long journeys with capital, storytelling, and hands-on support that day, day out.
          </p>
          <a href="/founders" className="btn-component btn-default button-md">
            <span className="btn-title">Learn more</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
