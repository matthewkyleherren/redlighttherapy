'use client';

import { useEffect } from 'react';

export function VideoPlayerOverlay() {
  useEffect(() => {
    const overlay = document.getElementById('videosOverlay');
    const videoEl = document.getElementById('videosOverlayVideo') as HTMLMediaElement | null;

    function openVideo(e: Event) {
      const { playbackId } = (e as CustomEvent).detail;
      if (!overlay || !videoEl) return;
      videoEl.setAttribute('playback-id', playbackId);
      overlay.classList.add('videoOverlayOpen');
      overlay.setAttribute('aria-hidden', 'false');

      const onLoaded = () => {
        overlay.classList.add('videoOverlayReady');
        videoEl.removeEventListener('loadeddata', onLoaded);
      };
      videoEl.addEventListener('loadeddata', onLoaded);
      videoEl.play?.();
    }

    function closeVideo() {
      if (!overlay || !videoEl) return;
      videoEl.pause?.();
      videoEl.removeAttribute('playback-id');
      overlay.classList.remove('videoOverlayOpen', 'videoOverlayReady');
      overlay.setAttribute('aria-hidden', 'true');
    }

    window.addEventListener('video-player:open', openVideo);

    const closeBtn = document.getElementById('videosOverlayClose');
    const playPauseBtn = document.getElementById('videosOverlayPlayPause');
    const restartBtn = document.getElementById('videosOverlayRestart');
    const muteBtn = document.getElementById('videosOverlayMute');
    const timeDisplay = document.getElementById('videosOverlayTime');

    closeBtn?.addEventListener('click', closeVideo);

    playPauseBtn?.addEventListener('click', () => {
      if (!videoEl) return;
      if (videoEl.paused) {
        videoEl.play?.();
      } else {
        videoEl.pause?.();
      }
    });

    restartBtn?.addEventListener('click', () => {
      if (!videoEl) return;
      videoEl.currentTime = 0;
      videoEl.play?.();
    });

    muteBtn?.addEventListener('click', () => {
      if (!videoEl) return;
      videoEl.muted = !videoEl.muted;
    });

    function updateTime() {
      if (!videoEl || !timeDisplay) return;
      const t = videoEl.currentTime || 0;
      const m = Math.floor(t / 60).toString().padStart(2, '0');
      const s = Math.floor(t % 60).toString().padStart(2, '0');
      timeDisplay.textContent = `${m}:${s}`;
    }

    videoEl?.addEventListener('timeupdate', updateTime);

    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeVideo();
    });

    function onKeydown(e: KeyboardEvent) {
      if (!overlay?.classList.contains('videoOverlayOpen')) return;
      switch (e.key) {
        case 'Escape':
          closeVideo();
          break;
        case ' ':
          e.preventDefault();
          if (videoEl?.paused) videoEl.play?.();
          else videoEl?.pause?.();
          break;
        case 'r':
        case 'R':
          if (videoEl) {
            videoEl.currentTime = 0;
            videoEl.play?.();
          }
          break;
        case 'ArrowLeft':
          if (videoEl) videoEl.currentTime = Math.max(0, videoEl.currentTime - 5);
          break;
        case 'ArrowRight':
          if (videoEl) videoEl.currentTime = Math.min(videoEl.duration || 0, videoEl.currentTime + 5);
          break;
        case 'm':
        case 'M':
          if (videoEl) videoEl.muted = !videoEl.muted;
          break;
      }
    }

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('video-player:open', openVideo);
      window.removeEventListener('keydown', onKeydown);
      closeBtn?.removeEventListener('click', closeVideo);
      videoEl?.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  return (
    <div
      id="videosOverlay"
      className="videoOverlay"
      aria-hidden="true"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `<mux-video
            id="videosOverlayVideo"
            class="videoOverlayVideo"
            stream-type="on-demand"
            metadata-video-title="Video player"
            style="--media-object-fit: contain; --media-object-position: center"
            preload="none"
            playsinline="true"
          ></mux-video>`,
        }}
      />
      <div className="videoOverlayControlsContainer">
        <div className="videoOverlayControls glass">
          <button
            id="videosOverlayRestart"
            className="videoOverlayControlButton"
            type="button"
            aria-label="Restart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
          <button
            id="videosOverlayPlayPause"
            className="videoOverlayControlButton"
            type="button"
            aria-label="Play/Pause"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </button>
          <span id="videosOverlayTime" className="videoOverlayControlTime">00:00</span>
          <button
            id="videosOverlayMute"
            className="videoOverlayControlButton"
            type="button"
            aria-label="Mute/Unmute"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
              <path d="M16 9a5 5 0 0 1 0 6" />
              <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
            </svg>
          </button>
          <button
            id="videosOverlayClose"
            className="videoOverlayControlButton"
            type="button"
            aria-label="Close video player"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
