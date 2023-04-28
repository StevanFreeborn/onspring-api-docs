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

export type DocSection = {
  title: string;
  copy: ReactNode;
  example: ReactNode;
};

export type Version = {
  name: string;
  path: string;
  officialDocs: string;
  hasSwagger: boolean;
  clients: Client[];
};

export type Client = {
  name: string;
  repoLink: string;
  installCommand: string;
  svg: string;
  official: boolean;
};
