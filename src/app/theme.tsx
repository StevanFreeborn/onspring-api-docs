'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

const darkTheme = {
  color: 'white',
  backgroundColor: '#05254a',
};

const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
};

const ThemeContext = createContext({});

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

export const useThemeContext: any = () =>
  useContext(ThemeContext);
