import styles from "./utils.module.css"

const Border: React.FC = ({width='100%'}) => {
    return(
        <div className={styles.border} style={{width: width}}></div>
    )
}

export default Border