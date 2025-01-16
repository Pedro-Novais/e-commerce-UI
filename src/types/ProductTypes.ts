export type ProductType = {
    id: string;
    category_id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    is_digital: boolean;
    image: string;
    slug: String;
    custom_properties: object[];
    color: string;
    size: string;
    variants: VariantsProduct[];
}

export type ProductContextType = {
    product: ProductType[]; 
    singleProduct: ProductType | null;
    categories: string[];  
    isLoading: boolean;
    error: string | null;
    fetchAllProduct: () => void;
    fetchOneProduct: (id: string | undefined) => void;
}

type VariantsProduct = {
    color: string;
    size: string;
    images: string[];
    value: number;
}
