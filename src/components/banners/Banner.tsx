import React, { useState, useEffect } from "react";
import { useShopHook } from "../../hooks/useShop";
import styles from "./Banner.module.css";

const Banner: React.FC<{ positionBanner: string }> = ({ positionBanner }) => {
    const { shop } = useShopHook();

    // Todos os Hooks devem ser chamados na mesma ordem em todas as renderizações
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Prepara a lista de banners - mesmo que seja vazia
    const banners = shop?.images?.filter(
        (banner) => banner.type === "banner" && banner.position === positionBanner
    ) || [];

    useEffect(() => {
        if (banners.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [banners.length]); 

    if (banners.length === 0) {
        return null
    }

    return (
        <div className={styles.containerBanner}>
            <div className={styles.banner}>
                <img src={banners[currentImageIndex].url} alt="Banner" loading="lazy"/>
            </div>
        </div>
    );
};

export default Banner;
