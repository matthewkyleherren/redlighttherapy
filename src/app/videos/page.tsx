import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VideosAnimations } from '@/components/videos/VideosAnimations';
import { VideoPlayerOverlay } from '@/components/videos/VideoPlayerOverlay';

export const metadata: Metadata = {
  title: 'Videos',
};

const VIDEOS = [
  { title: 'FitWise AI Product Launch', date: 'FEBRUARY 18, 2026', playbackId: 'O2gP004tqgHAepDVPdqPfHxja8xnZZjibJNwFYMEOOq8' },
  { title: 'Hollywood is dead', date: 'JULY 11, 2025', playbackId: '8gao51MHgPqme00v4PzxM58XGIcVvAUaFTG6eJJ9Z1MA' },
  { title: 'Scan.com saved my life', date: 'JULY 10, 2025', playbackId: 'IY1oqhpo1L02fePJOAo5qZRGTcfr00v4OdJwpJikgD4y4' },
  { title: 'Changing minds with Slingshot AI', date: 'JUNE 19, 2025', playbackId: 'nwqMMN9JgnFKqrKDO1IxrXsCz4OCqnGkaSQD1doOXh00' },
  { title: 'The social fix - Howbout', date: 'JUNE 19, 2025', playbackId: '01hTg9IOKlDDLH7CQZlJl3lOc6nAdjnLhkZW01eOrN31s' },
  { title: 'The Polymath & The Prodigy', date: 'FEBRUARY 18, 2026', playbackId: 'ignPx5qhHyMZ4X7f00XYSs1zgP3imwAKH01n7R5DWNabI' },
];

export default function VideosPage() {
  return (
    <>
      <Header />
      <VideosAnimations />
      <VideoPlayerOverlay />
      <main>
        <div className="videosScrollSpacer">
          <div id="videosContainer" className="videosContainer">
            <div className="videosSubtitle">Videos</div>
            <div className="videosGrid">
              {VIDEOS.map((v) => (
                <button
                  key={v.playbackId}
                  className="videosItem"
                  data-playback-id={v.playbackId}
                  type="button"
                >
                  <div className="videosItemImageContainer">
                    <img
                      src={`https://image.mux.com/${v.playbackId}/thumbnail.jpg?time=2`}
                      alt={v.title}
                      className="videosItemImage"
                      loading="lazy"
                    />
                    <div className="glass videosItemImagePlay">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="videosItemContent">
                    <h3 className="videosItemTitle">{v.title}</h3>
                    <p className="videosItemDate">{v.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
