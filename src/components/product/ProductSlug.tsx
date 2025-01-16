import { useState } from "react";
import { ProductType } from "../../types/ProductTypes";
import Border from "../utils/Border";

import styles from "./ProductSlug.module.css"

import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const ProductSlug: React.FC<{ singleProduct: ProductType | undefined }> = ({ singleProduct }) => {
    const [deliveryPrice, setDeliveryPrice] = useState<boolean>(false)

    const imagesVariants = singleProduct?.variants.flatMap(variant => variant.images) || [];

    const handleDeliveryPrice = () => {
        setDeliveryPrice(!deliveryPrice)
    }
    return (
        <>
            <div className={styles.containerImagesProductSlug}>
                <div className={styles.contentImage}>
                    <img src={singleProduct?.image} alt="" />
                    {
                        imagesVariants.map(images => (
                            <img src={images} alt="" />
                        ))
                    }
                </div>
            </div>
            <div className={styles.containerInfosProductSlug}>
                <p className={styles.nameProduct}>{singleProduct?.name}</p>
                <Border />
                <div className={styles.contentCustomProducts}>
                    <div>
                        <p>Cores:</p>
                        <div className={styles.contentCustomProductsInternal}>
                            {singleProduct?.variants?.map((variant, index) => (
                                variant.color &&
                                <span key={index} className={styles.colorProduct} style={{ backgroundColor: variant.color }}></span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Tamanhos:</p>
                        <div className={styles.contentCustomProductsInternal}>
                            {singleProduct?.variants?.map((variant, index) => (
                                variant.size &&
                                <span key={index} className={styles.colorProduct}>{variant.size}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <Border />
                <div className={styles.contentPriceProducts}>
                    <span style={{ textDecoration: 'line-through' }}>De: R$ 100,00</span>
                    <span className={styles.priceProduct}>R$ {singleProduct?.price.replace('.', ',')}</span>
                </div>
                <Border />
                <div className={styles.contentButtonBuy}>
                    <button className={styles.buttoncart}>
                        <MdOutlineAddShoppingCart />
                    </button>
                    <button className={styles.buttonBuy}>
                        <FaMoneyBill />
                    </button>
                </div>
                <Border />
                <div className={styles.containerValueDelivery}>
                    <p>Frete e Prazo:</p>
                    <div className={styles.contentValueDelivery}>
                        <input type="text" />
                        <button onClick={handleDeliveryPrice}>Calcular</button>
                    </div>
                    <div style={{ display: deliveryPrice ? 'unset' : 'none' }}>
                        <p>pac: 10 reais</p>
                        <p>correio: 10 reais</p>
                        <p>não faço ideia: 10 reais</p>
                        <p>ok: 10 reais</p>
                        <p>beleza: 10 reais</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSlug