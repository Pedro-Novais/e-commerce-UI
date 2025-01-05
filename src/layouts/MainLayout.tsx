import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "./MainLayout.module.css"
const MainLayout: React.FC = () => {
  return (
    <>
    <div className={styles.container}>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
    </div>
    </>
  );
};

export default MainLayout;
