import "./HomeCards.css"
import StoryCard from "../StoryCard"

export default function HomeCards() {
    const stories = [
        {
            id: 1,
            title: "O Último Abraço",
            content: "Ele me olhou como se soubesse que seria a última vez. Eu quis dizer tantas coisas, mas nenhuma palavra saiu. Só consegui estender a mão, e ele a segurou com força..",
            tags: [
                { id: 1, title: "Emocionante", color: "blue" }, 
                { id: 5, title: "Saudade", color: "purple" },
                { id: 3, title: "Amor", color: "red"}
            ]
        },
        {
            id: 2,
            title: "O Vizinho Novo",
            content: "Eu estava descendo as escadas do prédio quando o vi pela primeira vez. Ele estava carregando uma caixa e parecia perdido. Fui até ele para oferecer ajuda, e acabamos conversando por alguns minutos...",
            tags: [
                { id: 1, title: "Emocionante", color: "blue" }, 
                { id: 4, title: "Amizade", color: "cyan" }
            ]
        },
        {
            id: 3,
            title: "A entrevista que nunca aconteceu",
            content: "Eu me preparei por semanas. Escolhi a melhor roupa, revisei todas as perguntas possíveis, ensaiei frente ao espelho. Cheguei 15 minutos antes, esperando impressionar.",
            tags: [
                { id: 1, title: "Emocionante", color: "blue" },
                { id: 2, title: "Cotidano", color: "green"},
                { id: 3, title: "Amor", color: "red"}
            ]
        }
    ]
    return (
        <section className="cards">
            <h1 className="montserrat-semibold">Historias Inspiradoras</h1>
            <div className="carousel">
                <div className="carousel-track">
                    { stories.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                    {/* <div class="card">
                        <h2 class="montserrat-semibold">O Último Abraço</h2>
                        <p class="nunito-regular">Ele me olhou como se soubesse que seria a última vez. Eu quis dizer
                            tantas coisas, mas nenhuma palavra saiu. Só consegui estender a mão, e ele a segurou com
                            força..</p>
                        <div class="tags montserrat-semibold">
                            <a class="tag-blue tags-structure">Emocionante</a>
                            <a class="tag-purple tags-structure">Saudade</a>
                            <a class="tag-red tags-structure">Amor</a>
                        </div>
                        <p class="montserrat-medium autor">De pessoa anônima</p>
                    </div>
                    <div class="card">
                        <h2 class="montserrat-semibold">O Vizinho Novo</h2>
                        <p class="nunito-regular">Eu estava descendo as escadas do prédio quando o vi pela primeira vez.
                            Ele estava carregando uma caixa e parecia perdido. Fui até ele para oferecer ajuda, e
                            acabamos conversando por alguns minutos...</p>
                        <div class="tags montserrat-semibold">
                            <a class="tag-blue tags-structure">Emocionante</a>
                            <a class="tag-cyan tags-structure">Amizade</a>
                        </div>
                        <p class="montserrat-medium autor">De pessoa anônima</p>
                    </div>
                    <div class="card">
                        <h2 class="montserrat-semibold">A entrevista que nunca aconteceu</h2>
                        <p class="nunito-regular">Eu me preparei por semanas. Escolhi a melhor roupa, revisei todas as
                            perguntas possíveis, ensaiei frente ao espelho. Cheguei 15 minutos antes, esperando
                            impressionar. </p>
                        <div class="tags montserrat-semibold">
                            <a class="tag-blue tags-structure">Emocionante</a>
                            <a class="tag-green tags-structure">Cotidiano</a>
                            <a class="tag-red tags-structure">Amor</a>
                        </div>
                        <p class="montserrat-medium autor">De pessoa anônima</p>
                    </div> */}

                </div>
            </div>
        </section>
    )
}