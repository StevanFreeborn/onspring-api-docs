'use client';

import React, {
  Children,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import styles from './CodeSnippet.module.css';

function CodeSnippetCopyButton() {
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
      target.parentElement?.parentElement?.parentElement?.parentElement?.querySelector(
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

function SnippetLanguageDropdown({
  selectedLanguage,
  snippetLanguages,
  handleSelectChange,
}: {
  selectedLanguage: string;
  snippetLanguages: string[];
  handleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}) {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <select
          title="Select a language"
          className={styles.dropdownSelect}
          value={selectedLanguage}
          onChange={handleSelectChange}
        >
          {snippetLanguages.map(language => {
            return (
              <option
                key={language}
                value={language}
                className={styles.selectItem}
              >
                {language}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default function CodeSnippet({
  children,
  method,
  heading,
  defaultLanguage,
}: {
  children: ReactNode;
  method?: string;
  heading: string;
  defaultLanguage: string;
}) {
  const methodStyles: { [key: string]: string } = {
    GET: styles.get,
    POST: styles.post,
    PUT: styles.put,
    DELETE: styles.delete,
  };

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguage);

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(e.target.value);
  };

  const snippetLanguages = Children.toArray(children).map(
    child => {
      if (React.isValidElement(child)) {
        const languageClassParts =
          child.props.className.split('-');
        if (languageClassParts.length > 1) {
          const language = languageClassParts[1];
          return language;
        }
      }
    }
  );

  return (
    <div className={styles.snippetContainer}>
      <div className={styles.snippetHeader}>
        <div className={styles.snippetHeading}>
          {method ? (
            <span className={methodStyles[method]}>
              {method}
            </span>
          ) : null}{' '}
          {heading}
        </div>
        <div className={styles.controlsContainer}>
          {snippetLanguages.length > 1 ? (
            <>
              <SnippetLanguageDropdown
                selectedLanguage={selectedLanguage}
                snippetLanguages={snippetLanguages}
                handleSelectChange={handleSelectChange}
              />
              <div className={styles.spacer} />
            </>
          ) : null}
          <CodeSnippetCopyButton />
        </div>
      </div>
      <div className={styles.snippetContent}>
        <pre>
          {Children.toArray(children)
            .filter(
              child =>
                React.isValidElement(child) &&
                child.props.className ===
                  `language-${selectedLanguage}`
            )
            .map(child => {
              return child;
            })}
        </pre>
      </div>
    </div>
  );
}
