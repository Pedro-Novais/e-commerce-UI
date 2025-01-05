import { useState, useEffect } from "react";
import { useShopHook } from "../../hooks/useShop";

import styles from "./Banner.module.css"
const Banner: React.FC<{ positionBanner: string }> = ({ positionBanner }) => {

    const { shop } = useShopHook();

    if (!shop) {
        return null
    }

    if (!shop.images) {
        return null
    }

    const banners = shop.images.filter(
        (banner) => banner.type === "banner" && banner.position === positionBanner
    )
    if (banners === undefined || banners.length === 0) {
        return null
    }

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 5000);

        return () => {
            clearInterval(intervalId); 
        };
    }, [banners.length]); 

    return (
        <div className={styles.containerBanner}>
            <div className={styles.banner}>
                <img src={banners[currentImageIndex].url} alt="Banner" />
            </div>
        </div>
    );
}

export default Banner