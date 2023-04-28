'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

const SectionContext = createContext({});

export const SectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [section, setSection] = useState('introduction');

  return (
    <SectionContext.Provider
      value={{ section, setSection }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext: any = () =>
  useContext(SectionContext);
