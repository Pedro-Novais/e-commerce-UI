import { useState } from "react"

import { Link } from "react-router-dom"

import { ProductType } from "../../types/ProductTypes"

import { MdFavoriteBorder } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FaMoneyBill } from "react-icons/fa";

import styles from './ProductCard.module.css'

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
    console.log(product)

    return (
            <Link to={`/${product.slug}`} key={product.id} className={styles.cardProduct}>
                <div className={styles.addFavorite}>
                    <MdFavoriteBorder />
                </div>
                <div className={styles.cardProductImage}>
                    <img src={product.image} alt="Produto" />
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
                    <span className={styles.priceProduct}>R${product.price}</span>
                </div>
                {/* <div className={styles.containerButtons}>
                    <button className={styles.buttonCardProduct}>
                        <FaMoneyBill />
                    </button>
                    <button className={styles.buttonCardProduct}>
                        <TiShoppingCart />
                    </button>
                </div> */}
            </Link>
    )
}

export default ProductCard