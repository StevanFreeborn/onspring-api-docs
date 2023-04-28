'use client';
import { useState } from 'react';
import { VERSIONS } from '../constants';
import styles from './Clients.module.css';

export default function Clients({
  version,
}: {
  version: string;
}) {
  const clients = VERSIONS[version].clients;
  const [selectedClient, setSelectedClient] = useState(
    clients[0]
  );
  const [copied, setCopied] = useState(false);

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(
      selectedClient.installCommand
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Client SDKs</div>
      <div className={styles.clients}>
        {clients.map(client => (
          <div
            onClick={() => setSelectedClient(client)}
            key={client.name}
            className={styles.client}
          >
            <div
              className={
                selectedClient.name === client.name
                  ? styles.selectedClientContainer
                  : styles.clientContainer
              }
            >
              <div
                className={styles.clientSvg}
                dangerouslySetInnerHTML={{
                  __html: client.svg,
                }}
              />
              <div className={styles.clientNameText}>
                {client.name}
              </div>

              {client.official ? (
                <div className={styles.official}>
                  Official
                </div>
              ) : (
                <div className={styles.community}>
                  Community
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.install}>
        <div className={styles.installText}>
          {selectedClient.installCommand}
        </div>
        <div className={styles.actions}>
          <a
            className={styles.repoLink}
            href={selectedClient.repoLink}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <button
            className={
              copied
                ? styles.copyButtonCopied
                : styles.copyButton
            }
            onClick={handleCopyButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
      </div>
    </div>
  );
}
