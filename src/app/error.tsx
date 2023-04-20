'use client';

import styles from './error.module.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <h2>Something went wrong!</h2>
      <a className={styles.navLink} onClick={() => reset()}>
        Try again
      </a>
    </div>
  );
}
