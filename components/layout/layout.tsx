import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import style from "../../styles/Home.module.scss";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={style.mainbody}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
export * from "./head";
