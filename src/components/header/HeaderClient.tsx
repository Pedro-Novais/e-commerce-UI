import { Link } from "react-router-dom";
import { useShopHook } from "../../hooks/useShop";
import styles from "./Header.module.css";

const HeaderClient = () => {
    const { shop } = useShopHook()

    const images = shop?.images
    const logoImage = images?.find(image => image.type === "logo")
    return (
        <header>
            <div className={styles.containerHeader}>
                <div className={styles.containerBars}>
                    <Link to={'/'}>
                        <div className={styles.logo}>
                            <img
                                src={logoImage?.url}
                                className={styles.logoImage}
                                loading="lazy"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderClient