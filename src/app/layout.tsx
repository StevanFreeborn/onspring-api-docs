import { ReactNode } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import './globals.css';

export const metadata = {
  title: 'Onspring API Docs',
  description: 'Documentation for the Onspring API',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
