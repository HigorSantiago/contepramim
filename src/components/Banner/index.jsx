import { Link } from "react-router-dom"
import styles from "./Banner.module.css"
import AppButton from "../AppButton"

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>Conte sua historia</h1>
                    <p className={styles.description}>Um espaço acolhedor para suas historias</p>
                </div>

                <div className={styles.buttonContainer}>
                    <Link to="/">
                        <AppButton variant="outline-border">Quero Desabafar</AppButton>
                    </Link>
                    <Link to="/">
                        <AppButton variant="outline-border">Quero falar sobre o meu dia a dia</AppButton>
                    </Link>
                    <Link to="/">
                        <AppButton variant="outline-border">Quero ver outras historias</AppButton>
                    </Link>

                </div>

            </div>
        </section>
    )
}