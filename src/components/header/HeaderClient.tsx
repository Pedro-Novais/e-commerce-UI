import styles from "./Header.module.css";

const HeaderClient = () => {
    return (
        <header>
            <div className={styles.containerHeader}>
                <div className={styles.containerBars}>
                    <div className={styles.logo} style={{ justifyContent: 'center' }}>
                        <img
                            src="https://logospng.org/download/amazon/logo-amazon-4096.png"
                            alt="Logo da Loja"
                            className={styles.logoImage}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderClient