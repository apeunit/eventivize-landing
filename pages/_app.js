import React from "react";
import Layout from "../components/Layout";

export default ({ Component, pageProps }) => {
  return (
    <Layout title="Eventivize">
      <Component {...pageProps} />
    </Layout>
  );
};
