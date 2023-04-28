import { default as Markdoc } from '@markdoc/markdoc';
import fs from 'fs';
import path from 'path';
import React, { ReactNode } from 'react';
import Clients from '../components/Clients';
import CodeSnippet from '../components/CodeSnippet';
import Fence from '../components/Fence';
import { DOCS_PATH } from '../constants';
import { Doc, DocSection } from './../types/types';

export function getCopyPath(
  version: string,
  doc: Doc,
  docPath: string
): string {
  if (doc.copy === undefined) {
    return '';
  }

  return path.join(DOCS_PATH, version, docPath, doc.copy);
}

export function getExamplePath(
  version: string,
  doc: Doc,
  docPath: string
): string {
  if (doc.example === undefined) {
    return '';
  }

  return path.join(
    DOCS_PATH,
    version,
    docPath,
    doc.example
  );
}

const markDocConfig = {
  nodes: {
    fence: {
      render: 'Fence',
      attributes: {
        language: {
          type: 'string',
        },
        content: {
          type: 'string',
        },
      },
    },
  },
  tags: {
    code: {
      render: 'CodeSnippet',
      attributes: {
        heading: {
          type: 'string',
        },
        defaultLanguage: {
          type: 'string',
        },
        method: {
          type: 'string',
        },
      },
    },
    clients: {
      render: 'Clients',
      attributes: {
        version: {
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
      CodeSnippet: CodeSnippet,
      Fence: Fence,
      Clients: Clients,
    },
  });

  return children;
}

function getCopyChild(
  version: string,
  doc: Doc,
  docPath: string
) {
  const copyPath = getCopyPath(version, doc, docPath);
  return parseMarkdown(copyPath);
}

function getExampleChild(
  version: string,
  doc: Doc,
  docPath: string
) {
  const examplePath = getExamplePath(version, doc, docPath);
  return parseMarkdown(examplePath);
}

export function loadSections(
  version: string,
  docs: Doc[],
  sections: DocSection[] = [],
  docPath: string = ''
): DocSection[] {
  for (const doc of docs) {
    const sourcePath = path.join(docPath, doc.folder);

    if (doc.copy && doc.example) {
      sections.push({
        title: doc.title,
        copy: getCopyChild(version, doc, sourcePath),
        example: getExampleChild(version, doc, sourcePath),
      });
    }

    if (doc.children && doc.children.length > 0) {
      loadSections(
        version,
        doc.children,
        sections,
        sourcePath
      );
    }
  }

  return sections;
}
