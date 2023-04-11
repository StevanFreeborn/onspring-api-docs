import { default as Markdoc } from '@markdoc/markdoc';
import fs from 'fs';
import path from 'path';
import React, { ReactNode } from 'react';
import Code from '../components/Code';
import { Doc, DocSection } from './../types/types';

const DOCS_PATH = path.join(process.cwd(), 'src/docs');

function getCopyPath(version: string, doc: Doc): string {
  if (doc.copy === undefined) {
    return '';
  }

  return path.join(
    DOCS_PATH,
    version,
    doc.folder,
    doc.copy
  );
}

function getExamplePath(version: string, doc: Doc): string {
  if (doc.example === undefined) {
    return '';
  }

  return path.join(
    DOCS_PATH,
    version,
    doc.folder,
    doc.example
  );
}

const markDocConfig = {
  tags: {
    code: {
      render: 'Code',
      attributes: {
        language: {
          type: 'string',
        },
        heading: {
          type: 'string',
        },
      },
    },
  },
};

function parseMarkdown(sourcePath: string): ReactNode {
  const source = fs.readFileSync(sourcePath, 'utf8');
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(
    ast,
    markDocConfig as any
  );
  const children = Markdoc.renderers.react(content, React, {
    components: {
      Code: Code,
    },
  });

  return children;
}

function getCopyChild(version: string, doc: Doc) {
  const copyPath = getCopyPath(version, doc);
  return parseMarkdown(copyPath);
}

function getExampleChild(version: string, doc: Doc) {
  const examplePath = getExamplePath(version, doc);
  return parseMarkdown(examplePath);
}

export function loadSections(
  version: string,
  docs: Doc[],
  sections: DocSection[] = []
): DocSection[] {
  for (const doc of docs) {
    if (doc.copy && doc.example) {
      sections.push({
        title: doc.title,
        copy: getCopyChild(version, doc),
        example: getExampleChild(version, doc),
      });
    }

    if (doc.children && doc.children.length > 0) {
      loadSections(version, doc.children, sections);
    }
  }

  return sections;
}
