import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useProductData } from "../../hooks/useProduct"

import ProductSlug from "../../components/product/ProductSlug";
import ProductDescription from "../../components/product/productDescription";
import ProductCard from "../../components/product/ProductCard";
import Border from "../../components/utils/Border";
import styles from "./SlugContainer.module.css"

const SlugContainer: React.FC = () => {
    const navigate = useNavigate()
    const { slug } = useParams()
    const { product } = useProductData()

    const singleProduct = product.find((single) => single.slug === slug)

    console.log(singleProduct)
    if (!singleProduct) {
        navigate('/')
    }
    return (
        <main className={styles.container}>
            <div className={styles.contentProduct}>
                <ProductSlug singleProduct={singleProduct} />
            </div>
            <ProductDescription description={singleProduct?.description} />
            <Border />
            {
                true &&
                <div className={styles.containerProductsSuggered}>
                    <p className={styles.titleProductSuggered}>
                        Produtos Sugeridos
                    </p>
                    <div className={styles.contentProductsSuggered}>
                        {product.map((item, index) => (
                            <div className={styles.contentInteralproductCard}>
                                <ProductCard key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </main>
    )
}

export default SlugContainer