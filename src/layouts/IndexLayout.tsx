import React from "react";

import { Outlet } from "react-router-dom";
import { ProductProvide } from "../context/ProductContext";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "./IndexLayout.module.css"
const IndexLayout: React.FC = () => {
  return (
    <ProductProvide>
      <div className={styles.containerGeral}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ProductProvide>
  );
};

export default IndexLayout;
