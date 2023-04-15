'use client';

import Link from 'next/link.js';
import { useState } from 'react';
import { Doc, DocsStructure } from '../types/types.js';
import styles from './SideBar.module.css';

function TreeNode({ doc }: { doc: Doc }) {
  const [isExpanded, setIsExpanded] =
    useState<boolean>(true);

  const hasChildren =
    doc.children && doc.children?.length > 0;

  return (
    <li className={styles.listItem}>
      {hasChildren ? (
        <div className={styles.expandable}>
          <a
            href={`#${doc.title
              .replaceAll(' ', '-')
              .toLowerCase()}`}
            className={styles.link}
          >
            {doc.title}
          </a>
          <div onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={styles.chevron}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={styles.chevron}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </div>
        </div>
      ) : (
        <a
          href={`#${doc.title
            .replaceAll(' ', '-')
            .toLowerCase()}`}
          className={styles.link}
        >
          {doc.title}
        </a>
      )}

      {doc.children &&
        doc.children?.length > 0 &&
        isExpanded && <ListTree docs={doc.children} />}
    </li>
  );
}

function ListTree({ docs }: { docs: Doc[] }) {
  return (
    <ul className={styles.list}>
      {docs.map(d => (
        <TreeNode key={d.title} doc={d} />
      ))}
    </ul>
  );
}

export default function SideBar({
  version,
}: {
  version: DocsStructure;
}) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <h1 className={styles.title}>
          <span className={styles.onspring}>Onspring</span>{' '}
          <span className={styles.api}>API</span>
        </h1>
      </Link>
      <ListTree docs={version.docs} />
    </div>
  );
}
