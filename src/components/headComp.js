import React from "react";
import Head from "next/head";
import { seo } from "configData";

const HeadComp = () => {
  return (
    <Head>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.og.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.og.image} />
      <meta property="og:url" content={seo.og.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="" />
    </Head>
  );
};

export default Head;
