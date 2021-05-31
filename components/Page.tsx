import React from "react";
import Head from "next/head";

export interface IPageProps {
  children: Array<JSX.Element>;
  title: string;
  description: string;
}

export default function Page({ children, title, description }: IPageProps) {
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
