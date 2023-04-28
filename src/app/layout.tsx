import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';
import { SectionContextProvider } from './context/section';
import { ThemeContextProvider } from './context/theme';
import './globals.css';

export const metadata = {
  title: 'Onspring API Docs',
  description: 'Documentation for the Onspring API',
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <SectionContextProvider>
            {children}
          </SectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
