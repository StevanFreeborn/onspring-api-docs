import { versionTwo } from '@/docs/version_002/docsStructure';
import Section from './components/Section';
import { loadSections } from './lib/markdoc';
import styles from './page.module.css';

export default function Home() {
  const versionTwoSections = loadSections(
    versionTwo.version,
    versionTwo.docs
  );

  return (
    <main className={styles.container}>
      {versionTwoSections.map(section => (
        <Section key={section.title}>
          {section.copy}
          {section.example}
        </Section>
      ))}
    </main>
  );
}
