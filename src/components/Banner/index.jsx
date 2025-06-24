import { Link } from "react-router-dom"
import "./Banner.css"

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner-content">
                <div>
                    <h1 className="montserrat-semibold">Conte sua historia</h1>
                    <p className="nunito-regular">Um espaço acolhedor para suas historias</p>
                </div>

                <div>
                    <ul className="banner-content-buttons">
                        <Link to="/" className="button-secundary-outline montserrat-medium">Quero Desabafar</Link>
                        <Link to="/" className="button-secundary-outline montserrat-medium">Quero falar sobre o meu dia a
                            dia</Link>
                        <Link to="/" className="button-secundary-outline montserrat-medium">Quero ver outras historias</Link>
                    </ul>
                </div>

            </div>
        </section>
    )
}