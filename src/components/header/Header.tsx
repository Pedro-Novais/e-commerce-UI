import React, { useState } from "react";
import { useShopHook } from "../../hooks/useShop";
import { useUserHook } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaSearch, FaBars, FaCartArrowDown } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const { userLogged } = useUserHook()
    const { shop } = useShopHook()
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [openBar, setOpenBar] = useState<boolean>(false)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for:", searchTerm);
    };

    const handleOpenBar = () => {
        setOpenBar(!openBar)
    }

    const images = shop?.images
    const logoImage = images?.find(image => image.type === "logo")

    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <div className={styles.containerBars}>
                    <div className={styles.logo}>
                        <img
                            src={logoImage?.url}
                            className={styles.logoImage}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.containerBarsIcons}>
                        <FaHeart className={styles.icon} />
                        <FaBars className={styles.icon} onClick={handleOpenBar} />
                    </div>
                </div>
                <div className={styles.containerOptionsBars} style={{ display: openBar ? 'flex' : 'none' }}>
                    <ul>
                        {
                            userLogged ?
                                <>
                                    <li>Perfil</li>
                                    <li>Pedidos</li>
                                    <li>Carrinho</li>
                                    <li>Endereço</li>
                                    <li>Configuração</li>
                                </> :
                                <Link to={"/cliente/login"} className={styles.link}><li>Entrar / Cadastrar</li></Link>
                        }
                    </ul>
                </div>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(event) => handleSearchChange(event)}
                        className={styles.searchInput}
                    />
                    <button className={styles.btnSearch} onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>

                <div className={styles.icons}>
                    {
                        userLogged ?
                            <FaUser className={styles.icon} /> :
                            <Link to={"/cliente/login"} className={styles.link}>Entrar / Cadastrar</Link>
                    }
                    <FaHeart className={styles.icon} />
                    <FaCartArrowDown className={styles.icon} />
                </div>
            </div>
        </header>
    );
};

export default Header;
