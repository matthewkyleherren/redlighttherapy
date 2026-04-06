import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutSection1 } from '@/components/about/AboutSection1';
import { AboutOriginSection } from '@/components/about/AboutOriginSection';
import { AboutSpaceCarousel } from '@/components/about/AboutSpaceCarousel';
import { AboutPhilosophyCards } from '@/components/about/AboutPhilosophyCards';
import { AboutClassesList } from '@/components/about/AboutClassesList';
import { AboutInstagram } from '@/components/about/AboutInstagram';
import { AboutAnimations } from '@/components/about/AboutAnimations';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutAnimations />
      <main id="main-content">
        <div id="scrollSpacer">
          <AboutSection1 />
          <AboutOriginSection />
          <AboutSpaceCarousel />
          <AboutPhilosophyCards />
          <AboutClassesList />
          <AboutInstagram />
        </div>
      </main>
      <Footer />
    </>
  );
}
