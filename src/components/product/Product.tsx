import React from 'react';
import { useProductData } from "../../hooks/useProduct"

import ProductCard from "../product/ProductCard";
import Loading from "../loading/Loading";

import styles from "./Product.module.css"
const Product: React.FC = () => {
    const { product, isLoading, error } = useProductData();
    console.log(product)

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.containerProduct}>
            {
                isLoading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className={styles.skeletonCardProduct} />
                    ))
                ) : (

                    product.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))

                )
            }
        </div>
    )
}

export default Product