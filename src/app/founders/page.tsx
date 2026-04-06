import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FoundersSection1 } from '@/components/founders/FoundersSection1';
import { FoundersSection2 } from '@/components/founders/FoundersSection2';
import { FoundersSection3 } from '@/components/founders/FoundersSection3';
import { FoundersSection4 } from '@/components/founders/FoundersSection4';
import { FoundersSection5 } from '@/components/founders/FoundersSection5';
import { FoundersAnimations } from '@/components/founders/FoundersAnimations';
import { VideoPlayerOverlay } from '@/components/founders/VideoPlayerOverlay';

export const metadata: Metadata = {
  title: 'Founders',
};

export default function FoundersPage() {
  return (
    <>
      <Header />
      <FoundersAnimations />
      <VideoPlayerOverlay />
      <main id="main-content">
        <div id="scrollSpacer">
          <FoundersSection1 />
          <FoundersSection2 />
          <FoundersSection3 />
          <FoundersSection4 />
          <FoundersSection5 />
        </div>
      </main>
      <Footer />
    </>
  );
}
