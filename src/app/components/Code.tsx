import styles from './Code.module.css';

export default function Code({
  children,
  language,
}: {
  children: string;
  language: string;
}) {
  return (
    <pre className={styles.pre}>
      <code className={styles.code}>{children}</code>
    </pre>
  );
}
