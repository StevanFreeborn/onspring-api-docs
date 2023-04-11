import { DocSection } from '../types/types';
import styles from './Main.module.css';
import Section from './Section';

export default function Main({
  versionSections,
}: {
  versionSections: DocSection[];
}) {
  return (
    <main className={styles.container}>
      {versionSections.map(section => (
        <>
          <Section key={section.title}>
            {section.copy}
            {section.example}
          </Section>
          <div className={styles.divider}>&nbsp;</div>
        </>
      ))}
    </main>
  );
}
