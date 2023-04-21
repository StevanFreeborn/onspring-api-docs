'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { themes, useThemeContext } from '../theme';
import { Doc, DocsStructure } from '../types/types';
import styles from './NavBar.module.css';

function VersionsDropdown({
  version,
}: {
  version: string;
}) {
  const versions = {
    version_001: {
      name: 'Version 1',
      path: '/version-1',
    },
    version_002: {
      name: 'Version 2',
      path: '/',
    },
  } as { [key: string]: { name: string; path: string } };

  const currentVersion = versions[version];

  const [isDropdownOpen, setIsDropdownOpen] =
    useState<boolean>(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <a
        className={styles.navLink}
        onClick={handleDropdownToggle}
      >
        {currentVersion.name}{' '}
        {isDropdownOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={styles.chevron}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={styles.chevron}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        )}
      </a>
      <div
        className={
          isDropdownOpen
            ? styles.dropdownMenuOpen
            : styles.dropdownMenu
        }
      >
        {Object.keys(versions)
          .filter(v => v !== version)
          .map(v => (
            <Link
              href={`${versions[v].path}`}
              key={v}
              className={styles.navLink}
              onClick={() => {
                setIsDropdownOpen(false);
              }}
            >
              {versions[v].name}
            </Link>
          ))}
      </div>
    </>
  );
}

function SectionDropdownGroup({ doc }: { doc: Doc }) {
  return (
    <Fragment>
      {doc.copy && doc.example && (
        <option
          className={styles.selectItem}
          label={doc.title}
        >
          {doc.title}
        </option>
      )}
      {doc.children && doc.children.length > 0 && (
        <optgroup label={doc.title}>
          {doc.children.map(child => (
            <option
              className={styles.selectItem}
              label={child.title}
              key={child.title}
            >
              {child.title}
            </option>
          ))}
        </optgroup>
      )}
    </Fragment>
  );
}

function SectionDropdown({
  version,
}: {
  version: DocsStructure;
}) {
  const handleSelectChange = (e: any) => {
    const selectedOption = e.target.value;
    location.hash = selectedOption
      .replaceAll(' ', '-')
      .toLowerCase();
  };

  return (
    <select
      onChange={handleSelectChange}
      title="navigation dropdown"
      className={styles.dropdownSelect}
    >
      {version.docs.map(doc => {
        return (
          <SectionDropdownGroup doc={doc} key={doc.title} />
        );
      })}
    </select>
  );
}

export default function NavBar({
  version,
}: {
  version: DocsStructure;
}) {
  const { theme } = useThemeContext();
  const themeStyles = themes[theme];

  const [isNavOpen, setIsNavOpen] =
    useState<boolean>(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav style={themeStyles} className={styles.nav}>
      <ul className={styles.navListLeft}>
        <li className={styles.sectionDropdown}>
          <SectionDropdown version={version} />
        </li>
      </ul>
      <div>
        <div
          onClick={handleNavToggle}
          className={styles.navbarToggle}
        >
          <div className={styles.navbarToggleLine}></div>
          <div className={styles.navbarToggleLine}></div>
          <div className={styles.navbarToggleLine}></div>
        </div>
        <ul
          className={
            isNavOpen
              ? `${styles.navListRight} ${styles.navListRightOpen}`
              : styles.navListRight
          }
        >
          <li className={styles.navItem}>
            <VersionsDropdown version={version.version} />
          </li>
          <li className={styles.navItem}>
            {version.hasSwagger ? (
              <Link
                href="https://api.onspring.com/swagger"
                className={styles.navLink}
                target="_blank"
              >
                Swagger
              </Link>
            ) : null}
          </li>
          <li className={styles.navItem}>
            <Link
              href="https://onspring.com/customer-service/admin-support/"
              className={styles.navLink}
              target="_blank"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
