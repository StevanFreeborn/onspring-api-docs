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
      title: 'Pagination',
      folder: 'pagination',
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
          title: 'Records',
          folder: 'records',
          copy: 'copy.md',
          example: 'example.md',
          children: [
            {
              title: 'Field Values',
              folder: 'field_values',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Records by App',
              folder: 'get_records_by_app',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Record by Id',
              folder: 'get_record_by_id',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Records by Ids',
              folder: 'get_records_by_ids',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
      ],
    },
  ],
};
