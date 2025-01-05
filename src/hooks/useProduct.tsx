import { useProduct } from "../context/ProductContext";

export const useProductData = () => {
  const { product, singleProduct, isLoading, categories, error, fetchOneProduct, fetchAllProduct } = useProduct();
  
  return { product, singleProduct, isLoading, categories, error, fetchOneProduct, fetchAllProduct };
};
