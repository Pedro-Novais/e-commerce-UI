import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import Banner from "../components/banners/Banner";
import Footer from "../components/footer/Footer";

import styles from "./IndexLayout.module.css"
const IndexLayout: React.FC = () => {
  return (
    <>
    <div className={styles.containerGeral}>
        <Header />
        <Banner positionBanner="top"/>
        <main className={styles.containerContent}> 
          <Outlet />
        </main>
        <Footer />
    </div>
    </>
  );
};

export default IndexLayout;
