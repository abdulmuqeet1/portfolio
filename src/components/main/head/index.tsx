import Head from "next/head";
import { useState } from "react";

interface HeadProps {
  pathName: string;
}

const HeadComp = (props: HeadProps) => {
  const [pageName, setPageName] = useState<string>(
    `Portfolio - ${props.pathName}`
  );
  return (
    <Head>
      <title>{pageName}</title>
      <meta name="description" content="abdul muqeet portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComp;
