import { versionOne } from '@/docs/version_001/docsStructure';
import { versionTwo } from '@/docs/version_002/docsStructure';
import { ReactNode } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import './globals.css';

export const metadata = {
  title: 'Onspring API Docs',
  description: 'Documentation for the Onspring API',
  icons: {
    icon: [
      {
        url: 'images/favicon.ico',
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
      <body>
        <SideBar
          versionOne={versionOne}
          versionTwo={versionTwo}
        />
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
