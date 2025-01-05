import React from 'react';
import { useProductData } from "../../hooks/useProduct"

import ProductCard from "../product/ProductCard";
import Loading from "../loading/Loading";

import styles from "./Product.module.css"
const Product: React.FC = () => {
    const { product, isLoading, error } = useProductData();
    console.log(product)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.containerProduct}>
            {
                product.map((item) => (
                    <ProductCard product={item}/>
                ))
            }
        </div>
    )
}

export default Product