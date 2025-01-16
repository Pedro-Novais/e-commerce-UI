import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Define o scroll na posição inicial (x=0, y=0)
  }, [location]);

  return null; // O componente não renderiza nada visível
};

export default ScrollToTop;
