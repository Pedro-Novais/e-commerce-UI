import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaSearch, FaCartArrowDown } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for:", searchTerm);
    };

    const category = [
        {
            "name": "eletronicos",
            "id": "teste"
        },
        {
            "name": "moveis",
            "id": "teste"
        },
        {
            "name": "eletronicos",
            "id": "teste"
        },
        {
            "name": "eletronicos",
            "id": "teste"
        },
        {
            "name": "eletronicos",
            "id": "teste"
        }
    ]

    const userLogged = false

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src="https://logospng.org/download/amazon/logo-amazon-4096.png"
                    alt="Logo da Loja"
                    className={styles.logoImage}
                />
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
        </header>
    );
};

export default Header;
