'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

const ThemeContext = createContext({});

const darkTheme = {
  color: 'white',
  backgroundColor: '#05254a',
};

const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as { [key: string]: { [key: string]: string } };

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext: any = () =>
  useContext(ThemeContext);
