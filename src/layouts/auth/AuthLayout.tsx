import { Outlet } from "react-router-dom";

import HeaderClient from "../../components/header/HeaderClient";
import Footer from "../../components/footer/Footer";

const AuthLayout = () => {
    return (
        <>
            <HeaderClient />
            <Outlet />
            <Footer />
        </>
    )
}

export default AuthLayout