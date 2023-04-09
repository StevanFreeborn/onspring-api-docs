import { versionTwo } from '@/docs/version_002/docsStructure';
import Markdoc from '@markdoc/markdoc';
import fs from 'fs';
import path from 'path';
import Section from './components/Section';
import styles from './page.module.css';
import { DocsStructure } from './types/types';

type Section = {
  title: string;
  copy: string;
  example: string;
};

function loadSections(
  docs: DocsStructure[],
  sections: Section[] = []
): Section[] {
  for (const doc of docs) {
    try {
      const copyPath = path.join(
        process.cwd(),
        'src/docs',
        'version_002',
        doc.folder,
        doc.copy!
      );

      const examplePath = path.join(
        process.cwd(),
        'src/docs',
        'version_002',
        doc.folder,
        doc.example!
      );

      const copySource = fs.readFileSync(copyPath, 'utf8');
      const exampleSource = fs.readFileSync(
        examplePath,
        'utf8'
      );

      const copyAst = Markdoc.parse(copySource);
      const exampleAst = Markdoc.parse(exampleSource);
      const copyContent = Markdoc.transform(copyAst);
      const exampleContent = Markdoc.transform(exampleAst);
      const copyHtml = Markdoc.renderers.html(copyContent);
      const exampleHtml =
        Markdoc.renderers.html(exampleContent);

      sections.push({
        title: doc.title,
        copy: copyHtml,
        example: exampleHtml,
      });

      if (doc.children && doc.children.length > 0) {
        loadSections(doc.children, sections);
      }
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  return sections;
}

export default function Home() {
  const versionTwoSections = loadSections(versionTwo);
  console.log(versionTwoSections);
  return (
    <main className={styles.container}>
      {versionTwoSections.map(article => (
        <Section
          key={article.title}
          copy={article.copy}
          example={article.example}
        />
      ))}
    </main>
  );
}
