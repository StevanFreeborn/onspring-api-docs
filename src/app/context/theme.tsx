'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const darkTheme = {
  color: 'white',
  backgroundColor: '#05254a',
};

const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as { [key: string]: { [key: string]: string } };

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within ThemeContextProvider'
    );
  }
  return context;
};
