import { versionTwo } from '@/docs/version_002/docsStructure';
import Page from './components/Page';
import { loadSections } from './lib/markdoc';

export default function VersionTwo() {
  const versionTwoSections = loadSections(
    versionTwo.version,
    versionTwo.docs
  );

  return (
    <Page
      versionDocStructure={versionTwo}
      versionSections={versionTwoSections}
    />
  );
}
