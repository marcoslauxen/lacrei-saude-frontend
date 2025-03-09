'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../app/styles/global';
import { theme } from '../app/styles/theme';

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
