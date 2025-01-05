import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ShopProvider } from "./context/ShopContext";
import { NotificationProvider } from "./context/NotificationContext";
import './App.css'

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <ShopProvider>
        <AppRoutes />
      </ShopProvider>
    </NotificationProvider>
  );
};
export default App
