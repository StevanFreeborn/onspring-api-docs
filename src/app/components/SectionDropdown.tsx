import { Fragment } from 'react';
import { useSectionContext } from '../context/section';
import { Doc, DocsStructure } from '../types/types';
import { toKebabCase } from '../utils/stringUtils';
import styles from './SectionDropdown.module.css';

function SectionDropdownOption({ doc }: { doc: Doc }) {
  return (
    <Fragment>
      {doc.copy && doc.example && (
        <option
          className={styles.selectItem}
          label={doc.title}
          value={toKebabCase(doc.title)}
        >
          {doc.title}
        </option>
      )}
      {doc.children && doc.children.length > 0 && (
        <optgroup label={doc.title}>
          {doc.children.map(child => (
            <option
              value={toKebabCase(child.title)}
              className={styles.selectItem}
              label={child.title}
              key={child.title}
            >
              {child.title}
            </option>
          ))}
        </optgroup>
      )}
    </Fragment>
  );
}

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

  return (
    <select
      onChange={handleSelectChange}
      title="navigation dropdown"
      className={styles.dropdownSelect}
      value={section}
    >
      {version.docs.map(doc => {
        return (
          <SectionDropdownOption
            doc={doc}
            key={doc.title}
          />
        );
      })}
    </select>
  );
}
