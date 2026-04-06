import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CareersSection1 } from '@/components/careers/CareersSection1';
import { CareersSection2 } from '@/components/careers/CareersSection2';
import { CareersSection3 } from '@/components/careers/CareersSection3';
import { CareersSection4 } from '@/components/careers/CareersSection4';
import { CareersSection5 } from '@/components/careers/CareersSection5';
import { CareersAnimations } from '@/components/careers/CareersAnimations';

export const metadata: Metadata = {
  title: 'Careers',
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersAnimations />
      <main id="main-content">
        <div id="scrollSpacer">
          <CareersSection1 />
          <div
            id="section2Video"
            className="w-full h-full section2Video"
            dangerouslySetInnerHTML={{
              __html: `<mux-video playback-id="iBl1nfC51Aarp2LMsLkhKC3vABAgUEpJXnPqSomKYhc" stream-type="on-demand" metadata-video-title="Decorative careers background video" aria-hidden="true" class="w-full h-full" style="--media-object-fit: cover; --media-object-position: center" tabindex="-1" autoplay muted loop min-resolution="720p" max-resolution="2160p" disableremoteplayback preload="auto" playsinline></mux-video>`,
            }}
          />
          <CareersSection2 />
          <CareersSection3 />
          <CareersSection4 />
          <CareersSection5 />
        </div>
      </main>
      <Footer />
    </>
  );
}
