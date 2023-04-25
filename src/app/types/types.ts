import { ReactNode } from 'react';

export type DocsStructure = {
  version: string;
  officialDocs: string;
  hasSwagger: boolean;
  docs: Doc[];
};

export type Doc = {
  title: string;
  folder: string;
  copy?: string;
  example?: string;
  children?: Doc[];
};

export type DocSection = {
  title: string;
  copy: ReactNode;
  example: ReactNode;
};
