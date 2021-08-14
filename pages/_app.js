/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Xirva | Upload your scientific papers on the Decentralised Web</title>
        <meta name="Xirva | Upload your scientific papers on the Decentralised Web" content="Xirva " />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
