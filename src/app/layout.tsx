import type { Metadata } from 'next';
import { visueltPro, bradford, bradfordMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your legacy, made.',
  description:
    'A digital family office for athletes, artists, and entrepreneurs backing companies that advance humanity.',
  metadataBase: new URL('https://www.sequel.co'),
  icons: { icon: '/favicon.ico' },
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
      <body>{children}</body>
    </html>
  );
}
