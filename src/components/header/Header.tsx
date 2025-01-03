import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaSearch, FaBars, FaCartArrowDown } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
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

    const categorys = [
        {
            "name": "eletronicos",
            "id": "teste"
        },
        {
            "name": "moveis",
            "id": "teste"
        },
        {
            "name": "roupas",
            "id": "teste"
        },
        {
            "name": "comida",
            "id": "teste"
        },
        {
            "name": "automoveis",
            "id": "teste"
        },
        {
            "name": "beneficios",
            "id": "teste"
        },
        {
            "name": "qualquer coisa",
            "id": "teste"
        },
        {
            "name": "ok",
            "id": "teste"
        }
    ]

    const userLogged = true

    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <div className={styles.containerBars}>
                    <div className={styles.logo}>
                        <img
                            src="https://logospng.org/download/amazon/logo-amazon-4096.png"
                            alt="Logo da Loja"
                            className={styles.logoImage}
                        />
                    </div>
                    <div className={styles.containerBarsIcons}>
                        <FaHeart className={styles.icon} />
                        <FaBars className={styles.icon} onClick={handleOpenBar}/>
                    </div>
                </div>
                <div className={styles.containerOptionsBars} style={{display: openBar ? 'flex' : 'none'}}>
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
                                <Link to={"/login"} className={styles.link}><li>Entrar / Cadastrar</li></Link>
                        }
                    </ul>
                </div>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
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
                            <Link to={"/login"} className={styles.link}>Entrar / Cadastrar</Link>
                    }
                    <FaHeart className={styles.icon} />
                    <FaCartArrowDown className={styles.icon} />
                </div>
            </div>
            <div className={styles.containerCatgory}>
                <ul className={styles.categoryList}>
                    {
                        categorys.slice(0, 7).map((category, key) => (
                            <Link to={`/category/${category.name}`} className={styles.link} key={key}><li>{category.name}</li></Link>
                        ))
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;
