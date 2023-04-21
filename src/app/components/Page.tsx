'use client';

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
