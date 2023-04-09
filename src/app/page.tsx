import Article from './components/Article';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Article />
    </main>
  );
}
