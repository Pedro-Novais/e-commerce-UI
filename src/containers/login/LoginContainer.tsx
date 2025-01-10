import Login from "../../components/auth/Login"

import styles from "./LoginContainer.module.css"

const LoginContainer = () => {
    return (
        <div className={styles.containerAuth}>
            <Login />
        </div>
    )
}

export default LoginContainer