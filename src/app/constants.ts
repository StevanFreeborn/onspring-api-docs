import path from 'path';
import { Version } from './types/types';

export const DOCS_PATH = path.join(
  process.cwd(),
  'src/docs'
);

const CSHARP_SVG = `
    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 456" fill="none">
    <rect width="456" height="456" fill="#512BD4"/>
    <path d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z" fill="white"/>
    <path d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z" fill="white"/>
    <path d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z" fill="white"/>
      <path d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z" fill="white"/>
    </svg>
  `;

export const VERSIONS: Record<string, Version> = {
  version_001: {
    name: 'Version 1',
    path: '/version-1',
    officialDocs:
      'https://software.onspring.com/hubfs/Training/Admin%20Guide%20-%20v1%20API.pdf',
    hasSwagger: false,
    clients: [
      {
        name: 'C#',
        repoLink:
          'https://github.com/onspring-technologies/onspring-api-sdk/tree/v1.1',
        installCommand:
          'dotnet add package Onspring.API.SDK --version 2.1.0',
        svg: CSHARP_SVG,
        official: true,
      },
    ],
  },
  version_002: {
    name: 'Version 2',
    path: '/',
    officialDocs:
      'https://software.onspring.com/hubfs/Training/Admin%20Guide%20-%20v2%20API.pdf',
    hasSwagger: true,
    clients: [
      {
        name: 'C#',
        repoLink:
          'https://github.com/onspring-technologies/onspring-api-sdk',
        installCommand:
          'dotnet add package Onspring.API.SDK',
        svg: CSHARP_SVG,
        official: true,
      },
      {
        name: 'Javascript',
        repoLink:
          'https://github.com/StevanFreeborn/onspring-api-sdk-javascript',
        installCommand: 'npm install onspring-api-sdk',
        svg: `
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" viewBox="0 0 512 512" id="javascript">
            <rect width="512" height="512" fill="#f7df1e" rx="15%"></rect>
            <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path>
          </svg>
          `,
        official: false,
      },
      {
        name: 'Python',
        repoLink:
          'https://github.com/StevanFreeborn/onspring-api-sdk-python',
        installCommand: 'pip install OnspringApiSdk',
        svg: `
          <svg width="30" height="30" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.13z" fill="#3372a7"></path>
            <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 01-11.13-11.13 11.12 11.12 0 0111.13-11.131 11.12 11.12 0 0111.13 11.13 11.12 11.12 0 01-11.13 11.13z" fill="#ffd235"></path>
          </svg>
          `,
        official: false,
      },
    ],
  },
};
