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
    {
      title: 'Data Format',
      folder: 'data_format',
      copy: 'copy.md',
      example: 'example.md',
    },
    {
      title: 'Dates',
      folder: 'dates',
      copy: 'copy.md',
      example: 'example.md',
    },
    {
      title: 'Record Id',
      folder: 'record_id',
      copy: 'copy.md',
      example: 'example.md',
    },
    {
      title: 'Error Handling',
      folder: 'error_handling',
      copy: 'copy.md',
      example: 'example.md',
    },
    {
      title: 'Resources',
      folder: 'resources',
      children: [
        {
          title: 'Connectivity',
          folder: 'connectivity',
          copy: 'copy.md',
          example: 'example.md',
        },
        {
          title: 'Apps',
          folder: 'apps',
          copy: 'copy.md',
          example: 'example.md',
          children: [],
        },
        {
          title: 'Reports',
          folder: 'reports',
          copy: 'copy.md',
          example: 'example.md',
          children: [
            {
              title: 'Report Data',
              folder: 'report_data',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
        {
          title: 'Fields',
          folder: 'fields',
          copy: 'copy.md',
          example: 'example.md',
          children: [
            {
              title: 'Formula Field',
              folder: 'formula_field',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Reference Field',
              folder: 'reference_field',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'List Field',
              folder: 'list_field',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
      ],
    },
  ],
};
