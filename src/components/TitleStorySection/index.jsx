import styles from "./TitleStorySection.module.css";
import newHistoryImg from "../../assets/img/new-history.svg";
import AppButton from "../AppButton";

export default function TitleStorySection({ title, setTitle, nextStep }) {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <p className={styles.subtitle}>Vejamos, por onde devemos começar...</p>
                <h1 className={styles.title}>Primeiro, dê um título a sua História</h1>
                <input
                    className={styles.input}
                    type="text"
                    name="title"
                    placeholder="Clique aqui para escrever"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <div className={`${styles.buttons}`}>
                    <AppButton
                        variant="secondary"
                        size="large"
                        onClick={nextStep}
                        disabled={!title.trim()}
                    >
                        Quero que seja este título!
                    </AppButton>
                    <AppButton variant="primary" onClick={nextStep} size="large">
                        Sem ideias? Tudo bem, vamos começar a escrever
                    </AppButton>
                </div>
            </div>

            <img className={styles.image} src={newHistoryImg} alt="" />
        </div>
    );
}