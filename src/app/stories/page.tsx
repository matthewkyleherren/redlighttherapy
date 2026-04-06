import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StoriesSection } from '@/components/stories/StoriesSection';
import { StoriesAnimations } from '@/components/stories/StoriesAnimations';
import { VideoPlayerOverlay } from '@/components/founders/VideoPlayerOverlay';
import { StoriesVideoPlayerOverlay } from '@/components/stories/VideoPlayerOverlay';

export default function StoriesPage() {
  return (
    <>
      <Header />
      <StoriesAnimations />
      <StoriesVideoPlayerOverlay />
      <main id="main-content">
        <StoriesSection />
      </main>
      <VideoPlayerOverlay />
      <Footer />
    </>
  );
}
