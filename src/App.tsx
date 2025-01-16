import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ShopProvider } from "./context/ShopContext";
import { UserProvider } from "./context/UserContext";
import ScrollToTop from "./components/scroll/ScrollToTop";
import './App.css'

const App: React.FC = () => {
  return (
    <ShopProvider>
      <UserProvider>
        <ScrollToTop />
        <AppRoutes />
      </UserProvider>
    </ShopProvider>
  );
};
export default App
