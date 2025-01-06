import styles from "./ErrorShop.module.css"

const ErrorShop: React.FC = () => {
    return (
        <div className={styles.containerError}>
            <h1>404</h1>
            <p>Oops! Página não encontrada.</p>
        </div>
    )
}

export default ErrorShop