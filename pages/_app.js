import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>
          Next Events
        </title>
        <meta name="decsription" content="NextJS events"/>
        <meta name="viewport" content="initial-scale=1.0 , width=device-width"/>

      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
