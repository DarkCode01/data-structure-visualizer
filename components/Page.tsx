import React from "react";
import Head from "next/head";
import { PageProps } from "@/app/props/Page";

export default function Page({ children, title, description }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="JS Event Loop - Simulator" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </>
  );
}

Page.defaultProps = {
  title: "JS Event Loop - Simulator",
  description: "Made with <3 and fun :D"
};
