import { useSectionContext } from '../context/section';
import { Doc, DocsStructure } from '../types/types';
import { toKebabCase } from '../utils/stringUtils';
import styles from './SectionDropdown.module.css';

export default function SectionDropdown({
  version,
}: {
  version: DocsStructure;
}) {
  const { section, setSection } = useSectionContext();
  const handleSelectChange = (e: any) => {
    setSection(e.target.value);
    location.hash = e.target.value;
  };

  const getAllDocs = (docs: Doc[]) => {
    let result: Doc[] = [];

    docs.forEach(doc => {
      result.push(doc);

      if (doc.children && doc.children.length > 0) {
        result = result.concat(getAllDocs(doc.children));
      }
    });

    return result;
  };

  const docs = getAllDocs(version.docs);

  return (
    <select
      onChange={handleSelectChange}
      title="navigation dropdown"
      className={styles.dropdownSelect}
      value={section}
    >
      {docs.map(doc => {
        if (
          doc.copy === undefined ||
          doc.example === undefined
        ) {
          return null;
        }

        return (
          <option
            className={styles.selectItem}
            label={doc.title}
            value={toKebabCase(doc.title)}
            key={doc.title}
          >
            {doc.title}
          </option>
        );
      })}
    </select>
  );
}
