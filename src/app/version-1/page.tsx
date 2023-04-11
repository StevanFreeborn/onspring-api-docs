import { versionOne } from '@/docs/version_001/docsStructure';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { loadSections } from '../lib/markdoc';

export default function Page() {
  const versionOneSections = loadSections(
    versionOne.version,
    versionOne.docs
  );

  return (
    <>
      <SideBar version={versionOne} />
      <div className="container">
        <NavBar version={versionOne} />
        <Main versionSections={versionOneSections} />
      </div>
    </>
  );
}
