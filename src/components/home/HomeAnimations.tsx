'use client';

import { useEffect, useRef } from 'react';
import { initAnimationLibs, type AnimationLibs } from '@/lib/animations/animation-libs';
import { createTimeline, type Timeline } from '@/lib/animations/section-timeline';
import { createVideoPlayer, type VideoPlayer } from '@/lib/video-player';
import { createSection1, fadeInSection1, fadeOutSection1Headers, fadeInSection1Headers } from '@/lib/animations/sections/section-1';
import { createSection2 } from '@/lib/animations/sections/section-2';
import { createSection3 } from '@/lib/animations/sections/section-3';
import { createSection4 } from '@/lib/animations/sections/section-4';
import { createSection5 } from '@/lib/animations/sections/section-5';
import { createSection6 } from '@/lib/animations/sections/section-6';

const SECTION_1_VIDEO_PLAYBACK_ID = '02LqrLkxx00pWycsdZ02N02Vn00bibSl2G4IW2HTS028EvoCA';
const SECTION_1_VIDEO_PLAYBACK_ID_MOBILE = 'BLC6VVUBEBHvYTC7x02S5iULppqcdMmsUmGHVXq02y8W8';
const SECTION_3_VIDEO_PLAYBACK_ID = 'hy3IUy2Ew8G37L3zxEt01b4G50047KEeBhCxFyki7VUmU';
const SECTION_3_VIDEO_PLAYBACK_ID_MOBILE = 'a5oJ01WVhZiO89LFMZl1KfMLSNBBTaMADuTI6QxWhRcI';

function getSessionFlag(key: string) {
  return {
    get: () => { try { return sessionStorage.getItem(key) === '1'; } catch { return false; } },
    set: (v: boolean) => { try { sessionStorage.setItem(key, v ? '1' : '0'); } catch { /* noop */ } },
  };
}

const videoControlsHasSeen = getSessionFlag('home:videoControlsHasSeen:v1');

// SVG icon helpers for video controls
function pauseIcon(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/></svg>`;
}
function playIcon(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
}
function volumeOnIcon(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>`;
}
function volumeOffIcon(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>`;
}

function setupVideoControls(
  libs: AnimationLibs,
  player: VideoPlayer,
  opts: { onShow?: (firstTime: boolean) => void; onHide?: () => void },
) {
  const controls = document.getElementById('homeVideoControls');
  const restartBtn = document.getElementById('homeVideoRestart');
  const playPauseBtn = document.getElementById('homeVideoPlayPause');
  const muteBtn = document.getElementById('homeVideoMuteToggle');
  const timeDisplay = document.getElementById('homeVideoTime');
  const closeBtn = document.getElementById('homeVideoClose');
  if (!controls || !restartBtn || !playPauseBtn || !muteBtn || !timeDisplay || !closeBtn) return null;

  let isVisible = false;
  let animFrameId: number | null = null;
  let scrollPaused = false;

  const updatePlayPause = () => {
    playPauseBtn.innerHTML = player.isPlaying ? pauseIcon() : playIcon();
  };
  const updateMute = () => {
    muteBtn.innerHTML = player.isMuted ? volumeOffIcon() : volumeOnIcon();
  };
  const updateTime = () => {
    if (!isVisible) return;
    const t = player.video.currentTime || 0;
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    timeDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    animFrameId = requestAnimationFrame(updateTime);
  };

  const show = () => {
    if (isVisible) return;
    isVisible = true;
    const vh = window.innerHeight;
    libs.gsap.fromTo(controls, { opacity: 0, y: vh * 0.1 }, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.3, ease: 'power2.inOut' });
    const firstTime = !videoControlsHasSeen.get();
    opts.onShow?.(firstTime);
    videoControlsHasSeen.set(true);
    animFrameId = requestAnimationFrame(updateTime);
    document.addEventListener('keydown', onKeydown);
  };

  const hide = () => {
    if (!isVisible) return;
    isVisible = false;
    const vh = window.innerHeight;
    libs.gsap.to(controls, { opacity: 0, y: vh * 0.1, pointerEvents: 'none', duration: 0.3, ease: 'power2.inOut' });
    opts.onHide?.();
    if (animFrameId !== null) { cancelAnimationFrame(animFrameId); animFrameId = null; }
    document.removeEventListener('keydown', onKeydown);
  };

  const onRestart = () => { scrollPaused = false; player.restart(); updatePlayPause(); };
  const onTogglePlay = () => { scrollPaused = false; player.togglePlayPause(); updatePlayPause(); };
  const onToggleMute = () => { player.toggleMute(); updateMute(); };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const keys = new Set(['Space', 'Escape', 'KeyR', 'ArrowLeft', 'ArrowRight', 'KeyM']);
    if (!keys.has(e.code)) return;
    e.preventDefault();
    switch (e.code) {
      case 'Space': return onTogglePlay();
      case 'Escape': return hide();
      case 'KeyR': return onRestart();
      case 'ArrowLeft': { const t = Math.max(0, player.video.currentTime - 10); player.video.currentTime = t; return; }
      case 'ArrowRight': { const dur = player.video.duration || 0; player.video.currentTime = Math.min(dur, player.video.currentTime + 10); return; }
      case 'KeyM': return onToggleMute();
    }
  };

  const onScroll = () => {
    const rect = player.video.getBoundingClientRect();
    const threshold = window.innerHeight * 0.8;
    if (rect.bottom < threshold) {
      hide();
      if (player.isPlaying) { scrollPaused = true; player.pause(); }
    } else if (scrollPaused && !player.isPlaying) {
      player.play();
      scrollPaused = false;
    }
  };

  updateMute();
  updatePlayPause();
  restartBtn.addEventListener('click', onRestart);
  playPauseBtn.addEventListener('click', onTogglePlay);
  muteBtn.addEventListener('click', onToggleMute);
  closeBtn.addEventListener('click', hide);
  player.video.addEventListener('play', updatePlayPause);
  player.video.addEventListener('pause', updatePlayPause);
  player.video.addEventListener('volumechange', updateMute);
  window.addEventListener('scroll', onScroll, { passive: true });

  return {
    get isVisible() { return isVisible; },
    show,
    hide,
    dispose: () => {
      if (animFrameId !== null) cancelAnimationFrame(animFrameId);
      document.removeEventListener('keydown', onKeydown);
      window.removeEventListener('scroll', onScroll);
      restartBtn.removeEventListener('click', onRestart);
      playPauseBtn.removeEventListener('click', onTogglePlay);
      muteBtn.removeEventListener('click', onToggleMute);
      closeBtn.removeEventListener('click', hide);
      player.video.removeEventListener('play', updatePlayPause);
      player.video.removeEventListener('pause', updatePlayPause);
      player.video.removeEventListener('volumechange', updateMute);
    },
  };
}

function setupSection1Video(libs: AnimationLibs) {
  const videoWrapper = document.getElementById('section1Video');
  const muxVideo = videoWrapper?.querySelector('mux-video') as HTMLElement & { play: () => void; pause: () => void; currentTime: number; muted: boolean; paused: boolean; loop: boolean; duration: number; } | null;
  const watchBtn = document.getElementById('section1HeaderRightButton');
  const section = document.getElementById('section1');
  if (!muxVideo || !watchBtn || !section) return null;

  let fadeInDone = false;

  const player = createVideoPlayer(muxVideo, (v) => {
    v.play();
    section.classList.add('section1PosterHidden');
    fadeInSection1(libs, () => { fadeInDone = true; });
  });

  const controls = setupVideoControls(libs, player, {
    onShow: (firstTime) => {
      if (firstTime) player.restart();
      player.play();
      player.unmute();
      fadeOutSection1Headers(libs);
    },
    onHide: () => {
      player.play();
      player.mute();
      fadeInSection1Headers(libs);
    },
  });

  // Responsive playback ID
  const updatePlaybackId = () => {
    const id = window.innerWidth < 500 ? SECTION_1_VIDEO_PLAYBACK_ID_MOBILE : SECTION_1_VIDEO_PLAYBACK_ID;
    muxVideo.setAttribute('playback-id', id);
  };
  updatePlaybackId();

  const onClickShowControls = () => {
    if (controls && !controls.isVisible && fadeInDone) controls.show();
  };
  watchBtn.addEventListener('click', onClickShowControls);
  muxVideo.addEventListener('click', onClickShowControls);
  window.addEventListener('resize', updatePlaybackId);

  return { player, controls };
}

function setupSection3Video() {
  const videoWrapper = document.getElementById('section3Video');
  const muxVideo = videoWrapper?.querySelector('mux-video') as HTMLElement | null;
  if (!muxVideo) return;

  const updatePlaybackId = () => {
    const id = window.innerWidth < 500 ? SECTION_3_VIDEO_PLAYBACK_ID_MOBILE : SECTION_3_VIDEO_PLAYBACK_ID;
    muxVideo.setAttribute('playback-id', id);
  };
  updatePlaybackId();
  window.addEventListener('resize', updatePlaybackId);
}

function setupTimeline(libs: AnimationLibs): Timeline {
  const timeline = createTimeline(libs);
  timeline.initSection(createSection1(libs, undefined));
  timeline.initSection(createSection2(libs, undefined));
  timeline.initSection(createSection3(libs, undefined));
  timeline.initSection(createSection4(libs, undefined));
  timeline.initSection(createSection5(libs, undefined));
  timeline.initSection(createSection6(libs, undefined));
  timeline.refresh();
  return timeline;
}

export function HomeAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let timeline: Timeline | null = null;
    let section1Video: ReturnType<typeof setupSection1Video> = null;

    async function init() {
      // Wait for fonts
      if ('fonts' in document && document.fonts?.ready) {
        await Promise.race([document.fonts.ready, new Promise<void>((r) => setTimeout(r, 3000))]);
      }

      const libs = await initAnimationLibs();
      section1Video = setupSection1Video(libs);
      timeline = setupTimeline(libs);
      setupSection3Video();
    }

    init();

    return () => {
      timeline?.dispose();
      section1Video?.player.dispose();
      section1Video?.controls?.dispose();
    };
  }, []);

  return null;
}
