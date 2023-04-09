import { DocsStructure } from '@/app/types/types';

export const versionTwo: DocsStructure[] = [
  {
    title: 'Introduction',
    folder: 'introduction',
    copy: 'copy.md',
    example: 'example.md',
    children: [
      {
        title: 'What is this?',
        folder: 'what-is-this',
        copy: 'copy.md',
        example: 'example.md',
        children: [],
      },
    ],
  },
  {
    title: 'Authentication',
    folder: 'authentication',
    copy: 'copy.md',
    example: 'example.md',
    children: [
      {
        title: 'Login',
        folder: 'login',
        copy: 'copy.md',
        example: 'example.md',
        children: [],
      },
    ],
  },
];
