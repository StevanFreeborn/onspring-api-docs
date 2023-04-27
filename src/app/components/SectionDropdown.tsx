import { Fragment } from 'react';
import { Doc, DocsStructure } from '../types/types';
import styles from './SectionDropdown.module.css';

function SectionDropdownGroup({ doc }: { doc: Doc }) {
  return (
    <Fragment>
      {doc.copy && doc.example && (
        <option
          className={styles.selectItem}
          label={doc.title}
        >
          {doc.title}
        </option>
      )}
      {doc.children && doc.children.length > 0 && (
        <optgroup label={doc.title}>
          {doc.children.map(child => (
            <option
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
  const handleSelectChange = (e: any) => {
    const selectedOption = e.target.value;
    location.hash = selectedOption
      .replaceAll(' ', '-')
      .toLowerCase();
  };

  return (
    <select
      onChange={handleSelectChange}
      title="navigation dropdown"
      className={styles.dropdownSelect}
    >
      {version.docs.map(doc => {
        return (
          <SectionDropdownGroup doc={doc} key={doc.title} />
        );
      })}
    </select>
  );
}
