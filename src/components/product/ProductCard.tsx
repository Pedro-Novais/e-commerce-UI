import { useState } from "react"

import { ProductType } from "../../types/ProductTypes"

import { MdFavoriteBorder } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FaMoneyBill } from "react-icons/fa";

import styles from './ProductCard.module.css'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
    console.log(product)
    return (
        <div key={product.id} className={styles.cardProduct}>
            <div className={styles.addFavorite}>
                <MdFavoriteBorder />
            </div>
            <div className={styles.cardProductImage}>
                <img src="https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-445,h-667,cm-pad_resize,pr-true,q-80/a22343-ogxys3ltwt0/pv/27/db/ea/79c4ad82bb0c5dbecf9a288e1f/camiseta-vans-polo-rigsby-soccer-1.png" alt="Produto" />
            </div>
            <p className={styles.productName}>{product.name}</p>
            <div className={styles.cardProductInfo}>
                <div className={styles.cardProductInfoColor}>
                    {
                        product.variants.map((item, index) => (
                            item.color &&
                            <span key={index} className={styles.colorItem} style={{ backgroundColor: item.color }}></span>
                        ))
                    }
                </div>
                <div className={styles.cardProductInfoSize}>
                    {
                        product.variants.map((item, index) => (
                            item.size &&
                            <span key={index} className={styles.sizeItem}>{item.size}</span>
                        ))
                    }
                </div>
                <span>R$299,99</span>
            </div>
            <div className={styles.containerButtons}>
                <button className={styles.buttonCardProduct}>
                    <FaMoneyBill />
                </button>
                <button className={styles.buttonCardProduct}>
                    <TiShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default ProductCard