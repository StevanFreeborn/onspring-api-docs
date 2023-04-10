'use client';

import { MouseEvent, useState } from 'react';
import styles from './Code.module.css';

function CodeCopyButton() {
  const [copyButtonTooltip, setCopyButtonTooltip] =
    useState<boolean>(false);

  const [showTooltip, setShowTooltip] =
    useState<boolean>(false);

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    setCopyButtonTooltip(true);
    setTimeout(() => {
      setCopyButtonTooltip(false);
    }, 1000);

    const target = e.currentTarget;
    const code =
      target.parentElement?.parentElement?.parentElement?.querySelector(
        'pre'
      )?.innerText ?? '';

    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.copyButtonContainer}>
      <div>
        <div
          className={
            showTooltip
              ? styles.tooltip
              : styles.tooltipHidden
          }
        >
          {copyButtonTooltip ? 'Copied!' : 'Click to Copy'}
        </div>
      </div>
      <button
        className={styles.copyButton}
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Code({
  children,
  language,
  heading,
}: {
  children: string;
  language: string;
  heading: string;
}) {
  return (
    <div className={styles.snippetContainer}>
      <div className={styles.snippetHeader}>
        <div>{heading}</div>
        <CodeCopyButton />
      </div>
      <div className={styles.snippetContent}>
        {children}
      </div>
    </div>
  );
}
