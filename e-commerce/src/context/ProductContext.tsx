import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
    getOneProductService,
    getAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService,
    createRatingProductService
} from "../service/ProductService"

type Product = {
    id: string;
    category_id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    is_digital: boolean;
    images: string[];
    custom_properties: object[];
    color: string;
    size: string;
}

type ProductContextType = {
    product: Product[]; 
    singleProduct: Product | null;  
    isLoading: boolean;
    error: string | null;
    fetchAllProduct: () => void;
    fetchOneProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvide: React.FC<ProductProviderProps> = ({ children }) => {
    const [product, setProduct] = useState<Product[]>([]); 
    const [singleProduct, setSingleProduct] = useState<Product | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
     
    const fetchAllProduct = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProductsService();
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
            const data = await getOneProductService(id);
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
