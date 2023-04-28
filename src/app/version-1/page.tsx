import { versionOne } from '@/docs/version_001/docsStructure';
import Page from '../components/Page';
import { loadSections } from '../lib/markdoc';

export default function VersionOne() {
  const versionOneSections = loadSections(
    versionOne.version,
    versionOne.docs
  );

  return (
    <Page
      versionDocStructure={versionOne}
      versionSections={versionOneSections}
    />
  );
}
