import "./ContentStorySection.css";

export default function TitleStorySection({
    title, setTitle, content, setContent
}) {
    return (
        <>
            <div class="content-text">
                <form action="history.html" method="get" id="form-history">
                    <section class="section-text">
                        <div class="section-text-title">

                            <input type="text" name="title" id="title" class="title montserrat-semibold"
                                placeholder="Clique aqui para escrever o titulo" required value={title} onChange={e => setTitle(e.target.value)} />

                        </div>
                        <textarea name="texto" id="auto-resizing-textarea" class="rethink-sans text"
                            placeholder="Comece a escrever aqui..." required value={content} onChange={e => setContent(e.target.value)}></textarea>
                    </section>
                </form>
            </div>



            <section class="section-tips">
                <div class="tips-text">
                    <div class="text">
                        <p class="montserrat-semibold">Era uma vez a </p>
                        <h1 class="montserrat-semibold ">Hora de escrever sua historia</h1>
                    </div>

                    <article class="tips montserrat-medium">
                        <p>Algumas dicas podem te ajudar</p>
                        <ul class="tips-list">
                            <li class="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Fale como se fosse com um amigo querido.</p>
                            </li>
                            <li class="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Escreva o que sente agora, sem medo de errar.</p>
                            </li>
                            <li class="item">
                                <img src="/img/icons/check-circle.svg" alt="" />
                                <p>Não se preocupe com perfeição, apenas comece.</p>
                            </li>
                        </ul>
                    </article>
                </div>


                <div class="buttons">
                    <button class="button-primary-white-outline">
                        <div class="button-primary-content-white-outline">
                            <a href="" class="montserrat-semibold"><img src="/img/icons/idea.svg" alt="" width="20px" /> Ver
                                outras Historias </a>
                        </div>
                    </button>

                    <button class="button-primary-white">
                        <div class="button-primary-content-white">
                            <a href="/history.html" class="montserrat-semibold" id="enviar"> <img
                                src="/img/icons/check-circle-blue.svg" alt="" width="20px" /> Terminei minha Historia </a>
                        </div>
                    </button>
                </div>
            </section>

        </>
    )
}