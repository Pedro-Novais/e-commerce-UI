import React from "react";

import { Outlet } from "react-router-dom";

import { ProductProvide } from "../context/ProductContext";

import Header from "../components/header/Header";
import CategoryBars from "../components/category_bars/CategoryBars";
import Banner from "../components/banners/Banner";
import Footer from "../components/footer/Footer";

import styles from "./IndexLayout.module.css"
const IndexLayout: React.FC = () => {
  return (
    <ProductProvide>
    <div className={styles.containerGeral}>
      <Header />
      <CategoryBars />
      <Banner positionBanner="top" />
      <main className={styles.containerContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
    </ProductProvide>
  );
};

export default IndexLayout;
