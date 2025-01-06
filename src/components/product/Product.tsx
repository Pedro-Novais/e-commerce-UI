import React from 'react';
import { useProductData } from "../../hooks/useProduct"

import ProductCard from "../product/ProductCard";
import Loading from "../loading/Loading";

import styles from "./Product.module.css"
const Product: React.FC = () => {
    const { product, isLoading, error } = useProductData();
    console.log(product)

    // if (isLoading) {
    //     return <Loading />
    // }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.containerProduct}>
            {/* <div className={styles.skeletonCardProduct} /> */}
            {
                isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className={styles.skeletonCardProduct} />
                      ))
                ) : (

                    product.map((item) => (
                        <ProductCard product={item} />
                        // Array.from({ length: 8 }).map((_, index) => (
                        //     <div key={index} className={styles.skeletonCardProduct} />
                          ))
                    
                )
            }
        </div>
    )
}

export default Product