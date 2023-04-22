import { DocsStructure } from '@/app/types/types';

export const versionOne: DocsStructure = {
  version: 'version_001',
  hasSwagger: false,
  docs: [
    {
      title: 'Introduction',
      folder: 'introduction',
      copy: 'copy.md',
      example: 'example.md',
    },
    {
      title: 'Authentication',
      folder: 'authentication',
      copy: 'copy.md',
      example: 'example.md',
    },
  ],
};
