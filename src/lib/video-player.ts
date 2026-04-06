export type VideoElementLike = HTMLVideoElement | any;

export type VideoPlayer = {
  video: VideoElementLike;
  isPlaying: boolean;
  isMuted: boolean;
  play: () => void;
  pause: () => void;
  restart: () => void;
  unmute: () => void;
  mute: () => void;
  toggleMute: () => void;
  togglePlayPause: () => void;
  setLoop: (loop: boolean) => void;
  dispose: () => void;
  getCurrentFrame: () => ImageData | null;
};

function getNativeVideoForCanvas(video: VideoElementLike): HTMLVideoElement | null {
  if (video instanceof HTMLVideoElement) return video as HTMLVideoElement;
  return (video as unknown as { nativeEl?: HTMLVideoElement | null }).nativeEl ?? null;
}

export function createVideoPlayer(video: VideoElementLike, onLoad?: (video: VideoElementLike) => void) {
  video.crossOrigin = 'anonymous';
  video.addEventListener('loadedmetadata', () => onLoad?.(video), { once: true });
  return {
    video,
    get isPlaying() {
      return !video.paused;
    },
    get isMuted() {
      return video.muted;
    },
    play() {
      video.play();
    },
    pause() {
      video.pause();
    },
    restart() {
      video.currentTime = 0;
      video.play();
    },
    unmute() {
      video.muted = false;
    },
    mute() {
      video.muted = true;
    },
    toggleMute() {
      video.muted = !video.muted;
    },
    togglePlayPause() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },
    setLoop(loop: boolean) {
      video.loop = loop;
    },
    dispose() {
      video.pause();
      if (video instanceof HTMLVideoElement) {
        video.src = '';
        video.load();
      } else {
        (video as unknown as HTMLElement).removeAttribute('playback-id');
      }
      if (video.parentElement) video.parentElement.removeChild(video);
    },
    getCurrentFrame() {
      const nativeVideo = getNativeVideoForCanvas(video);
      if (!nativeVideo || nativeVideo.readyState < 2) return null;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;
      const containerWidth = video.offsetWidth;
      const containerHeight = video.offsetHeight;
      canvas.width = containerWidth;
      canvas.height = containerHeight;
      const { videoWidth, videoHeight } = nativeVideo;
      if (videoWidth === 0 || videoHeight === 0) return null;
      const containerRatio = containerWidth / containerHeight;
      const videoRatio = videoWidth / videoHeight;
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = videoWidth;
      let sourceHeight = videoHeight;
      if (videoRatio > containerRatio) {
        sourceWidth = videoHeight * containerRatio;
        sourceX = (videoWidth - sourceWidth) / 2;
      } else {
        sourceHeight = videoWidth / containerRatio;
        sourceY = (videoHeight - sourceHeight) / 2;
      }
      try {
        ctx.drawImage(nativeVideo, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, containerWidth, containerHeight);
        const imageData = ctx.getImageData(0, 0, containerWidth, containerHeight);
        if (imageData?.data?.length && imageData.data.length > 0) return imageData;
        return null;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
  };
}
