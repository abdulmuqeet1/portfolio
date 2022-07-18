import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
// import style from "../../styles/Home.module.scss";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC = ({ children }: Props) => {
  return (
    // <div className={style.mainbody}>
    <div>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
// export * from "./head";
