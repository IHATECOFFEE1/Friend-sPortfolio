import React from "react";
import Head from "next/head";
import Layout from "../pageComponents/Layout/Layout";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
