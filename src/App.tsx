import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ShopProvider } from "./context/ShopContext";
import { UserProvider } from "./context/UserContext";
import './App.css'

const App: React.FC = () => {
  return (
    <ShopProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ShopProvider>
  );
};
export default App
