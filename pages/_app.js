import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/components';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
