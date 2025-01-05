import { Link } from "react-router-dom";
import { useProductData } from "../../hooks/useProduct"

import styles from "./CategoryBars.module.css"

const CategoryBars: React.FC = () => {
    const { categories, isLoading, error } = useProductData();
    
    if (categories.length === 0) return null;

    return (
        <div className={styles.containerCatgory}>
            <ul className={styles.categoryList}>
                {
                    categories.slice(0, 7).map((category, key) => (
                        <Link to={`/category/${category}`} className={styles.link} key={key}><li>{category}</li></Link>
                    ))
                }
            </ul>
        </div>
    );
}

export default CategoryBars;