/* eslint-disable prefer-destructuring */
import React, {
  createContext,

  useState,
  useContext,

} from 'react';

import { rainy, sun, snowy } from '../styles/theme';

export interface ThemeState {
    colors: {
        background: string;
        primary: string;
        home: string;
        secondary: string;
        icon: string;
        rightBorderColor: string;
        homePrimary: string;
    }
}

interface ThemeContextProps {
    theme: ThemeState
    toggleTheme(condition: string, temperature: number): void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
export const ThemeWeatherProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<ThemeState>(rainy);

  const conditions = [sun, snowy, rainy];

  const toggleTheme = (condition: string, temperature: number) => {
    const conditionLower = condition.toLowerCase();
    let newTheme = conditions[0];
    if (condition.indexOf('snow') !== -1 || temperature <= 0) newTheme = conditions[1];
    if (condition === 'clear') newTheme = conditions[0];
    const hasCloud = ['cloud', 'overcast', 'partly', 'rain'].some((value) => conditionLower.indexOf(value) !== -1);
    if (hasCloud) newTheme = conditions[2];
    setData(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: data,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useWeatherTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useWeatherTheme must be used within a Provider');
  }

  return context;
};
