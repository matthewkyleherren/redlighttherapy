'use client';

import { useEffect } from 'react';

export function StoriesVideoPlayerOverlay() {
  useEffect(() => {
    const overlay = document.getElementById('videoPlayerOverlay');
    const videoEl = document.getElementById('overlayVideo') as HTMLMediaElement | null;

    function openVideo(e: Event) {
      const { playbackId } = (e as CustomEvent).detail;
      if (!overlay || !videoEl) return;
      videoEl.setAttribute('playback-id', playbackId);
      overlay.classList.add('is-active');
      overlay.setAttribute('aria-hidden', 'false');
      videoEl.play?.();
    }

    function closeVideo() {
      if (!overlay || !videoEl) return;
      videoEl.pause?.();
      videoEl.removeAttribute('playback-id');
      overlay.classList.remove('is-active');
      overlay.setAttribute('aria-hidden', 'true');
    }

    window.addEventListener('video-player:open', openVideo);

    // Wire up overlay controls
    const closeBtn = document.getElementById('overlayClose');
    const playPauseBtn = document.getElementById('overlayPlayPause');
    const restartBtn = document.getElementById('overlayRestart');
    const muteBtn = document.getElementById('overlayMute');
    const timeDisplay = document.getElementById('overlayTime');

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

    // Close on overlay background click
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeVideo();
    });

    // Close on escape
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeVideo();
    }
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('video-player:open', openVideo);
      window.removeEventListener('keydown', onKeydown);
      closeBtn?.removeEventListener('click', closeVideo);
      videoEl?.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  return null;
}
