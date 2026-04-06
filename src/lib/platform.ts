export function checkIsMobile() {
  if ((navigator as any).userAgentData) return (navigator as any).userAgentData.mobile;
  return /Mobi|Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function checkIsSafari() {
  const ua = navigator.userAgent;
  return /Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg/i.test(ua);
}
