import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Section1 } from '@/components/home/Section1';
import { Section2 } from '@/components/home/Section2';
import { Section3 } from '@/components/home/Section3';
import { Section4 } from '@/components/home/Section4';
import { Section5 } from '@/components/home/Section5';
import { Section6 } from '@/components/home/Section6';
import { HomeAnimations } from '@/components/home/HomeAnimations';

export const metadata: Metadata = {
  title: 'Your legacy, made.',
  description:
    'A digital family office for athletes, artists, and entrepreneurs backing companies that advance humanity.',
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeAnimations />
      <main>
        <div id="scrollSpacer">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </main>
      <Footer />
    </>
  );
}
