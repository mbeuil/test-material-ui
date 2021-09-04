import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider, createTheme} from '@material-ui/core';
import type {AppProps} from 'next/app';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
