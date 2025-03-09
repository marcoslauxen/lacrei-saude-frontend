import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../app/components/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../app/styles/theme';
import '@testing-library/jest-dom';

test('renders button with text', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>Testar</Button>
    </ThemeProvider>
  );

  expect(screen.getByText(/Testar/i)).toBeInTheDocument();
});
