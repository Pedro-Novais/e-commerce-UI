import Banner from "../../components/banners/Banner"
import CategoryBars from "../../components/categoryBars/CategoryBars"
import Product from "../../components/product/Product"
import FilterProduct from "../../components/filter/FilterProduct"

import styles from "./IndexContainer.module.css"

const IndexContainer: React.FC = () => {
    return (
        <>
            <CategoryBars />
            <Banner positionBanner="top" />
                <h2 style={{marginTop: "20px"}}>Confira nossos produtos</h2>
            <main className={styles.containerContent}>
                {/* <FilterProduct /> */}
                <Product />
            </main>
        </>
    )
}

export default IndexContainer