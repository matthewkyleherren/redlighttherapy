import type { Metadata } from 'next';
import { visueltPro, bradford, bradfordMono } from '@/lib/fonts';
import { MuxVideoLoader } from '@/components/MuxVideoLoader';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'red. | enter the red',
    template: '%s | red.',
  },
  description:
    "Zurich's first red light therapy studio. Cellular recovery, collagen, clarity — in eleven minutes.",
  metadataBase: new URL('https://www.betteratred.com'),
  openGraph: {
    type: 'website',
    siteName: 'red.',
    locale: 'en_CH',
    images: [{ url: '/meta-logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta-logo.png'],
  },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'CH-ZH',
    'geo.placename': 'Zurich',
    classification: 'Wellness Studio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${visueltPro.variable} ${bradford.variable} ${bradfordMono.variable}`}
    >
      <body>
          <MuxVideoLoader />
          {children}
        </body>
    </html>
  );
}
