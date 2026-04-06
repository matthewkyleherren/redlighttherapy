import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScienceSection1 } from '@/components/science/ScienceSection1';
import { ScienceMechanism } from '@/components/science/ScienceMechanism';
import { WavelengthBento } from '@/components/science/WavelengthBento';
import { ScienceBenefitsMarquee } from '@/components/science/ScienceBenefitsMarquee';
import { ScienceEvidenceCards } from '@/components/science/ScienceEvidenceCards';
import { ScienceDifferently } from '@/components/science/ScienceDifferently';
import { ScienceClosingCTA } from '@/components/science/ScienceClosingCTA';
import { ScienceAnimations } from '@/components/science/ScienceAnimations';

export const metadata: Metadata = {
  title: 'The Science',
};

export default function SciencePage() {
  return (
    <>
      <Header />
      <ScienceAnimations />
      <main id="main-content">
        <div id="scrollSpacer">
          <ScienceSection1 />
          <ScienceMechanism />
          <WavelengthBento />
          <ScienceBenefitsMarquee />
          <ScienceEvidenceCards />
          <ScienceDifferently />
          <ScienceClosingCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
