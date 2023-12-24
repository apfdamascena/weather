import './env';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './ui/styles/global';
import { theme } from './ui/styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);
