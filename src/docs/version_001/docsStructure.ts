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
          children: [
            {
              title: 'Get Apps',
              folder: 'get_apps',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
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
            {
              title: 'Report Data Format',
              folder: 'report_data_format',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Reports by App',
              folder: 'get_reports_by_app',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Report by Id',
              folder: 'get_report_by_id',
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
            {
              title: 'List Values',
              folder: 'list_values',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Fields by App',
              folder: 'get_fields_by_app',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Get Field by Id',
              folder: 'get_field_by_id',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
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
              title: 'Record Data Format',
              folder: 'record_data_format',
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
              title: 'Add Record',
              folder: 'add_record',
              copy: 'copy.md',
              example: 'example.md',
            },
            {
              title: 'Update Record',
              folder: 'update_record',
              copy: 'copy.md',
              example: 'example.md',
            },
          ],
        },
        {
          title: 'Files',
          folder: 'files',
          children: [],
        },
      ],
    },
  ],
};
