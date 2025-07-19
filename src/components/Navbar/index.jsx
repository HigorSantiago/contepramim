import styles from "./Navbar.module.css"
import Logo from "../../assets/img/logo.svg"
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import AppButton from "../AppButton";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Link to="/" className={styles.logo}>
                    <img src={Logo} alt="Logo" className={styles.logoImage} />
                </Link>
                <nav>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <Link to="/" className={styles.menuLink}>Tipos de Historia</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/" className={styles.menuLink}>Historias da Semana</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/" className={styles.menuLink}>Preciso de Ajuda</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <AppButton to="/add-story" variant="primary" className="montserrant-regular">
                <IoIosAddCircleOutline size={24} /> Conte uma História
            </AppButton>
        </header>
    )
}