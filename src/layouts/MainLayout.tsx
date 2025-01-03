import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
    </>
  );
};

export default MainLayout;
