export type ProductType = {
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

export type ProductContextType = {
    product: ProductType[]; 
    singleProduct: ProductType | null;  
    isLoading: boolean;
    error: string | null;
    fetchAllProduct: () => void;
    fetchOneProduct: (id: string) => void;
}
