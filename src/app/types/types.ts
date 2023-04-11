import { ReactNode } from 'react';

export type DocsStructure = {
  version: string;
  docs: Doc[];
};

export type Doc = {
  title: string;
  folder: string;
  copy?: string;
  example?: string;
  children?: Doc[];
};

export type Section = {
  title: string;
  copy: ReactNode;
  example: ReactNode;
};
