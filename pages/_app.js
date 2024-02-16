import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import user from '../reducers/user';

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  const router = useRouter();

  /* Redirection vers la page de Login au lancement de l'application */
  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Hackatweet</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
