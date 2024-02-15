import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
