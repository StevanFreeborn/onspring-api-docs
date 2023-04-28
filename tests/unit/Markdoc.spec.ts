import { DOCS_PATH } from '@/app/constants';
import {
  getCopyPath,
  getExamplePath,
} from '@/app/lib/markdoc';
import { Doc } from '@/app/types/types';
import path from 'path';

describe('Markdoc lib functions', () => {
  describe('getCopyPath', () => {
    const version = 'v1.0.0';
    const doc: Doc = {
      title: 'Title',
      folder: 'folder',
      copy: 'copy.md',
    };
    const docPath = 'path/to/doc';

    it('returns empty string if doc.copy is undefined', () => {
      const doc: Doc = {
        title: 'Title',
        folder: 'folder',
      };
      const result = getCopyPath(version, doc, docPath);
      expect(result).toEqual('');
    });

    it('returns correct copy path', () => {
      const result = getCopyPath(version, doc, docPath);
      const expected = path.join(
        DOCS_PATH,
        version,
        docPath,
        doc.copy!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct copy path with leading/trailing slashes in docPath', () => {
      const result = getCopyPath(
        version,
        doc,
        '/path/to/doc/'
      );
      const expected = path.join(
        DOCS_PATH,
        version,
        docPath,
        doc.copy!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct copy path with different version', () => {
      const result = getCopyPath('v2.0.0', doc, docPath);
      const expected = path.join(
        DOCS_PATH,
        'v2.0.0',
        docPath,
        doc.copy!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct copy path with nested docPath', () => {
      const result = getCopyPath(
        version,
        doc,
        'path/to/nested/doc'
      );
      const expected = path.join(
        DOCS_PATH,
        version,
        'path/to/nested/doc',
        doc.copy!
      );
      expect(result).toEqual(expected);
    });
  });

  describe('getExamplePath', () => {
    const version = 'v1.0.0';
    const doc: Doc = {
      title: 'Title',
      folder: 'folder',
      example: 'example.md',
    };
    const docPath = 'path/to/doc';

    it('returns empty string if doc.example is undefined', () => {
      const doc: Doc = {
        title: 'Title',
        folder: 'folder',
      };
      const result = getExamplePath(version, doc, docPath);
      expect(result).toEqual('');
    });

    it('returns correct example path', () => {
      const result = getExamplePath(version, doc, docPath);
      const expected = path.join(
        DOCS_PATH,
        version,
        docPath,
        doc.example!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct example path with leading/trailing slashes in docPath', () => {
      const result = getExamplePath(
        version,
        doc,
        '/path/to/doc/'
      );
      const expected = path.join(
        DOCS_PATH,
        version,
        docPath,
        doc.example!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct example path with different version', () => {
      const result = getExamplePath('v2.0.0', doc, docPath);
      const expected = path.join(
        DOCS_PATH,
        'v2.0.0',
        docPath,
        doc.example!
      );
      expect(result).toEqual(expected);
    });

    it('returns correct example path with nested docPath', () => {
      const result = getExamplePath(
        version,
        doc,
        'path/to/nested/doc'
      );
      const expected = path.join(
        DOCS_PATH,
        version,
        'path/to/nested/doc',
        doc.example!
      );
      expect(result).toEqual(expected);
    });
  });
});
