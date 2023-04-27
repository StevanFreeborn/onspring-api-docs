'use client';

import { useEffect, useRef, useState } from 'react';
import { themes, useThemeContext } from '../theme';
import { DocSection, DocsStructure } from '../types/types';
import Main from './Main';
import NavBar from './NavBar';
import styles from './Page.module.css';
import SideBar from './SideBar';

export default function Page({
  version,
  versionSections,
}: {
  version: DocsStructure;
  versionSections: DocSection[];
}) {
  const { theme } = useThemeContext();
  const themeStyles = themes[theme];
  const docRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const titles =
      document.querySelectorAll<HTMLHeadingElement>(
        '.section-title'
      );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0% -80% 0%',
        threshold: 1,
      }
    );

    titles.forEach(title => observer.observe(title));

    return () => {
      titles.forEach(title => observer.unobserve(title));
    };
  }, []);

  return (
    <div className={styles.wrapper} style={themeStyles}>
      <SideBar version={version} />
      <div ref={docRef} className={styles.container}>
        <NavBar version={version} />
        <Main versionSections={versionSections} />
      </div>
    </div>
  );
}
