import styles from './Section.module.css';

export default function Section({
  copy,
  example,
}: {
  copy: string;
  example: string;
}) {
  return (
    <section
      className={styles.container}
      dangerouslySetInnerHTML={{
        __html: `${copy}${example}`,
      }}
    ></section>
  );
}
