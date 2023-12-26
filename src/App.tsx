import './env';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './ui/styles/global';
import { useWeatherTheme } from './ui/hooks/theme';

export const App: React.FC = () => {
  const { theme } = useWeatherTheme();
  return (

    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>

  );
};
