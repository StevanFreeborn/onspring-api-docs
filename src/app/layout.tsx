import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';
import './globals.css';
import { ThemeContextProvider } from './theme';

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
          {children}
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
