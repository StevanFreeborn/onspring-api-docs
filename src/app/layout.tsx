import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Onspring API Docs',
  description: 'Documentation for the Onspring API',
  icons: {
    icon: [
      {
        url: 'docs/images/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
