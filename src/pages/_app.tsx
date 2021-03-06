import { Provider } from 'react-redux';

import { AppProps } from 'next/app';
import Head from 'next/head';
import store from 'store';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>App Name</title>
          <link rel="shorcut icon" href="/img/bg.png" />
          <link rel="apple-touch-icon" href="/img/bg.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="App Name" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
