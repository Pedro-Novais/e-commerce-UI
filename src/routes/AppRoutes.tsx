import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexLayout from "../layouts/IndexLayout";
import Index from "../containers/index/Index";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<Index />} />
        <Route path="products" element={<div>produto</div>} />
        <Route path="product/:id" element={<div>produto id</div>} />
        <Route path="cart" element={<div>carrinho</div>} />
        <Route path="checkout" element={<div>checkout</div>} />
        <Route path="orders" element={<div>pedidos</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
