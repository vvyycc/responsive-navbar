import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
    <link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
