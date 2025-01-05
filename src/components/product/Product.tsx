import React from 'react';
import { useProductData } from "../../hooks/useProduct"

import { useNotification } from '../../context/NotificationContext';
import Loading from "../loading/Loading";

const Product: React.FC = () => {
    // const { addNotification } = useNotification();
    const { product, isLoading, error } = useProductData();
    console.log(product)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        // addNotification(error, "error");
        return <div>{error}</div>
    }

    return (
        <div>
            {/* nome: {product.map((item) => (
                <li key={item.id}>
                {item.name} - {item.price} (Quantidade: {item.quantity})
              </li>
            ))} */}
            teste
        </div>
    )
}

export default Product