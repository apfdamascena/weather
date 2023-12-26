import { ThemeState } from '../hooks/theme';

export const rainy: ThemeState = {
  colors: {
    background: 'linear-gradient(0deg, rgba(43, 47, 61, 0.68) 15.88%, rgba(60, 65, 81, 0.48) 39.18%, rgba(62, 68, 84, 0.02) 72.25%, rgba(64, 70, 86, 0.00) 99.85%), #606977',
    primary: '#FFFFFF',
    home: '#0F0F0F',
    secondary: '#D7D8DB',
    icon: '#BBBDC3',
    rightBorderColor: '#525966',
    homePrimary: '#FFFFFF',
  },
};

export const snowy: ThemeState = {
  colors: {
    background: 'linear-gradient(180deg, #E0E0E0 29.39%, #CDCDCD 47.77%, #A6A6A6 82%)',
    primary: '#1F1F1F',
    home: '#0F0F0F',
    secondary: '#5B5B5B',
    homePrimary: '#FFFFFF',
    icon: '#1f1f1f',
    rightBorderColor: '#979797',
  },
};

export const sun: ThemeState = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#D2E9ED',
    icon: '#FFFFFF',
    home: '#0F0F0F',
    homePrimary: '#FFFFFF',
    background: 'linear-gradient(180deg, #57CBDD 1.4%, #51C2D5 24.87%, #4CBACD 65.25%, #3BA1B6 89.25%)',
    rightBorderColor: '#C9D5D7',
  },
};
