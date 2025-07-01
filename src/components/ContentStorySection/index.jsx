import "./ContentStorySection.css";

export default function TitleStorySection({
    title, setTitle, content, setContent, setShowModal
}) {
    return (
        <>
            <div className="content-text">
                <form action="history.html" method="get" id="form-history">
                    <section className="section-text">
                        <div className="section-text-title">

                            <input type="text" name="title" id="title" className="title montserrat-semibold"
                                placeholder="Clique aqui para escrever o titulo" required value={title} onChange={e => setTitle(e.target.value)} />

                        </div>
                        <textarea name="texto" id="auto-resizing-textarea" className="rethink-sans text"
                            placeholder="Comece a escrever aqui..." required value={content} onChange={e => setContent(e.target.value)}></textarea>
                    </section>
                </form>
            </div>



            <section className="section-tips">
                <div className="tips-text">
                    <div className="text">
                        <p className="montserrat-semibold">Era uma vez a </p>
                        <h1 className="montserrat-semibold ">Hora de escrever sua historia</h1>
                    </div>

                    <article className="tips montserrat-medium">
                        <p>Algumas dicas podem te ajudar</p>
                        <ul className="tips-list">
                            <li className="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Fale como se fosse com um amigo querido.</p>
                            </li>
                            <li className="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Escreva o que sente agora, sem medo de errar.</p>
                            </li>
                            <li className="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Não se preocupe com perfeição, apenas comece.</p>
                            </li>
                        </ul>
                    </article>
                </div>


                <div className="buttons">
                    <button className="button-primary-white-outline">
                        <div className="button-primary-content-white-outline">
                            <a href="" className="montserrat-semibold"><img src="/img/icons/idea.svg" alt="" width="20px" /> Ver
                                outras Historias </a>
                        </div>
                    </button>

                    <button className="button-primary-white" onClick={() => setShowModal(true)}>
                        <div className="button-primary-content-white">
                            <img
                                src="/img/icons/check-circle-blue.svg" alt="" width="20px" /> Terminei minha Historia
                        </div>
                    </button>
                </div>
            </section>

        </>
    )
}