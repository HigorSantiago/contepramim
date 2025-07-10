import styles from "./ContentStorySection.module.css";
import AppButton from "../AppButton";

export default function ContentStorySection({
    title, setTitle, content, setContent, setShowModal
}) {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <input
                    className={styles.input}
                    type="text"
                    name="title"
                    placeholder="Comece a escrever o título..."
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className={styles.textarea}
                    name="texto"
                    placeholder="Comece a escrever aqui..."
                    required
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

            </div>
            <div className={styles.tipsSection}>
                <h1 className={styles.title}>Hora de escrever sua história</h1>
                <div>
                    <p className={styles.tipsSubtitle}>Algumas dicas podem te ajudar</p>
                    <ul className={styles.tipsList}>
                        <li>Fale como se fosse com um amigo querido.</li>
                        <li>Escreva o que sente agora, sem medo de errar.</li>
                        <li>Não se preocupe com perfeição, apenas comece.</li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <AppButton
                        variant="secondary"
                        fullWidht
                        onClick={() => setShowModal(true)}
                        disabled={!title.trim() || !content.trim()}
                    >
                        Finalizar História
                    </AppButton>
                </div>
            </div>
        </div>
    );
}