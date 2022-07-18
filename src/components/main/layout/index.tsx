import React, { ReactNode } from "react";
import HeadComp from "../head";
import Header from "../header";
import Footer from "../footer";
import { useRouter } from 'next/router'
// import style from "../../styles/Home.module.scss";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <>
      <HeadComp pathName={router.pathname !== "" ? router.pathname === "/" ? "Home" : router.pathname.substring(1) : ""} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
// export * from "./head";
