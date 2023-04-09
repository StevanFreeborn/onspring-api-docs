import styles from './Article.module.css';

export default function Article() {
  return (
    <article className={styles.container}>
      <section className={styles.copy}>
        This is the copy
      </section>
      <section className={styles.example}>
        This is the example
      </section>
    </article>
  );
}
