import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ShopProvider } from "./context/ShopContext";
import './App.css'

const App: React.FC = () => {
  return (
    <ShopProvider>
      <AppRoutes />
    </ShopProvider>
  );
};
export default App
