import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import  ProductService from "../service/_ProductService"
import { ProductType, ProductContextType } from "../types/ProductTypes";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvide: React.FC<ProductProviderProps> = ({ children }) => {
    const [product, setProduct] = useState<ProductType[]>([]); 
    const [singleProduct, setSingleProduct] = useState<ProductType | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const productService = new ProductService();

    const fetchAllProduct = async () => {
        setIsLoading(true);
        try {
            const data = await productService.getProduct();
            setProduct(data);
        } catch (err) {
            setError("Erro ao carregar produtos");
        } finally {
            setIsLoading(false);
        }
    };

    const fetchOneProduct = async (id: string) => {
        setIsLoading(true);
        try {
            const data = await productService.getOneProduct(id);
            setSingleProduct(data);
        } catch (err) {
            setError("Erro ao carregar produto");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllProduct();
    }, []);

    return (
        <ProductContext.Provider value={{ product, singleProduct, isLoading, error, fetchAllProduct, fetchOneProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct deve ser usado dentro de ProductProvider");
    }
    return context;
};
