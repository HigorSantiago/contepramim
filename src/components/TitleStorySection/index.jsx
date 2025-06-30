import "./TitleStorySection.css";
import newHistoryImg from "../../assets/img/new-history.svg";

export default function TitleStorySection({ title, setTitle, nextStep }) {
    return (
    <>
        <div className="main-section">
            <div className="main-section-text">
                <div className="main-text">
                    <p className="main-subtitle montserrat-semibold white">Vejamos, por onde devemos começar...</p>
                    <h1 className="main-h1 montserrat-semibold white">Primeiro, dê um título a sua História</h1>

                </div>
                {/* <form action="write-text.html" method="get" id="formulario"> */}
                    <input type="text" id="title" name="title" className="main-input montserrat-medium"
                        placeholder="Clique aqui para Escrever" value={title} onChange={e => setTitle(e.target.value)}></input>
                    <div className="buttons">
                        <button id="button" type="submit" onClick={nextStep} className="nunito-regular button-fill" disabled={!title.trim()}>Quero que seja
                            esse nome!</button>
                        <button className="nunito-regular button-outline">Sem ideias? Tudo bem, vamos começar a
                            escrever</button>
                    </div>
                {/* </form> */}
            </div>

            <div className="main-section-buttons">

            </div>
        </div>

        <img src={newHistoryImg} alt="" />
    </>
    )
}