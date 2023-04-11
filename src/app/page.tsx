import { versionTwo } from '@/docs/version_002/docsStructure';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { loadSections } from './lib/markdoc';

export default function Page() {
  const versionTwoSections = loadSections(
    versionTwo.version,
    versionTwo.docs
  );

  return (
    <>
      <SideBar version={versionTwo} />
      <div className="container">
        <NavBar version={versionTwo} />
        <Main versionSections={versionTwoSections} />
      </div>
    </>
  );
}
