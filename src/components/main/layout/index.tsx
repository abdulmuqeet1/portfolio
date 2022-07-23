import React, { ReactNode } from "react";
import HeadComp from "../head";
import Header from "../header";
import Footer from "../footer";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <>
      <HeadComp
        pathName={
          router.pathname.toString() !== ""
            ? router.pathname.toString() === "/"
              ? "Home"
              : router.pathname.toString().substring(1)
            : "Abdul Muqeet"
        }
      />
      <div className={styles.layout}>
        <div className={styles.bg}>
          <div className={styles.bg1} />
          <div className={styles.bg2} />
          <div className={styles.bg3} />
          <div className={styles.bg4} />
          <div className={styles.bg5} />
        </div>
        <div className={styles.innerLayout}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
// export * from "./head";
