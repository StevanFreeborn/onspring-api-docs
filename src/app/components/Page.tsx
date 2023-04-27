'use client';

import { useEffect } from 'react';
import { useSectionContext } from '../context/section';
import { themes, useThemeContext } from '../context/theme';
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

  const { setSection } = useSectionContext();

  useEffect(() => {
    const titles =
      document.querySelectorAll<HTMLHeadingElement>(
        'article:nth-child(1) > h1'
      );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
            history.pushState(
              null,
              '',
              `#${entry.target.id}`
            );
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0% -70% 0%',
        threshold: 1,
      }
    );

    titles.forEach(title => observer.observe(title));

    return () => {
      titles.forEach(title => observer.unobserve(title));
    };
  }, [setSection]);

  return (
    <div className={styles.wrapper} style={themeStyles}>
      <SideBar version={version} />
      <div className={styles.container}>
        <NavBar version={version} />
        <Main versionSections={versionSections} />
      </div>
    </div>
  );
}
