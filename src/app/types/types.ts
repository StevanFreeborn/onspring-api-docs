export type DocsStructure = {
  title: string;
  folder: string;
  copy?: string;
  example?: string;
  children?: DocsStructure[];
};
