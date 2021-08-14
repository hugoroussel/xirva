/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Xirva | Upload your scientific papers on the Decentralised Web</title>
        <meta name="Xirva | Upload your scientific papers on the Decentralised Web" content="Xirva " />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
