import "./Navbar.css"
import Logo from "../../assets/img/logo.svg"
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import AppButton from "../AppButton";

export default function Navbar() {
    return (
        <header>
            <div className="header-left">
                <Link to="/"><img src={Logo} /></Link>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-list-item rethink-sans"><Link to="/">Tipos de Historia</Link></li>
                        <li className="menu-list-item rethink-sans"><Link to="/">Historias da Semana</Link></li>
                        <li className="menu-list-item rethink-sans"><Link to="/">Preciso de Ajuda</Link></li>
                    </ul>
                </nav>
            </div>

            <AppButton to="/add-story" variant="primary" className="montserrant-regular">
                <IoIosAddCircleOutline size={24} /> Conte uma História
            </AppButton>
        </header>
    )
}