import Link from 'next/link.js';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/docs" className={styles.navLink}>
            Docs
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
