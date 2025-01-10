import React from "react";
import { Routes, Route } from "react-router-dom";

import { useShopHook } from "../hooks/useShop";

import IndexLayout from "../layouts/index/IndexLayout";
import IndexContainer from "../containers/index/IndexContainer";

import AuthLayout from "../layouts/auth/AuthLayout";
import LoginContainer from "../containers/login/LoginContainer"
import RegisterContainer from "../containers/register/RegisterContainer";

import ErrorShop from "../containers/error/ErrorShop";

const AppRoutes: React.FC = () => {
  const { shop, isLoading } = useShopHook()

  if (!isLoading) {
    if (!shop || !shop.is_active) {
      return <ErrorShop />
    }
  }

  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<IndexContainer />} />
        <Route path="/:slug" element={<div>produto id</div>} />
        <Route path="carrinho" element={<div>carrinho</div>} />
        <Route path="checkout" element={<div>checkout</div>} />
        <Route path="pedidos" element={<div>pedidos</div>} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="cliente/login" element={<LoginContainer />} />
        <Route path="/cliente/cadastro" element={<RegisterContainer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
