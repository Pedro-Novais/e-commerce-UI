import Border from "../utils/Border"
import styles from "./ProductSlug.module.css"

const ProductDescription: React.FC<{ description: string | undefined }> = ({ description }) => {
    return (
        <>
            <Border />
            {
                description &&
                <div className={styles.containerDescription}>
                    {/* <h2>Descrição</h2> */}
                    <div className={styles.contentDescription} dangerouslySetInnerHTML={{ __html: description }}>
                        {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
                    </div>
                </div>

            }
        </>
    )
}

export default ProductDescription