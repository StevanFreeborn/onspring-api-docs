'use client';

import Link from 'next/link.js';
import { useState } from 'react';
import styles from './NavBar.module.css';

function NavbarDropdown() {
  const versions = ['Version 1', 'Version 2'];

  const [isDropdownOpen, setIsDropdownOpen] =
    useState<boolean>(false);

  const [version, setVersion] =
    useState<string>('Version 2');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <a
        className={styles.navLink}
        onClick={handleDropdownToggle}
      >
        {version}{' '}
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
              fill-rule="evenodd"
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
              fill-rule="evenodd"
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
        {versions
          .filter(v => v !== version)
          .map(v => (
            <a
              key={v}
              className={styles.navLink}
              onClick={() => {
                setVersion(v);
                setIsDropdownOpen(false);
              }}
            >
              {v}
            </a>
          ))}
      </div>
    </>
  );
}

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavbarDropdown />
        </li>
        <li className={styles.navItem}>
          <Link
            href="https://api.onspring.com/swagger"
            className={styles.navLink}
          >
            Swagger
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="https://onspring.com/customer-service/admin-support/"
            className={styles.navLink}
          >
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
}
