'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type SectionContextType = {
  section: string;
  setSection: (section: string) => void;
};

const SectionContext = createContext<
  SectionContextType | undefined
>(undefined);

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

export const useSectionContext = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error(
      'useSectionContext must be used within SectionContextProvider'
    );
  }
  return context;
};
