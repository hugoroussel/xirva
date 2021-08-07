import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
    <title>Xirva</title>
    <meta name="Xirva | Upload your scientific papers on the Decentralised Web" content="Xirva " />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
