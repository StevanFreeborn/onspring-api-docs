import { DocsStructure } from '@/app/types/types';

export const versionTwo: DocsStructure = {
  version: 'version_002',
  hasSwagger: true,
  docs: [
    {
      title: 'Introduction',
      folder: 'introduction',
      copy: 'copy.md',
      example: 'example.md',
      children: [],
    },
    {
      title: 'Authentication',
      folder: 'authentication',
      copy: 'copy.md',
      example: 'example.md',
      children: [],
    },
    {
      title: 'Data Format',
      folder: 'data_format',
      copy: 'copy.md',
      example: 'example.md',
      children: [],
    },
    {
      title: 'Pagination',
      folder: 'pagination',
      copy: 'copy.md',
      example: 'example.md',
      children: [],
    },
    {
      title: 'Resources',
      folder: 'resources',
      children: [
        {
          title: 'Records',
          folder: 'resources/records',
          copy: 'copy.md',
          example: 'example.md',
          children: [
            {
              title: 'Field Values',
              folder: 'resources/records/field_values',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Records by App',
              folder:
                'resources/records/get_records_by_app',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
      ],
    },
  ],
};
