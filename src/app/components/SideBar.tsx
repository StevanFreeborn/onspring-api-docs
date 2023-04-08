import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.onspring}>Onspring</span>{' '}
        <span className={styles.api}>API</span>
      </h1>
    </div>
  );
}
