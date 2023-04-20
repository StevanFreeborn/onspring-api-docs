import Link from 'next/link.js';
import styles from './error.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>
        Oops! The page you are trying to view does not exist
      </h1>
      <Link className={styles.navLink} href="/">
        Go to the home page
      </Link>
    </div>
  );
}
