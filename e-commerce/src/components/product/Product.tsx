import React from 'react';
import { useProductData } from "../../hooks/useProduct"

import Loading from "../loading/loading";

const Product: React.FC = () => {
    const { product, isLoading, error } = useProductData();


    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            nome: {product.map((item) => (
                <li key={item.id}>
                {item.name} - {item.price} (Quantidade: {item.quantity})
              </li>
            ))}
        </div>
    )
}

export default Product