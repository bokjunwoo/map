import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import { ExpRateStateProvider } from './contexts/ExpRateStateProvider';
import { LevelStateProvider } from './contexts/LevelStateProvider';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1000,
      xl: 1536,
    },
  },
});

type ContextType = React.ComponentType<{ children: ReactNode }>;

interface AppProviderProps {
  contexts: ContextType[];
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ contexts, children }) => {
  return contexts.reduce((prev, Context) => {
    return React.createElement(Context, null, prev);
  }, children) as React.ReactElement | null;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <AppProvider contexts={[ExpRateStateProvider, LevelStateProvider]}>
          <CssBaseline />
          <App />
        </AppProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
