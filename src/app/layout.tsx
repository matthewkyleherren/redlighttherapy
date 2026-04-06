import type { Metadata } from 'next';
import { visueltPro, bradford, bradfordMono } from '@/lib/fonts';
import { MuxVideoLoader } from '@/components/MuxVideoLoader';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'sequel | your legacy, made',
    template: '%s | sequel',
  },
  description:
    'A digital family office for athletes, artists, and entrepreneurs backing companies that advance humanity.',
  metadataBase: new URL('https://www.sequel.co'),
  openGraph: {
    type: 'website',
    siteName: 'Sequel',
    locale: 'en_GB',
    images: [{ url: '/meta-logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@joinsequel',
    images: ['/meta-logo.png'],
  },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-ENG',
    'geo.placename': 'London',
    classification: 'Investment Platform',
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
