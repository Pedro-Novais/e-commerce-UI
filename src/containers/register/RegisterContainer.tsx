import Register from "../../components/auth/Register"

import styles from "./RegisterContainer.module.css"

const RegisterContainer = () => {
    return (
        <div className={styles.containerAuth}>
            <Register />
        </div>
    )
}

export default RegisterContainer 