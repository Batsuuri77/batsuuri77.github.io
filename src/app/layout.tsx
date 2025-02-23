import type { Metadata } from 'next';
import * as React from 'react';
import { Inter, Manrope, Space_Mono } from 'next/font/google';

import '@/styles/globals.css';
import { cx } from '@/app/utils';
import ClientLayout from './components/ClientLayout'; // import ClientLayout

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-in-sans',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-mr',
  display: 'swap',
});

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Batsuuri Blog',
  description: 'Generated by Batsuuri',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          space_mono.variable,
          'font-sm bg-light dark:bg-dark',
        )}
      >
        <ClientLayout>{children}</ClientLayout> {/* Use ClientLayout here */}
      </body>
    </html>
  );
}
