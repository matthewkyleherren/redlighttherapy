import localFont from 'next/font/local';

export const visueltPro = localFont({
  src: [
    { path: '../../public/fonts/VisueltPro-Light.woff', weight: '200', style: 'normal' },
    { path: '../../public/fonts/VisueltPro-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/VisueltPro-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-visuelt',
  display: 'swap',
});

export const bradford = localFont({
  src: [
    { path: '../../public/fonts/BradfordLL-Regular.woff2.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/BradfordLL-Bold.woff2.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/BradfordLL-Italic.woff2.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-bradford',
  display: 'swap',
});

export const bradfordMono = localFont({
  src: [
    { path: '../../public/fonts/BradfordMonoLLWeb-Regular.woff.woff', weight: '400', style: 'normal' },
  ],
  variable: '--font-bradford-mono',
  display: 'swap',
});
